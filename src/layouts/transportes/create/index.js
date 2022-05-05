/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
/* eslint-disable array-callback-return */
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
import AsyncSelect from "react-select/async";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import { useAuth } from "utils/auth";

function TransportesCreate({ allowedRoles }) {
  const [id_categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [id_cidade, setCidade] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
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

  const handleCategoria = (input) => {
    setCategoria(input.value);
  };

  const handleCliente = (input) => {
    setCliente(input.value);
  };

  const handleMotorista = (input) => {
    setMotorista(input.value);
  };

  const handleVeiculo = (input) => {
    setVeiculo(input.value);
  };

  const handleAdministrador = (input) => {
    setAdministrador(input.value);
  };

  const handleSupervisor = (input) => {
    setSupervisor(input.value);
  };

  const handleCidadeChange = (input) => {
    setCidade(input.ID);
    setCidadeSelecionada(input);
  };

  const loadCidades = (inputValue) => {
    return fetch(API_URL + "/cidades?search=" + inputValue, {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .catch();
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

    fetch(API_URL + "/transportes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(cadastro),
    })
      .then((res) => {
        if (res.status === 204) {
          alert("Transporte criado com sucesso.");
          navigate("/transportes", { replace: true });
        } else if (res.status !== 401) {
          setErroCadastro(true);
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaCategorias = () => {
    fetch(API_URL + "/categorias", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const categoriasTemp = [];

        itemsArray.map((item) => {
          categoriasTemp.push({
            value: item.id,
            label: item.descricao,
          });
        });

        setCategorias(categoriasTemp);
      })
      .catch();
  };

  const buscaClientes = () => {
    fetch(API_URL + "/clientes/getClientes", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const clientesTemp = [];

        itemsArray.map((item) => {
          clientesTemp.push({
            value: item.id,
            label: item.nome,
          });
        });

        setClientes(clientesTemp);
      })
      .catch();
  };

  const buscaMotoristas = () => {
    fetch(API_URL + "/usuarios/getMotoristas", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const motoristasTemp = [];

        itemsArray.map((item) => {
          motoristasTemp.push({
            value: item.id,
            label: item.nome,
          });
        });

        setMotoristas(motoristasTemp);
      })
      .catch();
  };

  const buscaVeiculos = () => {
    fetch(API_URL + "/veiculos/getVeiculos", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const veiculosTemp = [];

        itemsArray.map((item) => {
          veiculosTemp.push({
            value: item.id,
            label: item.placa,
          });
        });

        setVeiculos(veiculosTemp);
      })
      .catch();
  };

  const buscaAdministradores = () => {
    fetch(API_URL + "/usuarios/getAdministradores", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const administradoresTemp = [];

        itemsArray.map((item) => {
          administradoresTemp.push({
            value: item.id,
            label: item.nome,
          });
        });

        setAdministradores(administradoresTemp);
      })
      .catch();
  };

  const buscaSupervisores = () => {
    fetch(API_URL + "/usuarios/getSupervisores", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((itemsArray) => {
        const supervisoresTemp = [];

        itemsArray.map((item) => {
          supervisoresTemp.push({
            value: item.id,
            label: item.nome,
          });
        });

        setSupervisores(supervisoresTemp);
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Criar Transporte";

    fetch(API_URL + "/getData", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!allowedRoles.includes(json.cargo)) {
          handleLogout();
        } else {
          buscaCategorias();
          buscaClientes();
          buscaMotoristas();
          buscaVeiculos();
          buscaAdministradores();
          buscaSupervisores();

          setLoading(false);
        }
      })
      .catch();
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
                  Data de Início
                </MDTypography>
                <MDInput
                  type="date"
                  fullWidth
                  required
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </MDBox>
            </Grid>
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
                  Categoria
                </MDTypography>
                <Select
                  options={categorias}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleCategoria(e)}
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
                  Cidade
                </MDTypography>
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  value={cidadeSelecionada}
                  getOptionLabel={(e) => e.Nome}
                  getOptionValue={(e) => e.ID}
                  loadOptions={loadCidades}
                  onChange={handleCidadeChange}
                />
              </MDBox>
            </Grid>

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
                  Cliente
                </MDTypography>
                <Select
                  options={clientes}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleCliente(e)}
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
                  Motorista
                </MDTypography>
                <Select
                  options={motoristas}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleMotorista(e)}
                />
              </MDBox>
            </Grid>

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
                  Veículo
                </MDTypography>
                <Select
                  options={veiculos}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleVeiculo(e)}
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
                  Administrador
                </MDTypography>
                <Select
                  options={administradores}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleAdministrador(e)}
                />
              </MDBox>
            </Grid>
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
                  Supervisor
                </MDTypography>
                <Select
                  options={supervisores}
                  placeholder="Selecione..."
                  maxLength={15}
                  onChange={(e) => handleSupervisor(e)}
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

export default TransportesCreate;