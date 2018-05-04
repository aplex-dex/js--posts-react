const buttonPlace = {
  position: 'fixed',
  top: 0,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: 20,
};

export default {
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 96px',
  },
  buttonLeftPlace: {
    ...buttonPlace,
    left: 0,
  },
  buttonRightPlace: {
    ...buttonPlace,
    right: 0,
  },
  leftButton: {
    transform: 'rotate(180deg)',
  },
};
