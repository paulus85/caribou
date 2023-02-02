module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://api.caribou.paulriviere.fr',  // TODO A supprimer quand on est en local
  app: {
    keys: env.array('APP_KEYS'),
  },
  dirs: {
    public: env('PUBLIC_FOLDER', "./public")
  }
});
