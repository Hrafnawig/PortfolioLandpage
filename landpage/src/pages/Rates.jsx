import React, {useEffect} from 'react';
import './secondaryPages.scss'
import axios from "axios";
import {Link} from "react-router-dom";
const Rates = () => {
    const [res,setRes] = React.useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/').then((response) => {
            setRes(response.data);
        });
    }, []);
    if (!res) return null;

    return (
        <div>
            <div className='bigTxt'>Rates: </div>
            {res.data.map((value) => {
                return <div className="raw">
                    <div className="txt">{value.city} {value.type} {value.price}</div>
                    <Link to='/book'>
                        <div className="btn" onClick={()=>{sessionStorage.setItem("chosenRoom",value.id)}}>
                        Book this room!
                        </div>
                    </Link>
                </div>
            })}
        </div>
    );
};

export default Rates;