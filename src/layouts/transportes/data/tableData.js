/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

// Images

export default function data() {
  return {
    columns: [
      { Header: "identificador", accessor: "identificador", align: "center" },
      { Header: "cliente", accessor: "cliente", align: "left" },
      { Header: "motorista", accessor: "motorista", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "data", accessor: "data", align: "center" },
      { Header: "ações", accessor: "acoes", align: "center" },
    ],

    rows: [
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="finalizado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="finalizado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="finalizado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="em andamento" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="em espera" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
      {
        identificador: 1,
        cliente: "Cliente teste",
        motorista: "Motorista teste",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="cancelado" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/editar-transporte" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avisos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/incidentes" className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/avaliacoes" className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/delete" className="exportLinkInternal">
              <MDButton variant="gradient" color="error">
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            </Link>
          </>
        ),
      },
    ],
  };
}
