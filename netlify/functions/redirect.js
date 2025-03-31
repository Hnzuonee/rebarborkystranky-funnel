exports.handler = async (event) => {
  return {
    statusCode: 302,
    headers: {
      'Location': 'https://onlyfans.com/barbarella_xoxo', // <- Změň na svůj profil!
      'Cache-Control': 'no-cache',
    },
  };
};
