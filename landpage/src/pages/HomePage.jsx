import React, {useEffect} from 'react';
import Title from './HomeComponents/Title';
import Navbar from './HomeComponents/HotelNavbar';
import MainPic from './HomeComponents/Main';
import Facilities from './HomeComponents/Facilities';
import Rooms from './HomeComponents/Apartaments';
import Footer from './HomeComponents/Footer';
const HomePage = () => {
    useEffect(() => {
        setTimeout(function () { window.location.href = "#title";
            window.history.replaceState(null, null, "/")
        }, 100);
    }, []);
    return (
        <div>
            <Title/>
            <Navbar/>
            <MainPic/>
            <Facilities/>
            <Rooms/>
            <Footer/>
        </div>
    );
};

export default HomePage;
