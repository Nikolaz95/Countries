



import React from 'react'
import Flag from '../assets/bih.png'

const HomePage = () => {
  return (
    <div>

        <div className="overContent">

        <form action="">
            <input type="text" 
            placeholder='Search for the country'
            />
        </form>

        <div class="dropdown-content">
          <div class="dropdown-menu">
            <p>Filter By Reagion</p>
            <button></button>
          </div>
          <div class="drop showDropDown">
            <p class="region">Africa</p>
            <p class="region">America</p>
            <p class="region">Asia</p>
            <p class="region">Europe</p>
            <p class="region">Oceania</p>
          </div>
        </div>

        </div>
        

        <section className='content'>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>


            <div className="card">
                <div className="top">
                    <img src={Flag} alt="" /* height={150} width={200} */ />
                </div>

                <div className="bottom">
                    <p>Bosna</p>
                    <p>Population: 3 500 000</p>
                    <p>Region: Europa</p>
                    <p>Capital city: Sarajevo</p>
                </div>
            </div>







        </section>
      
    </div>
  )
}

export default HomePage
