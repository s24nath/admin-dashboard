import { shades } from "../../theme";

import { mockDataInvoices } from "../../mockDataBase/data";

/* Import MUI component starts */
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
import PageHeader from "../../components/PageHeader";
/* Import local pages and component ends */

const Invoices = () => {
  /* Other hooks declaration starts */
  const theme = useTheme();
  /* Other hooks declaration ends */

  /* Component variable declaration / object destructure starts */
  const colors = shades(theme.palette.mode);

  // Datagrid Columns declaration
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }) => (
        <Typography color={colors.greenAccent[500]}>${cost}</Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  /* Component variable declaration / object destructure ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <Box m="20px">
      <PageHeader title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="calc(80vh - 100px)"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
