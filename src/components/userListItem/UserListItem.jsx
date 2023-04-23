import { useState } from 'react';
import { GetTweetById } from '../../services/GetTweetById';
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
  const [isFollowing, setIsFollowing] = useState(false);
  const [newFollowers, setNewFollowers] = useState(followers);

  const addFollower = followerId => {
    GetTweetById(followerId).then(resp => {
      console.log(resp.followers);

      setNewFollowers(prevState => prevState + 1);
      setIsFollowing(true);
    });
  };

  const deleteFollower = followerId => {
    GetTweetById(followerId).then(resp => {
      console.log(resp.followers);

      setNewFollowers(prevState => prevState - 1);
      setIsFollowing(false);
    });
  };

  return (
    <>
      <TweetContainer>
        <img src={Logo} alt="logo" />
        <img src={picture} alt="tweet" />
        <Line />
        <ImgUser src={avatar} alt="avatar" />
        <p>{user}</p>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <p>{newFollowers} followers</p>
        {isFollowing ? (
          <Btn type="button" onClick={() => addFollower(id)}>
            following
          </Btn>
        ) : (
          <Btn type="button" onClick={() => deleteFollower(id)}>
            follow
          </Btn>
        )}
      </TweetContainer>
    </>
  );
};
