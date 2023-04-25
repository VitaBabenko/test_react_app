import { useState } from 'react';
import { GetTweetById } from '../../services/GetTweetById';
import Logo from '../../images/Logo.png';
import picture from '../../images/picture.png';
import {
  TweetContainer,
  WrapImg,
  ImgLogo,
  Img,
  Line,
  ImgUser,
  NameUser,
  TweetsNumber,
  FollowersNumber,
  Btn,
  BtnFollowing,
} from './UserListItem.styled';

export const UserListItem = ({
  oneUser: { id, user, tweets, followers, avatar },
}) => {
  const [newFollowers, setNewFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowing = tweetId => {
    GetTweetById(tweetId).then(resp => {
      console.log(resp);
      setNewFollowers(prevState => prevState + 1);
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users);
      const index = users.findIndex(user => user.id === resp.id);
      const userFind = users.find(user => user.id === resp.id);
      userFind.followers = userFind.followers + 1;

      console.log(userFind);
      console.log(index);
      users.splice(index, 1, userFind);
      console.log(users);
      localStorage.setItem('users', JSON.stringify(users));
    });

    setIsFollowing(true);
  };

  const handleFollow = tweetId => {
    GetTweetById(tweetId).then(resp => {
      console.log(resp);
      setNewFollowers(prevState => prevState - 1);
    });
    setIsFollowing(false);
  };

  return (
    <>
      <TweetContainer>
        <WrapImg>
          <ImgLogo src={Logo} alt="logo" />
          <Img src={picture} alt="tweet" />
        </WrapImg>
        <Line />
        <ImgUser src={avatar} alt="avatar" />
        <NameUser>{user}</NameUser>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <FollowersNumber>{newFollowers} followers</FollowersNumber>
        {isFollowing ? (
          <BtnFollowing type="button" onClick={() => handleFollow(id)}>
            following
          </BtnFollowing>
        ) : (
          <Btn type="button" onClick={() => handleFollowing(id)}>
            follow
          </Btn>
        )}
      </TweetContainer>
    </>
  );
};
