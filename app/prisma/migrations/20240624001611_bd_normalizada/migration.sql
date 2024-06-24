/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Userpro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Userpro";

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "direccion_correo" TEXT NOT NULL,
    "descripcion" TEXT,
    "nombre" TEXT,
    "clave" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Correo" (
    "correo_id" SERIAL NOT NULL,
    "remitente_id" INTEGER NOT NULL,
    "destinatario_id" INTEGER NOT NULL,
    "asunto" TEXT,
    "cuerpo" TEXT,
    "es_favorito" BOOLEAN,

    CONSTRAINT "Correo_pkey" PRIMARY KEY ("correo_id")
);

-- CreateTable
CREATE TABLE "Direccion_Favorita" (
    "id_direccion" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "Direccion_Favorita_pkey" PRIMARY KEY ("id_direccion")
);

-- CreateTable
CREATE TABLE "Contacto" (
    "id" SERIAL NOT NULL,
    "direccion_correo" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Correo_Bloqueado" (
    "correo_bloqueado_id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "Correo_Bloqueado_pkey" PRIMARY KEY ("correo_bloqueado_id")
);

-- AddForeignKey
ALTER TABLE "Correo" ADD CONSTRAINT "Correo_remitente_id_fkey" FOREIGN KEY ("remitente_id") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Correo" ADD CONSTRAINT "Correo_destinatario_id_fkey" FOREIGN KEY ("destinatario_id") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion_Favorita" ADD CONSTRAINT "Direccion_Favorita_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Correo_Bloqueado" ADD CONSTRAINT "Correo_Bloqueado_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
