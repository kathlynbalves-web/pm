// services/api.js

export const API_URL = 'http://localhost/app_scholar_api';

export async function listarAlunos() {
  const resposta = await fetch(`${API_URL}/alunos.php`);
  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error('Erro ao consultar alunos.');
  }

  return dados;
}

export async function cadastrarAluno(aluno) {
  const resposta = await fetch(
    `${API_URL}/cadastrar_aluno.php`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    }
  );

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error('Erro ao cadastrar aluno.');
  }

  return dados;
}