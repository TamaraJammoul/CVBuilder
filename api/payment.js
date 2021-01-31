var http = require("https");

var options = {
    "method": "POST",
    "hostname": "api.tap.company",
    "port": null,
    "path": "/v2/tokens",
    "headers": {
        "authorization": "Bearer " + process.env.Secret_API_Key,
        "content-type": "application/json"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.write(JSON.stringify({
    card:
    {
        number: 5123450000000008,
        exp_month: 12,
        exp_year: 21,
        cvc: 124,
        name: 'test user',
        address:
        {
            country: 'Kuwait',
            line1: 'Salmiya, 21',
            city: 'Kuwait city',
            street: 'Salim',
            avenue: 'Gulf'
        }
    },
    client_ip: '192.168.1.20'
}));
req.end();
