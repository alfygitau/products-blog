import React, { useState } from "react";
import "./searchBar.css";

const Search = ({searchProducts}) => {
  const [keyword, setKeyword] = useState('');
  

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
              onChange={(e)=>setKeyword(e.target.value)}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit" onClick={()=>searchProducts(keyword)}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
