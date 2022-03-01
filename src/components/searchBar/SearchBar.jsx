import React, { useState } from "react";
import "./searchBar.css";

const Search = ({searchProducts}) => {
  const [keyword, setKeyword] = useState('');
  

  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              name="x"
              id="search"
              placeholder="Search products, categories and brand"
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="submit" onClick={()=>searchProducts(keyword)}>
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
