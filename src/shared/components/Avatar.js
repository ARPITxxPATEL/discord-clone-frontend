import React from 'react';
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
  height: '35px',
  width: '35px',
  borderRadius: '35px',
  backgroundColor: '#5865f2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: '700',
  color: 'white',
  letterSpacing: '1px',
})

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: '80px',width: '80px', fontSize: '35px', borderRadius: '80px' } : {} }>
      {username.substring(0, 2)}
    </AvatarPreview>
  )
}

export default Avatar;