// import { useState } from 'react';
import Logo from '../../images/Logo.png';
import picture from '../../images/picture.png';
// import { AddFollowerById } from '../../services/AddFollowerById';
// import { DeleteFollowerById } from '../../services/DeleteFollowerById';
import {
  TweetContainer,
  Line,
  ImgUser,
  TweetsNumber,
  Btn,
} from './UserListItem.styled';

export const UserListItem = ({
  oneUser: { id, user, tweets, avatar },
  followers,
  isFollowing,
  onAddFollower,
  onDeleteFollower,
}) => {
  // const [changeFollower, setNewFollowers] = useState(followers);
  // const [isFollowing, setIsFollowing] = useState(false);

  // const addFollower = tweetId => {
  //   console.log(tweetId);
  //   AddFollowerById(tweetId);
  //   setNewFollowers(state => state + 1);
  //   setIsFollowing(true);
  // };

  // const DeleteFollower = tweetId => {
  //   console.log(tweetId);
  //   DeleteFollowerById(tweetId);
  //   setNewFollowers(state => state - 1);
  //   setIsFollowing(false);
  // };

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
        {isFollowing ? (
          <Btn type="button" onClick={() => onDeleteFollower(id)}>
            following
          </Btn>
        ) : (
          <Btn type="button" onClick={() => onAddFollower(id)}>
            follow
          </Btn>
        )}
      </TweetContainer>
    </>
  );
};
