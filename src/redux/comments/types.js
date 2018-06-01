import { makeTypes, requestOperations } from '@/utils';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const COMMENT_ADD = makeTypes('COMMENT', 'ADD', requestOperations);
