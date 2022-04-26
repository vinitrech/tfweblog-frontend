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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import tableData from "layouts/veiculos/data/tableData";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
import MDInput from "components/MDInput";

function Tables() {
  useEffect(() => {
    document.title = "TFWebLog - Veículos";
  }, []);

  const { columns, rows } = tableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} className="wrapperHeader">
        <Link to="/veiculos/criar-veiculo">
          <MDButton variant="gradient" color="primary">
            + Novo Veículo
          </MDButton>
        </Link>

        <MDBox component="form" role="form">
          <Link to="/veiculos" className="exportLink">
            <MDButton variant="gradient" color="primary">
              <Icon fontSize="medium" color="inherit">
                file_open
              </Icon>
            </MDButton>
          </Link>
          <MDBox className="inputWrapper">
            <MDInput type="text" label="Buscar..." className="inputWrapperInternal" />
          </MDBox>
          <MDBox>
            <Link to="/veiculos" className="searchButton">
              <MDButton variant="gradient" color="primary">
                <Icon fontSize="medium" color="inherit">
                  search
                </Icon>
              </MDButton>
            </Link>
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
                  isSorted={false}
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

export default Tables;
