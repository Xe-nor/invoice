import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomFooter() {
  const [status, setStatus] = React.useState("connected");
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 4,
    maxColumns: 6,
  });

  const apiRef = React.useRef(null);

  const handlePageChange = (event, newPage) => {
    apiRef.current.setPage(newPage - 1);
  };

  const handleRowsPerPageChange = (event) => {
    apiRef.current.setPageSize(event.target.value);
  };

  const footer = () => {
    const currentStatus = apiRef.current.status;
    const message =
      currentStatus === "connected"
        ? "Data grid is connected"
        : "Data grid is not connected";
    return (
      <div>
        <ButtonGroup>
          <Button>Clear</Button>
          <Button>Clear</Button>
          <Button>Clear</Button>
        </ButtonGroup>
        <Stack direction="row" spacing={2} alignItems="center">
          <Pagination
            count={Math.ceil(
              apiRef.current.totalRowCount / apiRef.current.rowsPerPage
            )}
            page={apiRef.current.page + 1}
            onChange={handlePageChange}
          />
          <select
            value={apiRef.current.rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            {apiRef.current.rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p>Status: {message}</p>
          <div>
            <button>Hello</button>
          </div>
        </Stack>
      </div>
    );
  };

  return (
    <Box sx={{ height: 400, width: "100%", mb: 1 }}>
      <DataGrid
        {...data}
        apiRef={apiRef}
        rowsPerPageOptions={[8, 25, 50]}
        rowsPerPage={8}
        pagination
        components={{
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          toolbar: {
            apiRef: apiRef,
          },
        }}
        slots={{
          Footer: footer,
        }}
      />
    </Box>
  );
}
