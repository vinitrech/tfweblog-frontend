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
import { Link } from "react-router-dom";

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
import { useEffect } from "react";

function Basic() {
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
                Recuperar senha
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox component="form" role="form">
            <MDBox mt={3} mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mt={2} mb={3}>
              <Link to="/login">
                <MDButton variant="gradient" color="primary" fullWidth>
                  ENVIAR&nbsp;
                </MDButton>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
