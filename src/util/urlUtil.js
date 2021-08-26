import queryString from 'query-string';

export function makeUrl(path, currentQuery, value) {
  const url = queryString.stringifyUrl({
    url: `${path}`,
    query: {
      ...currentQuery,
      ...value,
    },
  });
  return url;
}