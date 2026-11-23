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

export default function TurmasScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [anoLetivo, setAnoLetivo] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrarTurma() {
    if (!nome.trim() || !periodo.trim() || !anoLetivo.trim()) {
      Alert.alert(
        'Atenção',
        'Preencha o nome da turma, o período e o ano letivo.'
      );
      return;
    }

    if (!/^\d{4}$/.test(anoLetivo.trim())) {
      Alert.alert('Atenção', 'Informe o ano letivo com quatro números.');
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/cadastrar_turma.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome.trim(),
          periodo: periodo.trim(),
          ano_letivo: Number(anoLetivo),
        }),
      });

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
          'Não foi possível cadastrar a turma.'
        );
      }

      Alert.alert(
        'Sucesso',
        resultado.mensagem || 'Turma cadastrada com sucesso!'
      );

      setNome('');
      setPeriodo('');
      setAnoLetivo('');
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
      <Text style={styles.titulo}>Cadastrar Turma</Text>
      <Text style={styles.subtitulo}>
        Preencha os dados da turma
      </Text>

      <Text style={styles.label}>Nome da turma *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 1º A"
        value={nome}
        onChangeText={setNome}
        maxLength={80}
      />

      <Text style={styles.label}>Período *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Manhã, tarde ou noite"
        value={periodo}
        onChangeText={setPeriodo}
        maxLength={40}
      />

      <Text style={styles.label}>Ano letivo *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 2026"
        value={anoLetivo}
        onChangeText={setAnoLetivo}
        keyboardType="numeric"
        maxLength={4}
      />

      <TouchableOpacity
        style={[styles.botao, carregando && styles.desativado]}
        onPress={cadastrarTurma}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>Cadastrar Turma</Text>
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