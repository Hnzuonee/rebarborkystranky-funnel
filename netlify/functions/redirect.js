exports.handler = async (event) => {
  return {
    statusCode: 302,
    headers: {
      'Location': 'https://onlyfans.com/tvuj-cilovy-profil', // <- Změň na svůj profil!
      'Cache-Control': 'no-cache',
    },
  };
};
