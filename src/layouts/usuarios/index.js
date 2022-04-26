/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { CircularProgress, Icon } from "@mui/material";
import MDInput from "components/MDInput";

function Tables() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();

  useEffect(() => {
    document.title = "TFWebLog - Usuários";
    fetch(API_URL + "/usuarios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setLoading(false);
      })
      .catch();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox
          pt={4}
          className="wrapperHeader"
          sx={() => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <CircularProgress />
        </MDBox>
      </DashboardLayout>
    );
  } else {
    const columns = [
      { Header: "identificador", accessor: "identificador", align: "center" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "data", accessor: "data", align: "center" },
      { Header: "ativo", accessor: "ativo", align: "center" },
      { Header: "ações", accessor: "acoes", align: "center" },
    ];

    const rows = [];

    items.map((item) => {
      let date = new Date(item.created_at);
      date =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();

      rows.push({
        identificador: item.id,
        email: item.email,
        data: date,
        ativo: !item.ativo ? "Não" : "Sim",
        acoes: (
          <MDBox className="exportLinkInternal">
            <Link to={"/usuarios/" + item.id + "/editar-usuario"} className="exportLinkInternal">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  edit
                </Icon>
              </MDButton>
            </Link>
            <MDButton variant="gradient" color="error">
              <Icon fontSize="medium" color="inherit">
                delete
              </Icon>
            </MDButton>
          </MDBox>
        ),
      });
    });

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={2} className="wrapperHeader">
          <Link to="/usuarios/criar-usuario">
            <MDButton variant="gradient" color="primary">
              + Novo Usuário
            </MDButton>
          </Link>

          <MDBox component="form" role="form">
            <Link to="/usuarios" className="exportLink">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  file_open
                </Icon>
              </MDButton>
            </Link>
            <MDBox className="inputWrapper">
              <MDInput type="text" label="Buscar..." className="inputWrapperInternal" />
            </MDBox>
            <MDBox>
              <Link to="/usuarios" className="searchButton">
                <MDButton variant="gradient" color="primary">
                  <Icon fontSize="medium" color="inherit">
                    search
                  </Icon>
                </MDButton>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox pt={5} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    );
  }
}

export default Tables;
