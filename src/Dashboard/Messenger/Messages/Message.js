import React from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '100%',
  display: 'flex',
  padding: '5px 3px',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#2f3136',
  },
});

const AvatarContainer = styled('div')({
  width: '50px',
  minWidth: '50px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#dcddde',
  wordBreak: 'break-all',
});

const SameAuthorMessageContent = styled('div')({
  color: '#dcddde',
  width: '100%',
  padding: '5px 3px',
  wordBreak: 'break-all',
  '&:hover': {
    backgroundColor: '#2f3136',
  }
}); 

const SameAuthorMessageText = styled('div')({
  marginLeft: '50px',
});


const Message = ({ content, sameAuthor, username, date, sameDay, userDetails }) => {

  const loginUsername = userDetails?.username || "";
  let userNameStyle;
  if (loginUsername === username) {
    userNameStyle = {
      fontSize: "16px",
      color: "#ec4f4f",
    };
  } else {
    userNameStyle = {
      fontSize: "16px",
      color: "rgb(234,189,18)",
    };
  };

  if(sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    )
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={userNameStyle}>
          {username}{' '}
          <span style={{fontSize: '16px', color:'#72767d'}}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Message);