import React, {useEffect} from 'react';
import './secondaryPages.scss'
import axios from "axios";
import Calendar from 'react-calendar';
import Moment from 'moment';

const Book = () => {
    Moment.locale('en');
    let chosenRoom = sessionStorage.getItem("chosenRoom");
    let ValidatedRoom = sessionStorage.getItem("AchosenRoom");
    const [choosed,setTrue] = React.useState(!!chosenRoom||!!ValidatedRoom);
    const [valid, setValid] = React.useState(!!ValidatedRoom);
    const [res,setRes] = React.useState('')
    const [city,setCity] = React.useState('')
    const [type,setType] = React.useState('')
    const [dateIn,setIn] = React.useState(new Date())
    const [dateOut,setOut] = React.useState(new Date())
    const [confirm,setConfirm] = React.useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/').then((response) => {
            setRes(response.data);
        });
    }, []);
    if (!res) return null;
    console.log(`choosed ${choosed}`, ` valid ${valid}` )
    return (
        <div className="center">
            {chosenRoom} {ValidatedRoom}
            <div className={choosed? 'hidden' : 'centerColumn' }>
                <div className='bigTxt'>Enter city, type of room, in and out date</div>
                <input
                    className='txt'
                    name="city"
                    placeholder="city"
                    type="city"
                    onChange={event => setCity(event.target.value)}
                />
                <input
                    className='txt'
                    name="type"
                    placeholder="type of room"
                    type="type"
                    onChange={event => setType(event.target.value)}
                />
                <Calendar className='dropMenu' onChange={setIn} value={dateIn}/>
                <Calendar className='dropMenu' onChange={setOut} value={dateOut}/>
                <div className='btn'>Search</div>
            </div>

        </div>
    );
};

export default Book;
//change centerColumn to grid , add rates option and direct creation, pop up