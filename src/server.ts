import express, { request, response } from 'express';
import { createCourse } from './routes';
//Devemos importar os tipos da biblioteca utilizada, neste caso usamos o yarn:
//      terminal: yarn add @types/express -D
const app = express();

// NodeJS não reconhece as dependencias do typescript por padrão
// para isso devemos instalar as dependencias do typescript
//      terminal: yarn add typescript -D
// após instalada a dependencia precisamos inicializar o typescript
//      terminal: yarn tsc --init
// agora temos que "transformar" nosso arquivo .ts e um arquivo .js que possa ser reconhecido pelo node
// o comando: yarn tsc, faz essa transformação, mas antes disso presisamos descomentar o código "outDir"
// que está dentro de tsconfig.json, para que possamos mudar o local de criação dos arquivos .js criados 
// o trecho ficará desta forma: "outDir": "./dist", 
// criando uma nova pasta onde os arquivos ficarão
app.get('/',createCourse)

app.listen(3333);