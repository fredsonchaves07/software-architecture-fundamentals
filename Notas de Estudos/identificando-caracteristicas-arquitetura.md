# Definindo características de arquitetura

- Identificar as características de arquitetura de um projeto é um dos primeiros passos a ser realizado quando queremos criar uma nova arquitetura ou validar uma arquitetura existente
- Identificar de forma correta as características arquiteturais para um problema ou aplicação exige que um arquiteto não apenas entenda o problema do domínio como também colabore com as partes interessadas do domínio do problema para determinar o que é realmente importante

## Extraindo características arquiteturais a partir do dominio

- Um arquiteto deve ser capaz de entender os problemas do dominio para identificar características chaves e essenciais
- Por exemplo, a escabilidade é preocupação mais importante ou é tolerância a falhas, segurança ou desempenho?
- Identificar as "ades" forma uma base para decisões de arquitetura
- Um anti-pattern comum na arquitetura envolve a tentativa de projetar uma arquitetura genérica que suporta todas as características arquiteturais
- As características arquiteturais levam uma complexidade cada vez maior antes mesmo do arquiteto e os desenvolvedores iniciarem a solução do problema
- Não é interessante atender maior número de características. O arquiteto deve está motivado em manter o design mais simples
- Raramente todas as partes interessadas concordam com a prioridade de cada característica
- Uma boa abordagem é fazer com que os stakeholders selecionem as três principais características importantes daquele problema ou dominio
- Isso promove discursões sobre o que é mais importante e ajuda os arquitetos a analisar os trade-offs
- Embora isso possa parecer uma atividade simples, o problema é que arquitetos e partes interessadas do projeto podem falar termos diferentes (linguagem técnica e não técnica)
- Arquitetos falam sobre escalabilidade, interoperabilidade, tolerância a falhas, aprendizado e disponibilidade. Partes interessadas do domínio falam sobre fusões e aquisições, satisfação do usuário, tempo de mercado e vantagem competitiva.
- Os arquitetos não têm ideia de como criar uma arquitetura para dar suporte à satisfação do usuário, e as partes interessadas do domínio não entendem o motivo de se preocupar com disponibilidade, tolerância a falhas e segurança
- A tabela abaixo mostra algumas das possíveis preocupações e características relacionadas

