/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const Employees = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true,
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false,
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false,
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true,
  },
];

class Download extends React.Component {
  render() {
    return (
      <ExcelFile filename="Usuarios" element={<button type="button">Excel download</button>}>
        <ExcelSheet data={Employees} name="Employees">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Wallet Money" value="amount" />
          <ExcelColumn label="Gender" value="sex" />
          <ExcelColumn
            label="Marital Status"
            value={(col) => (col.is_married ? "Married" : "Single")}
          />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default Download;
