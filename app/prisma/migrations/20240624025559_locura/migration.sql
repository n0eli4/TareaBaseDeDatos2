/*
  Warnings:

  - Added the required column `usuario_id` to the `Contacto` table without a default value. This is not possible if the table is not empty.
  - Made the column `nombre` on table `Contacto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contacto" ADD COLUMN     "usuario_id" INTEGER NOT NULL,
ALTER COLUMN "nombre" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Contacto" ADD CONSTRAINT "Contacto_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
