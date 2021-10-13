import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMovieDetail } from "../state";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  //Redux State
  const { movieDetail, isLoading } = useSelector((state) => state.movie);
  useEffect(() => {
    let ignore = false;
    dispatch(fetchMovieDetail(id));
    return () => {
      ignore = true;
    };
  }, [dispatch, id]);
  return (
    <Wrapper key={id}>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <MoviePoster src={movieDetail.Poster} />
          <DetailWrapper>
            <Title>Movie Title</Title>
            <h2>{movieDetail.Title}</h2>
            <Title>Rated</Title>
            <h2>{movieDetail.Rated}</h2>
            <Title>Date Released</Title>
            <h2>{movieDetail.Released}</h2>
            <Title>Total Runtime</Title>
            <h2>{movieDetail.Runtime}</h2>
            <Title>Genre</Title>
            <h2>{movieDetail.Genre}</h2>
            <Title>Director</Title>
            <h2>{movieDetail.Director}</h2>
            <Title>Actor</Title>
            <h2>{movieDetail.Actors}</h2>
            <Title>Plot</Title>
            <h2>{movieDetail.Plot}</h2>
            <Title>Awards</Title>
            <h2>{movieDetail.Awards}</h2>
            <Title>Ratings</Title>
            {movieDetail.Ratings && movieDetail.Ratings.length > 0 ? (
              movieDetail.Ratings.map((item, index) => {
                return (
                  <h2 key={index}>
                    {item.Source} : {item.Value}
                  </h2>
                );
              })
            ) : (
              <h2>N/A</h2>
            )}
            <Title>BoxOffice</Title>
            <h2>{movieDetail.BoxOffice}</h2>
          </DetailWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default MovieDetail;

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  height: 100vh;
  overflow-y: visible;
`;

const MoviePoster = styled.img`
  border-radius: 10px;
  width: 270px;
  object-fit: cover;
  height: 330px;
  margin-right: 20px;
  float: left;
`;

const DetailWrapper = styled.div``;

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
`;
