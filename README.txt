Teste Técnico Blue Rise
API de Agendamento Médico

API simples de agendamento médico, construída com Node.js, Express, MongoDB e Mongoose para gerenciar pacientes, médicos e consultas.

Pré-Requisitos:
- Node.js instalado
- MongoDB (local ou Atlas)
- Cliente HTTP para testes (Foi usado o Postman)

Instalação:
1. Clonar projeto:
   git clone <url-do-repositorio>
   cd nome-do-projeto

2. Instalar as dependências:
   npm install

3. Criar um arquivo .env na raiz. Aqui está o acesso que utilizei como são apenas testes não vejo problema. O mongo está com acesso a todos os IPs:
   MONGO_URI=mongodb+srv://Nicolas:TesteTecnico!@clusterteste.pjxiuam.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTeste
   PORT=3000

4. Rodar o servidor:
   npm run dev
   ou
   npm start

Endpoints:

Pacientes
---------
POST   /pacientes         - Criar paciente (nome, email, cpf)
GET    /pacientes         - Listar todos os pacientes
GET    /pacientes/:id     - Buscar paciente por ID
PUT    /pacientes/:id     - Atualizar paciente
DELETE /pacientes/:id     - Remover paciente

Médicos
-------
POST   /medicos           - Criar médico (nome, especialidade, crm)
GET    /medicos           - Listar todos os médicos
GET    /medicos/:id       - Buscar médico por ID
PUT    /medicos/:id       - Atualizar médico
DELETE /medicos/:id       - Remover médico

Consultas
---------
POST   /consultas                     - Criar consulta (paciente, medico, dataHora)
GET    /consultas                     - Listar todas as consultas
GET    /consultas?data=YYYY-MM-DD     - Listar consultas de uma data específica
GET    /consultas?medico=<id>         - Listar consultas de um médico
GET    /consultas?medico=<id>&data=YYYY-MM-DD - Filtrar por médico e data
DELETE /consultas/:id                 - Cancelar consulta

Exemplos de JSON
----------------
Criar paciente:
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678901"
}

Criar médico:
{
  "nome": "Dra. Ana",
  "especialidade": "Cardiologia",
  "crm": "12345"
}

Criar consulta:
{
  "paciente": "68abe2ff46000c29269f5d8d",
  "medico": "68ac7e9552158aeb2a3c3f7c",
  "dataHora": "2025-08-30T13:00:00.000Z"
}

Testes
--------
- Para POST e PUT, enviar o corpo no formato JSON.
- Para filtrar consultas:
  - /consultas?data=YYYY-MM-DD
  - /consultas?medico=<id>
  - /consultas?medico=<id>&data=YYYY-MM-DD
