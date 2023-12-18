



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
          const data = await response.json();
          setCountryData(data[0]); // 
        }
      } catch (error) {
        console.error('Error fetching data for Country: ', error);
      }
    };

    fetchData();
  }, [id]);

  /*   if (!countryData) {
      return <div>Loading...</div>;
    } */


  return (
    <>

      <div className="headerCounId">
        <NavLink to={'/'}>
          <span className="btn-back arrow-back"><AiOutlineArrowLeft /> Back</span>
        </NavLink>
      </div>


      <div className="content-countryId">
        <div className="content-left">
          <img src={Flag} height={100} width={100} alt="" />
          {/* {countryData.flags &&
            <img src={countryData.flags.png} alt="" height={400} width={500} />
          } */}
        </div>

        <div className="content-right">

          <div className="info-right">
            <h1>bih</h1>
            <p>Native name :</p>
            <p>Population :</p>
            <p>Region :</p>
            <p>Sub Region :</p>
            <p>Capital :</p>
          </div>

          <div className="info-left">
            <p>Top Level Domain :</p>
            <p>Currencies :</p>
            <p>Languanges :</p>
          </div>

          <div className="info-botom">
            <span>Border Counties: </span>

            <div className="borders-countries">
              <p>bosna</p>
              <p>hrvatska</p>
              <p>srbija</p>
              <p>albanija</p>
            </div>
          </div>
        </div>
      </div>
    </>





  )
}

export default CountriesId
