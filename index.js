var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locationArr = [];
var eventsArr = [];
var restaurantsArr = [];
var Location = /** @class */ (function () {
    function Location(title, city, zipcode, address, image, discription, datetime) {
        this.title = title;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
        this.discription = discription;
        this.datetime = datetime;
        locationArr.push(this);
    }
    //function to display the html content using bootstrap
    Location.prototype.display = function () {
        return "\n        \n        <div class=\"card col-lg-3 col-md-6 col-sm-12 border-0 mt-5\" style=\"width: 18rem;\">\n        <h5 class=\"cardtitle\">" + this.title + "</h5>\n        <p class=\"card-text\"> " + this.address + " " + this.zipcode + " " + this.city + " </p>\n        <p class=\"card text-danger\">Last visited - " + this.datetime + "</p>\n    <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n    <p class=\"para\"></p>\n    <p class=\"card-text1 text-secondary\"></p>\n    <p></p>\n    \n    \n    <button class=\"btn btn-primary\">More Info</button>\n    \n    </div>\n    </div>\n        ";
    };
    Location.prototype.moreInfo = function () {
        return "<div>" + this.discription + "</div>";
    };
    return Location;
}());
////////////location array///////////////////
var arr1 = new Location("St. Charles Church", "Vienna", 1010, "Kreuzherrengasse 1", "./img/church.jpg", "A magnificent religious building with a large cupola: St. Charles' Church, the last work of the eminent baroque architect Johann Bernhard Fischer von Erlach.", "24.03.2019 12:45");
new Location("Vienna Zoo", "Vienna", 1120, "Schloßstraße 55", "./img/zoo.jpg", "In die Bahn einsteigen und eine Reise in die faszinierende Welt der Tiere unternehmen! Über 700 Tierarten erwarten Sie im ältesten Zoo der Welt und besten Zoo Europas.", "24.03.2019 12:45");
new Location("Schönbrunn Palace", "Vienna", 1130, "Schloßstraße 47", "./img/palace.jpg", "The history of Schönbrunn and the buildings that previously stood on this site dates back to the fourteenth century.", "24.03.2019 12:45");
new Location("Prater", "Vienna", 1020, "Prater Strasse 2", "./img/prater.jpg", "Adventure, tradition, and Viennese charm at once - no other place radiates so much energy and joie de vivre as the Vienna Prater.", "24.03.2019 12:45");
/////looping througt locationArr//////////////
for (var i in locationArr) {
    document.getElementById("content").innerHTML += locationArr[i].display();
}
var btns = document.getElementsByClassName("btn");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        document.getElementsByClassName("card-text1")[i].innerHTML = locationArr[i].moreInfo();
    });
};
for (var i in locationArr) {
    _loop_1(i);
}
/////////////create classes Restaurant and Events ///////////////////
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(title, city, zipcode, address, image, discription, datetime, email, type, tel) {
        var _this = _super.call(this, title, city, zipcode, address, image, discription, datetime) || this;
        _this.email = email;
        _this.type = type;
        _this.tel = tel;
        restaurantsArr.push(_this);
        return _this;
    }
    Restaurants.prototype.diss = function () {
        return "\n            \n            <div class=\"card col-lg-3 col-md-6 col-sm-12 border-0 mt-5\" style=\"width: 18rem;\">\n            <h5 class=\"cardtitle\">" + this.title + "</h5>\n            <p class=\"card-text\"> " + this.address + " " + this.zipcode + " " + this.city + " </p>\n            <p class=\"card text-danger\">Last visited - " + this.datetime + "</p>\n        <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <p class=\"email text-secondary\">email- " + this.email + "</p>\n        <p class=\"tel text-secondary\">tel: " + this.tel + "</p>\n        <p class=\"type text-primary\"></p>\n        \n        \n        <button class=\"btn 2 btn-primary\">Our cuisine</button>\n        \n        </div>\n        </div>\n            ";
    };
    Restaurants.prototype.showType = function () {
        return "<div>" + this.type + "</div>";
    };
    return Restaurants;
}(Location));
var restaurant = new Restaurants("Leon", "Vienna", 1010, "Steasse 23", "./img/restaurant1.png", "Leon is a fast food chain based in the United Kingdom, established in 2004.", "24.03.2019 12:45", "leon@orr.at", "American Fast-Food", "+43 1 699 31 37");
new Restaurants("Café Central", "Vienna", 1010, "Steasse 23", "./img/restaurant2.png", "Leon is a fast food chain based in the United Kingdom, established in 2004.", "24.03.2019 12:45", "leon@orr.at", "Austrian", "+43 1 699 31 37");
new Restaurants("Wolf", "Vienna", 1010, "Steasse 23", "./img/wolf.webp", "Leon is a fast food cha", "24.03.2019 12:45", "leon@orr.at", "Austrian-Traditionelles", "+43 1 699 31 37");
new Restaurants("Leon", "Vienna", 1010, "Steasse 23", "./img/palm.jpg", "Leon is a fast food chain based in the United Kingdom, established in 2004.", "24.03.2019 12:45", "leon@orr.at", "Austrian", "+43 1 699 31 37");
for (var i in restaurantsArr) {
    document.getElementById("restaurants").innerHTML += restaurantsArr[i].diss();
}
var butType = document.getElementsByClassName("btn 2");
var _loop_2 = function (i) {
    butType[i].addEventListener("click", function () {
        document.getElementsByClassName("type")[i].innerHTML = restaurantsArr[i].showType();
    });
};
for (var i in restaurantsArr) {
    _loop_2(i);
}
////////////////////////////Events///////////////////////////
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(title, city, zipcode, address, image, discription, datetime, price, date) {
        var _this = _super.call(this, title, city, zipcode, address, image, discription, datetime) || this;
        _this.price = price;
        _this.date = date;
        eventsArr.push(_this);
        return _this;
    }
    Events.prototype.dis = function () {
        return "\n        \n        <div class=\"card col-lg-3 col-md-6 col-sm-12 border-0 mt-5\" style=\"width: 18rem;\">\n        <h5 class=\"cardtitle\">" + this.title + "</h5>\n        <p class=\"card-text\"> " + this.address + " " + this.zipcode + " " + this.city + " </p>\n        <p class=\"card text-danger\">Last visited - " + this.datetime + "</p>\n    <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n    <p class=\"para\">" + this.price + " Euro</p>\n    <p class=\"card-text\">" + this.date + "</p>\n    <p class=\"more text-secondary\"></p>\n    \n    \n    <button class=\"btn 1 btn-primary\">More Info</button>\n    \n    </div>\n    </div>\n        ";
    };
    Events.prototype.showMore = function () {
        return "<div>" + this.discription + "</div>";
    };
    return Events;
}(Location));
//constructor(title: string, city: string, zipcode: number, address: string, image: string,discription: string,datetime:string,price:number,date:number)
var events = new Events("Kris Kristofferson", "Viena", 1234, "bli bla", "./img/event1.jpg", "Kristoffer Kristofferson is an American singer-songwriter and actor. ", "coming soon", 80, "30.12.2020-Monday");
new Events("Lenny Kravitz", "Viena", 1234, "bli bla", "./img/event2.jpg", "Leonard Albert Kravitz is an American singer-songwriter, multi-instrumentalist, record producer, and actor.", "comming soon", 100, "03.05.2021-Sunday");
new Events("Wien Modern 33", "Viena", 1234, "bli bla", "./img/modern.jpg", "A festival with contemporary music", "coming soon", 25, "04.06.2021-Tuesday");
new Events("Orchester", "Viena", 1234, "bli bla", "./img/phil.jpg", "Wiener Johann Strauss Orchester", "comming soon", 60, "03.05.2021-Sunday");
for (var i in eventsArr) {
    document.getElementById("events").innerHTML += eventsArr[i].dis();
}
var bt = document.getElementsByClassName("btn 1");
var _loop_3 = function (i) {
    bt[i].addEventListener("click", function () {
        document.getElementsByClassName("more")[i].innerHTML = eventsArr[i].showMore();
    });
};
for (var i in eventsArr) {
    _loop_3(i);
}
