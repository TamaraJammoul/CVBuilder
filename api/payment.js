const router = require("express").Router();
var request = require("request");

router.post("/", (req, res) => {
    const { amount, currency, first_name, email, country_code, number, url } = req.body;

    var options2 = {
        method: 'POST',
        url: 'https://api.tap.company/v2/charges',
        headers:
        {
            'content-type': 'application/json',
            authorization: 'Bearer ' + process.env.Secret_API_Key
        },
        body: {
            amount,
            currency,
            customer: {
                first_name,
                email,
                phone: {
                    country_code,
                    number
                }
            },
            source: {
                id: 'src_all'
            },
            redirect: {
                url: url
            }
        },
        json: true
    };
    request(options2, function (error, response, body) {
        if (error) throw new Error(error);
        else
            return res.status(200).json({
                body,
                msg: "done"
            })
    });
})

module.exports = router



