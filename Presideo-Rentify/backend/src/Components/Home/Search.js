import React, { useState } from "react";
import { DatePicker, Space } from "antd";

import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Search = () => {
  const { RangePicker } = DatePicker;
  const [keyword, setKeyword] = useState({});

  //storing the data range value
  const [value, setValue] = useState([]);
  
  const dispatch = useDispatch();
  function searchHandler(e) {
    e.preventDefault();
    dispatch(propertyAction.updateSearchParams(keyword));
    dispatch(getAllProperties());
    setKeyword({
      city: "",
      guests: "",
      dateIn: "",
      dateOut: "",
    });
    setValue([]);
  }

  //function to update a specific field in the keyword state object
  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,
    }));
  };
  return (
    <div className="searchbar">
      {/* Input field for searching destinations */}
      <input
        className="search"
        id="search_destination"
        placeholder="Search Place"
        type="text"
        value={keyword.city}
        onChange={(e) => updateKeyword("city", e.target.value)}
      />

      <span
        className="material-symbols-outlined searchicon"
        onClick={searchHandler}
      >
        search
      </span>
    </div>
  );
};

export default Search;
