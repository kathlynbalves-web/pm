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

export default function MatriculasScreen({ navigation }) {
  const [idAluno, setIdAluno] = useState('');
  const [idCurso, setIdCurso] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrarMatricula() {
    if (!idAluno.trim() || !idCurso.trim()) {
      Alert.alert('Atenção', 'Informe o ID do aluno e o ID do curso.');
      return;
    }

    if (
      !/^\d+$/.test(idAluno.trim()) ||
      !/^\d+$/.test(idCurso.trim())
    ) {
      Alert.alert('Atenção', 'Os IDs devem conter apenas números.');
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(
        `${API_URL}/cadastrar_matricula.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_aluno: Number(idAluno),
            id_curso: Number(idCurso),
            data_matricula: dataMatricula.trim(),
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
          'Não foi possível cadastrar a matrícula.'
        );
      }

      Alert.alert(
        'Sucesso',
        resultado.mensagem || 'Matrícula cadastrada com sucesso!'
      );

      setIdAluno('');
      setIdCurso('');
      setDataMatricula('');
    } catch (erro) {
      Alert.alert(
        'Erro',
        erro.message || 'Não foi possível conectar ao servidor.'
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Cadastrar Matrícula</Text>
      <Text style={styles.subtitulo}>
        Informe os dados da matrícula
      </Text>

      <Text style={styles.label}>ID do aluno *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do aluno"
        value={idAluno}
        onChangeText={setIdAluno}
        keyboardType="numeric"
      />

      <Text style={styles.label}>ID do curso *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do curso"
        value={idCurso}
        onChangeText={setIdCurso}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data da matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="AAAA-MM-DD"
        value={dataMatricula}
        onChangeText={setDataMatricula}
      />

      <TouchableOpacity
        style={[styles.botao, carregando && styles.desativado]}
        onPress={cadastrarMatricula}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>Cadastrar Matrícula</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>Voltar</Text>
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
  botaoVoltar: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  textoVoltar: {
    color: CORES.principal,
    fontSize: 15,
    fontWeight: 'bold',
  },
});