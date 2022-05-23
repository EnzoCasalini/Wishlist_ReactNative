const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();

app.get('/', async function (req, res) {

    let url = req.query.url;

    if (isValidURL(url)) {
            // decode URI url
            let url2 = decodeURIComponent(url)

            request(url2, async function (error, response, html) {
                // First we'll check to make sure no errors occurred when making the request
                if (!error) {
                    let image = ' ';
                    let title = ' ';
                    let price = ' ';

                    // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
                    let $ = cheerio.load(html);

                    if (url2.includes('amazon')) {

                        try {
                            image = await $('#landingImage').attr('src');
                        } catch (e) {
                            image = 'No image found';
                        }

                        try {
                            title = await $('#productTitle').text();
                        } catch (e) {
                            title = 'No title found';
                        }

                        try {
                            price = await $('#corePrice_feature_div div span > span:first').text();
                        } catch (e) {
                            price = 'No price found';
                        }

                        // Configure the response to be in JSON format
                        res.set({
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Credentials" : "true",
                        });

                        // And now, the JSON format we are going to expose
                        let json = {
                            image: image.trim(),
                            title: title.trim(),
                            price: price.trim()
                        };

                        // Send the JSON as a response to the client
                        res.send(json);
                    }else {
                        res.send('This url is not supported');
                    }
                }
            });
    } else {
        res.send('Bad Url');
    }

    function isValidURL(string) {
        if (string!= null) {
            let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return (res !== null)
        }
        else {
            return false;
        }
    }

});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

module.exports = app;