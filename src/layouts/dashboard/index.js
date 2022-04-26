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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    document.title = "TFWebLog - Dashboard";
  }, []);
  const { incidentes, clientes } = reportsLineChartData;
  const { transportes, motoristas } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox component="form" role="form" className="boxFormDashboard">
          <MDBox mt={0} mb={2} className="boxFormDashboardMargin">
            <MDTypography
              color="primary"
              sx={() => ({
                fontSize: "14px",
                fontWeight: "300",
                marginLeft: "5px",
              })}
            >
              Início
            </MDTypography>
            <MDInput type="date" fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography
              color="primary"
              sx={() => ({
                fontSize: "14px",
                fontWeight: "300",
                marginLeft: "5px",
              })}
            >
              Final
            </MDTypography>
            <MDInput type="date" fullWidth />
          </MDBox>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Transportes"
                  description="Status dos transportes no período especificado"
                  date="atualizado há 1 hora"
                  chart={transportes}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Incidentes"
                  description="Número de incidentes ocorridos por transporte no período especificado"
                  date="atualizado há 2 horas"
                  chart={incidentes}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Novos clientes"
                  description="Número de novos clientes no período especificado"
                  date="atualizado há 2 dias"
                  chart={clientes}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="secondary"
                  title="Cadastros de Motoristas"
                  description="Cadastros e desligamentos de motoristas no período especificado"
                  date="atualizado há 13 dias"
                  chart={motoristas}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
