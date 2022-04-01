import React from 'react';
import './secondaryPages.scss'
const Book = () => {
    let data = sessionStorage.getItem("chosenRoom");
    return (
        <div className="center">
            {data}
        </div>
    );
};

export default Book;