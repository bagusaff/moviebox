import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Lightbox } from "react-modal-image";
const MovieCard = (props, key) => {
  const { MovieTitle, Year, Id, Type, Poster } = props;
  const [isOpen, setIsOpen] = useState(false);

  const setModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper key={key}>
      {isOpen && <Lightbox large={Poster} onClose={setModal} />}
      <MovieHeader>
        <MoviePoster src={Poster} onClick={setModal} />
      </MovieHeader>
      <MovieContent>
        <Title>{MovieTitle}</Title>
        <InfoWrapper>
          <Label>{Type}</Label>
          <Label>{Year}</Label>
        </InfoWrapper>
        <Link to={{ pathname: `/movie/${Id}` }}>
          <p>See Movie Detail</p>
        </Link>
      </MovieContent>
    </Wrapper>
  );
};

export default MovieCard;

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 650px;
  margin: 2em;
  border-radius: 10px;
  display: flex;
`;

const MovieHeader = styled.div`
  padding: 0;
  margin: 0;
  height: 200px;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MoviePoster = styled.img`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 400px;
  object-fit: cover;
  max-height: 200px;
  cursor: pointer;
`;

const MovieContent = styled.div`
  padding: 18px 18px 24px 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  justify-content: space-between;
`;

const Label = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 600;
`;
