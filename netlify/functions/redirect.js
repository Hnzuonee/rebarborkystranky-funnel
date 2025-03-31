exports.handler = async (event) => {
  return {
    statusCode: 302,
    headers: {
      'Location': 'https://onlyfans.com/barbora.pribylova', // <- Změň na svůj profil!
      'Cache-Control': 'no-cache',
    },
  };
};
