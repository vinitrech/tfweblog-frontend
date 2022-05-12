/* eslint-disable no-else-return */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useAuth } from "utils/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [isLoading, setLoading] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  const { incidentes, setIncidentes } = useState({
    labels: ["1", "2", "5", "6", "9", "15", "19", "20", "21"],
    datasets: { label: "Incidentes", data: [4, 1, 3, 6, 4, 2, 2, 3, 7] },
  });

  const clientes = {
    labels: ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr"],
    datasets: { label: "Clientes", data: [10, 25, 15, 10, 15, 20] },
  };

  const motoristas = {
    labels: ["Novos motoristas", "Motoristas desligados"],
    datasets: { label: "Novos motoristas", data: [11, 4] },
  };
  const transportes = {
    labels: ["Criados", "Em andamento", "Finalizados", "Cancelados", "Em espera"],
    datasets: { label: "Transportes", data: [11, 4, 7, 3, 6] },
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const buscaItem = () => {
    fetch(API_URL + "/getIncidentes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            setIncidentes(resultItem);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Dashboard";

    buscaItem();
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
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3}>
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
}

export default Dashboard;
