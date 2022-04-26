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
import { useEffect } from "react";
import MDInput from "components/MDInput";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Grid } from "@mui/material";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Editar Avaliação";
  }, []);

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
              <MDInput label="Descrição" multiline rows={5} fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput type="text" label="Classificação" fullWidth />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3} lg={2}>
            <Link to="/transportes/1/avaliacoes">
              <MDButton variant="gradient" color="primary" fullWidth>
                SALVAR
              </MDButton>
            </Link>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
