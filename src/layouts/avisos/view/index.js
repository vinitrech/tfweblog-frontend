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
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Grid, Icon } from "@mui/material";
import MDTypography from "components/MDTypography";
import assetLogo from "assets/images/logo_tfweblog.png";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Visualizar Aviso";
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
          <Grid item xs={12} md={12} lg={12}>
            <MDBox
              mb={3}
              sx={() => ({
                textAlign: "center",
              })}
            >
              <MDBox component="img" src={assetLogo} alt="TFWebLog" width="250px" />
            </MDBox>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3} lg={2}>
            <Link to="/transportes/1/avisos">
              <MDButton variant="gradient" color="primary" fullWidth>
                <Icon fontSize="medium" color="inherit">
                  arrow_back_ios
                </Icon>
                &nbsp; VOLTAR
              </MDButton>
            </Link>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
