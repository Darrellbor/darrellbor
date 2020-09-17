module.exports.formatNumber = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports.generateKey = length => {
  let key = "";

  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*_$";

  for (let i = 0; i < length; i++)
    key += possible.charAt(Math.floor(Math.random() * possible.length));

  return key;
};
