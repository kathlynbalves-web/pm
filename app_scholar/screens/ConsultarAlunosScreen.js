import React, { useState, useEffect } from 'react';
import { CORES } from '../services/theme'; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { API_URL } from '../services/api';

export default function ConsultarAlunosScreen({ navigation }) {
  const [pesquisa, setPesquisa] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  async function carregarAlunos() {
    setCarregando(true);

    try {
      const resposta = await fetch(`${API_URL}/alunos.php`, {
        headers: {
          Accept: 'application/json',
        },
      });

      const texto = await resposta.text();
      let resultado;

      try {
        resultado = JSON.parse(texto);
      } catch {
        throw new Error('O servidor não retornou JSON válido.');
      }

      if (!resposta.ok) {
        throw new Error('Não foi possível consultar os alunos.');
      }

      const lista = Array.isArray(resultado)
        ? resultado
        : resultado.alunos;

      if (!Array.isArray(lista)) {
        throw new Error('O formato da resposta do PHP é diferente do esperado.');
      }

      setAlunos(lista);
    } catch (erro) {
      Alert.alert(
        'Erro na consulta',
        erro.message || 'Não foi possível conectar ao servidor.'
      );
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarAlunos();
  }, []);

  const alunosFiltrados = alunos.filter((aluno) =>
    String(aluno.nome || '')
      .toLowerCase()
      .includes(pesquisa.trim().toLowerCase())
  );

  function formatarData(data) {
    if (!data) return 'Não informado';

    const partes = String(data).substring(0, 10).split('-');

    if (partes.length === 3 && partes[0].length === 4) {
      return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    return data;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Consultar Alunos</Text>
      <Text style={styles.subtitulo}>
        Pesquise os alunos cadastrados
      </Text>

      <TextInput
        style={styles.pesquisa}
        placeholder="Digite o nome do aluno"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <TouchableOpacity
        style={styles.atualizar}
        onPress={carregarAlunos}
        disabled={carregando}
      >
        <Text style={styles.textoAtualizar}>Atualizar lista</Text>
      </TouchableOpacity>

      {carregando ? (
        <ActivityIndicator
          size="large"
          color="#354F86"
          style={styles.carregando}
        />
      ) : (
        <>
          {alunosFiltrados.map((aluno, index) => (
            <View
              style={styles.card}
              key={String(aluno.id_alunos ?? aluno.id ?? index)}
            >
              <View style={styles.cabecalho}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarTexto}>
                    {String(aluno.nome || '?').charAt(0).toUpperCase()}
                  </Text>
                </View>

                <Text style={styles.nome}>
                  {aluno.nome || 'Nome não informado'}
                </Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.label}>CPF</Text>
                <Text style={styles.valor}>
                  {aluno.cpf || 'Não informado'}
                </Text>

                <Text style={styles.label}>E-mail</Text>
                <Text style={styles.valor}>
                  {aluno.email || 'Não informado'}
                </Text>

                <Text style={styles.label}>Nascimento</Text>
                <Text style={styles.valor}>
                  {formatarData(
                    aluno.data_nascimento || aluno.nascimento
                  )}
                </Text>

                <Text style={styles.label}>Telefone</Text>
                <Text style={styles.valor}>
                  {aluno.telefone || 'Não informado'}
                </Text>

                <Text style={styles.label}>Endereço</Text>
                <Text style={styles.valor}>
                  {aluno.endereco || 'Não informado'}
                </Text>
              </View>
            </View>
          ))}

          {alunosFiltrados.length === 0 && (
            <View style={styles.vazio}>
              <Text style={styles.vazioTitulo}>
                Nenhum aluno encontrado
              </Text>
              <Text style={styles.vazioTexto}>
                Tente outro nome ou atualize a lista.
              </Text>
            </View>
          )}
        </>
      )}

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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: CORES.principal,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: '#68738A',
  },
  pesquisa: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#D9DFEA',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    marginBottom: 12,
  },
  atualizar: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 15,
  },
  textoAtualizar: {
    color: CORES.botao,
    fontSize: 15,
    fontWeight: 'bold',
  },
  carregando: {
    marginTop: 30,
  },
  card: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#E0E5EF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#EDE5F5',
  },
  avatarTexto: {
    fontSize: 21,
    fontWeight: 'bold',
    color: CORES.botao,
  },
  nome: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    color: CORES.principal,
  },
  info: {
    paddingLeft: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 9,
    color: '#68738A',
    textTransform: 'uppercase',
  },
  valor: {
    fontSize: 15,
    marginTop: 3,
    color: '#26364A',
  },
  vazio: {
    alignItems: 'center',
    marginTop: 35,
    paddingHorizontal: 10,
  },
  vazioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.principal,
    textAlign: 'center',
  },
  vazioTexto: {
    fontSize: 14,
    marginTop: 7,
    color: '#68738A',
    textAlign: 'center',
  },
  voltar: {
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 12,
  },
  textoVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.principal,
  },
});