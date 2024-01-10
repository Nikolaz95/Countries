import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Flag from "../assets/bih.png";
import "./CountriesId.css";

const CountriesId = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({
    name: "",
    official: "",
    flagImg: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    currencies: {},
    languages: [],
    borders: [],
  });

  const apiUrl = "https://restcountries.com/v3.1/name/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}${countryName}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const countryDetails = data[0];
            setCountry({
              name: countryDetails.name.common,
              official: countryDetails.name.official,
              flagImg: countryDetails.flags.png,
              population: countryDetails.population,
              region: countryDetails.region,
              subregion: countryDetails.subregion,
              capital: countryDetails.capital,
              currencies: countryDetails.currencies,
              languages: countryDetails.languages,
              borders: countryDetails.borders,
            });
          } else {
            console.error("Country not found");
          }
        } else {
          console.error("Error fetching country details. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchData();
  }, [countryName]);

  return (
    <>
      <div className="headerCounId">
        <NavLink to={"/"}>
          <span className="btn-back arrow-back">
            <AiOutlineArrowLeft /> Back
          </span>
        </NavLink>
      </div>

      <div className="content-countryId">
        <div className="content-left">
          <img
            src={country.flagImg}
            alt=""
            className="country-flag"
          />
        </div>

        <div className="content-right">
          <div className="content-insideRigth">
            <div className="info-right">
              <h1>Native name:</h1>
              <strong>{country.name}</strong>
              <h1>Population:</h1>
              <strong>{country.population}</strong>
              <h1>Region:</h1>
              <strong>{country.region}</strong>
              <h1>Sub Region:</h1>
              <strong>{country.subregion}</strong>
              <h1>Capital:</h1>
              <strong>{country.capital}</strong>
            </div>

            <div className="info-left">
              <h1>Top Level Domain:</h1>
              <strong>{/* Replace with actual data */}</strong>
              <h1>Currencies:</h1>
              <strong>{/* Replace with actual data */}</strong>
              <h1>Languages:</h1>
              <strong>{/* Replace with actual data */}</strong>
            </div>
          </div>

          <div className="info-botom">
            <h1>Border Countries: </h1>

            <div className="borders-countries">
              {country.borders.map((border) => (
                <NavLink to={`/country/${border}`}>
                  <p key={border}>
                    <img
                      src={Flag}
                      height={40}
                      width={40}
                      alt=""
                      className="img-borderCountrt"
                    />{" "}
                    {border}
                  </p>
                </NavLink>
              ))}
            </div>

            <div className="country-location">
              <h1>Country Location:</h1>
              <div className="counrty-gogearth">
                <NavLink
                  to={`https://www.google.com/maps/place/${countryName}`}
                >
                  <p>
                    <img src={country.flagImg} alt="" className="img-borderCountrt" />
                    {countryName}
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesId;