# Escopo das características arquiteturais

- Uma suposição axiomática predominante no mundo da arquitetura de software tradicionalmente colocava o escopo das características da arquitetura no nível do sistema
- Por exemplo, quando os arquitetos falam sobre escalabilidade, eles geralmente expressam essa discussão em torno da escalabilidade de todo o sistema
- Essa era uma suposição segura há uma década, quando praticamente todos os sistemas eram monolíticos
- Com o advento das tecnologias e adoção da arquitetura em microserviços, o escopo das características arquiteturais diminuiu consideravelmente
- Não importa o quanto um arquiteto coloque esforço para projetar uma base de código de alto desempenho ou elástica, se o sistema usar um banco de dados que não corresponda a essas características
- Ao avaliar muitas características de arquitetura operacional, um arquiteto deve considerar os componentes dependentes fora da base de código que afetarão essas características

## Acoplamento e connascence

- Por exemplo, se dois serviços em uma arquitetura de microsserviços compartilham a mesma definição de classe de alguma classe, como endereço, dizemos que são estaticamente
connascentes entre si. A alteração da classe compartilhada exige alterações em ambos os serviços. Esse tipo de exemplo ocorre quando temos um connascence estático
- Para connascence dinamica, As chamadas síncronas entre dois serviços distribuídos fazem com que o chamador aguarde a resposta do solicitante enquanto que nas chamadas assicronas, em um arquitetura orientada a eventos, os dois serviços diferentes difiram na arquitetura operacional


## Arquitetura Quanta e granularidade

- Muitos conceitos de negócios unem semanticamente partes do sistema, criando coesão funcional. Para projetar, analisar e desenvolver software com sucesso, os desenvolvedores devem considerar todos os pontos de acoplamento que podem ser interrompidos.
- A palavra quantum deriva do latim, significando "quão grande" ou "quanto"

*Deploys independentes*
  - Uma arquitetura quantum inclui todos os componentes necessários para funcionar independente de outras partes da arquitetura. Por exemplo, se um aplicativo usa um banco de dados, ele faz parte do quatum porque o sistema não funcionará sem ele.
  - Esse requisito significa que praticamente todos os sistemas legados implantados usando um único banco de dados, por definição, formam um único quatum
  - No entanto, no estilo de arquitetura de microsserviços, cada serviço inclui seu próprio banco de dados criando múltiplos quatum dentro dessa arquitetura

*Alta coesão funcional*
  - A coesão no design do componente refere-se a quão bem o código contido é unificado em propósito. Por exemplo, um componente Cliente com propriedades e métodos pertencentes a uma entidade Cliente exibe alta coesão equanto que um componente Utilitário com uma coleção de métodos aleatórios, não possuem.
  - A alta coesão funcional implica que um quantum de arquitetura faz algo proposital.
  - Essa distinção importa pouco em aplicativos monolíticos tradicionais com um único banco de dados. No entanto, em arquiteturas de microsserviços, os desenvolvedores geralmente projetam cada serviço para corresponder a um único fluxo de trabalho, exibindo assim alta coesão funcional

*Connascence sincrona*
  -  A connascência síncrona implica chamadas síncronas dentro de um contexto de aplicação ou entre serviços distribuídos que formam esse quantum de arquitetura
  -  Por exemplo, se um serviço em uma arquitetura de microsserviços chama outro de forma síncrona, cada serviço não pode exibir diferenças extremas nas características da arquitetura operacional
  -  Chamadas síncronas criam connascência dinâmica durante a duração da chamada. Se uma estiver esperando a outra, suas características de arquitetura operacional devem ser as mesmas durante a duração da chamada.
  -  A connascence assicrona cria uma arquitetura mais flexível

![image 6DIS41](https://github.com/fredsonchaves07/software-architecture-fundamentals/assets/43495376/711defe2-5659-42b2-afd9-d3db1c9f1cd8)

- O conceito quântico de arquitetura fornece o novo escopo para as características da arquitetura.
- Nos sistemas modernos, os arquitetos definem as características da arquitetura no nível quântico, e não no nível do sistema
- Ao olhar para um escopo mais restrito para questões operacionais importantes, os arquitetos podem identificar desafios arquitetônicos antecipadamente, levando a arquiteturas híbridas


