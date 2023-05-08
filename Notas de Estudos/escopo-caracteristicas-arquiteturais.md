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
