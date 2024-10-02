// rev hostname to ip address post method
// POST /rev_ip
// {
//   "hostname": "www.google.com"
//   "ip": "201.222.12.8"
// }
// add data.json
// {
//     "www.google.com": {
//         "hostname": "www.google.com",
//         "ip": "201.222.12.8"
//     }
// }

app.post('/rev_ip', (req, res) => {
    let hostname = req.body.hostname;
    let ip = req.body.ip;
    let data = require('./data.json');
    data[hostname] = {
        hostname: hostname,
        ip: ip
    }
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    res.send(data);
});    