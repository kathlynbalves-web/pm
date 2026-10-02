import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function AlunosScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Alunos</Text>
      <Text style={styles.subtitulo}>
        Cadastro de aluno
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
        placeholder="Data de nascimento"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.botaoPrincipal}
        onPress={() => alert('Aluno cadastrado com sucesso!')}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Aluno
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('ConsultarAlunos')}
        activeOpacity={0.8}
      >
        <Text style={styles.textoSecundario}>
          Consultar Alunos
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
    paddingTop: 35,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
  },

  botaoPrincipal: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },

  textoBotao: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },

  textoSecundario: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  voltar: {
    alignItems: 'center',
    marginTop: 22,
    paddingVertical: 12,
  },

  textoVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});