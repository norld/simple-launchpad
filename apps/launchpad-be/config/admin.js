module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "someRandomLongString"),
  },
  auth: {
    options: {
      expiresIn: "300d",
    },
    secret: env("ADMIN_JWT_SECRET", "f238c05daf33babeaf5e545296f471dc"),
  },
});
