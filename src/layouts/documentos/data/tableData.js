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
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

// Images

export default function data() {
  return {
    columns: [
      { Header: "identificador", accessor: "identificador", align: "center" },
      { Header: "título", accessor: "titulo", align: "center" },
      { Header: "data", accessor: "data", align: "center" },
      { Header: "ações", accessor: "acoes", align: "center" },
    ],

    rows: [
      {
        identificador: 1,
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
        titulo: "Documento teste",
        data: "20/04/2022",
        acoes: (
          <>
            <Link to="/transportes/1/documentos/1/editar-documento" className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  upload
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos" className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  download
                </Icon>
              </MDButton>
            </Link>
            <Link to="/transportes/1/documentos/1/delete" className="exportLinkInternal">
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
