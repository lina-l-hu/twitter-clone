import { useEffect, useState, useReducer } from 'react';
import styled from "styled-components";

import SmallTweet from './SmallTweet';
import TweetTextbox from './TweetTextbox';
import PageHeader from './PageHeader';
import { COLORS } from '../constants';

const HomeFeed = ({status, tweetIds, tweetsById}) => {
    console.log("in homefeed");
    console.log("status", status)

    return (
      <Wrapper>
        {(status === "loading" && 
            <h3>Feed is loading!</h3>)}
    
        {(status === "idle" &&
          <>
          <PageHeader>Home</PageHeader>
          <TweetTextbox /> 
          {tweetIds.map((id) => {
            let tweet = tweetsById[id];
            if (Object.keys(tweet).includes("retweetFrom")) {
              return (
                <SmallTweet key={id} tweetId={tweet.id} isRetweetedPost={true} retweeterHandle={tweet.author.handle} 
                  retweeterAuthor={tweet.author.displayName} avatarSrc={tweet.retweetFrom.avatarSrc}
                  authorHandle={tweet.retweetFrom.handle} authorName={tweet.retweetFrom.displayName}
                  status={tweet.status} date={tweet.timestamp} 
                  mediaSrc={((tweet.media).length !== 0) ? (tweet.media[0]).url: undefined}
                  />
              )
            }
            else {
              return (
                <SmallTweet key={id} tweetId={tweet.id} isRetweetedPost={false} retweeterHandle="" 
                retweeterAuthor="" avatarSrc={tweet.author.avatarSrc}
                  authorHandle={tweet.author.handle} authorName={tweet.author.displayName}
                  status={tweet.status} date={tweet.timestamp} 
                  mediaSrc={((tweet.media).length !== 0) ? (tweet.media[0]).url: undefined}
                  />
              )
            }
          })
        }         
        </>  
        )}
        
      </Wrapper>
    );
};

const Wrapper = styled.div`
  `

// const PageTitle = styled.div`
//     padding: 10px;
//     padding-left: 20px;
//     border: 1px solid ${COLORS.outlineColor};
//     width: 100%;
// `
export default HomeFeed;