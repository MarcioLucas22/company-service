/*
  Warnings:

  - You are about to drop the column `fk_idEmpresa` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `fk_idCliente` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `fk_idEmpresa` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `fk_idCliente` on the `endereco` table. All the data in the column will be lost.
  - You are about to drop the column `fk_idEmpresa` on the `endereco` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_fk_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_fk_idCliente_fkey";

-- DropForeignKey
ALTER TABLE "contato" DROP CONSTRAINT "contato_fk_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_fk_idCliente_fkey";

-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_fk_idEmpresa_fkey";

-- DropIndex
DROP INDEX "contato_fk_idCliente_key";

-- DropIndex
DROP INDEX "contato_fk_idEmpresa_key";

-- DropIndex
DROP INDEX "endereco_fk_idCliente_key";

-- DropIndex
DROP INDEX "endereco_fk_idEmpresa_key";

-- AlterTable
ALTER TABLE "cliente" DROP COLUMN "fk_idEmpresa",
ADD COLUMN     "contatoId" INTEGER,
ADD COLUMN     "empresaId" INTEGER,
ADD COLUMN     "enderecoId" INTEGER;

-- AlterTable
ALTER TABLE "contato" DROP COLUMN "fk_idCliente",
DROP COLUMN "fk_idEmpresa";

-- AlterTable
ALTER TABLE "empresa" ADD COLUMN     "contatoId" INTEGER,
ADD COLUMN     "enderecoId" INTEGER;

-- AlterTable
ALTER TABLE "endereco" DROP COLUMN "fk_idCliente",
DROP COLUMN "fk_idEmpresa";

-- AddForeignKey
ALTER TABLE "empresa" ADD CONSTRAINT "empresa_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresa" ADD CONSTRAINT "empresa_contatoId_fkey" FOREIGN KEY ("contatoId") REFERENCES "contato"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_contatoId_fkey" FOREIGN KEY ("contatoId") REFERENCES "contato"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
