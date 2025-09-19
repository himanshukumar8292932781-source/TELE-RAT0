const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8458798870:AAH5QThJni0XnNXg6fDtzQ52TjjDz8MOe_Q',
  id: isNaN(parsedId) ? 7424534996 : parsedId // replace 12345.. with your telegram chat id
};
