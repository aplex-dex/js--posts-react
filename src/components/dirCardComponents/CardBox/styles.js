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
  imageTitle: {
    ...theme.typography.subheading,
    position: 'absolute',
    bottom: 0,
    marginTop: 24,
    marginRight: 5,
    marginBottom: 14,
    marginLeft: 24,
    textOverflow: 'ellipsis',
    color: '#fff',
  },
  postTitle: {
    ...theme.typography.subheading,
    paddingBottom: 14,
  },
});
