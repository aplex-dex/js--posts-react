export default theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.breakpoints.values.md,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  cardWrapper: {
    paddingTop: theme.spacing.unit * 4,
  },
});
