/* eslint-disable prefer-destructuring */
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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

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
import Icon from "@mui/material/Icon";
import MDAvatar from "components/MDAvatar";
import MDAlert from "components/MDAlert";
import assetLogo from "assets/images/logo_tfweblog.png";
import { useEffect, useState } from "react";
import { useAuth } from "utils/auth";
import { GoogleLogin } from "react-google-login";

function Basic() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const API_URL = process.env.REACT_APP_API_URL;
  const OAUTH_CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID;

  const responseGoogle = (res) => {
    setErroLogin(false);
    const emailInput = res.profileObj.email;

    fetch(API_URL + "/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          auth.login(json.token);
          localStorage.setItem("email", email);
          navigate("/dashboard", { replace: true });
        } else {
          setErroLogin(true);
        }
      })
      .catch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErroLogin(false);
    const login = { email, senha };

    fetch(API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          auth.login(json.token);
          localStorage.setItem("email", email);
          navigate("/dashboard", { replace: true });
        } else {
          setErroLogin(true);
        }
      })
      .catch();
  };

  useEffect(() => {
    document.title = "TFWebLog - Login";
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
                Login
              </MDTypography>
            </MDTypography>

            {erroLogin && (
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
                Credenciais inválidas/bloqueadas.
              </MDAlert>
            )}
          </MDBox>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mt={3} mb={2}>
              <MDInput
                type="email"
                label="Email"
                name="email"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Senha"
                name="senha"
                required
                fullWidth
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="primary" type="submit" fullWidth>
                LOGIN&nbsp;
                <Icon fontSize="medium" color="inherit">
                  login
                </Icon>
              </MDButton>
            </MDBox>
            <MDBox
              mt={0}
              mb={1}
              sx={() => ({
                textAlign: "center",
                color: "#143D59 !important",
              })}
            >
              <GoogleLogin
                clientId={OAUTH_CLIENT_ID}
                buttonText="Continuar com Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="btnGoogleLogin"
              />
            </MDBox>
            <MDBox mt={2} mb={0} textAlign="center">
              <MDTypography variant="button" color="text">
                Não possui uma conta?&nbsp;
                <MDTypography
                  component={Link}
                  to="/cadastro"
                  variant="button"
                  color="primary"
                  fontWeight="medium"
                  textGradient
                >
                  Registre-se
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
