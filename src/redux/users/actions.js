import { objectsArrayToHash } from '@/utils';
import { getAllUsers } from '@/redux/users/requests';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const provideUsers = ({ data }) => ({
  type: RECEIVE_USERS,
  users: objectsArrayToHash(data),
});

export const reciveUsers = params => dispatch =>
  getAllUsers(params).then(response => dispatch(provideUsers(response)));
