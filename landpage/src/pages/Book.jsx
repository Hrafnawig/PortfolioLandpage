import React, {useEffect} from 'react';
import './secondaryPages.scss'
import axios from "axios";
import Calendar from 'react-calendar';
import Moment from 'moment';
import CustomPopup from "./CustomPopup";
import './HomeComponents/footer.scss'

const Book = () => {
    Moment.locale('en');
    let chosenRoom = sessionStorage.getItem("chosenRoom");
    let ValidatedRoom = sessionStorage.getItem("AchosenRoom");
    const [visibility, setVisibility] = React.useState(false);
    const [showWarn, setWarn] = React.useState(false);
    const [choosed,setTrue] = React.useState(!!chosenRoom||!!ValidatedRoom);
    const [valid, setValid] = React.useState(!!ValidatedRoom);
    const [res,setRes] = React.useState('')
    const [city,setCity] = React.useState('')
    const [type,setType] = React.useState('')
    const [dateIn,setIn] = React.useState(new Date())
    const [dateOut,setOut] = React.useState(new Date())
    const [price, setPrice] = React.useState(0)
    const [id,setId] = React.useState(0)
    const [confirm,setConfirm] = React.useState(undefined)
    if(confirm==='OK'){
        window.location.href = '/';
    }

    useEffect(() => {
        axios.get('http://localhost:3000/').then((response) => {
            setRes(response.data);
        });
    }, []);
    if (!res) return null;

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    let searchedRoom = [];
    const findRoom=()=>{
        for(let i of res.data){
            if(city===i.city && type===i.type &&
                dateIn.toString()>i.in.toString() &&
                dateOut.toString()>i.out.toString()){
                searchedRoom.push(i)
            }
        }
    }

    const searchRoom= ()=>{
        findRoom();
        if(searchedRoom[0]){
            setVisibility(!visibility)
            setWarn(false)
            setPrice(searchedRoom[0].price)
            setId(searchedRoom[0].id)
        }
        else{
            setWarn(true)
        }
    }

    const BookRoom=(id)=>{
        console.log(id)
            axios.post(`http://localhost:3000/book`,{
                inB:dateIn,
                outB:dateOut,
                roomId:id
            }).then((response) => {
                if(response)
                setConfirm(response.statusText);
            });
    }

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
                <Calendar className='txt' onChange={setIn} value={dateIn}/>
                <Calendar className='txt' onChange={setOut} value={dateOut}/>
                <div className='btn' onClick={()=>{searchRoom()}}>Search</div>
                <div className={showWarn? 'warning'  : 'hidden'}>
                    No available rooms! Search another room or set another date!
                </div>
            </div>
            <div className={!valid&&choosed?  'centerColumn': 'hidden' }>

            </div>
             <CustomPopup
               onClose={popupCloseHandler}
               show={visibility}>
                 <div className='centerColumn'>
                     <div className='bigTxt'>Price of this room - {price}</div>
                     <div className='bigTxt'>Book?</div>
                     <div className='center btn' onClick={()=>{BookRoom(id)}}>Confirm</div>
                 </div>
             </CustomPopup>
        </div>
    );
};

export default Book;
