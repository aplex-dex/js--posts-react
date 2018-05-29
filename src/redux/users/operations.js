import { getAllUsers } from '@/api';
import { receiveUsers } from './actions';

export const reciveUsers = params => dispatch =>
  getAllUsers(params).then(({ data }) => dispatch(receiveUsers(data)));
