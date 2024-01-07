



import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';



import Flag from '../assets/bih.png'


/* icons */
import { AiOutlineArrowLeft } from "react-icons/ai";


/* css */
import './CountriesId.css';

const CountriesId = () => {


  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (response.ok) {
          const [data] = await response.json();
          console.log(data);
          setCountryData(data);
        }
      } catch (error) {
        console.error('Error fetching data for Country: ', error);
      }
    };

    fetchData();
  }, [id]);



  return (
    <>

      <div className="headerCounId">
        <NavLink to={'/'}>
          <span className="btn-back arrow-back"><AiOutlineArrowLeft /> Back</span>
        </NavLink>
      </div>


      <div className="content-countryId">
        <div className="content-left">
          {countryData && countryData.flags && (
            <img src={countryData.flags.png} alt="" height={400} width={500} />
          )}
        </div>

        <div className="content-right">

          <div className="info-right">
            <p>Native name : {countryData && countryData.nativeName.common}</p>
            <p>Population : {countryData && countryData.population}</p>
            <p>Region : {countryData && countryData.region}</p>
            <p>Sub Region : {countryData && countryData.subregion}</p>
            <p>Capital : {countryData && countryData.capital}</p>
          </div>

          <div className="info-left">
            <p>Top Level Domain : {countryData && countryData.tld && countryData.tld[0]}</p>
            <p>Currencies : {countryData && countryData.currencies && Object.values(countryData.currencies).join(', ')}</p>
            <p>Languages : {countryData && countryData.languages && Object.values(countryData.languages).join(', ')}</p>
          </div>

          <div className="info-botom">
            <span>Border Counties: </span>

            <div className="borders-countries">
              {countryData && countryData.borders && countryData.borders.map((border) => (
                <p key={border}>{border}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>





  )
}

export default CountriesId
