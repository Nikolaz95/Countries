



import React from 'react'


import Flag from '../assets/bih.png'


import './CountriesId.css';

const CountriesId = () => {
  return (
    <>
      <div className="headerCounId">
        <span className="btn-back">Back</span>
      </div>


      <div className="content-countryId">
        <div className="content-left">
          <img src={Flag} alt="" height={400} width={500} />
        </div>

        <div className="content-right">

          <div className="info-right">
          <h1>Bosna and Herzegovina</h1>
          <p>Native name:</p>
          <p>Population:</p>
          <p>Region:</p>
          <p>Sub Region:</p>
          <p>Capital</p>
          </div>

          <div className="info-left">
            <p>Top Level Domain:</p>
            <p>Currencies:</p>
            <p>Languanges:</p>
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
