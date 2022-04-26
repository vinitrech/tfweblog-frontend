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
import MDInput from "components/MDInput";
import { CircularProgress, Grid, Switch } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import MDButton from "components/MDButton";
import Select from "react-select";
import MDTypography from "components/MDTypography";
import CpfValidator from "utils/validateCpf";
import { useAuth } from "utils/auth";
import MDAlert from "components/MDAlert";

function Tables() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [ativo, setAtivo] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const auth = useAuth();
  const [erroCadastro, setErroCadastro] = useState(false);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

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

    fetch(API_URL + "/usuarios/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(cadastro),
    })
      .then((res) => {
        if (res.status === 204) {
          alert("Usuário atualizado com sucesso.");
          navigate("/usuarios", { replace: true });
        } else if (res.status !== 401) {
          setErroCadastro(true);
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaItem = () => {
    fetch(API_URL + "/usuarios/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((resultItem) => {
            setNome(resultItem.nome);
            setCpf(resultItem.cpf);
            setEmail(resultItem.email);
            setSenha("");
            setCargo(resultItem.cargo);
            setAtivo(resultItem.ativo);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Editar Usuário";

    buscaItem();
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
          role="form"
          pt={3}
          pb={3}
          onSubmit={handleSubmit}
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
                  value={nome}
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
                  label="CPF"
                  required
                  onBlur={(e) => handleCpf(e)}
                  onChange={(e) => handleOnlyNumbers(e)}
                  value={cpf}
                  fullWidth
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
                  value={email}
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
                  label="Senha (deixe em branco para não alterar)"
                  value={senha}
                  fullWidth
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
                  defaultValue={options.find((element) => element.value === cargo)}
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
                <Switch checked={ativo} onChange={() => setAtivo(!ativo)} />
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
}

export default Tables;
