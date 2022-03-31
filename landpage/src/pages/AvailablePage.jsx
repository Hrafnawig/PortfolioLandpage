import React, {useEffect} from 'react';
import axios from 'axios';
import Moment from "moment";

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
        return (
            <div>
                {data.city}
                {res.data[0].price}
                {Moment(data.dateIn).format('DD MMM')}{Moment(data.dateOut).format('DD MMM')}
            </div>
        );
};

export default Available;