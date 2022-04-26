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
import MDTypography from "components/MDTypography";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Editar Veículo";
  }, []);

  const [activeUpdate, setActiveUpdate] = useState(true);

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
              <MDInput type="text" label="Modelo" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="Placa" fullWidth />
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
              <Link to="/veiculos">
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
