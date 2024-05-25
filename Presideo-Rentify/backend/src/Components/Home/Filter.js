import React, { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { UseDispatch, useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Filter = () => {
  //state for controlling modal visability.
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state for storing selected filters
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  },[selectedFilters,dispatch]);
  
  //Function to handle opening the modal/PopupWindow
  const handleOpenModal = () => {
    setIsModalOpen(true); // set isModalOpen to true to open the Modal
  };

  //Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); //sets isModalOpen to false to close the Modal
  };

  //Function to handle changes in filter
  const handleFilterChange = (filterName, value) => {
    //Update the selected filters with the new values
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <>
      {/* Click event to open the Modal */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Filter;
