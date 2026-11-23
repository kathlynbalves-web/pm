import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { API_URL } from '../services/api';
import { CORES } from '../services/theme';

export default function ProfessoresScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrarProfessor() {
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
        `${API_URL}/cadastrar_professor.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nome: nome.trim(),
            cpf: cpf.replace(/\D/g, ''),
            email: email.trim(),
            telefone: telefone.trim(),
            disciplina: disciplina.trim(),
          }),
        }
      );

      const texto = await resposta.text();
      let resultado;

      try {
        resultado = JSON.parse(texto);
      } catch {
        throw new Error('O servidor não retornou JSON válido.');
      }

      if (
        !resposta.ok ||
        resultado.erro ||
        resultado.sucesso === false
      ) {
        throw new Error(
          resultado.mensagem ||
          resultado.erro ||
          'Não foi possível cadastrar o professor.'
        );
      }

      Alert.alert(
        'Cadastro realizado',
        resultado.mensagem || 'Professor cadastrado com sucesso!',
        [{ text: 'OK', onPress: limparCampos }]
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
    setEmail('');
    setTelefone('');
    setDisciplina('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Professores</Text>
      <Text style={styles.subtitulo}>
        Cadastro de professores
      </Text>

      <Text style={styles.label}>Nome completo *</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do professor"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />

      <Text style={styles.label}>CPF *</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF do professor"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
        maxLength={14}
      />

      <Text style={styles.label}>E-mail *</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail do professor"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="Telefone para contato"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Disciplina</Text>
      <TextInput
        style={styles.input}
        placeholder="Disciplina ministrada"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarProfessor}
        disabled={carregando}
        activeOpacity={0.8}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>
            Cadastrar Professor
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoLimpar}
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
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    color: CORES.principal,
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#68738A',
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: CORES.principal,
    marginBottom: 7,
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#D9DFEA',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 17,
  },
  botao: {
    backgroundColor: CORES.botao,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    alignItems: 'center',
    padding: 14,
    marginTop: 5,
  },
  textoLimpar: {
    color: '#68738A',
    fontSize: 15,
    fontWeight: '600',
  },
  voltar: {
    alignItems: 'center',
    padding: 12,
  },
  textoVoltar: {
    color: CORES.principal,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
