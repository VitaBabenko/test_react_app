import { useState } from 'react';
import { PutIncrementById } from '../../services/PutIncrementById';
import { PutDecrementById } from '../../services/PutDecrementById';
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
  BtnFollowing,
  Btn,
} from './UserListItem.styled';

export const UserListItem = ({
  oneUser: { id, user, tweets, followers, avatar, following },
}) => {
  const [newFollowers, setNewFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(following);

  const handleFollowing = tweetId => {
    console.log('plus');
    PutIncrementById(tweetId, followers).then(resp => {
      setNewFollowers(prevState => prevState + 1);
      setIsFollowing(true);
      console.log(resp);
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users);
      const index = users.findIndex(user => user.id === resp.id);
      console.log(index);
      const userFind = users.find(user => user.id === resp.id);
      userFind.followers = userFind.followers + 1;
      userFind.following = true;
      console.log(userFind);
      users.splice(index, 1, userFind);
      localStorage.setItem('users', JSON.stringify(users));
    });
  };

  const handleFollow = tweetId => {
    console.log('minus');
    PutDecrementById(tweetId, followers).then(resp => {
      setNewFollowers(prevState => prevState - 1);
      setIsFollowing(false);
      console.log(resp);
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users);
      const index = users.findIndex(user => user.id === resp.id);
      console.log(index);
      const userFind = users.find(user => user.id === resp.id);
      userFind.followers = userFind.followers - 1;
      userFind.following = false;
      console.log(userFind);
      users.splice(index, 1, userFind);
      localStorage.setItem('users', JSON.stringify(users));
    });
  };

  const numberWithDelimiter = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
        <FollowersNumber>
          {numberWithDelimiter(newFollowers)} followers
        </FollowersNumber>
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
