import { CORES } from '../services/theme';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function CoordenadoresScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.icone}></Text>

      <Text style={styles.titulo}>Coordenadores</Text>

      <Text style={styles.subtitulo}>
        Cadastro de coordenador
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Curso responsável"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert('Coordenador cadastrado com sucesso!')}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
         Cadastrar Coordenador
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>
        Voltar
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 30,
    backgroundColor: CORES.fundo,
  },

  icone: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 5,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: CORES.principal,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 28,
    color: '#68738A',
  },

  input: {
    borderWidth: 1,
    borderColor: '#D9DFEA',
    backgroundColor: CORES.branco,
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
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

  voltar: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
  },

  textoVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.principal,
  },
});