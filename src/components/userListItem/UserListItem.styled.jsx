import styled from 'styled-components';

export const TweetContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
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
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
`;

export const TweetsNumber = styled.p`
  margin-top: 62px;
  margin-bottom: 16px;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 26px;
  width: 196px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 56px;
`;
