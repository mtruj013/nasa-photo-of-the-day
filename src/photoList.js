//import what need importing 
import React, {useState, useEffect} from 'react'
import axios from 'axios'


//make component 
export default function PhotoList(){
    //add state
    const [photos, setPhotos] =useState([]);

    //Add an effect hook to handle the API call side effect.
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=dFYdf90wadhjU2JZHg1JiatvzJ0qHWUEs13YJ1wW")
        .then(response =>{
            console.log(response);
            setPhotos(response.data)
        })
        .catch(error =>{
            console.log("data was not fetched :(", error);
        })
    }, []);
    return (
        <div className="photoContainer">photos here
        </div>
    )
}