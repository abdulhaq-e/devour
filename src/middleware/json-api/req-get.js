module.exports = {
  name: 'GET',
  req: (payload) => {
    if (payload.req.method === 'GET') {
      payload.req.headers = {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }
      payload.req.data = {}
    }

    return payload
  }
}
