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

## Características arquiteturais (parcialmente) listadas

- As caracteristicas variam de código baixo nível, como modularidade, a grandes preocupações operacionais como escalabilidade e segurança
- Cada organização cria sua própria interpretação desses termos
- Além disso, como o ecosistema de software muda constantemente, novos conceitos, termos, medidas e verificações aparecem constantemente
- Alguns dos exemplos de características

### Características operacionais de arquitetura

- Abrange recursos como desempenho, escalabilidade, flexibilidade, recursos, disponibilidade e confiabilidade
- A figura abaixo mostra algumas caracteristicas operacionais de arquitetura
- Essas características está fortemente alinhados com as preocupações do DevOps

![Captura de tela de 2023-03-21 10-50-00](https://user-images.githubusercontent.com/43495376/226626441-e2385469-3918-4643-b762-e4a26764f515.png)

### Características estruturais de arquitetura

- Compreende os aspectos da estrutura do código.
- Em alguns casos o arquiteto tem responsabilidade exclusiva ou compartilhada pelas questões de qualidade de código, modularidade, acoplamento e uma série de outras avaliações.

![Captura de tela de 2023-03-21 10-54-36](https://user-images.githubusercontent.com/43495376/226627808-7f506b0d-6f99-445a-bec7-138a474d2873.png)

### Características transversaos de arquitetura

- São características que de uma certa forma está fora ou desafia a organização.
- Formam importantes restrições para manutenção e continuidade do projeto
- Questões como legalidade, segurança, privacidade, uso de software pelo usuário entre outras questões

![Captura de tela de 2023-03-21 10-58-30](https://user-images.githubusercontent.com/43495376/226629076-2f0a5f8b-c0d2-426a-9895-7bb7ce61974c.png)

![Captura de tela de 2023-03-21 10-58-39](https://user-images.githubusercontent.com/43495376/226629111-96ac9dc8-61c9-42e6-bd10-3095ff2fb2fd.png)


