



import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';


/* icons */
import { AiOutlineArrowUp, AiOutlineSearch } from 'react-icons/ai';




const HomePage = () => {


    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    /* select type */
    const [selectedType, setSelectedType] = useState('all')


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



    const selectRegion = (e) => {
        setSelectedType(e.target.value)
        setShowDropdown(false);
    }

    useEffect(() => {
        const fetcData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data);
                    setFilteredResults(data);
                }
            }
            catch (error) {
                console.error('Error fetching data Countryes: ', error);
            }
        };

        fetcData();
    }, []);


    useEffect(() => {
        // Filter results whenever searchValue or searchResults change
        const filtered = searchResults.filter((result) => {
            return (
                result.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
                (selectedType === 'all' || result.region.toLowerCase() === selectedType)
            );
        });
        setFilteredResults(filtered);
    }, [searchValue, searchResults, selectedType]);


    return (
        <div>

            <div className="overContent">


                <div className="form">
                    <input type="text"
                        className='searchCountry'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='Search for the country'
                    />
                    <span className='searchIcon'><AiOutlineSearch /></span>
                </div>

                <div className="dropdown-content">
                    <section className="dropdown-menu">
                        <p onClick={() => setShowDropdown(!showDropdown)}>Filter By Reagion <AiOutlineArrowUp className={showDropdown ? 'arrowDrp rotatedArrow' : 'arrowDrp'} />
                        </p>
                    </section>
                    {showDropdown && (
                        <div onClick={selectRegion} className={`showDrop ${showDropdown ? 'active' : ''}`}>
                            <option value="all" className="region">All</option>
                            <option value="africa" className="region">Africa</option>
                            <option value="americas" className="region">America</option>
                            <option value="asia" className="region">Asia</option>
                            <option value="europe" className="region">Europe</option>
                            <option value="oceania" className="region">Oceania</option>
                        </div >
                    )}
                </div>

            </div>


            <section className='content'>
                {filteredResults.map((result) => (

                    <div key={result.id} className="card">
                        <div className="cardTop">
                            <NavLink key={result.id} to={`/country/${result.id}`}>
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

        </div>
    )
}

export default HomePage
