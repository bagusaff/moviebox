import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//Import redux actions creator function
import { searchMovies } from "../state";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const dispatch = useDispatch();
  //Redux State
  const { movies, isLoading } = useSelector((state) => state.movie);
  //Local State
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);

  //Local Function
  useEffect(() => {
    dispatch(searchMovies("", page));
  }, []);
  //Menjalankan fungsi search movie setelah search box berhenti menerima input dari user setelah 1,5 detik
  const proceedSearchMovie = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchKeyword, page));
  };
  // infinite scroll listener
  window.onscroll = (e) => {
    const bottom =
      document.documentElement.scrollHeight -
      document.documentElement.scrollTop -
      document.documentElement.clientHeight;
    console.log(document.documentElement.scrollTop);
    if (bottom < 15) {
      let newPage = page + 1;
      setPage(newPage);
      proceedSearchMovie(e, searchKeyword, newPage);
      console.log(page);
    }
  };
  return (
    <Wrapper>
      <Title>Movie Box</Title>
      <Desc>Cari Film berdasar judul</Desc>
      <form onSubmit={proceedSearchMovie}>
        <SearchForm
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <input type="submit" value="Cari" />
      </form>
      <div>
        {movies && movies.length ? (
          movies.map((item, index) => {
            return (
              <MovieCard
                MovieTitle={item.Title}
                Poster={item.Poster}
                Year={item.Year}
                Type={item.Type}
                Id={item.imdbID}
                key={index}
              />
            );
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
      {isLoading && <p>Loading</p>}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  height: auto;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;

const Desc = styled.h4`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
`;

const SearchForm = styled.input`
  width: 100%;
  margin-top: 10px;
`;
