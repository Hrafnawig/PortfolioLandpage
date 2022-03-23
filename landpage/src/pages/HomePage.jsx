import React from 'react';
import Title from './HomeComponents/Title';
import Navbar from './HomeComponents/HotelNavbar';
import MainPic from './HomeComponents/Main';
import Facilities from './HomeComponents/Facilities';
import Rooms from './HomeComponents/Apartaments';
const HomePage = () => {
    return (
        <div>
            <Title/>
            <Navbar/>
            <MainPic/>
            <Facilities/>
            <Rooms/>
        </div>
    );
};

export default HomePage;
