const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// if we are not in a prod env, we will access our secret key inside of .env file
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// converts the body of the incoming requests into json
app.use(bodyParser.json());

// urlencoded converts non-URL friendly symbols/spaces/etc into URL friendly strings
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    // * means every url the user hits, we pass a function with a request and response.
    // the response will be to send static files
    app.get('*', function(req, resp) {
        resp.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.listen(port, error => {
    if (error) throw error;
    console.log('Smooth sailing on port ', port);
});

// Stripe payment
app.post('/payment', (req, resp) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeResp) => {
        if (stripeErr) {
            resp.status(500).send({error: stripeErr});
        } else {
            resp.status(200).send({success: stripeResp});
        };
    });
});