import { Router } from "express";
import { CriaEmpresaController } from "./modules/empresa/criaEmpresa/CriaEmpresaController";
import { BuscaEmpresaController } from "./modules/empresa/buscaEmpresa/BuscaEmpresaController";
import { EditaEmpresaController } from "./modules/empresa/editaEmpresa/EditaEmpresaController";
import { DeletaEmpresaController } from "./modules/empresa/deletaEmpresa/DeletaEmpresaController";
import { CriaClienteController } from "./modules/cliente/criaCliente/CriaClienteController";
import { BuscaClienteController } from "./modules/cliente/buscaCliente/BuscaClienteController";
import { EditaClienteController } from "./modules/cliente/editaCliente/EditaClienteController";
import { DeletaClienteController } from "./modules/cliente/deletaCliente/DeletaClienteController";
import { BuscaEmpresaIDController } from "./modules/empresa/buscaEmpresaID/BuscaEmpresaIDController";

const routes = Router()

const criaEmpresaController = new CriaEmpresaController()
const buscaEmpresaController = new BuscaEmpresaController()
const buscaEmpresaIDController = new BuscaEmpresaIDController()
const editaEmpresaController = new EditaEmpresaController()
const deletaEmpresaController = new DeletaEmpresaController()

routes.post('/empresa/criar', criaEmpresaController.handle)
routes.get('/empresa/buscar', buscaEmpresaController.handle)
routes.get('/empresa/buscar/:id', buscaEmpresaIDController.handle)
routes.put('/empresa/editar/:id', editaEmpresaController.handle)
routes.delete('/empresa/deletar/:id', deletaEmpresaController.handle)

const criaClienteController = new CriaClienteController()
const buscaClienteController = new BuscaClienteController()
const editaClienteController = new EditaClienteController()
const deletaClienteController = new DeletaClienteController()

routes.post('/cliente/criar', criaClienteController.handle)
routes.get('/cliente/buscar', buscaClienteController.handle)
routes.put('/cliente/editar/:id', editaClienteController.handle)
routes.delete('/cliente/deletar/:id', deletaClienteController.handle)

export { routes }