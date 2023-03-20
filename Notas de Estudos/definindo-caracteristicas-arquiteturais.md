# Definindo caracteristicas arquiteturais

- Um arquiteto deve considerar muitos fatores ao desenhar uma solução de software
- Decisões de software devem considerar um conjunto de requerimentos de negócios e caracteristicas arquiteturais
- Alguns dos fatores que os arquitetos devem considerar

![image YIZ611](https://user-images.githubusercontent.com/43495376/226472904-f9b3a7ff-a7a0-44d3-805c-bed934a7f4cf.png)

- Definir características arquiteturais em um software é uma das responsabilidades chaves do arquiteto
- Muitas organizações descrevem essas características como requisitos não funcionais
- Uma característica de arquitetura atende os 3 critérios:
  - Especifica uma consideração de design fora do domínio
  - Influencia algum aspecto estrutural do projeto
  - É crítico ou importante para o sucesso da aplicação

- Essas partes estão interligadas conforme a imagem

![image BN0311](https://user-images.githubusercontent.com/43495376/226475086-140ba3d5-b609-4708-972f-582fb594ccd3.png)

### Especifica uma condição de design fora de dominio

- Ao projetar um software os requisitos especificam o que aplicação deve fazer
- As características da arquitetura especificam os critérios operacionais e de design para o sucesso, sobre como implementar os requisitos e porque certas escolhas foram feitas
- "Evitar dividas técnicas" é consideração comum de design entre os desenvovledores e arquitetos 

### Influencia algum aspecto estrutural do projeto

- Considerações que os arquitetos devem fazer ao determinar comoprojetar para certas capacidades
- Diz respeito a considerações de design: essa característica de arquitetura requer consideração estrutural especial para ter sucesso? É necessário ter um módulo específico de segurança ou essa responsabilidade pode ser atribuida a uma API ou um sistema terceiro?
- Os arquitetos devem avaliar quais características chaves e quais podem impactar no processo de desenvolvimento do sistema

### Crítico ou importante para o sucesso da aplicação

- O suporte para cada característica de arquitetura adiciona complexidade ao projeto. Assim, um trabalho crítico para os arquitetos consiste em escolher o menor número de características arquiteturais e não as mais possíveis.

- Além disso, as características subdividem em arquitetura implicita e explicita
- Os implícitos raramente aparecem nos requisitos, mas são necessários para o sucesso do projeto.
- Por exemplo, disponibilidade, confiabilidade e segurança sustentam praticamente todos os aplicativos, mas raramente são especificados em documentos de design
- Arquitetos devem usar seu conhecimento do domínio do problema para descobrir essas características
- As características explícitas da arquitetura aparecem em documentos de requisitos ou outras instruções específicas.
- Na imagem, um suporta o outro na qual sustenta o design (Projeto como um todo)
