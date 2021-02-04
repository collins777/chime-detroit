import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeOne from "../../assets/images/home-1.jpg";
import HomeTwo from "../../assets/images/home-2.jpg";

////////////////////////////////////////////////////////////
///// STYLED COMPONENTS

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vh - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center; 
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

////////////////////////////////////////////////////////////
///// REACT

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>View our newest Homes</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={HomeOne} alt="home" />
            <h2>8 Bed 10 Bath House in Venice, CA</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image src={HomeTwo} alt="home" css={`margin-top: 120px; @media screen and (max-width: 768px) {margin-top: 0px;}`} />
            <h2>4 Bed 2 Bath House in Maimi, FL</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;