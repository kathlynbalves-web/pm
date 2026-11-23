import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { API_URL } from '../services/api'; 
import { CORES } from '../services/theme';

export default function AlunosScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrarAluno() {
    if (!nome.trim() || !cpf.trim() || !email.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha o nome, o CPF e o e-mail.'
      );
      return;
    }

    setCarregando(true);

    try {
      const resposta = await fetch(
        `${API_URL}/cadastrar_aluno.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nome: nome.trim(),
            cpf: cpf.replace(/\D/g, ''),
            data_nascimento: dataNascimento,
            email: email.trim(),
            telefone: telefone.trim(),
            endereco: endereco.trim(),
          }),
        }
      );

      const texto = await resposta.text();
      let resultado;

      try {
        resultado = JSON.parse(texto);
      } catch {
        throw new Error(
          'O servidor não retornou JSON válido. Verifique a URL e a resposta do PHP.'
        );
      }

      if (!resposta.ok || resultado.erro || resultado.sucesso === false) {
        throw new Error(
          resultado.mensagem ||
          resultado.erro ||
          'Não foi possível cadastrar o aluno.'
        );
      }

      Alert.alert(
        'Cadastro realizado',
        resultado.mensagem || 'Aluno cadastrado com sucesso!',
        [
          {
            text: 'OK',
            onPress: limparCampos,
          },
        ]
      );
    } catch (erro) {
      Alert.alert(
        'Erro no cadastro',
        erro.message || 'Não foi possível conectar ao servidor.'
      );
    } finally {
      setCarregando(false);
    }
  }

  function limparCampos() {
    setNome('');
    setCpf('');
    setDataNascimento('');
    setEmail('');
    setTelefone('');
    setEndereco('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Alunos</Text>
      <Text style={styles.subtitulo}>Cadastro de aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo *"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="CPF *"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
        maxLength={14}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail *"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TouchableOpacity
        style={styles.botaoPrincipal}
        onPress={cadastrarAluno}
        disabled={carregando}
        activeOpacity={0.8}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>Cadastrar Aluno</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('ConsultarAlunos')}
        activeOpacity={0.8}
      >
        <Text style={styles.textoSecundario}>Consultar Alunos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.limpar}
        onPress={limparCampos}
      >
        <Text style={styles.textoLimpar}>Limpar campos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 35,
    paddingBottom: 40,
    backgroundColor: CORES.fundo,
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: CORES.principal,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#68738A',
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#D9DFEA',
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
  },
  botaoPrincipal: {
    backgroundColor: CORES.botao,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CORES.branco,
  },
  botaoSecundario: {
    backgroundColor: CORES.branco,
    borderColor: CORES.botao,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  textoSecundario: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CORES.botao,
  },
  limpar: {
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 4,
  },
  textoLimpar: {
    color: '#68738A',
    fontSize: 15,
    fontWeight: '600',
  },
  voltar: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 12,
  },
  textoVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.principal,
  },
});