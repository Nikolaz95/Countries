import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

/* icons */
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  /* select type */
  const [selectedType, setSelectedType] = useState("all");
  /* show */
  const [filteredResults, setFilteredResults] = useState([]);
  /* funckija za dropdown */
  const [showDropdown, setShowDropdown] = useState(false);
  /* funckija za select Country info */
  const [selectedCountry, setSelectedCountry] = useState(null);

  /* funckija za select Country info */
  const handleCountryClick = (countryData) => {
    setSelectedCountry(countryData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const selectRegion = (e) => {
    setSelectedType(e.target.value);
    setShowDropdown(false);
  };

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
          setFilteredResults(data);
        }
      } catch (error) {
        console.error("Error fetching data Countryes: ", error);
      }
    };

    fetcData();
  }, []);

  useEffect(() => {
    // Filter results whenever searchValue or searchResults change
    const filtered = searchResults.filter((result) => {
      return (
        result.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedType === "all" || result.region.toLowerCase() === selectedType)
      );
    });
    setCurrentPage(1);
    setFilteredResults(filtered);
  }, [searchValue, searchResults, selectedType]);

  // Calculate the range of items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

  // Update current page when user clicks on pagination button
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="overContent">
        <div className="form">
          <input
            type="text"
            className="searchCountry"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for the country"
          />
          <span className="searchIcon">
            <AiOutlineSearch />
          </span>
        </div>
        <div className="dropdown-content">
          <section className="dropdown-menu">
            <p onClick={() => setShowDropdown(!showDropdown)}>
              Filter By Region{" "}
              <AiOutlineArrowUp
                className={showDropdown ? "arrowDrp rotatedArrow" : "arrowDrp"}
              />
            </p>
          </section>
          {showDropdown && (
            <div
              onClick={selectRegion}
              className={`showDrop ${showDropdown ? "active" : ""}`}
            >
              <option value="all" className="region">
                All
              </option>
              <option value="africa" className="region">
                Africa
              </option>
              <option value="americas" className="region">
                America
              </option>
              <option value="asia" className="region">
                Asia
              </option>
              <option value="europe" className="region">
                Europe
              </option>
              <option value="oceania" className="region">
                Oceania
              </option>
            </div>
          )}
        </div>
      </div>

      {/* Display paginated items */}
      <section className="content">
        {currentItems.map((result, index) => (
          <div key={index} className="card">
            <div className="cardTop">
              <NavLink to={`/country/${result.id}`}>
                <img src={result.flags.png} alt="" />
              </NavLink>
            </div>
            <div className="cardBottom">
              <strong>{result.name.common}</strong>
              <strong>Population: {result.population}</strong>
              <strong>Region: {result.region}</strong>
              <strong>Capital city: {result.capital}</strong>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination Controls */}

      <div className="pagination">
        {/* Backward arrow button */}
        <button
          key="prev"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GrLinkPrevious />
        </button>
        {/* Page buttons */}
        {[
          ...Array(Math.ceil(filteredResults.length / itemsPerPage)).keys(),
        ].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => paginate(pageNumber + 1)}
            className={pageNumber + 1 === currentPage ? "activePageButton" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          key="next"
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredResults.length / itemsPerPage)
          }
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
