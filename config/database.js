module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: process.env.MONGO_CLIENT_KWC
      },
      options: {
        ssl: true
      }
    }
  },
});
