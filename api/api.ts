// server.ts

import { Application, Router } from "https://deno.land/x/bun/mod.ts";
import { Elysia } from "https://deno.land/x/elysia/mod.ts";
import db from "./db_config.ts"; // Importa la configuración de la base de datos

const app = new Application();
const router = new Router();

const elysia = new Elysia(db);

// Definir rutas y controladores
router.get("/usuarios", async (ctx) => {
  const usuarios = await elysia.find("usuarios"); // "usuarios" es el nombre de tu tabla
  ctx.response.body = usuarios;
});

router.get("/usuarios/:id", async (ctx) => {
  const usuario = await elysia.findOneById("usuarios", ctx.params.id);
  if (!usuario) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Usuario no encontrado" };
    return;
  }
  ctx.response.body = usuario;
});

// Agregar rutas al middleware de Bun
app.use("/api", router.routes());
app.use("/api", router.allowedMethods());

const port = 8000;
console.log(`Servidor corriendo en http://localhost:${port}`);
await app.listen({ port });
