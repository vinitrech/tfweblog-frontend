/**
  =========================================================
  * Material Dashboard 2 React - v2.1.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/material-dashboard-react
  * Copyright 2022 Creative Tim (https://www.creative-tim.com)

  Coded by www.creative-tim.com

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  */

/** 
    All of the routes for the Material Dashboard 2 React are added here,
    You can add a new route, customize the routes and delete the routes here.

    Once you add a new route on this file it will be visible automatically on
    the Sidenav.

    For adding a new route you can follow the existing routes in the routes array.
    1. The `type` key with the `collapse` value is used for a route.
    2. The `type` key with the `title` value is used for a title inside the Sidenav. 
    3. The `type` key with the `divider` value is used for a divider between Sidenav items.
    4. The `name` key is used for the name of the route on the Sidenav.
    5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
    6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
    7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
    inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
    8. The `route` key is used to store the route location which is used for the react router.
    9. The `href` key is used to store the external links location.
    10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
    10. The `component` key is used to store the component of its route.
  */

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Transportes from "layouts/transportes";
import TransportesCreate from "layouts/transportes/create";
import TransportesEdit from "layouts/transportes/edit";
import Documentos from "layouts/documentos";
import DocumentosEdit from "layouts/documentos/edit";
import Avisos from "layouts/avisos";
import AvisosEdit from "layouts/avisos/edit";
import AvisosView from "layouts/avisos/view";
import Incidentes from "layouts/incidentes";
import IncidentesEdit from "layouts/incidentes/edit";
import IncidentesView from "layouts/incidentes/view";
import Avaliacoes from "layouts/avaliacoes";
import AvaliacoesEdit from "layouts/avaliacoes/edit";
import AvaliacoesView from "layouts/avaliacoes/view";
import Categorias from "layouts/categorias";
import CategoriasCreate from "layouts/categorias/create";
import CategoriasEdit from "layouts/categorias/edit";
import Clientes from "layouts/clientes";
import ClientesCreate from "layouts/clientes/create";
import ClientesEdit from "layouts/clientes/edit";
import Veiculos from "layouts/veiculos";
import VeiculosCreate from "layouts/veiculos/create";
import VeiculosEdit from "layouts/veiculos/edit";
import Usuarios from "layouts/usuarios";
import UsuariosCreate from "layouts/usuarios/create";
import UsuariosEdit from "layouts/usuarios/edit";
import Login from "layouts/authentication/sign-in";
import Cadastro from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import { RequireAuth, RequireNoAuth } from "utils/requireAuth";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    show: true,
    allowedRoles: ["administrador", "supervisor", "motorista"],
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Transportes",
    key: "transportes",
    show: true,
    allowedRoles: ["administrador", "supervisor", "motorista"],
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transportes",
    component: (
      <RequireAuth>
        <Transportes />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Transporte",
    key: "criar-transporte",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/criar-transporte",
    component: (
      <RequireAuth>
        <TransportesCreate allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Transporte",
    key: "editar-transporte",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:id/editar-transporte",
    component: (
      <RequireAuth>
        <TransportesEdit allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Documentos",
    key: "documentos",
    show: false,
    allowedRoles: ["administrador"],
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transportes/:idTransporte/documentos",
    component: (
      <RequireAuth>
        <Documentos />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Documento",
    key: "criar-documento",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/documentos/criar-documento",
    component: (
      <RequireAuth>
        <DocumentosEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Documento",
    key: "editar-documento",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/documentos/:id/editar-documento",
    component: (
      <RequireAuth>
        <DocumentosEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Avisos",
    key: "avisos",
    show: false,
    allowedRoles: ["administrador"],
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transportes/:idTransporte/avisos",
    component: (
      <RequireAuth>
        <Avisos />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Aviso",
    key: "criar-aviso",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avisos/criar-aviso",
    component: (
      <RequireAuth>
        <AvisosEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Aviso",
    key: "editar-aviso",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avisos/:id/editar-aviso",
    component: (
      <RequireAuth>
        <AvisosEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Visualizar Aviso",
    key: "visualizar-aviso",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avisos/:id/visualizar-aviso",
    component: (
      <RequireAuth>
        <AvisosView />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Incidentes",
    key: "incidentes",
    show: false,
    allowedRoles: ["administrador"],
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transportes/:idTransporte/incidentes",
    component: (
      <RequireAuth>
        <Incidentes />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Incidente",
    key: "criar-incidente",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/incidentes/criar-incidente",
    component: (
      <RequireAuth>
        <IncidentesEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Incidente",
    key: "editar-incidente",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/incidentes/:id/editar-incidente",
    component: (
      <RequireAuth>
        <IncidentesEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Visualizar Incidente",
    key: "visualizar-incidente",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/incidentes/:id/visualizar-incidente",
    component: (
      <RequireAuth>
        <IncidentesView />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Avaliações",
    key: "avaliacoes",
    show: false,
    allowedRoles: ["administrador"],
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transportes/:idTransporte/avaliacoes",
    component: (
      <RequireAuth>
        <Avaliacoes />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Avaliação",
    key: "criar-avaliacao",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avaliacoes/criar-avaliacao",
    component: (
      <RequireAuth>
        <AvaliacoesEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Avaliação",
    key: "editar-avaliacao",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avaliacoes/:id/editar-avaliacao",
    component: (
      <RequireAuth>
        <AvaliacoesEdit />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Visualizar Avaliação",
    key: "visualizar-avaliacao",
    show: false,
    allowedRoles: ["administrador"],
    route: "/transportes/:idTransporte/avaliacoes/:id/visualizar-avaliacao",
    component: (
      <RequireAuth>
        <AvaliacoesView />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Categorias",
    key: "categorias",
    show: true,
    allowedRoles: ["administrador", "supervisor"],
    icon: <Icon fontSize="small">list</Icon>,
    route: "/categorias",
    component: (
      <RequireAuth>
        <Categorias allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Categoria",
    key: "criar-categoria",
    show: false,
    allowedRoles: ["administrador", "supervisor"],
    route: "/categorias/criar-categoria",
    component: (
      <RequireAuth>
        <CategoriasCreate allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Categoria",
    key: "editar-categoria",
    show: false,
    allowedRoles: ["administrador", "supervisor"],
    route: "/categorias/:id/editar-categoria",
    component: (
      <RequireAuth>
        <CategoriasEdit allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Clientes",
    key: "clientes",
    show: true,
    allowedRoles: ["administrador", "supervisor"],
    icon: <Icon fontSize="small">group</Icon>,
    route: "/clientes",
    component: (
      <RequireAuth>
        <Clientes allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Cliente",
    key: "criar-cliente",
    show: false,
    allowedRoles: ["administrador", "supervisor"],
    route: "/clientes/criar-cliente",
    component: (
      <RequireAuth>
        <ClientesCreate allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Cliente",
    key: "editar-cliente",
    show: false,
    allowedRoles: ["administrador", "supervisor"],
    route: "/clientes/:id/editar-cliente",
    component: (
      <RequireAuth>
        <ClientesEdit allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Veículos",
    key: "veiculos",
    show: true,
    allowedRoles: ["administrador", "supervisor"],
    icon: <Icon fontSize="small">garage</Icon>,
    route: "/veiculos",
    component: (
      <RequireAuth>
        <Veiculos allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Veículos",
    key: "criar-veiculo",
    show: false,
    allowedRoles: ["administrador"],
    route: "/veiculos/criar-veiculo",
    component: (
      <RequireAuth>
        <VeiculosCreate allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Veículo",
    key: "editar-veiculo",
    show: false,
    allowedRoles: ["administrador"],
    route: "/veiculos/:id/editar-veiculo",
    component: (
      <RequireAuth>
        <VeiculosEdit allowedRoles={["administrador", "supervisor"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Usuários",
    key: "usuarios",
    show: true,
    allowedRoles: ["administrador"],
    icon: <Icon fontSize="small">account_circle</Icon>,
    route: "/usuarios",
    component: (
      <RequireAuth>
        <Usuarios allowedRoles={["administrador"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Criar Usuário",
    key: "criar-usuario",
    show: false,
    allowedRoles: ["administrador"],
    route: "/usuarios/criar-usuario",
    component: (
      <RequireAuth>
        <UsuariosCreate allowedRoles={["administrador"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Editar Usuário",
    key: "editar-usuario",
    show: false,
    allowedRoles: ["administrador"],
    route: "/usuarios/:id/editar-usuario",
    component: (
      <RequireAuth>
        <UsuariosEdit allowedRoles={["administrador"]} />
      </RequireAuth>
    ),
  },
  {
    type: "collapse",
    name: "Login",
    key: "login",
    show: false,
    route: "/login",
    component: (
      <RequireNoAuth>
        <Login />
      </RequireNoAuth>
    ),
  },
  {
    type: "collapse",
    name: "Cadastro",
    key: "cadastro",
    show: false,
    route: "/cadastro",
    component: (
      <RequireNoAuth>
        <Cadastro />
      </RequireNoAuth>
    ),
  },
];

export default routes;
