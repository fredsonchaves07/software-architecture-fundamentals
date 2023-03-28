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
