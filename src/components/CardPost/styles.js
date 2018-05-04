import red from 'material-ui/colors/red';

export default theme => ({
  card: {},
  cardContent: {
    display: 'block',
    cursor: 'pointer',
  },
  media: {
    position: 'relative',
    height: 0,
    // 16:9
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  imageTitle: {
    ...theme.typography.subheading,
    position: 'absolute',
    bottom: 0,
    margin: '24px 5px 14px 24px',
    textOverflow: 'ellipsis',
    color: '#fff',
  },
  postTitle: {
    ...theme.typography.subheading,
    paddingBottom: 14,
  },
});
