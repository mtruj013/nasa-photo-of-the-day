import React from 'react'

const PhotoCard = ({title, date, copyright, desc, photoUrl}) =>{
    return(
        <div className="photo-card">
            <h2>Title: {title}</h2>
            <h3>Date: {date}</h3>
            <div className="img-container">
                <img className="photo" alt="Astronomy pic of the Day" src={photoUrl}/>
                <p className="copyright">&copy; {copyright}</p>    
            </div>
            <p className="description">{desc}</p>
        </div>
    );
}

export default PhotoCard;