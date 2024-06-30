# Informações do Projeto

`SANTÉ`  

Conecte-se à sua saúde, conecte-se ao futuro, conecte-se conosco.

`ENGENHARIA DE SOFTWARE` 

A Engenharia de Software é uma tecnologia que, se usada de forma correta, é capaz de ajudar em diversas áreas da sociedade, como acessar serviços de saúde de qualidade, melhorando assim a eficiência dos processos médicos e aumentando a acessibilidade para pacientes em locais remotos ou com mobilidade reduzida.


## Participantes

Os membros do grupo são: 
- Matheus Dias
- Lucas Silva
- Julia Rocha


# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Há muitas pessoas que, por várias razões, negligenciam sua saúde e bem-estar, não procuram algum auxilio medico. Algumas dessas pessoas simplesmente não encontram tempo para visitar um médico, enquanto outras podem enfrentar dificuldades para se deslocar até um consultório, além da falta de acesso equitativo a serviços de saúde de qualidade. Esse problema pode se manifestar de várias maneiras, incluindo disparidades no acesso aos cuidados de saúde entre diferentes grupos socioeconômicos, geográficos, raciais e étnicos.


## Objetivos

Objetivos Do Santé

Missão:

A Santé se dedica a agregar saúde e bem-estar à vida daqueles que, por diversas razões, não podem mais acessar um acompanhamento médico formalizado. Através de um modelo inovador e humanizado, buscamos ampliar o acesso à saúde de qualidade, promovendo a prevenção de doenças, o autocuidado e a qualidade de vida da população.

Visão:

Aspiramos a ser reconhecidos como uma referência em saúde para pessoas em situação de vulnerabilidade, contribuindo para a construção de uma sociedade mais justa e saudável.

Valores:

Compromisso com a saúde: Priorizamos o bem-estar físico, mental e social dos nossos usuários.
Acessibilidade: Acreditamos que a saúde é um direito fundamental e deve estar disponível para todos, independentemente de renda, status social ou localização.
Humanização: Cultivamos um ambiente acolhedor e respeitoso, valorizando a individualidade de cada usuário.
Inovação: Buscamos constantemente aprimorar nossos serviços e métodos, utilizando tecnologias e conhecimentos atualizados para oferecer o melhor atendimento possível.
Eficiência: Gerimos nossos recursos com responsabilidade e transparência, otimizando processos e buscando sempre a sustentabilidade da organização.
Trabalho em equipe: Valorizamos a colaboração e o aprendizado mútuo entre nossos colaboradores, reconhecendo a importância de cada um para o alcance dos nossos objetivos.


## Justificativa

*Uma edição da PNAD investigou, pela primeira vez, o acesso das mulheres brasileiras aos serviços de saúde preventiva da mulher - quase metade das mulheres acima de 50 anos nunca fizeram um exame de mamografia na vida.

*35 milhões de brasileiros ainda não têm acesso a nenhum serviço de saúde de uso regular segundo o IBGE.

*Segundo o Instituto Ipsos, nove em cada dez brasileiros afirmam que não têm condição de pagar por saúde de qualidade. Os principais entraves no acesso à saúde identificados entre os brasileiros foi o custo de tratamento, a dificuldade no agendamento de consultas e a distância entre o domicílio e as unidades de saúde.

A motivação para usar este aplicativo é compreender as necessidades e os desafios que as pessoas enfrentam quando buscam cuidados de saúde acessíveis e de qualidade. Escolhi esta aplicação porque acreditamos que a tecnologia pode desempenhar um papel fundamental na melhoria da acessibilidade e eficiência dos serviços de saúde, fornecendo soluções inovadoras que vão ao encontro das necessidades dos pacientes e dos profissionais de saúde.

Optamos por nos concentrar em objetivos específicos relacionados ao monitoramento contínuo da saúde e ao uso da tecnologia para facilitar consultas médicas remotas, lembretes de exames e gerenciamento de registros de saúde. Isto ocorre porque se reconhece que muitas pessoas enfrentam dificuldades no acesso aos serviços de saúde devido a limitações de tempo, barreiras geográficas, restrições de circulação e outros fatores.

