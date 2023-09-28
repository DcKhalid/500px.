import React from "react";
import styled from "styled-components";
import pic from "../Assets/download-10.png";
import { BsTrophy } from "react-icons/bs";
import pics from "../Assets/download-8.png";
import { LiaCrownSolid } from "react-icons/lia";
import img from "../Assets/download-12.png";
import { VscBriefcase } from "react-icons/vsc";
import image from "../Assets/download.jpg";
import { LiaPiggyBankSolid } from "react-icons/lia";

const CardScreen = () => {
  return (
    <div>
      <Wrapper>
        <Wrap>
          <Container>
            <Img src={pics} alt="Quest" />
            <Textcontent>
            <Ick>
              <VscBriefcase />
            </Ick>
            <H1>Portfolio</H1>
          </Textcontent>
          </Container>
          <SecondContainer>
            <B>
              <Box>
                <Tx>
                  <Icon>
                    <BsTrophy />
                  </Icon>
                  <h1>Take photos. Win prizes.</h1>
                  <p>
                    Quests are creative photo challenges that encourage you to
                    test your skills and submit your best work for a chance to
                    win exciting prizes. We launch new Quests with unique themes
                    every week so there is always something for everyone!
                  </p>
                  <Button>View Quests</Button>
                </Tx>
              </Box>
              <Box2>
                <P>
                  <img src={pic} alt="Quest" />
                </P>
              </Box2>
            </B>
          </SecondContainer>

          <Container1>
            <Img src={img} alt="Licensing" />
            <Textcontent1>
            <Ick1>
              <LiaCrownSolid />
            </Ick1>
            <H1>Licensing</H1>
          </Textcontent1>
          </Container1>
          <SecondContainer2>
            <B>
              <Box3>
                <P>
                  <img src={image} alt="Get Paid" />
                </P>
              </Box3>
              <Box4>
                <Tx1>
                  <Icon1>
                    <LiaPiggyBankSolid />
                  </Icon1>
                  <h1>Get paid for your photos</h1>
                  <p>
                    Don’t let your photos sit there gathering dust, like on
                    other platforms. Gain exposure and get paid for your work
                    with 500px Licensing. Paid members earn up to 100% royalties
                    and free members earn up to 60% when you license your photos
                    exclusively with 500px.
                  </p>
                  <Button1>Tell me more</Button1>
                </Tx1>
              </Box4>
            </B>
          </SecondContainer2>
        </Wrap>
      </Wrapper>
    </div>
  );
};

export default CardScreen;

const Button1 = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: 20px;
`;

const Icon1 = styled.div`
  font-size: 80px;
`;

const P = styled.div`
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Tx1 = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Box4 = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Box3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const SecondContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Container1 = styled.div`
  /* min-height: 45vh;
  width: 90%;
  background-color: burlywood; */
`;

const H2 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  text-align: center;
`;

const H1 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  text-align: center;
`;
const Ick1 = styled.div`
  background-color:#fedf46;
  color: #000;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  font-size: 70px;
  height: 90px;
  width: 90px;
  @media (max-width: 1024px) {
    /* z-index: -3; */
    /* display: none; */
    margin-top: -15%;
    width: 12%;
    height: 15vh;
    font-size: 40px;
    align-items: center;
  }
`;
const Ick = styled.div`
  background-color:#45457c;
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  font-size: 70px;
  height: 90px;
  width: 90px;
  @media (max-width: 1024px) {
    /* z-index: -3; */
    /* display: none; */
    margin-top: -15%;
    width: 12%;
    height: 15vh;
    font-size: 40px;
    align-items: center;
  }
`;
const Textcontent1 = styled.div`
  height: 15%;
  width: 100%;
  position: absolute;
  bottom: -2530px;
  p {
    color: white;
    text-align: right;
  }

  @media (max-width: 1024px) {
    /* z-index: -3; */
    /* display: none; */
    bottom: -7350px;
  }
    `;

const Textcontent = styled.div`
  height: 15%;
  width: 100%;
  position: absolute;
  bottom: -1600px;
  p {
    color: white;
    text-align: right;
  }

  @media (max-width: 1024px) {
    /* z-index: -3; */
    /* display: none; */
    bottom: -6200px;
  }
    `;

const Tx = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  margin: 40px 0;
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  font-size: 60px;
`;

const Box2 = styled.div`
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Box = styled.div`
  width: 100%;
`;

const B = styled.div`
  width: 90%;
  /* background-color: gray; */
  display: flex;
  /* flex-wrap: wrap; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  /* flex-wrap: wrap; */
`;

const Wrap = styled.div`
  width: 100%;
  margin: 0;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: burlywood; */
`;
