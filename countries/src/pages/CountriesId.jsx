import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import Flag from "../assets/bih.png";

/* icons */
import { AiOutlineArrowLeft } from "react-icons/ai";

/* css */
import "./CountriesId.css";

const CountriesId = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        if (response.ok) {
          const [data] = await response.json();
          console.log(data);
          setCountryData(data);
        }
      } catch (error) {
        console.error("Error fetching data for Country: ", error);
      }
    };

    fetchData();
  }, [id]);

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
            src={Flag}
            alt=""
            /* height={400}
            width={500} */
            className="country-flag"
          />
        </div>

        <div className="content-right">
          <div className="content-insideRigth">
            <div className="info-right">
              <h1>Native name:</h1>
              <strong>Bosna i Hercegovina</strong>
              <h1>Population:</h1>
              <strong>3 000 000</strong>
              <h1>Region:</h1>
              <strong>Balkan</strong>
              <h1>Sub Region:</h1>
              <strong>Ssadasda</strong>
              <h1>Capital:</h1>
              <strong>Sarajevo</strong>
            </div>

            <div className="info-left">
              <h1>Top Level Domain:</h1>
              <strong>Sarajevo</strong>
              <h1>Currencies:</h1>
              <strong>BAM</strong>
              <h1>Languages:</h1>
              <strong>Croatia</strong>
            </div>
          </div>

          <div className="info-botom">
            <h1>Border Counties: </h1>

            <div className="borders-countries">
              <p>
                <img
                  src={Flag}
                  height={40}
                  width={40}
                  alt=""
                  className="img-borderCountrt"
                />{" "}
                Croatia
              </p>
              <p>
                <img
                  src={Flag}
                  height={40}
                  width={40}
                  alt=""
                  className="img-borderCountrt"
                />{" "}
                Croatia
              </p>
              <p>
                <img
                  src={Flag}
                  height={40}
                  width={40}
                  alt=""
                  className="img-borderCountrt"
                />{" "}
                Croatia
              </p>
              <p>
                <img
                  src={Flag}
                  height={40}
                  width={40}
                  alt=""
                  className="img-borderCountrt"
                />{" "}
                Croatia
              </p>
              {/* <p>
                <img
                  src={Flag}
                  height={40}
                  width={40}
                  alt=""
                  className="img-borderCountrt"
                />{" "}
                Croatia
              </p> */}
            </div>

            <div className="country-location">
              <h1>Country Location:</h1>
              <div className="counrty-gogearth">
                <p>
                  <img src={Flag} alt="" className="img-borderCountrt" />
                  <NavLink
                    to={`https://www.google.com/maps/place/Bosna+i+Hercegovina/@43.9159841,17.6762169,8z/data=!3m1!4b1!4m6!3m5!1s0x134ba215c737a9d7:0x6df7e20343b7e90c!8m2!3d43.915886!4d17.679076!16zL20vMDE2NmI?entry=ttu`}
                  >
                    Bosna i Hercegovina
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesId;
