import React, { useState } from 'react';
import { CORES } from '../services/theme'; 
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


export default function BoletimScreen({ navigation }) {
  const [idAluno, setIdAluno] = useState('');
  const [boletim, setBoletim] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [consultado, setConsultado] = useState(false);

  async function consultarBoletim() {
    if (!idAluno.trim() || !/^\d+$/.test(idAluno.trim())) {
      Alert.alert('Atenção', 'Informe um ID de aluno válido.');
      return;
    }

    try {
      setCarregando(true);
      setConsultado(false);
      setBoletim([]);

      const resposta = await fetch(
        `${API_URL}/boletim.php?id_aluno=${encodeURIComponent(idAluno.trim())}`
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

      if (!resposta.ok || resultado.erro) {
        throw new Error(
          resultado.erro ||
          resultado.mensagem ||
          'Não foi possível consultar o boletim.'
        );
      }

      const dados = Array.isArray(resultado)
        ? resultado
        : resultado.boletim;

      if (!Array.isArray(dados)) {
        throw new Error('O formato dos dados do boletim é inválido.');
      }

      setBoletim(dados);
      setConsultado(true);
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
      <Text style={styles.titulo}>Boletim Escolar</Text>
      <Text style={styles.subtitulo}>
        Consulte as notas do aluno
      </Text>

      <Text style={styles.label}>ID do aluno *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do aluno"
        value={idAluno}
        onChangeText={setIdAluno}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.botao, carregando && styles.desativado]}
        onPress={consultarBoletim}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.textoBotao}>Consultar Boletim</Text>
        )}
      </TouchableOpacity>

      {consultado && (
        <View style={styles.resultado}>
          <Text style={styles.tituloResultado}>Resultado</Text>

          {boletim.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhuma nota encontrada para esse aluno.
            </Text>
          ) : (
            boletim.map((item, indice) => (
              <View
                key={String(item.id_avaliacao ?? indice)}
                style={styles.card}
              >
                <Text style={styles.disciplina}>
                  {item.disciplina || item.nome_disciplina || 'Disciplina'}
                </Text>

                <Text style={styles.dado}>
                  Nota: {item.nota ?? item.media_final ?? '—'}
                </Text>

                {item.situacao_final != null && (
                  <Text style={styles.dado}>
                    Situação: {item.situacao_final}
                  </Text>
                )}
              </View>
            ))
          )}
        </View>
      )}

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
  },
  desativado: {
    opacity: 0.7,
  },
  textoBotao: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 28,
  },
  tituloResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CORES.principal,
    marginBottom: 14,
  },
  card: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: '#D8DEEA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  disciplina: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CORES.principal,
    marginBottom: 8,
  },
  dado: {
    fontSize: 15,
    color: '#475467',
    marginTop: 4,
  },
  semDados: {
    fontSize: 15,
    color: '#667085',
  },
  botaoVoltar: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  textoVoltar: {
    color: CORES.principal,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
