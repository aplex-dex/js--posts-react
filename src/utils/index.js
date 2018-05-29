const MAGIC_NUBBER_FOR_BEST_IMAGES = 401;

const makeImage = (id, h = 1366, w = 768) =>
  `https://picsum.photos/${h}/${w}/?image=${MAGIC_NUBBER_FOR_BEST_IMAGES + id}`;

const postDate = 'September 14, 2016';

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
 * @returns {objecct}
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
