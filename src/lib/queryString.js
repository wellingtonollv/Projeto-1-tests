const keyValuetoString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your parans');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValuetoString).join('&');

module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
