import {cheerio} from "cheerio-without-node-native";
import axios from "axios";

export async function OldgetPageInfos() {
    const searchUrl = 'https://www.amazon.fr/FunKo-Figurines-Pop-Vinyl-Multicolore/dp/B07D7P47LY';
    let htmlString;

    await fetch(searchUrl, {
        method: 'get',
        headers: {
            'authority': 'www.amazon.fr',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
        },
        mode: 'no-cors',
        cache: "default",
    }).then((response) => {
        htmlString = response.text();  // get response text
    });   // fetch page


    const $ = cheerio.load(htmlString);

    const image = $("#landingImage");
    console.log(image);
}


export async function getPageInfos() {
    const searchUrl = `https://www.cdiscount.com/electromenager/refrigerateur-congelateur/hoover-hhsbso6174xwd-refrigerateur-congelateur-s/f-11003090616-hoovhhsbso6174xw.html?idOffre=512010351#mpos=0|cd&sw=33f4c95ce27e2a2bdfd5de9a8d1e5912ac7ecd6870fc14efedd276ebace927fcdedb264aaefb151247514e9bcd01805b2f00dc0231eb8fc4aa0213f78018b5cd6e8e2a2459afc5b919b89c51256993fdad4edebd49192f4d330f5eec5fd1194a1b11e02f3745da1ab8a66194b418eb29`;
    const response = await fetch(searchUrl,  {
        method: 'get',
        mode: 'no-cors',
        cache: "default",
    });      // fetch page

    const htmlString = await response.text();     // get response text
    const $ = cheerio.load(htmlString);           // parse HTML string

    const liList = $("#s-results-list-atf > li"); // select result <li>s
    console.log(liList);
}
