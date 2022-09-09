import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import CarsList from "../components/CarsList";
import MyNavbar from "../components/MyNabar";

const Home: NextPage = () => {
  return (
    <div>
      <MyNavbar />
      <Container >
        <CarsList />
      </Container>
    </div>
  );
};

export default Home;
