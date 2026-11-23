import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { API_URL } from '../services/api';
import { CORES } from '../services/theme';

export default function DisciplinasScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrarDisciplina() {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Informe o nome da disciplina.');
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(
        `${API_URL}/cadastrar_disciplina.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome.trim(),
            descricao: descricao.trim(),
          }),
        }
      );

      const texto = await resposta.text();
      let resultado;

      try {
        resultado = JSON.parse(texto);
      } catch {
        throw new Error(
          'O servidor não retornou uma resposta JSON válida.'
        );
      }

      if (
        !resposta.ok ||
        resultado.erro ||
        resultado.sucesso === false
      ) {
        throw new Error(
          resultado.erro ||
          resultado.mensagem ||
          'Não foi possível cadastrar a disciplina.'
        );
      }

      Alert.alert(
        'Sucesso',
        resultado.mensagem || 'Disciplina cadastrada com sucesso!'
      );

      setNome('');
      setDescricao('');
    } catch (erro) {
      Alert.alert(
        'Erro',
        erro.message || 'Não foi possível conectar ao servidor.'
      );
    } finally {
      setCarregando(false);
    }
  }

  function limparCampos() {
    setNome('');
    setDescricao('');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Cadastrar Disciplina</Text>
      <Text style={styles.subtitulo}>
        Preencha os dados da disciplina
      </Text>

      <Text style={styles.label}>Nome da disciplina *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da disciplina"
        value={nome}
        onChangeText={setNome}
        maxLength={120}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Digite a descrição da disciplina"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        maxLength={500}
      />

      <TouchableOpacity
        style={[styles.botao, carregando && styles.desativado]}
        onPress={cadastrarDisciplina}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>
            Cadastrar Disciplina
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={limparCampos}
        disabled={carregando}
      >
        <Text style={styles.textoSecundario}>Limpar campos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },
  conteudo: {
    padding: 24,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: CORES.principal,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#667085',
    marginBottom: 28,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: CORES.principal,
    marginBottom: 8,
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#D8DEEA',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    marginBottom: 20,
  },
  textarea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: CORES.botao,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  desativado: {
    opacity: 0.7,
  },
  textoBotao: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    backgroundColor: '#EDE5F5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  textoSecundario: {
    color: CORES.principal,
    fontSize: 15,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
});
