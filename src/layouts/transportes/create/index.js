/* eslint-disable camelcase */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
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
import MDInput from "components/MDInput";
import { CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";
import Select from "react-select";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import { useAuth } from "utils/auth";

function UsuariosCreate({allowedRoles}) {
  const [id_categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [id_cidade, setCidade] = useState("");
  const [cidades, setCidades] = useState([]);
  const [id_cliente, setCliente] = useState("");
  const [clientes, setClientes] = useState([]);
  const [id_motorista, setMotorista] = useState("");
  const [motoristas, setMotoristas] = useState([]);
  const [id_veiculo, setVeiculo] = useState("");
  const [veiculos, setVeiculos] = useState([]);
  const [id_administrador, setAdministrador] = useState("");
  const [administradores, setAdministradores] = useState([]);
  const [id_supervisor, setSupervisor] = useState("");
  const [supervisores, setSupervisores] = useState([]);
  const [data_inicio, setDataInicio] = useState("");
  const data_finalizacao = "";
  const status = "aguardando";
  const [erroCadastro, setErroCadastro] = useState(false);
  const auth = useAuth();
  const [isLoading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const handleSelect = (input) => {
    setCargo(input.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id_categoria === "") {
      alert("Selecione uma categoria.");
      return;
    }

    if (id_cidade === "") {
      alert("Selecione uma cidade.");
      return;
    }

    if (id_cliente === "") {
      alert("Selecione um cliente.");
      return;
    }

    if (id_motorista === "") {
      alert("Selecione um motorista.");
      return;
    }

    if (id_veiculo === "") {
      alert("Selecione um veículo.");
      return;
    }

    if (id_administrador === "") {
      alert("Selecione um administrador.");
      return;
    }

    if (id_supervisor === "") {
      alert("Selecione um supervisor.");
      return;
    }

    setErroCadastro(false);
    const cadastro = { id_categoria, id_cidade, id_cliente, id_motorista, id_veiculo, id_administrador, id_supervisor, data_inicio, data_finalizacao, status };

    fetch(API_URL + "/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(cadastro),
    })
      .then((res) => {
        if (res.status === 204) {
          alert("Usuário criado com sucesso.");
          navigate("/usuarios", { replace: true });
        } else if (res.status !== 401) {
          setErroCadastro(true);
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Criar Usuário";

    fetch(API_URL + "/getData", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!allowedRoles.includes(json.cargo)) {
          handleLogout();
        }else{
          setLoading(false);
        }
      })
      .catch();
  }, []);

  const options = [
    { value: "administrador", label: "Administrador" },
    { value: "supervisor", label: "Supervisor" },
    { value: "motorista", label: "Motorista" },
  ];

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
          component="form"
          onSubmit={handleSubmit}
          role="form"
          pt={3}
          pb={3}
          sx={() => ({
            fontSize: "16px !important",
          })}
        >
          {erroCadastro && (
            <MDAlert
              color="error"
              dismissible
              sx={() => ({
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "300",
                margin: "10px 0 30px 0",
              })}
            >
              Houve um erro no cadastro.
            </MDAlert>
          )}

          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={0}>
                <MDInput
                  type="date"
                  label="Data de Início"
                  fullWidth
                  required
                  onChange={(e) => setDataInicio(e.target.value)}
                />
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
                <Select
                  options={options}
                  placeholder="Selecione..."
                  name="cargo"
                  onChange={(e) => handleSelect(e)}
                />
              </MDBox>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3} lg={2}>
              <MDBox mt={0}>
                <MDButton type="submit" variant="gradient" color="primary" fullWidth>
                  SALVAR
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    );
  }
}

export default UsuariosCreate;