Um mergulho mais profundo em aspectos como a segurança dos dados, a integração com outros profissionais de saúde e o fornecimento de recursos educativos reflecte a compreensão de que a confiança e a colaboração são fundamentais para o sucesso das plataformas digitais de saúde. Além disso, reconhecemos a importância de fornecer informações atualizadas e recursos educacionais para capacitar os pacientes a tomar decisões informadas sobre a sua saúde.

Em suma, a nossa motivação para utilizar esta aplicação é contribuir para melhorar o acesso aos cuidados de saúde e promover a saúde e o bem-estar das pessoas através da utilização da tecnologia de forma eficaz e centrada no utilizador. A seleção de objectivos específicos e áreas de foco é orientada pela escolha de satisfazer as necessidades reais das pessoas e fornecer soluções que tenham um impacto positivo tangível nas suas vidas.


## Público-Alvo

Persona: Maria da Silva
Idade: 65 anos

Ocupação: Aposentada

Localização: Belo Horizonte, Minas Gerais

Contexto:

Maria é uma mulher viúva que vive sozinha há 5 anos. Ela tem diabetes e hipertensão, e precisa fazer acompanhamento médico regular. No entanto, devido à falta de plano de saúde e à dificuldade de locomoção, Maria tem tido problemas para acessar serviços de saúde de qualidade.

Frustrações:

Dificuldade de agendar consultas médicas
Longas filas de espera nos hospitais
Falta de informação sobre como cuidar da sua saúde
Sentimento de solidão e isolamento
Objetivos:

Encontrar um médico que possa acompanhá-la de forma regular
Ter acesso a exames e medicamentos a preços acessíveis
Receber orientação sobre como cuidar da sua saúde
Interagir com outras pessoas que também têm diabetes e hipertensão
Como o Santé pode ajudar:

O Santé pode oferecer à Maria consultas médicas online com profissionais qualificados.
O Santé pode ajudá-la a agendar exames e a encontrar medicamentos a preços acessíveis.
O Santé pode fornecer à Maria informações sobre como cuidar da sua saúde, através de artigos, vídeos e grupos de apoio online.
O Santé pode conectar a Maria com outras pessoas que também têm diabetes e hipertensão, para que ela possa compartilhar suas experiências e receber apoio.
Citações:

"Eu gostaria de ter um médico que pudesse me atender em casa, porque é muito difícil para mim ir ao hospital."
"Eu não sei como cuidar da minha saúde direito. Eu preciso de alguém que me explique o que eu devo fazer."
"Eu me sinto muito sozinha. Eu gostaria de conversar com outras pessoas que entendem o que eu estou passando."
Valores do Santé que mais se identificam com a Maria:

Acessibilidade: Maria valoriza o fato de que o Santé oferece serviços de saúde a preços acessíveis e que podem ser acessados online.
Humanização: Maria se sente acolhida e respeitada pela equipe do Santé.
Inovação: Maria está impressionada com a tecnologia utilizada pelo Santé para oferecer serviços de saúde.
Conclusão:

O Santé pode ajudar a Maria a melhorar sua saúde e qualidade de vida, oferecendo-lhe acesso a serviços de saúde de qualidade, de forma acessível e humanizada.


# Especificações do Projeto

Especificações do Projeto Santé 
1. Objetivo Geral:

Desenvolver um software chamado Santé que visa agregar saúde e bem-estar à vida de pessoas que, por diversas razões, não podem mais acessar um acompanhamento médico formalizado. Através de um modelo inovador e humanizado, o Santé busca ampliar o acesso à saúde de qualidade, promovendo a prevenção de doenças, o autocuidado e a qualidade de vida da população, com foco em atender às necessidades e desafios específicos da persona Maria da Silva, descrita anteriormente.

2. Público-alvo:

