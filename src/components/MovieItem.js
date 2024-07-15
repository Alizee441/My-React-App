import React from 'react';

const MovieItem = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Category: {movie.category}</p>
            <p>Likes: {movie.likes}</p>
            <p>Dislikes: {movie.dislikes}</p>
        </div>
    );
};

export default MovieItem; // Exportation par défaut
