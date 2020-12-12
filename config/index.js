const NODE_ENV = process.env.NODE_ENV;

const config = {
  production: {
    mode: "production",
    baseUrl: "http://production",
    api: "http://production/api",
  },
  development: {
    mode: "development",
    baseUrl: "http://development",
    api: "http://development/api",
  },
  test: {
    mode: "test",
    baseUrl: "http://test",
    api: "http://test/api"
  },
};
module.exports = config[NODE_ENV];
