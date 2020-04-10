import styled from 'styled-components';

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '5px solid darkblue',
  'img':{
    objectFit: 'contain',
    maxWidth: 80
  },
  'p':{
    fontWeight: 'bold',
    color: '#6495ED',
    fontSize: 20,
    marginLeft: '1em',
  }
});

export const ButtonWrap = styled.div({
  textAlign: 'center',
  margin: '0.5em 0',
  padding: '0.4em 0',
  backgroundColor: 'white',
  'button': {
    fontSize: 16,
    borderRadius: 6,
    padding: '0.2em 0.5em',
    cursor: 'pointer',
  },
  'button:focus': {
    outline: 'none',
    textDecoration: 'none'
  },
  'button:active': {
    transform: 'scale(0.9)'
  },
  'button:hover': {
    boxShadow: '1px 2px #888888'
  }
});

export const P = styled.p({
  verticalAlign: 'middle',
  color: 'rgba(0, 0, 0, 0.5)',
  opacity: 0.8,
  cursor: 'pointer',
  ':hover':{
    color: 'black',
    opacity: 1,
    textDecoration: 'underline'
  }
});