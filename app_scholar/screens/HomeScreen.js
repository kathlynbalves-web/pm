 import { CORES } from '../services/theme';
 import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#20345C"
        barStyle="light-content"
      />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titulo}>APP Scholar</Text>

        <Text style={styles.subtitulo}>
          Sistema Acadêmico Mobile
        </Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.boasVindas}>
          Bem-vindo!
        </Text>

        <Text style={styles.descricao}>
          Acesse o sistema para gerenciar as informações
          acadêmicas de forma simples e organizada.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Cadastros')}
        >
          <Text style={styles.textoBotao}>
            Entrar no sistema
          </Text>
          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          APP Scholar • Gestão Acadêmica
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },
  header: {
    backgroundColor: CORES.principal,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 45,
    paddingBottom: 55,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  logoContainer: {
    width: 145,
    height: 145,
    backgroundColor: CORES.branco,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    elevation: 5,
  },
  logo: {
    width: 125,
    height: 125,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 31,
    fontWeight: 'bold',
    color: CORES.branco,
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 15,
    color: '#E9DDF8',
    marginTop: 8,
    textAlign: 'center',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  boasVindas: {
    fontSize: 25,
    fontWeight: 'bold',
    color: CORES.principal,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#667085',
    lineHeight: 25,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: CORES.botao,
    width: '100%',
    minHeight: 58,
    borderRadius: 15,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  textoBotao: {
    color: CORES.branco,
    fontSize: 17,
    fontWeight: 'bold',
  },
  seta: {
    color: CORES.branco,
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
  },
  rodape: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  textoRodape: {
    color: '#8A94A6',
    fontSize: 12,
  },
});