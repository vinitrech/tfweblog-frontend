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
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import Select from "react-select";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

const options1 = [
  { value: "1", label: "Cidade 1" },
  { value: "2", label: "Cidade 2" },
  { value: "3", label: "Cidade 3" },
];

const options2 = [
  { value: "1", label: "Cliente 1" },
  { value: "2", label: "Cliente 2" },
  { value: "3", label: "Cliente 3" },
];

const options3 = [
  { value: "1", label: "Supervisor 1" },
  { value: "2", label: "Supervisor 2" },
  { value: "3", label: "Supervisor 3" },
];

const options4 = [
  { value: "1", label: "Motorista 1" },
  { value: "2", label: "Motorista 2" },
  { value: "3", label: "Motorista 3" },
];

const options5 = [
  { value: "1", label: "Veículo 1" },
  { value: "2", label: "Veículo 2" },
  { value: "3", label: "Veículo 3" },
];

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Editar Transporte";
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
          <Grid item xs={12} md={3} lg={3}>
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
                Data de Início
              </MDTypography>
              <MDInput type="date" fullWidth />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
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
                Cidade de destino
              </MDTypography>
              <Select options={options1} placeholder="Selecione..." name="cidade" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
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
                Cliente
              </MDTypography>
              <Select options={options2} placeholder="Selecione..." name="cliente" />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
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
                Supervisor
              </MDTypography>
              <Select options={options3} placeholder="Selecione..." name="supervisor" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
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
                Motorista
              </MDTypography>
              <Select options={options4} placeholder="Selecione..." name="motorista" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MDBox mb={3}>
              <MDTypography
                color="primary"
                sx={() => ({
                  fontSize: "14px",
                  fontWeight: "300",
                  marginLeft: "5px",
                  marginBottom: "10px",
                })}
              >
                Veículo
              </MDTypography>
              <Select options={options5} placeholder="Selecione..." name="veiculo" />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={2}>
            <MDBox mt={0}>
              <Link to="/transportes">
                <MDButton variant="gradient" color="primary" fullWidth>
                  SALVAR
                </MDButton>
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MDBox mt={0}>
              <Link to="/transportes">
                <MDButton variant="gradient" color="primary" fullWidth>
                  PRONTO PARA INICIAR
                </MDButton>
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MDBox mt={0}>
              <Link to="/transportes">
                <MDButton variant="gradient" color="primary" fullWidth>
                  PRONTO PARA FINALIZAR
                </MDButton>
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MDBox mt={0}>
              <Link to="/transportes">
                <MDButton variant="gradient" color="primary" fullWidth>
                  APROVAR INÍCIO
                </MDButton>
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MDBox mt={0}>
              <Link to="/transportes">
                <MDButton variant="gradient" color="primary" fullWidth>
                  APROVAR FINALIZAÇÃO
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
