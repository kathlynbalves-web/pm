import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { CORES } from '../services/theme';

const opcoes = [
  { titulo: 'Alunos', descricao: 'Cadastrar e consultar alunos', tela: 'Alunos', numero: '01' },
  { titulo: 'Professores', descricao: 'Gerenciar professores', tela: 'Professores', numero: '02' },
  { titulo: 'Responsáveis', descricao: 'Gerenciar responsáveis', tela: 'Responsaveis', numero: '03' },
  { titulo: 'Cursos', descricao: 'Gerenciar cursos', tela: 'Cursos', numero: '04' },
  { titulo: 'Disciplinas', descricao: 'Gerenciar disciplinas', tela: 'Disciplinas', numero: '05' },
  { titulo: 'Matrículas', descricao: 'Registrar matrículas', tela: 'Matriculas', numero: '06' },
  { titulo: 'Turmas', descricao: 'Gerenciar turmas', tela: 'Turmas', numero: '07' },
  { titulo: 'Avaliações', descricao: 'Registrar avaliações e notas', tela: 'Avaliacoes', numero: '08' },
  { titulo: 'Coordenadores', descricao: 'Gerenciar coordenadores', tela: 'Coordenadores', numero: '09' },
  { titulo: 'Boletim', descricao: 'Consultar notas dos alunos', tela: 'Boletim', numero: '10' },
];

export default function CadastrosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#20345C"
        barStyle="light-content"
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.setaVoltar}>‹</Text>
        </TouchableOpacity>

        <View style={styles.headerTexto}>
          <Text style={styles.titulo}>Menu Acadêmico</Text>
          <Text style={styles.subtitulo}>
            Selecione uma opção para continuar
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      >
        {opcoes.map((opcao) => (
          <TouchableOpacity
            key={opcao.tela}
            style={styles.card}
            activeOpacity={0.75}
            onPress={() => navigation.navigate(opcao.tela)}
          >
            <View style={styles.numeroContainer}>
              <Text style={styles.numero}>
                {opcao.numero}
              </Text>
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                {opcao.titulo}
              </Text>
              <Text style={styles.cardDescricao}>
                {opcao.descricao}
              </Text>
            </View>

            <Text style={styles.setaDireita}>›</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.botaoInicio}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotaoInicio}>
            Voltar ao início
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 28,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  botaoVoltar: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  setaVoltar: {
    fontSize: 34,
    color: CORES.branco,
    lineHeight: 38,
  },
  headerTexto: {
    flex: 1,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: CORES.branco,
  },
  subtitulo: {
    fontSize: 13,
    color: '#E9DDF8',
    marginTop: 6,
  },
  lista: {
    padding: 18,
    paddingBottom: 35,
  },
  card: {
    backgroundColor: CORES.branco,
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E7EBF3',
    elevation: 2,
  },
  numeroContainer: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: '#EDE5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  numero: {
    color: CORES.botao,
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardTexto: {
    flex: 1,
  },
  cardTitulo: {
    color: CORES.principal,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescricao: {
    color: '#778196',
    fontSize: 12,
    marginTop: 5,
  },
  setaDireita: {
    fontSize: 27,
    color: CORES.botao,
    marginLeft: 8,
  },
  botaoInicio: {
    backgroundColor: CORES.botao,
    paddingVertical: 15,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotaoInicio: {
    color: CORES.branco,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
