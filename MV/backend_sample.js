const http = require('http');
const port = 3000;

function parseJSONBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/contact') {
    try {
      const data = await parseJSONBody(req);
      console.log('Received contact:', data);
      // In production you'd persist this to DB or forward as email.
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify({ok:true}));
    } catch (err) {
      res.writeHead(400, {'Content-Type':'text/plain'});
      res.end('invalid json');
    }
    return;
  }

  if (req.method === 'GET' && req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Backend demo running. POST /api/contact with JSON');
    return;
  }

  res.writeHead(404, {'Content-Type':'text/plain'});
  res.end('Not Found');
});

server.listen(port, () => console.log(`Demo backend listening on http://localhost:${port}`));
