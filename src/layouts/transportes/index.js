/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
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
import Card from "@mui/material/Card";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";
import { CircularProgress, Icon } from "@mui/material";
import MDInput from "components/MDInput";
import { useAuth } from "utils/auth";
import exportFromJSON from "export-from-json";
import MDTypography from "components/MDTypography";

function Transportes() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [cargo, setCargo] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const columns = [
    { Header: "identificador", accessor: "identificador", align: "center" },
    { Header: "cliente", accessor: "cliente", align: "left" },
    { Header: "inicio", accessor: "inicio", align: "center" },
    { Header: "status", accessor: "status", align: "center" },
    { Header: "ações", accessor: "acoes", align: "center", disableSortBy: true },
  ];

  const [rows, setRows] = useState([]);

  const handleRows = (itemsArray, role) => {
    const temporaryRows = [];

    itemsArray.map((item) => {
      let date = new Date(item.data_inicio);
      date =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear();

        let dateFinalizacao = new Date(item.data_finalizacao);
      dateFinalizacao =
        dateFinalizacao.getDate() +
        "/" +
        (dateFinalizacao.getMonth() + 1) +
        "/" +
        dateFinalizacao.getFullYear();

      let statusItem = "";

      if(item.status === "aguardando motorista"){
        statusItem = (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="aguardando motorista"
              color="secondary"
              variant="gradient"
              size="sm"
            />
            {role !== "supervisor" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginLeft: "5px",
                  padding: "5px",
                  width: "20px",
                  minWidth: "20px",
                  height: "20px",
                  minHeight: "20px",
                })}
                onClick={(e) => enviarInicioSupervisor(e, item.id)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </MDBox>
        );
      }else if(item.status === "aguardando aprovação"){
        statusItem = (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="aguardando aprovação"
              color="primary"
              variant="gradient"
              size="sm"
            />

            {role !== "motorista" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginLeft: "5px",
                  padding: "5px",
                  width: "20px",
                  minWidth: "20px",
                  height: "20px",
                  minHeight: "20px",
                })}
                onClick={(e) => aprovarInicio(e, item.id)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </MDBox>
        );
      }else if(item.status === "em andamento"){
        statusItem = (
          <MDBox ml={-1}>
            <MDBadge badgeContent="em andamento" color="info" variant="gradient" size="sm" />

            {role !== "supervisor" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginLeft: "5px",
                  padding: "5px",
                  width: "20px",
                  minWidth: "20px",
                  height: "20px",
                  minHeight: "20px",
                })}
                onClick={(e) => enviarFinalizacaoSupervisor(e, item.id)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </MDBox>
        );
      }else if(item.status === "aguardando finalização"){
        statusItem = (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="aguardando finalização"
              color="primary"
              variant="gradient"
              size="sm"
            />

            {role !== "motorista" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginLeft: "5px",
                  padding: "5px",
                  width: "20px",
                  minWidth: "20px",
                  height: "20px",
                  minHeight: "20px",
                })}
                onClick={(e) => finalizar(e, item.id)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </MDBox>
        );
      }else{
        statusItem = (
          <MDBox ml={-1}>
            <MDBadge badgeContent="finalizado" color="success" variant="gradient" size="sm" />

            <MDTypography
              color="primary"
              sx={() => ({
                fontSize: "14px",
                fontWeight: "300",
                marginLeft: "5px",
                marginBottom: "10px",
              })}
            >
              {dateFinalizacao}
            </MDTypography>
          </MDBox>
        ); 
      }
  
      temporaryRows.push({
        identificador: item.id,
        cliente: item.cliente,
        inicio: date,
        status: statusItem,
        acoes: (
          <MDBox className="exportLinkInternal">
            {role !== "motorista" && (
              <Link
                to={"/transportes/" + item.id + "/editar-transporte"}
                className="exportLinkInternal"
              >
                <MDButton variant="gradient" color="primary">
                  <Icon fontSize="medium" color="inherit">
                    edit
                  </Icon>
                </MDButton>
              </Link>
            )}
            <Link to={"/transportes/" + item.id + "/documentos"} className="exportLinkInternal">
              <MDButton variant="gradient" color="secondary">
                <Icon fontSize="medium" color="inherit">
                  description
                </Icon>
              </MDButton>
            </Link>
            <Link to={"/transportes/" + item.id + "/avisos"} className="exportLinkInternal">
              <MDButton variant="gradient" color="info">
                <Icon fontSize="medium" color="inherit">
                  campaign
                </Icon>
              </MDButton>
            </Link>
            <Link to={"/transportes/" + item.id + "/incidentes"} className="exportLinkInternal">
              <MDButton variant="gradient" color="warning">
                <Icon fontSize="medium" color="inherit">
                  warning
                </Icon>
              </MDButton>
            </Link>
            {item.status === "finalizado" && (
              <Link to={"/transportes/" + item.id + "/avaliacoes"} className="exportLinkInternal">
                <MDButton variant="gradient" color="success">
                  <Icon fontSize="medium" color="inherit">
                    workspace_premium
                  </Icon>
                </MDButton>
              </Link>
            )}
            {role !== "motorista" && (
              <MDButton
                variant="gradient"
                color="error"
                onClick={(e) => {
                  handleErase(e, item.id);
                }}
              >
                <Icon fontSize="medium" color="inherit">
                  delete
                </Icon>
              </MDButton>
            )}
          </MDBox>
        ),
      });

      setRows(temporaryRows);
    });
  }

  const exportName = "Transportes";
  const type = "xls";

  const handleExportXlsx = () => {
    exportFromJSON({ data, fileName: exportName, exportType: type });
  };

  const setItemsToExport = (itemsArray) => {
    const arrayOfItems = [];

    itemsArray.map((item) => {
      let date = new Date(item.created_at);
      date =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();

      let dateInicio = new Date(item.data_inicio);
      dateInicio =
        dateInicio.getDate() + "/" + (dateInicio.getMonth() + 1) + "/" + dateInicio.getFullYear();

      const dateFinalizacao = new Date();

      arrayOfItems.push({
        identificador: item.id,
        categoria: item.categoria,
        cidade: item.cidade,
        cliente: item.cliente,
        motorista: item.motorista,
        veiculo: item.veiculo,
        status: item.status,
        data_criacao: date,
        data_inicio: dateInicio,
        data_finalizacao: item.data_finalizacao
          ? dateFinalizacao.getDate() +
            "/" +
            (dateFinalizacao.getMonth() + 1) +
            "/" +
            dateFinalizacao.getFullYear()
          : "",
      });
    });

    setData(arrayOfItems);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch(
      API_URL +
        "/transportes?" +
        new URLSearchParams({
          search: searchInput,
        }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((itemsArray) => {
            setItemsToExport(itemsArray);
            handleRows(itemsArray, cargo);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaItens = (userRole) => {
    fetch(API_URL + "/transportes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status !== 401) {
          response.json().then((itemsArray) => {
            setItemsToExport(itemsArray);
            handleRows(itemsArray, userRole);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Transportes";

    fetch(API_URL + "/getData", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => res.json())
    .then((json) => {
      setCargo(json.cargo);
      buscaItens(json.cargo);
    })
    .catch();
  }, []);

  const handleErase = (e, id) => {
    e.preventDefault();

    if (confirm("Deseja realmente excluir o registro?")) {
      fetch(API_URL + "/transportes/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Registro excluído com sucesso.");
            setLoading(true);
            buscaItens(cargo);
          } else if (response.status === 401) {
            handleLogout();
          }
        })
        .catch();
    }
  };

  const enviarInicioSupervisor = (e, id) => {
    e.preventDefault();

    if (confirm("Deseja realmente avançar a etapa?")) {
      fetch(API_URL + "/transportes/enviar-inicio-supervisor/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens("motorista");
          } else if (response.status === 401) {
            handleLogout();
          }
        })
        .catch();
    }
  };

  const aprovarInicio = (e, id) => {
    e.preventDefault();

    if (confirm("Deseja realmente avançar a etapa?")) {
      fetch(API_URL + "/transportes/aprovar-inicio/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens("supervisor");
          } else if (response.status === 401) {
            handleLogout();
          }
        })
        .catch();
    }
  };

  const enviarFinalizacaoSupervisor = (e, id) => {
    e.preventDefault();

    if (confirm("Deseja realmente avançar a etapa?")) {
      fetch(API_URL + "/transportes/enviar-finalizacao-supervisor/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens("motorista");
          } else if (response.status === 401) {
            handleLogout();
          }
        })
        .catch();
    }
  };

  const finalizar = (e, id) => {
    e.preventDefault();

    if (confirm("Deseja realmente avançar a etapa?")) {
      fetch(API_URL + "/transportes/finalizar/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens("supervisor");
          } else if (response.status === 401) {
            handleLogout();
          }
        })
        .catch();
    }
  };

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
        <MDBox pt={2} className="wrapperHeader">
          <Link to="/transportes/criar-transporte">
            {cargo !== "motorista" && (
              <MDButton variant="gradient" color="primary">
                + Novo Transporte
              </MDButton>
            )}
          </Link>

          <MDBox
            component="form"
            role="form"
            onSubmit={(e) => handleSearchSubmit(e)}
            className="exportLink"
          >
            <MDButton
              variant="gradient"
              color="primary"
              onClick={handleExportXlsx}
              sx={() => ({
                marginRight: "10px",
              })}
            >
              <Icon fontSize="medium" color="inherit">
                file_open
              </Icon>
            </MDButton>
            <MDBox className="inputWrapper">
              <MDInput
                type="text"
                required
                value={searchInput}
                label="Buscar..."
                onChange={(e) => setSearchInput(e.target.value)}
                className="inputWrapperInternal"
              />
            </MDBox>
            <MDBox className="searchButton">
              <MDButton type="submit" variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  search
                </Icon>
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox pt={5} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    entriesPerPage
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    );
  }
}

export default Transportes;
