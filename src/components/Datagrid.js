import React, { useEffect, useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/body.css";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Datarid() {
  const [activebtn, setActiveBtn] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [advancedbtn, setAdvancedBtn] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const activebutton = (index) => {
    setActiveBtn(index);
  };
  const rowIds = rows.map((row) => row.id);

  useEffect(() => {}, []);

  const inputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setAdvancedBtn(value.length === 0);
    setActiveBtn(3);
  };
  const clear = (event) => {
    setSearchValue("");
    setAdvancedBtn(true);
    setActiveBtn(1);
  };

  return (
    <div className="body-container">
      <div className="body-header">
        <div className="firsthalf">
          <button
            className={activebtn === 1 ? "btn-active" : "btn-inactive"}
            onClick={() => activebutton(1)}
          >
            HOME PAGE
          </button>
          <button
            className={activebtn === 2 ? "btn-active" : "btn-inactive"}
            onClick={() => activebutton(2)}
          >
            ADD DATA
          </button>
          <button
            className={activebtn === 3 ? "btn-active" : "btn-search"}
            onClick={() => activebutton(3)}
          >
            SEARCH RESULT
          </button>
          <button
            className={activebtn === 4 ? "btn-active" : "btn-inactive"}
            onClick={() => activebutton(4)}
          >
            ANALYTICS VIEW
          </button>
        </div>

        <div className="secondhalf">
          {/* <Autocomplete
            sx={{ width: 220, backgroundColor: "white", height: 30 }}
            freeSolo
            id="searchbox"
            options={rowIds}
            getOptionLabel={(option) => option.toString()}
            value={selectedId}
            onChange={handleIdChange}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{ shrink: false }}
                label="Select Customer Order ID"
              />
            )}
          /> */}
          <input
            type="text"
            placeholder="Search Customer Order ID"
            onChange={inputChange}
            className="searchbox"
            value={searchValue}
          />
          <button
            className={advancedbtn ? "clear-btn-inactive" : "clear-btn"}
            onClick={clear}
          >
            Clear
          </button>
          <button
            className={advancedbtn ? "advanced-btn" : "advanced-btn-inactive"}
          >
            Advanced Search
          </button>
        </div>
      </div>
      <div className="datagrid">
        <Box
          sx={{
            height: 527,
          }}
        >
          <DataGrid
            sx={{ backgroundColor: "#666666", color: "white", border: "none" }}
            rows={rows}
            columns={columns}
            filterModel={{
              items: [
                { columnField: "id", operatorValue: "=", value: selectedId },
              ],
            }}
            initialState={{
              pagination: { paginationModel: { pageSize: 8 } },
            }}
            classes={{ footer: "datagrid-footer" }}
            style={{ color: "white" }}
            pageSizeOptions={[5, 8, 10, 20, 50, 100]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>

      <div className="adddata">
        <p>Add data</p>
      </div>
    </div>
  );
}
