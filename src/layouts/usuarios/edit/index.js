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
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { useEffect, useState } from "react";
import MDInput from "components/MDInput";
import { Grid, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import Select from "react-select";
import MDTypography from "components/MDTypography";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Editar Usuário";
  }, []);

  const [activeUpdate, setActiveUpdate] = useState(true);

  const options = [
    { value: "1", label: "Administrador" },
    { value: "2", label: "Supervisor" },
    { value: "3", label: "Motorista" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        component="form"
        role="form"
        pt={3}
        pb={3}
        sx={() => ({
          fontSize: "16px !important",
        })}
      >
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="Nome" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="CPF" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="Email" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="Senha" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={0}>
              <MDTypography
                color="primary"
                sx={() => ({
                  fontSize: "14px",
                  fontWeight: "300",
                  marginLeft: "5px",
                  marginBottom: "10px",
                })}
              >
                Cargo
              </MDTypography>
              <Select options={options} placeholder="Selecione..." name="cargo" />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <Switch checked={activeUpdate} onChange={() => setActiveUpdate(!activeUpdate)} />
              <MDTypography variant="button" fontWeight="regular" color="text">
                Ativo
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={2}>
            <MDBox mt={0}>
              <Link to="/usuarios">
                <MDButton variant="gradient" color="primary" fullWidth>
                  SALVAR
                </MDButton>
              </Link>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
