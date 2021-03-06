import React, {useEffect} from 'react';
import axios from 'axios';
import './secondaryPages.scss'
import {Link} from "react-router-dom";

const Available = () => {
    const [res,setRes] = React.useState('')
    let data = sessionStorage.getItem("availability");
    data = JSON.parse(data)
    useEffect(() => {
        axios.get('http://localhost:3000/').then((response) => {
            setRes(response.data);
        });
    }, []);
    if (!res) return null;
    const availableRooms = [];
    for(let i of res.data){
        if(new Date(data.dateIn)>new Date(i.in)
            && new Date(data.dateOut)>new Date(i.out)
            && data.city===i.city){
                availableRooms.push(i)
        }
    }
    return (
            <div>
                <div className='bigTxt'>Available: </div>
                {availableRooms.map((value) => {
                    return <div className="raw">
                        <div className="txt">{value.city} {value.type} {value.price}</div>
                        <Link to='/book'>
                            <div className="btn" onClick={()=>{sessionStorage.setItem("AchosenRoom",value.id)}}>
                                Book this room!
                            </div>
                        </Link>
                    </div>
                })}
            </div>
    );
};

export default Available;