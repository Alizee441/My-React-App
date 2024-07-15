// src/components/MovieCard.js
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteMovie, likeMovie, dislikeMovie } from '../redux/moviesSlice';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 8px;
  flex: 1 0 21%; /* responsive cards */
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align items from top to bottom */
  aspect-ratio: 1; /* Force aspect ratio to 1:1 (square) */
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Category = styled.div`
  background: #f0f0f0;
  color: #777;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: inline-block;
  max-width: max-content;
  margin: 0 auto; /* Center the category */
`;

const Ratio = styled.div`
  background-color: #f1f1f1;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 8px;
`;

const RatioBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${props => props.width}%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Button = styled.button`
  margin: 0 4px;
  padding: 8px;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.bgColor};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: ${props => props.bgColor};
  }
`;

const LikeButton = styled(Button)`
  background-color: #28a745; /* green */
`;

const DislikeButton = styled(Button)`
  background-color: #dc3545; /* red */
`;

const DeleteButton = styled(Button)`
  background-color: #6c757d; /* gray */
  align-self: flex-end; /* Align button to the end of the container */
`;

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteMovie(movie.id));
  const handleLike = () => dispatch(likeMovie(movie.id));
  const handleDislike = () => dispatch(dislikeMovie(movie.id));
  const ratio = (movie.likes / (movie.likes + movie.dislikes)) * 100;

  return (
    <Card>
      <Title>{movie.title}</Title>
      <Category>{movie.category}</Category>
      <Ratio>
        <RatioBar width={ratio} />
      </Ratio>
      <ButtonContainer>
        <LikeButton bgColor="#28a745" textColor="#ffffff" onClick={handleLike}>Like</LikeButton>
        <DislikeButton bgColor="#dc3545" textColor="#ffffff" onClick={handleDislike}>Dislike</DislikeButton>
      </ButtonContainer>
      <DeleteButton bgColor="#6c757d" textColor="#ffffff" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i> Delete
      </DeleteButton>
    </Card>
  );
};

export default MovieCard;
