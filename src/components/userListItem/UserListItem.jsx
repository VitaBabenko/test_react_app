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

  const useToggle = () => {
    const following = tweetId => {
      GetTweetById(tweetId).then(resp => {
        console.log(resp.followers);
        setNewFollowers(prevState => prevState + 1);
      });
      setIsFollowing(true);
    };

    const follow = tweetId => {
      GetTweetById(tweetId).then(resp => {
        console.log(resp.followers);
        setNewFollowers(prevState => prevState - 1);
      });
      setIsFollowing(false);
    };
    const toggle = () => setIsFollowing(isFollowing => !isFollowing);

    return { isFollowing, following, follow, toggle };
  };

  const { following, follow } = useToggle();

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
          <BtnFollowing type="button" onClick={() => follow(id)}>
            following
          </BtnFollowing>
        ) : (
          <Btn type="button" onClick={() => following(id)}>
            follow
          </Btn>
        )}
      </TweetContainer>
    </>
  );
};
