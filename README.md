# Event Management Platform // React + Vite , GraphQl , AWS //
Simplified event management platform that allows users to create, view, and manage events.

## Demo

https://arzoyan.github.io/eventsapp/


## Run Locally

Clone the project

```bash
  https://github.com/Arzoyan/eventsapp.git
```

Go to the project directory

```bash
  cd eventsapp
```

Install dependencies

```bash
  npm install 
```

Start the project

```bash
  npm run dev
```

It will ran http://localhost:5173/


## Installation

Install eventsapp  with npm

Clone project

```bash
  git clone https://github.com/Arzoyan/eventsapp.git
```

redirect to project folder 
```bash
  cd eventsapp
```
install project 
```bash
  npm install
```

## setup of AWS services


```bash
npm install -g @aws-amplify/cli
```
in bash terminal, dyrectory wil be root, (/eventsapp) and run this command
- amplify configure
- login your aws account and copy Access key 
- in terminal past Access key 
- in your AWS account copy user Secret access key
- in terminal past it 


## Tech Stack


**Technology Choice:**
- React Vite App
- Node js v20
- react-redux
- reduxjs/toolkit  
- react-router-dom v6 
- aws-cdk
- aws-amplify
- amplify
- jwt-decode

**Server choise:**
- DynamoDb
- AWS AppSync
- AWS Lambda functions
- AWS Cognito

**UI kit**
- Matreial Ui


## Deployment


before deploy run this commands 

```bash
  npm run build
```
after success build 
run this command and check everything works as expected
```bash
  npm run preview
```
in terminal it will show local host where you can check. 

To deploy this project run

```bash
  npm run deploy
```


## API Reference


#### Get all Events

```http
  GET /api/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  PUT /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to 
| `eventName`      | `string` | **Not Required**. send only updated field|

```http
  Delete /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to 



## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruben-arzoyan/)

