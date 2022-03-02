import React from 'react';
import { styled } from '@mui/system';

const Separator = styled('div')({
  width: '100%',
  height: '1px',
  backgroundColor: '#b9bbbe',
  position: 'relative',
  marginTop: '20px',
  marginBottom: '10px',
});

const DateLabel = styled('div')({
  backgroundColor: '#36393f',
  position: 'absolute',
  top: '-10px',
  left: '45%',
  color: '#b9bbbe',
  padding: '0 5px',
  fontSize: '14px',
});

const DateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  )
}

export default DateSeparator;