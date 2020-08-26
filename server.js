const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

// if we are not in a prod env, we will access our secret key inside of .env file
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// adds compression and gzipping to our server
app.use(compression());

// converts the body of the incoming requests into json
app.use(bodyParser.json());

// urlencoded converts non-URL friendly symbols/spaces/etc into URL friendly strings
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    // forces prod environment to use HTTPS
    app.use(enforce.HTTPS({trustProtoHeader: true}));
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

// if our app makes a GET request to /service-worker.js, we point it to our service-worker.js file in the build folder
app.get('/service-worker.js', (req, resp) => {
    resp.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
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