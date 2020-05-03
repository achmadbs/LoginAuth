import styled from 'styled-components';
import background from '../../Assets/Images/poring.jpg';

export const P = styled.label({
  fontWeight: 'bold',
  color: '#6495ED',
  fontSize: 18,
  textIndent: '1em',
  paddingTop: '1em',
  textTransform: 'capitalize'
});

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottom: '1px solid',
  backgroundImage: 'linear-gradient(#80b3ff, #b3d1ff)',
  borderRadius: 3,
  padding: '5px 8px',
  '& span':{
    width: '1em',
    height: '1em',
    borderRadius: 50,
    backgroundImage: 'linear-gradient(#0039e6, #b3ecff)',
    border: '0.5px solid'
  },
  'p':{
    paddingLeft: 5
  }
});

export const Card = styled.div({
  border: '1px solid',
  borderTop: 'none',
  borderRadius: 5,
  boxSizing: 'border-box'
});

export const ButtonWrap = styled.div({
  borderTop: '1px solid', 
  padding: '0.4em 0.6em',
  display: 'flex',
  alignItems: 'center',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  backgroundColor: 'white',
  'button':{
    fontSize: 16,
    borderRadius: 6,
    padding: '0.2em 0.5em',
    cursor: 'pointer',
    marginRight: 6,
  },
  'button:focus':{
    outline: 'none',
    textDecoration: 'none'
  },
  'button:active':{
    transform: 'scale(0.9)'
  },
  'button:hover':{
    boxShadow: '1px 2px #888888'
  }
});

export const Background = styled.div ({
  background: `url(${background})`,
  height: '100vh',
  overflow: 'hidden'
});