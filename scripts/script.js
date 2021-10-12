(function() {

    //Information to be plugged in
    var data = [

        {
            description: '20-piece flatware set, stainless steel',
            price: '$49.99',
            rate: '\u2605 \u2605 \u2605 \u2605 \u2605',
            article: ' 003.042.33 ',
            selector: 'p1'
        },
        {
            description: 'WiFi bookshelf speaker, black',
            price: '$99.00',
            rate: '\u2605 \u2605 \u2605 \u2605 \u2605',
            article: ' 003.575.61 ',
            selector: 'p2'
        },
        {
            description: 'Glass-door cabinet, gray',
            price: '$149.00',
            rate: '\u2605 \u2605 \u2605 \u2605 \u2605',
            article: ' 804.150.48 ',
            selector: 'p3'
        },
        {
            description: 'Clothes rack, white',
            price: '$9.99',
            rate: '\u2605 \u2605 \u2605 \u2605 \u2605',
            article: ' 601.794.34 ',
            selector: 'p4'
        },
        {
            description: 'Wing chair, Nordvalla dark gray',
            price: '$249.00',
            rate: '\u2605 \u2605 \u2605 \u2605 \u2605',
            article: ' 903.598.29 ',
            selector: 'p5'
        }

    ];

    //Package constructor
    function Package(data){
        this.description = data.description;
        this.price = data.price;
        this.rate = data.rate;
        this.article = data.article;
        this.selector = data.selector;

    }

    //Returns DOM element by id
    var getEl = function(id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package){
        //Referencing DOM elements
        var selector = package.selector,
            descEl = getEl(selector+'-description'),
            priceEl = getEl(selector+'-price'),
            rateEl = getEl(selector+'-rate'),
            artEl = getEl(selector+'-article');
        
        //Writing package to DOM elements
        descEl.textContent = package.description;
        priceEl.textContent = package.price;
        rateEl.textContent = package.rate;
        artEl.textContent = package.article;
    };

    //Calling constructor and objects to write package data to page via DOM functions
    var behag = new Package(data[0]);
    writePackageInfo(behag);
    var symf = new Package(data[1]);
    writePackageInfo(symf);
    var hauga = new Package(data[2]);
    writePackageInfo(hauga);
    var mulig = new Package(data[3]);
    writePackageInfo(mulig);
    var strand = new Package(data[4]);
    writePackageInfo(strand);

}());