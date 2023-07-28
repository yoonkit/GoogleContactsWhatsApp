// ==UserScript==
// @name         WhatsApp link from phone numbers
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Adding a WhatsApp icon to Google Contacts phone numbers for a quick chat
// @author       Yoon-Kit Yong
// @donate       PayPal some love to yoonkit@gmail.com [ https://www.paypal.com/paypalme/yoonkit ]
// @license      GPLv3
// @match        https://contacts.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js#sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=
// @run-at       document-idle
// ==/UserScript==


//window.alert("hello 1");


var $ = window.jQuery;

(function () {
    'use strict';

    $(function () {
        // handler for .ready()

    });
}) ();

function ykAlert( msg, type=0 ) {
    if (type < 0) return type
    else if (type == 1) window.alert( msg )
    else console.log( msg );
    return 0;
};

function getTels() {
        //ykAlert("getTels");


        var tels = document.getElementsByClassName('urwqv');

        for (let tel of tels) {
            //ykAlert( tel );
            let as = tel.getElementsByTagName('a');
            if (as.length > 0) {
                let a = as[0];
                if (a.href.includes('tel:')) {
                    alert(a.href)
                }
            };
        return tels;
        }
}

// https://icons8.com/icon/ChMMcyjCQnEn/whatsapp
var whatsappICO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVR4nHVT204TURQdTUw0foDGNxN/wB/wT0yMD74TMdAO7QwXAeltZqpC6WWmUwgIRm4KCJSKtBYppSQgUmgVbGmxtQXamUJLYJlOYhPAruS8nLX3ys5aexPEBdQbrPdIE89QrHNbbXAcq/SOEs06dynW6ajT2+4T1UBR1FWNSdBrGKEw8ilwEo6l8UcqISufIJrMYvLLyinNibKWc/ZRFH/9UrOWFcbMPaNS4kDG/E4QrxftoGafQ+NuBuPvxHTUi1SuAGHYXdCyztA5kQZGaGRdw1IyLymNqintf5/Ba0Ystw/nsFvWskKv0lzbwd9uMAlyLJuHJSCg2dOOmagHTZ62qiKpfAE0K8qKJ6TeUdv7fq4QSKwrBYvxJZQxtTVTdZKZqA8T3tApxTptBP3S5Q2GdyCG3ihkOL2pCKynNqoKsP4uRJJZUKwYJyhW3I4kMjD5Xink0PqoItCz0ldVQOtuQUY+gdpgLxKNnCscjqXA+S0KSU7TiGR+IFvIom1OV/nTupsrAvRsK9L5Ikijo0DQZte4fzWCvtXhSkGLpx2JXBL5ooTBtXcI7oYglWR8CE8qfOeiHRu/UqA5MUqo9bbHXf3jufX0zrkxG2dbEYgHcYYz/MNWJqpwvl/LGJn9WiJNgp6oMQzcaDDyUjyTh3mh+3JsPg6Tm1OY3JxWou0K8Njdl6BhBJnUdd8lnlgs19RGx9He4RHa5ozomGeqmmddErGXl8G5RiSS4VuVRarT2R7obG8PD4qnSMtH+J07xrfUtuJJ2dhyOq6VQSwnN1Ce0iQMSTTrHCqvvyJAGvl2Thw5tQ5+zGkY4UhtcBQt/RP5hbUIyumU8w58/wnXmKegMfGS1sSTBHClcgcqg32UYsWBep3t4bMXtjtPdeLNug7boyazOE5zrs3yWdPmns8qnb1GxVhvXTzjv0Yqm3Pl1utJAAAAAElFTkSuQmCC";

function generateWhatsApp( phonetext )
{
    let phone = phonetext.replaceAll("+","");
    phone = phone.replaceAll(" ","");
    phone = phone.replaceAll("-","");
    phone = phone.replaceAll("x","");

    let ico = document.createElement('img');
    //ico.src = "https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png";
    ico.src = whatsappICO;
    ico.alt = "WhatsApp";
    //ico.height = "16px";
    //ico.width = "16px";
    //ico.style = "{ 'padding-left':'8px' }";


    let url = "http://wa.me/"+phone;
    ykAlert(url);

    let link = document.createElement('a');
    link.href = url;
    link.text = "  ";
    link.appendChild(ico);
    return link;
}

function getPhoneDetails() {
    var telsj = $("div.urwqv");
    // ykAlert("getjTels found: " + telsj.length );

    document.telsj = telsj;

    for (let tel of telsj)
    {
        //ykAlert( tel );
        let as = tel.getElementsByTagName('a');
        ykAlert( "as length: " + as.length, -1);

        if (as.length == 1)
        {
            let a = as[0];
            if (a.href.includes('tel:'))
            {
                var span = document.createElement('span');
                span.setAttribute( "class", "YvDwpb");

                var dot = document.createElement('span');
                dot.setAttribute( "class", "tZ08dd");
                dot.setAttribute( "aria-hidden", "true");
                dot.textContent = "•";
                //dot.id = "dot";
                span.appendChild(dot);

                var link = generateWhatsApp( a.text );
                span.appendChild(link);

                tel.appendChild(span);
            }
        };
    }
    return telsj;
}

function getPhoneColumn()
{
    var phones = document.getElementsByClassName("b62A4e");
    for (let phone of phones)
    {
        let as = phone.getElementsByTagName('a');
        if (as.length > 0) continue;

        let phonetext = phone.textContent;
        if (phonetext.length > 7)
        {
            var link = generateWhatsApp( phonetext );
            phone.appendChild(link);
        }
    }
}

//waitForKeyElements (".xDRIr", getjTels, true);
//waitForKeyElements (".urwqv", getTels);

// 230728 yky Using setTimeout instead of waitForKeyElements.
//setTimeout( function () { getjTels() }, 3500)
setInterval( function () { getPhoneDetails() }, 2000)
setInterval( function () { getPhoneColumn() }, 2000)


/*
var jq = document.createElement('script');
jq.onload = function() {
    window.jQuery.noConflict();
    console.log('jQuery loaded');
    window.alert('onload');
    setTimeout(Main, 3500);
};

jq.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq)

function Main() {
    //console.log("Loading WaMe");
    window.alert("hello");
};

var tels = document.getElementsByClassName('urwqv');

for (let tel in tels) {
    window.alert( tel.getElementsByTagName('a') );
}

*/
