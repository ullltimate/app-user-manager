## App-user-manager
App-user-manager - SPA приложение с клиент-серверной архитектурой, позволяющее пользователям зарегистрироваться и аутентифицироваться. Неаутентифицированные пользователи не имеют доступа к управлению пользователями. Аутентифицированные пользователи имеют доступ к управлению всеми пользователями.              

Пользователь может удалить или заблокировать себя(сразу будет разлогинен) и других. Если кто-то другой блокирует или удаляет пользователя, то при любом следующем запросе пользователь переправляется на страницу логина.  

При регистрации есть возможность использовать любой пароль, даже из одного символа.    

Заблокированный пользователь не может войти, удаленный может заново зарегистрироваться.         

<img src="https://i.ibb.co/nnssYpF/Screenshot-from-2023-08-09-02-10-58.png" alt="">

### Стек технологий        

TypeScript, React, React Router, React Bootstrap, Node.js, Express, MongoDB, Mongoose

### Demo           

Frontend: https://develop--sensational-banoffee-fa0248.netlify.app/user/64d2c043d5e76b3f2ce65ae3                       
Backend: https://app-user-manager-production.up.railway.app/

### Запуск проекта локально

`git clone https://github.com/ullltimate/app-user-manager.git`         

#### Client

`cd app-user-manager/client`        
`npm install`      
`npm run dev`     

#### Server

`cd app-user-manager/server`        
`npm install`      
`npm run dev` or `npm run start`             


