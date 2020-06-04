import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333);



//Resquest Param: parâmetros que vem na própria rota que identificam um recurso 
//Query Param: parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: parâmetros para criação/atualização


// const users =[
//     'Francelio',
//     'Jackson',
//     'Junior',
//     'Marcos',
//     'Julio'
// ];

// app.get('/users',(resquest,response) => {
//     const search = String(resquest.query.search);
//     console.log(search);
    
//     const filteredUserd = search ? users.filter(user=> user.includes(search)) : users; 

//     return response.json(filteredUserd);
// });


// app.get('/users/:id',(resquest,response) => {
//     console.log('Listar usuário');

//     const id =  Number(resquest.params.id);

//     const user = users[id];
//     return response.json(user);
// });


// app.post('/users',(resquest,response) => {
//    const data = resquest.body;

//     const user = {
//         name:data.nome,
//         email:data.email
//     };
   

//     return response.json(user);
// });
