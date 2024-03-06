module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // Alterações que afetam o sistema de build ou dependências externas (exemplos: gulp, npm)
        'ci', // Alterações em nossos arquivos e scripts de configuração de CI (exemplos: GitLab CI, Circle, Jenkins)
        'chore', // Outras alterações que não modificam o código-fonte ou os testes
        'docs', // Alterações apenas na documentação
        'feat', // Uma nova funcionalidade
        'fix', // Uma correção de bug
        'perf', // Uma mudança de código que melhora a performance
        'refactor', // Uma mudança de código que não corrige um bug nem adiciona uma funcionalidade
        'revert', // Reverte um commit anterior
        'style', // Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc)
        'test', // Adicionando testes ausentes ou corrigindo testes existentes
      ],
    ],
  },
};
