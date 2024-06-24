import { Elysia } from "elysia";
import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const app = new Elysia();

app.use(json());

//async
app.get('/', async()=>{
    return {message: "El servidor esta abierto"};
});

// Endpoint para sacar la informacion de un correo
app.get('/api/informacion/:correo', async (req, res) => {
    const { correo } = req.params;

    try {
        const usuario = await prisma.usuario.findUnique({
            where: {
                direccion_correo: correo,
            },
            select: {
                nombre: true,
                direccion_correo: true,
                descripcion: true,
            },
        });

        if (!usuario) {
            return res.status(404).json({ estado: 404, mensaje: 'Usuario con correo ${correo} no encontrado'});
        }

        return res.status(200).json({
            estado: 200,
            nombre: usuario.nombre,
            correo: usuario.direccion_correo,
            descripcion: usuario.descripcion,
        });
    } catch (error) {
        console.error('Error al obtener informacion del usuario:', error);
        return res.status(500).json({ estado: 500, mensaje: 'Error del serviodor' });
    }
});



// Endpoint para marcar un correo como favorito
app.post('/api/marcarcorreo', async (req, res) => {
    const { correo, clave, id_correo_favorito } = req.body;
    try {
      // Implementa la lógica para marcar el correo como favorito según tus necesidades
      res.json({ estado: 200, mensaje: 'Se realizó la petición correctamente' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ estado: 400, mensaje: 'Ha existido un error al realizar la petición' });
    }
  });
  


  // Endpoint para desmarcar un correo como favorito
  app.delete('/api/desmarcarcorreo', async (req, res) => {
    const { correo, clave, id_correo_favorito } = req.body;
    try {
      // Implementa la lógica para desmarcar el correo como favorito según tus necesidades
      res.json({ estado: 200, mensaje: 'Se realizó la petición correctamente' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ estado: 400, mensaje: 'Ha existido un error al realizar la petición' });
    }
  });



// Endpoint para bloquear un usuario
app.post('/api/bloquear', async (req, res) => {
    const { correo, clave, correo_bloquear } = req.body;
    try {
      // Implementa la lógica para bloquear al usuario según tus necesidades
      res.json({ estado: 200, mensaje: 'Se realizó la petición correctamente' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ estado: 400, mensaje: 'Ha existido un error al realizar la petición' });
    }
  });



// Endpoint para registrar un usuario
app.post('/api/registrar', async (req, res) => {
    const { nombre, direccion_correo, clave, descripcion } = req.body;
    try {
      const newUser = await prisma.usuario.create({
        data: {
          nombre,
          direccion_correo,
          clave,
          descripcion,
        },
      });
      res.json({ estado: 200, mensaje: 'Se realizó la petición correctamente' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ estado: 400, mensaje: 'Ha existido un error al realizar la petición' });
    }
  });


app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");
