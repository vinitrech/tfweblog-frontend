/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
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
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "utils/auth";
import MDTypography from "components/MDTypography";

function AvaliacoesView({ allowedRoles }) {
  const [descricao, setDescricao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const auth = useAuth();
  const { idTransporte, id } = useParams();
  const [isLoading, setLoading] = useState(true);

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const buscaItem = () => {
    fetch(API_URL + "/transportes/" + idTransporte + "/avaliacoes/" + id + "/visualizar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            setDescricao(resultItem.descricao);
            setClassificacao(resultItem.status);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Editar Categoria";

    fetch(API_URL + "/getData", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!allowedRoles.includes(json.cargo)) {
          navigate("/login", { replace: true });
        }
      })
      .catch();

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
        <MDBox
          pt={3}
          pb={3}
          sx={() => ({
            fontSize: "16px !important",
          })}
        >
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={0}>
                <MDTypography
                  color="primary"
                  sx={() => ({
                    fontSize: "14px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  })}
                >
                  Descrição: {descricao}
                </MDTypography>
                <MDTypography
                  color="primary"
                  sx={() => ({
                    fontSize: "14px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    fontWeight: "300",
                  })}
                >
                  {descricao}
                </MDTypography>

                <MDTypography
                  color="primary"
                  sx={() => ({
                    fontSize: "14px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  })}
                >
                  Classificação:
                </MDTypography>

                <MDTypography
                  color="primary"
                  sx={() => ({
                    fontSize: "14px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    fontWeight: "300",
                  })}
                >
                  {classificacao}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    );
  }
}

export default AvaliacoesView;
