/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
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

// react-router-dom components
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MDAvatar from "components/MDAvatar";
import assetLogo from "assets/images/logo_tfweblog.png";
import { useEffect, useState } from "react";
import MDAlert from "components/MDAlert";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import CpfValidator from "utils/validateCpf";

function Basic() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [erroCadastro, setErroCadastro] = useState(false);
  const [successCadastro, setSuccessCadastro] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErroCadastro(false);
    setSuccessCadastro(false);
    const cadastro = { email, senha, nome, cpf };

    fetch(API_URL + "/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cadastro),
    })
      .then((res) => {
        if (res.status === 204) {
          setSuccessCadastro(true);
        } else {
          setErroCadastro(true);
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Cadastro";
  }, []);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox
            sx={() => ({
              margin: "auto",
            })}
          >
            <MDAvatar
              src={assetLogo}
              alt="TF WebLog"
              sx={() => ({
                width: "200px",
                height: "190px",
                border: "none",
                borderRadius: "0px",
                position: "relative",
                margin: "0 auto 10px auto",
                background: "transparent",
              })}
            />
            <MDTypography variant="button" color="text">
              <MDTypography
                color="primary"
                sx={() => ({
                  textAlign: "center",
                  fontSize: "23px",
                  fontWeight: "300",
                })}
              >
                Cadastro
              </MDTypography>
            </MDTypography>

            {successCadastro && (
              <MDAlert
                color="success"
                dismissible
                sx={() => ({
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "10px 0",
                })}
              >
                Cadastro realizado.
              </MDAlert>
            )}

            {erroCadastro && (
              <MDAlert
                color="error"
                dismissible
                sx={() => ({
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "10px 0",
                })}
              >
                Email já utilizado.
              </MDAlert>
            )}
          </MDBox>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mt={3} mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Senha"
                fullWidth
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Nome"
                fullWidth
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
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
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="primary" type="submit" fullWidth>
                ENVIAR&nbsp;
                <Icon fontSize="medium" color="inherit">
                  send
                </Icon>
              </MDButton>
            </MDBox>
            <MDBox mt={1} mb={2}>
              <Link to="/login">
                <MDButton variant="gradient" color="primary" type="submit" fullWidth>
                  VOLTAR&nbsp;
                  <Icon fontSize="medium" color="inherit">
                    arrow_back
                  </Icon>
                </MDButton>
              </Link>
            </MDBox>
          </MDBox>

          <MDBox
            sx={() => ({
              fontSize: "14px",
              lineHeight: "16px",
              textAlign: "center",
            })}
          >
            <MDTypography variant="button" color="text">
              *Ao criar uma conta, aguarde liberação do usuário pelo administrador.
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
