import React from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSearch} className="search">
        <input
          className="form-control mr-1"
          type="text"
          placeholder="Search"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
        ></input>
        <Link to={`./${searchText}`} data={searchText}>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </form>
    </div>
  );
};
