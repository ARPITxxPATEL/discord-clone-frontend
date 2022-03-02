import React from 'react';
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationList from './PendingInvitationList/PendingInvitationList';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: "224px",
  minWidth: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f3136",
});

const UsernameLabel = styled('div')({
  width: "224px",
  minWidth: "224px",
  height: "5%",
  color: "white",
  fontWeight: "600",
  textAlign: "center",
  marginTop: "10px",
  backgroundColor: "#303239",
});


const FriendsSideBar = ({ userDetails }) => {
  return (
    <MainContainer>
      <UsernameLabel>
        {`@ ${userDetails?.username}`}
      </UsernameLabel>
      <AddFriendButton />
      <FriendsTitle title='Private messages'/>
      <FriendsList />
      <FriendsTitle title='Invitations'/>
      <PendingInvitationList />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(FriendsSideBar);