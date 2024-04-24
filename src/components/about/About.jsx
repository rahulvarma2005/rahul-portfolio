import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
//import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    //const downloadResume = async () => {
    //    window.open(Resume, '_blank');
    //}


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Rahul, and I'm based in Hyderabad, India. I am pursuing B.Tech in Computer Science at Vellore Institute of technology.<br /><br />
                            I am excited to embark on a journey of learning and discovery in the world of technology. With a passion for problem-solving and a desire to innovate,
                            I am eager to explore the latest developments in computer science and apply them to real-world challenges.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>React</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                        <button className="btn">Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About