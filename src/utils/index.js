import { createAction } from 'redux-actions';

const MAGIC_NUBBER_FOR_BEST_IMAGES = 401;

const makeImage = (id, h = 1366, w = 768) =>
  `https://picsum.photos/${h}/${w}/?image=${MAGIC_NUBBER_FOR_BEST_IMAGES + id}`;

const postDate = 'September 14, 2016';

export const requestOperations = ['REQUESTED', 'RECEIVED', 'FAILED'];

export const addFakeData = hash => {
  Object.keys(hash).forEach(id => {
    hash[id].image = makeImage(parseFloat(id));
    hash[id].postDate = postDate;
  });

  return hash;
};

export const objectsArrayToHash = array =>
  array.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

/**
 * Parse Headers.link string to object where key is "rel" parameter
 * Headers.link spec in https://tools.ietf.org/html/rfc2068#section-19.6.2.4
 * @example
 * //returns { first: 'https://someli.nk/f', next: 'https://someli.nk/n'  }
 * parseLinkHeader("<https://someli.nk/f>; rel="first", <https://someli.nk/n>; rel="next"")
 * @param {string} linkHeader - Headers.link
 * @returns {object}
 */
export const parseLinkHeader = linkHeader => {
  const getKey = str => str.match(/rel="([^"]*)"/)[1];
  const getValue = str => str.match(/<([^"]*)>;/)[1];

  return linkHeader.split(',').reduce((acc, item) => {
    const key = getKey(item);
    const value = getValue(item);

    if (!key || !value) {
      throw Error('Cannot parse link header');
    }

    return { ...acc, [key]: value };
  }, {});
};

/**
 * Make object of types for each `statuses`.
 * @example
 * //returns { REQUESTED: "COMMENT_ADD_REQUESTED", RECEIVED: "COMMENT_ADD_RECEIVED" }
 * makeTypes("COMMENT", "ADD", ['REQUESTED', 'RECEIVED'])
 * @param {string} type - resource or subject name
 * @param {string} subtype - action name on the subject
 * @param {string} statuses - operation statuses
 * @returns {object} - hash of types
 */
export const makeTypes = (type, subtype, statuses) => {
  const subject = `${type}_${subtype}`;

  return statuses.reduce(
    (acc, item) => ({ ...acc, [item]: `${subject}_${item}` }),
    {},
  );
};

/**
 * Make object of actions for each keys of `types`.
 * @example
 * //returns { REQUESTED: { action: "COMMENT_ADD_REQUESTED", payload: _ => _ }
 * makeActions({ REQUESTED: "COMMENT_ADD_REQUESTED" })
 * @param  {object} types - object of types (wich return `makeTypes` func).
 * @returns {object} - object of actions
 */
export const makeActions = types => {
  return Object.keys(types).reduce(
    (acc, item) => ({
      ...acc,
      [item.toLowerCase()]: createAction(types[item]),
    }),
    {},
  );
};
