# node-express
A simple Node.js Express application.

## Installation
1. initialize a new Node.js project:
   ```bash
   npm init -y
   ```

2. Install Dependencies:
   ```bash
   npm install express
   npm install -D nodemon 
   ```


folder structure:
```
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── core/
│   │   └── app.js
│   ├── routes/
│   │   └── auth.route.js
│   │   └── index.route.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── utils/
│   │   └── services/
│   │   └── wrappers/
│   └── index.js
│   └── config.js
├── .env
├── .gitignore
├── package.json
└── README.md