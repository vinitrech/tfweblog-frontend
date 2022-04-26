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
import { Grid, Icon } from "@mui/material";
import MDTypography from "components/MDTypography";
import assetLogo from "assets/images/logo_tfweblog.png";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Editar Incidente";
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

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDTypography
              color="primary"
              sx={() => ({
                fontSize: "14px",
                fontWeight: "300",
                marginLeft: "5px",
                marginBottom: "10px",
              })}
            >
              Fotos
            </MDTypography>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mb={0} mt={2}>
              <MDBox
                mx={3}
                sx={() => ({
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <MDBox
                  component="img"
                  src={assetLogo}
                  alt="TFWebLog"
                  width="100%"
                  sx={() => ({
                    maxWidth: "250px",
                  })}
                />
                <Link to="/transportes/1/incidentes/criar-incidente">
                  <Icon
                    fontSize="medium"
                    color="error"
                    sx={() => ({
                      marginTop: "5px",
                    })}
                  >
                    delete
                  </Icon>
                </Link>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3} lg={2}>
            <Link to="/transportes/1/incidentes">
              <MDButton variant="gradient" color="primary" fullWidth>
                SALVAR
              </MDButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Link to="/transportes/1/incidentes/criar-incidente">
              <MDButton variant="gradient" color="primary" fullWidth>
                + Adicionar fotos
              </MDButton>
            </Link>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
