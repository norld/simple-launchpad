module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f238c05daf33babeaf5e545296f471dc'),
  },
});
