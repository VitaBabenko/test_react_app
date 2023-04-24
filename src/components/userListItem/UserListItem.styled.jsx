import styled from 'styled-components';

export const TweetContainer = styled.div`
  position: relative;
  max-width: 300px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 380px;
    height: 460px;
  }
`;

export const WrapImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const ImgLogo = styled.img`
  margin-top: 15px;
  margin-left: 15px;
  width: 70px;
  height: 20px;
`;

export const Img = styled.img`
  width: 250px;
  margin-left: 25px;
`;

export const Line = styled.hr`
  margin-top: 18px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ImgUser = styled.img`
  position: absolute;
  top: 158px;
  left: 105px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
`;

export const NameUser = styled.p`
  margin-top: 60px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const TweetsNumber = styled.p`
  margin-top: 25px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowersNumber = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 26px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 40px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;
`;

export const BtnFollowing = styled.button`
  display: block;
  margin-top: 26px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 40px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;
`;
