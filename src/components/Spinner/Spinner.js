import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="Loader">
             <Loader
                 type="ThreeDots"
                 color="#00BFFF"
                 height={100}
                 width={100}
                timeout={300} 
                />
        </div>
    );
};

export default Spinner;

