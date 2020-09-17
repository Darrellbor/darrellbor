const isServer = true;

const clientServer = isServer
  ? "https://idarrel.netlify.app/"
  : "http://localhost:3000/";

module.exports = {
  isServer,
  clientServer,
};
