export async function get(req) {
  return {
    json: {
      message: "Hello from your api route!",
      // aboutPath: 'https://doerger.net'
    },
  };
}
