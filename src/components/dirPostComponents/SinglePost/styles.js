export default theme => ({
  card: {},
  cardContent: {
    display: 'block',
    cursor: 'pointer',
  },
  media: {
    position: 'relative',
    height: 0,
    paddingTop: '34.25%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 24,
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
