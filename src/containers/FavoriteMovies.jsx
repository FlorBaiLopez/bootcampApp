import React, { useState } from "react";

const pelis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pelisFav = [];

let peli = (pelis) => {
    const [pelisFav, setPelisFav] = useState([]);

    const addFav = () => {
        const newArray = [...pelisFav, peli]; 
        setPelisFav(newArray);
    }

    return (
        {
            movies.map((movie) => (
                <Movie
            ))
        }
    )
};
