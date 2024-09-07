## Horários da Missa
Este projeto é uma aplicação web que permite aos usuários buscar os horários de Santa Missa nas paróquias em um determinado bairro de Belém/PA e encontrar a próxima missa com base no horário atual. A aplicação é especialmente útil para pessoas que são novas na cidade de Belém ou que estejam a passeio, que desejam participar de missas e precisam de uma maneira rápida e fácil de encontrar informações sobre horários e locais. Este projeto faz parte do desafio da Imersão Dev com Gemini e Alura, onde foi ensinado a construção de uma página de busca.

### Funcionalidades Principais
Busca de Paróquias por Bairro:
Os usuários podem digitar o nome do bairro no campo de pesquisa para encontrar paróquias localizadas nesse bairro.
A aplicação exibe uma lista de paróquias ordenadas pela próxima missa que ocorrerá.
Exibição da Próxima Missa:
A aplicação calcula a próxima missa com base no horário atual e nos horários fornecidos para cada paróquia.
Exibe o dia da semana e o horário da próxima missa.

###  Tecnologias Utilizadas
- HTML/CSS: Para a estrutura e o estilo da interface do usuário.
- JavaScript: Para a lógica de busca e ordenação das paróquias, bem como para a manipulação do DOM.

###  Estrutura do Código
Função getProximaMissa: Esta função recebe um objeto com os horários das missas para cada dia da semana e retorna o dia e o horário da próxima missa com base no horário atual.
Função buscarParoquias: Esta função permite buscar paróquias pelo nome do bairro, ordena as paróquias pela próxima missa (Função getProximaMissa) e exibe as informações na interface do usuário.

###   Como Usar
- Busca de Paróquias:
Digite o nome do bairro no campo de pesquisa e pressione Enter.
A aplicação exibirá uma lista de paróquias no bairro especificado, ordenadas pela próxima missa.
- Visualização da Próxima Missa:
A próxima missa é calculada automaticamente e exibida junto com as informações da paróquia.
Contribuição

###   Próximos Passos:
 - Integrar a API do Google Gemini para gerar mais informações das paróquias, para que o usuário que não a conhece tenha algumas informações sobre o histório, atividades, etc..
 - Aumentar a base de dados, para ter informações de todass as pároquias de todos os bairros.