Pessoas em situação de vulnerabilidade social, como idosos, portadores de doenças crônicas, pessoas com deficiência e indivíduos com renda familiar baixa.
Com ênfase em atender às necessidades de mulheres idosas como a Maria da Silva, que residem sozinhas, apresentam doenças crônicas e possuem dificuldades de locomoção e acesso a serviços de saúde.
3. Funcionalidades:

Agendamento de consultas médicas online:
Sistema intuitivo e de fácil utilização, adaptado para pessoas com pouca familiaridade com tecnologia.
Integração com a agenda dos médicos parceiros, permitindo agendamento rápido e eficiente.
Possibilidade de agendar consultas com diferentes especialidades médicas.
Videoconsultas com médicos:
Plataforma segura e confiável para realização de consultas médicas online.
Atendimento por médicos qualificados e experientes em telemedicina.
Possibilidade de utilizar recursos como chat e compartilhamento de tela durante a consulta.
Orientação médica personalizada:
Envio de mensagens e conteúdos educativos personalizados para cada paciente, de acordo com suas necessidades e condições de saúde.
Orientação sobre medicamentos, exames, hábitos alimentares e estilo de vida.
Acompanhamento do progresso do paciente e ajuste do plano de tratamento conforme necessário.
Monitoramento de sinais vitais:
Integração com dispositivos vestíveis para monitoramento de pressão arterial, glicemia, frequência cardíaca e outros sinais vitais.
Geração de relatórios e alertas para o médico e o paciente, em caso de alterações significativas nos sinais vitais.
Grupos de apoio online:
Criação de grupos virtuais para que pacientes com doenças crônicas ou outras condições de saúde possam se conectar, compartilhar experiências, trocar informações e receber apoio mútuo.
Moderação por profissionais da saúde para garantir um ambiente seguro e positivo.
Acesso a informações em saúde:
Biblioteca online com artigos, vídeos e outros materiais educativos sobre diversos temas relacionados à saúde, prevenção de doenças e promoção do bem-estar.
Conteúdos selecionados e revisados por profissionais de saúde para garantir a qualidade e confiabilidade das informações.
Sistema de gamificação:
Implementação de um sistema de gamificação para incentivar o engajamento dos usuários na plataforma, através de desafios, recompensas e badges.
Personalização dos desafios de acordo com os objetivos de cada paciente.
Integração com o Sistema Único de Saúde (SUS):
Possibilidade de consultar agendamentos de exames e consultas no SUS através da plataforma Santé.
Recebimento de notificações sobre datas e horários de consultas e exames agendados no SUS.
Orientação sobre como acessar os serviços de saúde disponíveis no SUS.
4. Design e Usabilidade:

Interface amigável e intuitiva, acessível para pessoas com diferentes níveis de familiaridade com tecnologia, especialmente para idosos como a Maria da Silva.
Layout simples e organizado, com ícones e menus claros e fáceis de usar.
Conteúdos textuais em linguagem clara e objetiva, evitando termos técnicos e jargões médicos.
Disponibilidade de recursos de acessibilidade, como legendas para vídeos e alto contraste para pessoas com deficiência visual.
5. Segurança e Privacidade:

Implementação de medidas robustas de segurança para proteger os dados dos usuários, incluindo criptografia de dados, controle de acesso e firewalls.
Cumprimento rigoroso das leis de privacidade de dados, como a Lei Geral de Proteção de Dados Pessoais (LGPD).
Transparência nas políticas de privacidade, informando aos usuários como seus dados são coletados, usados e armazenados.
6. Sustentabilidade:

Modelo de negócios sustentável que garanta a viabilidade financeira do projeto a longo prazo.
Busca por parcerias com instituições públicas e privadas para ampliar o alcance do Santé e garantir a qualidade dos serviços.
Exploração de diferentes fontes de receita, como planos de assinatura, doações e parcerias com empresas


## Personas e Mapas de Empatia

> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/cdc794ce-1183-4177-b02e-aa13bb121114)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/153991098/133786be-da6f-425d-9d8d-7b5f62769f86)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/fbc1a8ec-bbf0-4caa-aa1a-c301d9b5389a)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/153991098/4f8474e3-855a-4a18-bccc-ff93c520a05c)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/53fc406a-a168-43a5-a2ff-68f624d935eb)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/153991098/135fa19d-7525-46d2-a9a9-ccbdc5606fc2)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/8bb20fdb-66a4-4cc7-9730-658ae8ee0885)
> ![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/153991098/dc81a1e7-d3a9-41e6-a523-bcdedd615fb7)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|

|Dr. João, médico ginecologista  | Quero poder agendar consultas virtuais com minhas pacientes | Para oferecer maior comodidade e flexibilidade às pacientes, especialmente aquelas com dificuldades de deslocamento ou agenda ocupada, sem comprometer a qualidade do atendimento médico. |

|Eu como Maria, mãe ocupada e preocupada com a saúde da família | Quero receber lembretes automáticos sobre exames de rotina e consultas médicas para mim e meus filhos | Para garantir que não esqueça compromissos importantes de saúde e possa manter a saúde da minha família em dia de forma conveniente.|

|Eu como Ana, aposentada com mobilidade limitada | Quero poder agendar consultas médicas e exames em casa | Para evitar deslocamentos e dificuldades de locomoção, garantindo que eu possa acessar cuidados médicos de qualidade no conforto do meu lar. |

|Eu como a equipe de suporte técnico da plataforma | Quero implementar um sistema de segurança robusto para proteger os dados confidenciais dos pacientes | Para garantir a privacidade e a segurança das informações de saúde dos usuários, construindo confiança e credibilidade na plataforma. |

|Eu como Carlos, um consultor de negócios autônomo| Eu quero informações precisas e confiáveis e especialmente no que diz respeito a questões relacionadas ao estresse e ao estilo de vida agitado que leva como empreendedor autônomo | Para poder viajar pelo mundo e ainda poder fazer algumas consultas online garantindo uma viajem sem muitas preocupações em relação a sua saúde|

|Eu como Diego, um medico | Eu quero um programa que me ajude a me organizar e me alertar dos compromissos e me mostre as informações do paciente| Para poder me preparar para minhas consultas já tendo todas as informações sobre o paciente antes mesmo dele entrar no meu consultório |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Login - Paciente e Médico | ALTA | 
|RF-002| Paciente - Perguntas ao cadastrar (condição específica / sexo / idade / dados sensíveis)  | ALTA |
|RF-003| Paciente - Vincular sintomas / sentimentos / sensações físicas e mentais a um dia do calendário  | ALTA |
|RF-004| Paciente - Lembrete de atividades (exames / consultas / alimentação ou bebida específica) | MÉDIA | 
|RF-005| Paciente/Médico - Histórico do que foi escrito | MÉDIA | 
|RF-006| Paciente - Marcação de consulta online | BAIXA | 
|RF-007| Médico - Disponibilizar horários | BAIXA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


# Projeto de Interface

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/b65f88dd-69f0-4892-a1e6-8e3258f32f82)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/5ecea551-b848-491c-ad4d-ec5992ab0fe8)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/e2be1c85-0ebf-4118-91f1-7b28167eb4d6)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/c302e9c7-ba6c-437d-8006-4dbd616912a2)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/78dd30b7-5ba3-47aa-901c-2d4fab03d14b)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/580aee93-78bd-4541-8de7-46ddedf36e49)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/45719d1d-8775-4da1-bfb3-661de3550c40)


## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/ccca2a99-0ddc-4a18-8cc6-47a52ff8e714)


## Wireframes

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/165854996/e76a32c2-6300-4c60-a361-c773f98a4146)

https://copper-meade-64.tiiny.site/ 
Wireframe feito usando a ferramenta MIRO para a tela inicial de "Santé"


# Metodologia

