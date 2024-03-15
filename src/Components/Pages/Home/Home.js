import React from 'react'
import "./Home.scss"
import bannerImg from "../../../Assets/Images/bannerimg.jpg"

const Home = () => {
    return (
        <>
            <div className='Home'>
                <section className='homeBanner'>
                    <img className='w-100' src={bannerImg} alt="Banner" />
                </section>
            </div>
        </>
    )
}

export default Home