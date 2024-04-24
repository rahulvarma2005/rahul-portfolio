import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,} from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/rahulvarma2005' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/rahul-varma-a2a217252/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/_rahul_varma12/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://twitter.com/rahul_varma12' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
