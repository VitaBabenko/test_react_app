import Logo from '../../images/Logo.png';
import picture from '../../images/picture.png';
import {
  TweetContainer,
  Line,
  ImgUser,
  TweetsNumber,
  Btn,
} from './UserListItem.styled';

export const UserListItem = ({
  oneUser: { id, user, tweets, followers, avatar },
}) => {
  return (
    <>
      <TweetContainer>
        <img src={Logo} alt="logo" />
        <img src={picture} alt="tweet" />
        <Line />
        <ImgUser src={avatar} alt="avatar" />
        <p>{user}</p>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <p>{followers} followers</p>
        <Btn type="button">follow</Btn>
      </TweetContainer>
    </>
  );
};
