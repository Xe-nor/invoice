import React, { useEffect, useState } from "react";
import "../styles/body.css";
import Datagrid from "./Datagrid";

export default function HomePage() {
  const [activebtn, setActiveBtn] = useState(1);

  const [advancedbtn, setAdvancedBtn] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const activebutton = (index) => {
    setActiveBtn(index);
  };

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
      <div className="main-content">
        <Datagrid />
      </div>
    </div>
  );
}
