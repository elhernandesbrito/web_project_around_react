
Nesta etapa do projeto, desenvolvemos uma aplicação React completa para exibição, criação, curtir e exclusão de cartões com imagens, além da edição de perfil e avatar do usuário.
Abaixo estão os principais conceitos, ferramentas e funcionalidades abordados:

* Organização e Centralização de Requisições

 - Criação do arquivo api.js dentro da pasta src/utils, responsável por centralizar todas as interações com a API externa.
 - Instanciamos e exportamos diretamente a classe Api, configurada com a URL base e o token de autenticação.

* Gerenciamento de Estado e Dados com React
 - Inicialização do estado cards no componente Main, posteriormente elevado para App para controle centralizado.
 - Uso do useEffect para buscar os dados dos cartões e do usuário atual ao carregar a aplicação.

* Uso de Contexto Global
 - Implementação do CurrentUserContext para disponibilizar os dados do usuário atual em toda a aplicação.
 - Envolvimento do componente App com o Provider, permitindo acesso ao usuário em componentes como Main, Card, EditProfile e EditAvatar.

* Funcionalidade de Curtidas e Exclusão de Cartões
 - Criação das funções handleCardLike e handleCardDelete para envio de requisições de curtir/descurtir e exclusão.
 - Uso do método filter() para atualizar a lista de cartões após uma exclusão.
 - Identificação visual de cartões curtidos por meio da prop isLiked.

 * Edição de Perfil
 - Componente EditProfile com campos controlados (componentes controlados via useState).
 - Envio dos dados de edição via handleUpdateUser, atualizando tanto o backend quanto o estado global currentUser.
 - Implementação da lógica para fechamento automático do popup após o envio.
 
* Edição de Avatar
 - Uso de ref para acessar diretamente o valor do campo de entrada.
 - Manipulador handleUpdateAvatar para atualização do avatar via API e do estado local.

*Adição de Novos Cartões
 - Criação do componente NewCard com formulário para adicionar novas imagens e títulos.
 - A função handleAddPlaceSubmit atualiza a lista de cartões local com o novo card no topo.
 - Estado cards elevado para App para garantir que o novo cartão apareça instantaneamente na interface.

 ** Boas Práticas Adotadas
Separação de responsabilidades entre componentes.

Componentes reutilizáveis e focados em uma única tarefa.

Atualizações de estado reativas que mantêm a interface sincronizada com a API.