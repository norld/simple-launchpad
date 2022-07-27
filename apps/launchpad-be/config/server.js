/* eslint-disable quotes */
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  production: false,
  proxy: {
    enabled: false,
  },
  cron: {
    enabled: false,
  },
  admin: {
    autoOpen: true,
  },
});
