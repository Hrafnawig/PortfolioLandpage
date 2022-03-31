import React from 'react';
import axios from 'axios';
import Moment from "moment";

const Available = () => {
    let data = sessionStorage.getItem("availability");
    data = JSON.parse(data)
    return (
        <div>
            {data.city}
            {Moment(data.dateIn).format('DD MMM')}{Moment(data.dateOut).format('DD MMM')}
        </div>
    );
};

export default Available;