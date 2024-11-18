import "./Search.style.css";
import React, { useContext } from "react";
import { SearchContext } from "../../context";

export function Search({}) {
    
    const search = useContext(SearchContext)
  return (
    <div className="header__search">
      <input
        type="text"
        id="myInput"
        name="myInput"
        placeholder="Поиск..."
        onChange={(e)=>{
            search.onChange(e.target.value)
        }}  
      ></input>
      
    </div>
  );
}