Utilizamos o Scrum, que é um método ágil de gerenciamento e desenvolvimento de projetos, especialmente em ambientes onde a mudança é constante e a incerteza é alta. A seguir está um resumo dos principais conceitos e práticas do Scrum que utilizamos para criar nosso projeto:

Equipe Scrum: Equipe responsável pelo desenvolvimento de um produto ou serviço. É auto-organizado e multifuncional, composto por membros com as competências necessárias para executar as tarefas do projeto.

Scrum Master: Responsável por garantir que o Time Scrum siga os princípios e práticas Scrum. Remova impedimentos ao progresso da equipe e facilite reuniões e eventos Scrum.

Backlog do Produto: Uma lista de todos os recursos, requisitos, melhorias e correções que precisam ser feitas no produto. O Product Owner define prioridades com base no valor e nas necessidades do negócio.

Sprint: Um período fixo de tempo, 3 semanas, durante o qual nosso time trabalha para entregar um incremento de produto potencialmente entregável. Cada Sprint começa com planejamento e termina com revisão e retrospectiva. Fizemos apenas 1.

Sprint Backlog: O subconjunto do Product Backlog selecionado pelo nosso time para ser entregue durante o Sprint atual. Os itens do Sprint Backlog são detalhados e estimados durante o Sprint Planning.

Reunião diária: Nosso time realizou breves reuniões diárias para sincronizar as atividades e discutir quaisquer impedimentos que possam estar impedindo o progresso. Cada membro da equipe responde a três perguntas: O que fiz desde a última reunião? O que preciso fazer antes da próxima reunião? Quais são as barreiras?

Revisão do Sprint: Uma reunião realizada no final de cada Sprint para revisar o incremento do produto concluído e obter feedback das partes interessadas. O proprietário do produto decide se aceita o incremento.


## Divisão de Papéis

- Matheus Dias (Criação do Figma + preenchimento Miro)
- Lucas Silva (Criação do Figma + preenchimento Miro)
- Eduardo Maia (Preenchimento Miro)
- Julia Rocha (Divisão de papéis + Criação do Figma + preenchimento Miro)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com/](https://miro.com/app/board/uXjVNiWnpEA=/) | 
|Repositório de código | GitHub | [https://github.com/](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/tree/master) | 
|Hospedagem do site | Heroku |  https://herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | [https://figma.com/](https://www.figma.com/file/l2yzTT7R4zfQhNm8qDARVx/Figma-basics?type=design&node-id=1669-162202&mode=design&t=DwYBOZo5y8hx5sws-0) | 


## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

Software para Acompanhamento Constante da Saúde - O objetivo deste projeto é criar um software que permita o acompanhamento constante da saúde dos usuários, fornecendo monitoramento e relatórios de dados de saúde em tempo real. Abaixo, apresento um exemplo de User Flow para o sistema, desde o registro do usuário até o monitoramento dos dados de saúde.

## Tecnologias Utilizadas

Tecnologias Utilizadas
Editor de Código: Visual Studio Code
Linguagens de Programação: HTML, CSS, JavaScript
Ferramenta de Organização e Design: Figma

![Diagrama de fluxo](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g7-saude-e-bem-estar/assets/95948984/466a4f11-eaef-4c48-b559-c489a5da8835)

Estrutura de Arquivos
index.html: Página inicial com opções de login e registro.
Cadastro_Med.html: Formulário de registro de usuário - profissional.
cadastro_Paciente.html: Formulário de registro de usuário - paciente.
calendario_sin.html: calendário para registro de sintomas.
calendario.html: calendário para registro de sintomas.
perguntasAoCadastrar.html: registro de histórico de saúde do paciente.

Estrutura de Código
HTML: Estrutura das páginas web.
CSS: Estilos e design das páginas.
JavaScript: Lógica do lado do cliente para interação com o usuário e manipulação de dados.
Organização do Time
Para a organização do time, usamos o Figma para definir as atividades de cada membro e os prazos das Sprints, garantindo que todos os aspectos do projeto sejam cobertos e que os prazos sejam cumpridos.


## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
