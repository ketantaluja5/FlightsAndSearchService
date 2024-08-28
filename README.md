# Welcome to flight service

## Project Setup

- clone the project on your local
- Execute npm install on the same path as of your root directory of teh downloaded project
- Create a .env file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
=======
- clone the project on your local
- Execute npm install on the same path as of your root directory of teh downloaded project
- Create a .env file in the root directory and add the following environment variable
  - PORT=3000
- Inside the src/config folder create a new file config.json and then add the following piece of json

>>>>>>> 8aa1d50d2a48e67f6b55955ecba6cef7f1e8285d
{
"development": {
"username": <YOUR_DB_LOGIN_NAME>,
"password": <YOUR_DB_PASSWORD>,
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute
=======
>>>>>>> 8aa1d50d2a48e67f6b55955ecba6cef7f1e8285d
