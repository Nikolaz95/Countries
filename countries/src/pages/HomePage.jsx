



import React from 'react'
import Flag from '../assets/bih.png'



import { AiOutlineArrowDown } from 'react-icons/ai';




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
                        <p>Filter By Reagion </p>
                        <span><AiOutlineArrowDown /></span>
                    </div>
                    <div class="showDrop hideDrop">
                        <p class="region">All</p>
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
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
                        <p>Bosna</p>
                        <p>Population: 3 500 000</p>
                        <p>Region: Europa</p>
                        <p>Capital city: Sarajevo</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
                        <p>Bosna</p>
                        <p>Population: 3 500 000</p>
                        <p>Region: Europa</p>
                        <p>Capital city: Sarajevo</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
                        <p>Bosna</p>
                        <p>Population: 3 500 000</p>
                        <p>Region: Europa</p>
                        <p>Capital city: Sarajevo</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
                        <p>Bosna</p>
                        <p>Population: 3 500 000</p>
                        <p>Region: Europa</p>
                        <p>Capital city: Sarajevo</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
                        <p>Bosna</p>
                        <p>Population: 3 500 000</p>
                        <p>Region: Europa</p>
                        <p>Capital city: Sarajevo</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardTop">
                        <img src={Flag} alt="" />
                    </div>

                    <div className="cardBottom">
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
