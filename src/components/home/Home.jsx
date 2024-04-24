import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-4.svg';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Rahul Varma</h1>
                <span className="home__education">I'm an aspiring Software Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>
            </div>

            <Shapes />
        </section>
    )
}

export default Home