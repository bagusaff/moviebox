import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  //Local State
  const [searchKeyword, setSearchKeyword] = useState("");

  //Timer Ref untuk fitur otomatis cari ketika user berhenti mengetikkan kata pada search box
  const timer = useRef(null);

  //Local Function
  const onChange = (newVal) => {
    setSearchKeyword(newVal);
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => proceedSearchMovie(newVal), 1500);
  };

  //Menjalankan fungsi search movie setelah search box berhenti menerima input dari user setelah 1,5 detik
  const proceedSearchMovie = (value) => {};

  return (
    <Wrapper>
      <Title>Movie Box</Title>
      <Desc>Cari Film berdasar judul</Desc>
      <form>
        <input value={searchKeyword} onChange={onChange} />
      </form>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  height: 100vh;
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
