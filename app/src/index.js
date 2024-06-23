import { Elysia } from "elysia";
import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const app = new Elysia();

//async
app.get('/', async()=>{
    return {message: "El servidor esta abierto"};
});







app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");
