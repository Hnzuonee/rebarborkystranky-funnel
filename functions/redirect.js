exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/barbarella_xoxo',  // ← změň URL
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
};
