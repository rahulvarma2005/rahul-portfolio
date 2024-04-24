import React from 'react';
import './interest.css';
import Image1 from '../../assets/interest1.svg'
import Image2 from '../../assets/interest2.svg'
import Image3 from '../../assets/interest3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image3,
        title: "Mobile Development",
        description:
            "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintained",
    },
];

const Interest = () => {
    return (
        <section className="Interest container section" id="Interest">
            <h2 className="section__title">Areas of Interest</h2>

            <div className="Interest__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="Interest__card" key={id}>
                            <img src={image} alt='' className='Interest__img' width="80" />

                            <h3 className="Interest__title">{title}</h3>
                            <p className="Interest__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Interest