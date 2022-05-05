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

  const handleRows = (itemsArray) => {
    const temporaryRows = [];

    itemsArray.map((item) => {
      let date = new Date(item.data_inicio);
      date =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear();

      let statusItem = "";

      if(item.status === "aguardando motorista"){
        statusItem = (
          <>
            <MDBox ml={-1}>
              <MDBadge
                badgeContent="aguardando motorista"
                color="secondary"
                variant="gradient"
                size="sm"
              />
            </MDBox>
            
            {cargo !== "supervisor" && <MDButton variant="gradient" color="success" sx={() => ({
            marginTop: "5px",
            padding: "5px",
            width: "30px",
            minWidth: "30px",
            height: "30px",
            minHeight: "30px",
          })} onClick={(e) => enviarInicioSupervisor(e)}>
              <Icon fontSize="medium" color="inherit">
                chevron_right
              </Icon>
            </MDButton>}
          </>
        );
      }else if(item.status === "aguardando aprovação"){
        statusItem = (
          <>
            <MDBox ml={-1}>
              <MDBadge
                badgeContent="aguardando aprovação"
                color="primary"
                variant="gradient"
                size="sm"
              />
            </MDBox>

            {cargo !== "motorista" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginTop: "5px",
                  padding: "5px",
                  width: "30px",
                  minWidth: "30px",
                  height: "30px",
                  minHeight: "30px",
                })}
                onClick={(e) => aprovarInicio(e)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </>
        );
      }else if(item.status === "em andamento"){
        statusItem = (
          <>
            <MDBox ml={-1}>
              <MDBadge badgeContent="em andamento" color="primary" variant="gradient" size="sm" />
            </MDBox>

            {cargo !== "supervisor" && <MDButton variant="gradient" color="success" sx={() => ({
            marginTop: "5px",
            padding: "5px",
            width: "30px",
            minWidth: "30px",
            height: "30px",
            minHeight: "30px",
          })} onClick={(e) => enviarFinalizacaoSupervisor(e)}>
              <Icon fontSize="medium" color="inherit">
                chevron_right
              </Icon>
            </MDButton>}
          </>
        );
      }else if(item.status === "aguardando finalização"){
        statusItem = (
          <>
            <MDBox ml={-1}>
              <MDBadge
                badgeContent="aguardando finalização"
                color="primary"
                variant="gradient"
                size="sm"
              />
            </MDBox>

            {cargo !== "motorista" && (
              <MDButton
                variant="gradient"
                color="success"
                sx={() => ({
                  marginTop: "5px",
                  padding: "5px",
                  width: "30px",
                  minWidth: "30px",
                  height: "30px",
                  minHeight: "30px",
                })}
                onClick={(e) => finalizar(e)}
              >
                <Icon fontSize="medium" color="inherit">
                  chevron_right
                </Icon>
              </MDButton>
            )}
          </>
        );
      }else{
        statusItem = <MDBox ml={-1}>
          <MDBadge badgeContent="finalizado" color="success" variant="gradient" size="sm" />
        </MDBox> 
      }
  
      temporaryRows.push({
        identificador: item.id,
        cliente: item.cliente,
        inicio: date,
        status: statusItem,
        acoes: (
          <MDBox className="exportLinkInternal">
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
            <Link to={"/transportes/" + item.id + "/avaliacoes"} className="exportLinkInternal">
              <MDButton variant="gradient" color="success">
                <Icon fontSize="medium" color="inherit">
                  workspace_premium
                </Icon>
              </MDButton>
            </Link>
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

      arrayOfItems.push({
        identificador: item.id,
        email: item.email,
        nome: item.nome,
        cpf: item.cpf,
        data: date,
        ativo: !item.ativo ? "Não" : "Sim",
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
            handleRows(itemsArray);
            setLoading(false);
          });
        } else {
          handleLogout();
        }
      })
      .catch();
  };

  const buscaItens = () => {
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
            handleRows(itemsArray);
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
      console.log(cargo);
    })
    .catch();

    buscaItens();
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
            buscaItens();
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
      fetch(API_URL + "/transportes/" + id + "/enviar-inicio-supervisor", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens();
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
      fetch(API_URL + "/transportes/" + id + "/aprovar-inicio", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens();
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
      fetch(API_URL + "/transportes/" + id + "/enviar-finalizacao-supervisor", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens();
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
      fetch(API_URL + "/transportes/" + id + "/finalizar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.status === 204) {
            alert("Etapa avançada com sucesso.");
            setLoading(true);
            buscaItens();
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
            <MDButton variant="gradient" color="primary">
              + Novo Transporte
            </MDButton>
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
