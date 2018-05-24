export const getUsers = ({ users }) => users;

export const getCurrentUser = ({ users, posts: { items, currentPostId } }) =>
  users[items[currentPostId].userId];

export const getUserById = ({ users }, { userId }) => users[userId];
