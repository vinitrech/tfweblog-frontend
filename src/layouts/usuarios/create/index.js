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
import { Grid, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";
import Select from "react-select";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import CpfValidator from "utils/validateCpf";
import { useAuth } from "utils/auth";

function UsuariosCreate({allowedRoles}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [ativo, setActiveUpdate] = useState(true);
  const [erroCadastro, setErroCadastro] = useState(false);
  const auth = useAuth();

  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleOnlyNumbers = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCpf(value);
  };

  const handleCpf = (input) => {
    if (input.target.value.length > 0) {
      if (CpfValidator(input.target.value)) {
        setCpf(input.target.value);
      } else {
        setCpf("");
        alert("CPF inválido.");
      }
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const handleSelect = (input) => {
    setCargo(input.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cargo === "") {
      alert("O cargo precisa ser preenchido.");
      return;
    }

    setErroCadastro(false);
    const cadastro = { email, senha, nome, cpf, cargo, ativo };

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
          navigate("/login", { replace: true });
        }
      })
      .catch();
  }, []);

  const options = [
    { value: "administrador", label: "Administrador" },
    { value: "supervisor", label: "Supervisor" },
    { value: "motorista", label: "Motorista" },
  ];

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
            Email já utilizado.
          </MDAlert>
        )}

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput
                type="text"
                label="Nome"
                fullWidth
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput
                type="text"
                label="CPF (somente números)"
                fullWidth
                maxLength="11"
                onBlur={(e) => handleCpf(e)}
                onChange={(e) => handleOnlyNumbers(e)}
                value={cpf}
                required
              />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput
                type="text"
                label="Email"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <MDInput
                type="text"
                label="Senha"
                fullWidth
                required
                onChange={(e) => setSenha(e.target.value)}
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

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={0}>
              <Switch checked={ativo} onChange={() => setActiveUpdate(!ativo)} />
              <MDTypography variant="button" fontWeight="regular" color="text">
                Ativo
              </MDTypography>
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

export default UsuariosCreate;
