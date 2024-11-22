# Final Project made in the Full-Stack +praTi Course. (English)
The goal of the project was to develop an application that would bring together most of the information related to the user's health, in order to organize it and help the user to know the status of their health and health care routine. The main functionalities to be developed were:
- Weight check
- List of medical appointments
- List of medications, including their name, frequency and dose
- Blood pressure check
- Vaccines taken

With this information, it is possible to track the user's health conditions during the period in which they use the application. Helping to identify diseases or find their causes faster.

## Salutia

We identified the problem of data organization in the health area and developed a software to mitigate it. In this regard, Salutia is an app with functions for adding records about the user's health data, which
consists of a web application with basic CRUD operation.

### Vision
An innovative platform focused on giving patients full control over their health data.
Salutia offers an application that will help with various data collection processes, such as:
- Storage of exams, appointments and vaccinations.
- Control and management of medications.
- Easy and secure access to health data.

### Values:
- Security
- Privacy
- Accessibility

### Future:
- Making health management more integrated and digitalized, with a bureaucracy-free and easy-to-access system.

## Technologies used.
### Front-end
##### Languages ​​and Libraries:
- HTML
- CSS
- JavaScript
- React
	- Vite to start the project
	- Axios for requests
	- React Router for routes
	- Styled components in some parts

##### Software
- IDE: Visual Studio Code

### Back-End
##### Languages ​​and Frameworks
- Java 17
- Spring Framework
	- Spring Boot
	- Lombok to generate Getters, Setters and Constructors
	- Spring Security to implement authentication with JWT Token (JSON Web Token)
	- Spring Validation for more robust data validation and creation of custom validations
	- Spring Start WEB for communication between Front and Back-end

##### Software
- IDE: IntelliJ
- Bruno and Postman to test endpoints (requests)

### Database
##### Languages
- MySQL

##### Software
- MySQL Workbench to model the database
- Docker to containerize the database

# Deploy locally
- Clone the repository
```
git clone https://github.com/Recr/maisPraTi-project.git
```
- Open the `back-end` folder with your preferred IDE.
```
cd .\back-end\
```
- Run Docker Engine on your computer
- Inside the `back-end` folder, go to the `docker` folder
```
cd.\back-end\docker\
```
- Run the Database container
```
docker-compose up
```
- In the IDE, run an application using the `HealthCardApplication` class in the `com.healthcard.app` folder.:
```
cd.\back-end\src\main\java\com\healthcard\app\
```
- Once done, run VS Code and open the `front-end` folder
- Download the dependencies with the command:
```
npm install
```
- Run the project with the command
```
npm run dev
```
- If the page does not open automatically, enter the link that appears in the terminal in your browser. Possibly `localhost:5173`.

The participants of this project:
- [Adrianne Ayumi Izu](https://github.com/ayuizu)
- [Alexsandro Ferreira da Silva](https://github.com/alexfsxy)
- [Eliel da Silva](https://github.com/Recr)
- [Guilherme Rodrigues Cabreira](https://github.com/GuilhermeRCabreira)
- [Yago da Silva Ferreira](https://github.com/YagoFerreira00)
- [Daniel Schopf](https://github.com/DanielSchopf)

# Projeto Final realizado no Curso Full-Stack +praTi. (Portuguese)
O objetivo do projeto foi desenvolver um aplicativo que convergisse a maioria das informações relacionadas à saúde do usuário, de forma a organizá-las e ajudar o usuário a conhecer a situação de sua saúde e rotina de cuidados com a saúde. As principais funcionalidades a serem desenvolvidas eram:
- Verificação de peso
- Lista de consultas médicas
- Lista de medicamentos, incluindo seu nome, periodicidade e dose
- Verificação de pressão arterial
- Vacinas tomadas

Com essas informações, é possível rastrear as condições de saúde do usuário no período em que ele utiliza o aplicativo. Ajudando a perceber doenças ou encontrar as causas delas mais rapidamente.


## Salutia 
	
Indentificamos o problema da organização de dados na área da saúde e desenvolvemos um software para mitigá-lo. Nessa questão Salutia é um app com funções de adicionar registros sobre dados de saúde do usuário, que 
consiste em uma aplicação web com operação CRUD básicas.

### Visão
Uma plataforma inovadora focada em dar ao paciente o controle total de seus dados de saúde.
Salutia oferece um aplicativo que vai ajudar em diversos processos na coleta de dados, como:
- Armazenamento de exames, consultas e vacinas.
- Controle e gerenciamento de medicamentos.
- Acesso fácil e seguro aos dados de saúde.

### Valores:
- Segurança
- Privacidade
- Acessibilidade

### Futuro:
- Tomar a gestão de saúde mais integrada e digitalizada, com um sistema sem burocracia e de fácil acesso.
 
## Tecnologias usadas.
### Front-End
##### Linguagens e Bibliotecas:
- HTML
- CSS 
- JavaScript
- React
	- Vite para inicialização de projeto
 	- Axios para requisições
  	- React Router para rotas
  	- Styled Components em alguns componentes

##### Softwares
- IDE: Visual Studio Code



### Back-End
##### Linguagens e Frameworks
- Java 17
- Spring Framework
	- Spring Boot
 	- Lombok para geração de Getters, Setters e Construtores
	- Spring Security para implementação de autenticação com Token JWT (JSON Web Token)
 	- Spring Validation para validação de dados mais robusta e criação de validações customizadas
	- Spring Start WEB para a comunicação entre Front e Back
   
##### Software 
- IDE: IntelliJ
- Bruno e Postman para testar endpoints (requisições)

### Banco de Dados
##### Linguagens
- MySQL

##### Softwares
- MySQL Workbench para fazer a modelagem do banco
- Docker para conteinerização do banco

# Deploy Local
- Clone o repositório
```
git clone https://github.com/Recr/maisPraTi-project.git
```
- Abra a pasta `back-end` com sua IDE de preferência.
```
cd .\back-end\
```
- Execute o Docker Engine em seu computador
- Dentro da pasta `back-end`, vá para a pasta `docker`
```
cd .\back-end\docker\
```
- Suba o container do Banco de Dados
```
docker-compose up
```
- Na IDE, execute a aplicação pela classe `HealthCardApplication` na pasta `com.healthcard.app`.:
```
cd .\back-end\src\main\java\com\healthcard\app\
```
- Feito isso, execute o VS Code e abra a pasta `front-end`
- Baixe as dependências com o comando:
```
npm install
```
- Execute o projeto com o comando
```
npm run dev
```
- Se a página não abrir automaticamente, coloque no navegador o link que aparecer no terminal. Possivelmente `localhost:5173`.

Os participantes deste projeto:
- [Adrianne Ayumi Izu](https://github.com/ayuizu)
- [Alexsandro Ferreira da Silva](https://github.com/alexfsxy) 
- [Eliel da Silva](https://github.com/Recr)
- [Guilherme Rodrigues Cabreira](https://github.com/GuilhermeRCabreira)
- [Yago da Silva Ferreira](https://github.com/YagoFerreira00)
- [Daniel Schopf](https://github.com/DanielSchopf)
