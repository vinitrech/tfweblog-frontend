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
import { capitalize, CircularProgress } from "@mui/material";
import { useAuth } from "utils/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [isLoading, setLoading] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  const [incidentes, setIncidentes] = useState({});

  const [transportes, setTransportes] = useState({});

  const [transportesPorCliente, setTransportesPorCliente] = useState({});

  const [transportesPorMotorista, setTransportesPorMotorista] = useState({});

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const buscaIncidentes = () => {
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
            const temporaryItem = {
              labels: resultItem.map((item) => item.id_transporte),
              datasets: {
                label: "Incidentes",
                data: resultItem.map((item) => item.incidentes),
              },
            };

            setIncidentes(temporaryItem);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaTransportes = () => {
    fetch(API_URL + "/getTransportesStatus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            const temporaryTransporte = {
              labels: resultItem.map((item) => capitalize(item.status)),
              datasets: {
                label: "Quantidade",
                data: resultItem.map((item) => item.quantidade),
              },
            };

            setTransportes(temporaryTransporte);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaTransportesPorCliente = () => {
    fetch(API_URL + "/getTransportesPorCliente", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            const temporaryTransportesPorCliente = {
              labels: resultItem.map((item) => item.cliente),
              datasets: {
                label: "Quantidade",
                data: resultItem.map((item) => item.quantidade),
              },
            };

            setTransportesPorCliente(temporaryTransportesPorCliente);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaTransportesPorMotorista = () => {
    fetch(API_URL + "/getTransportesPorMotorista", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            const temporaryTransportesPorMotorista = {
              labels: resultItem.map((item) => item.motorista),
              datasets: {
                label: "Quantidade",
                data: resultItem.map((item) => item.quantidade),
              },
            };

            setTransportesPorMotorista(temporaryTransportesPorMotorista);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Dashboard";

    buscaIncidentes();
    buscaTransportes();
    buscaTransportesPorCliente();
    buscaTransportesPorMotorista();
    setLoading(false);
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
                    description="Número de transportes para cada status."
                    chart={transportes}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="Incidentes"
                    description="Número de incidentes ocorridos por transporte."
                    chart={incidentes}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="Transportes por cliente"
                    description="Número de transportes cadastrados para cada cliente."
                    chart={transportesPorCliente}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={3}>
                  <ReportsBarChart
                    color="secondary"
                    title="Transportes por motorista"
                    description="Número de transportes cadastrados para cada motorista."
                    chart={transportesPorMotorista}
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