![Captura de tela de 2023-03-27 16-04-34](https://user-images.githubusercontent.com/43495376/228041409-7b906cd8-aa85-4c8e-bb97-1332ab77cd82.png)

## Extraindo características arquiteturais a partir dos requisitos

- Algumas características arquiteturais estão explícitas em documentos de requisitos
- Documentos informam as decisões do arquiteto e pode ser uma boa ferramenta para análise de características
- Podemos identificar características a partir dos requisitos através de *Architecture Katas*. Um tipo de evento que reune várias pessoas cujo objetivo é escolher uma melhor arquitetura possível para um determinado problema


## Caso de uso - Sanduiches do Silicio

- Para ilustrar algumas das ideias de *Architecture Katas* na qual o objetivo é identificar características a partir dos requisitos essenciais para um dominio de uma aplicação

**Descrição**
- Uma lanchonete nacional deseja permitir pedidos on-line (além de seu serviço de chamada atual)

**Usuários**
- Milhares em alguns casos pode chegar a milhões

**Requisitos**
- Os usuários realizaram os pedidos e terão um tempo para buscar na lanchonete (que deve se integrar com vários serviços externos de mapeamento que incluem informações de trânsito)
- Se a loja oferecer serviço de entrega, despache o motorista com o sanduiche para o cliente
- Oferecer accessibilidade para os dispositivos móveis
- Oferecer promoções especiais diárias nacionais
- Oferecer promoções especiais diárias locais
- Aceitar pagamento online pessoalmente ou na entrega

**Informações de contexto adicionais**
- As lanchonetes são franqueadas, cada uma com um dono diferente
- A companhia principal tem planos de extensão do negócio para o exterior
- O objetivo corporativo é contratar mão de obra barata para maximizar os lucros

- Diante desse cenário, como um arquiteto derivaria as características da arquitetura?
- Cada parte do requisito pode contribuir para um ou mais aspectos da arquitetura (e muitos não).
- O arquiteto não precisa realizar o design do sistema neste ponto
- Em vez disso, o arquiteto procura coisas que influenciam ou impactam o projeto, particularmente estrutural.
- O primeiro passo a ser realizado é a separação das características explicitas e implicitas

### Características Explicitas

- O arquiteto deve considerar primeiramente o nível de características na seção de usuários
- Um dos primeiros detalhes que   deve chamar atenção de um arquiteto é o número de usuários
- No cenário acima, pode-se pensar que essa condição seja atendida podemos entender como característica principal a *escalabilidade*
- No entando também precisamos da *elasticidade* (Capacidade de ligar com grandes números de solicitações)
- Essas duas características geralmente aparecem juntas mas tem restrições diferentes
- A escalabilidade aparece como na imagem a baixo

![image WMDF21](https://user-images.githubusercontent.com/43495376/228919792-2d9f3819-f94f-41cb-b51b-67a71116ad47.png)

- A elasticidade, por outro lado, mede o pico de trafego conforme a imagem

![image HRGI21](https://user-images.githubusercontent.com/43495376/228920014-2af97cca-25dd-4f23-9ded-0e0c7b1e7edd.png)

- Alguns sistemas são escaláveis, mas não elásticos
- Considere uma reserva de hotel. Na ausencia de reservas ou algum evento especial, o número de usuário provavelmente é consistente
- Por outro lado, considere um sistema de reserva de ingressos para show. A médida que novos ingressos são colocados a venda, grande números de fans vão acessar o site para realizar a compra exigindo altos graus de elasticidade. 
- Muitas vezes, os sistemas elásticos também precisa de escalabilidade
- O requisito de elasticidade não apareceu nos requisitos dos Sanduíches de Silício, no entanto, o arquiteto deve identificar isso como uma consideração importante, mas algumas se escondem dentro do domínio do problema
- Considere uma lanchonete. O tráfego é consistente ao longo do dia? Ou suporta requisiçõe na hora das refeições? 
- Assim, um bom arquiteto deve identificar essa potencial característica da arquitetura.
- Um arquiteto deve considerar cada um desses requisitos de negócios para ver se existem características arquitetônicas:
  1. Os usuários farão seus pedidos e terão um tempo para pegar seu sanduíche e direções para a loja (que deve oferecer a opção de integração com serviços de mapeamento que incluem informações de trânsito). 
      - Os serviços de mapeamento externo implicam pontos de integração, que podem impactar aspectos como confiabilidade. Por exemplo, se um desenvolvedor constrói um sistema que depende de um sistema de terceiros, mas a chamada falha, isso afeta a confiabilidade da chamada sistema. 
      - No entanto, os arquitetos também devem ter cuidado com a especificação excessiva das características arquiteturais

  2. Se a loja oferecer serviço de entrega, despache o motorista com o sanduíche:
      - Nenhuma característica arquitetural para este requisito

  3. Acessibilidade de dispositivos móveis:
      - Este requisito afetará principalmente o design do aplicativo, apontando para construir um aplicativo da web portátil ou vários aplicativos da web nativos
      - Aqui o arquiteto pode considerar levar em conta que ao desenvolver em várias plataformas nativas pode ser um fator de exagero que pode impactar restrições orçamentárias
      - Um arquiteto deve agir com designers, partes interessadas e gerencia de projetos para decidir ou vetar decisões

  4. Ofereça promoções/especiais diárias nacionais e Ofereça promoções/especiais diárias locais.
      - Ambos os requisitos especificam a personalização em promoções especiais
      - Observe que o requisito 1 também implica em informações de tráfego personalizadas com base no endereço
      - Diante disso, o arquiteto pode considerar a customização como característica da arquitetura
      - Aqui podemos pensar em algumas soluções como plugins, ou até mesmo um padrão de design como template-method

  5. Aceite o pagamento online, pessoalmente ou na entrega.
      - Os pagamentos online implicam segurança, mas nada neste requisito sugere um nível particularmente elevado de segurança além do que está implícito.

  6. As lanchonetes são franqueadas, cada uma com um dono diferente
      - Este requisito pode impor restrições de custo na arquitetura
      - O arquiteto deve verificar a viabilidade (aplicando restrições como custo, tempo e conjunto de habilidades da equipe)

  7. A empresa tem planos de internacionalização em um futuro próximo
      - Este requisito implica internacionalização, ou i18n
      - Muitas técnicas de design existem para lidar com esse requisito, que não deve exigir estrutura especial para acomodar. Isso, no entanto, certamente direcionará as decisões de design.

  8. O objetivo corporativo é contratar mão de obra barata para maximizar o lucro
      - Este requisito sugere que a usabilidade será importante, mas novamente está mais preocupado com o design do que com as características da arquitetura

- A terceira característica de arquitetura que derivamos dos requisitos anteriores é o desempenho
- Ninguém quer comprar de uma lanchonete com desempenho ruim, especialmente nos horários de pico
- O desempenho está relacionado com escabilidade. Será necessário defenir alguma estratégia para determinar que tipo de desempenho a aplicação deve ter. Sera com base no número de usuários?
- Muitas vezes, as características da arquitetura interagem umas com as outras, forçando os arquitetos a defini-los em relação uns aos outros

### Características Implicitas

- Muitas das caracteríticas não são específicadas em um documento de requisitos mas são importantes na estruturação do design
- Uma característica de arquitetura implícita que o sistema pode querer oferecer suporte é a disponibilidade (garantir que os usuários possam acessar a aplicação em tempo que o usuário precisar)
- Outra característica que está relacionada com a disponibildiade é a confiabilidade (garantir que o site permaneça no ar durante as interações do usuário)
- A segurança também aparece como característica implicita. Porém o arquiteto não precisa de nenhum projeto estrutural especial para acomodar a segurança. Um bom design no aplicativo será suficiente
- Algumas das características, exemplo de segurança, o arquiteto deve tomar cuidado ao especificar demais as características
- A última característica implicita nesse estudo de caso é o da customização (Várias partes do sistema oferecem comportamentos personalizados como receita, vendas locais, entregas). O arquiteto deve oferecer suporte a capacidade de facilitar o comportamento personalizado
- Este último elemento de design não é crítico para o sucesso do aplicativo


- Identificar corretamente elementos estruturais importantes pode facilitar um projeto mais simples ou mais complexo
- Não existe um bom design em arquitetura, apenas o menos pior e trade-offs
- Os arquitetos também devem priorizar essas características de arquitetura para tentar encontrar
os conjuntos necessários mais simples
- Uma vez que a equipe de arquitetos tenham identificados as características da arquitetura, um exercício que pode ser útil é determinar o menos importante
- Geralmente, os arquitetos são mais propensos a selecionar as características explícitas da arquitetura, já que muitas das implícitas suportam o sucesso geral
- A maneira como definimos o que é crítico ou importante para o sucesso ajuda os arquitetos a determinar se o aplicativo realmente requer cada característica da arquitetura
