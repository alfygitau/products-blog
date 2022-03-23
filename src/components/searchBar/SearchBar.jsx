import React, { useState } from "react";
import "./searchBar.css";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

const Search = ({ searchProducts }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="x"
              id="search"
              placeholder="Search products, categories and brand"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div className="input-group-text" id="btnGroupAddon">
              <button
                type="submit"
                onClick={() => searchProducts(keyword)}
                style={{ backgroundColor: "transparent" }}
              >
                <SavedSearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
