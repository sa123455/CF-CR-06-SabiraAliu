
const locationArr:Array<any>=[];
const eventsArr:Array<any>=[];
const restaurantsArr:Array<any>=[];




class Location {
    title:string;
    city:string;
    zipcode:number;
    address:string;
    image:string;
    discription:string;
    datetime:string;

    constructor (title:string, city:string, zipcode:number, address:string, image:string,discription:string,datetime:string) {
        this.title=title;
        this.city=city;
        this.zipcode=zipcode;
        this.address=address;
        this.image=image;
        this.discription=discription;
        this.datetime=datetime;
        locationArr.push(this);
       
        
        
    }
//function to display the html content using bootstrap

    display() {
        return `
        
        <div class="card col-lg-3 col-md-6 col-sm-12 border-0 mt-5" style="width: 18rem;">
        <h5 class="cardtitle">${this.title}</h5>
        <p class="card-text"> ${this.address} ${this.zipcode} ${this.city} </p>
        <p class="card text-danger">Last visited - ${this.datetime}</p>
    <img src="${this.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="para"></p>
    <p class="card-text1 text-secondary"></p>
    <p></p>
    
    
    <button class="btn btn-primary">More Info</button>
    
    </div>
    </div>
        `
    }

    moreInfo() {
        return `<div>${this.discription}</div>`
        
    }

  
   

}

  
    ////////////location array///////////////////
var arr1 = new Location ("St. Charles Church","Vienna",1010,"Kreuzherrengasse 1","./img/church.jpg","A magnificent religious building with a large cupola: St. Charles' Church, the last work of the eminent baroque architect Johann Bernhard Fischer von Erlach.","24.03.2019 12:45");

new Location ("Vienna Zoo","Vienna",1120,"Schloßstraße 55","./img/zoo.jpg","In die Bahn einsteigen und eine Reise in die faszinierende Welt der Tiere unternehmen! Über 700 Tierarten erwarten Sie im ältesten Zoo der Welt und besten Zoo Europas.","24.03.2019 12:45");

new Location ("Schönbrunn Palace","Vienna",1130,"Schloßstraße 47","./img/palace.jpg","The history of Schönbrunn and the buildings that previously stood on this site dates back to the fourteenth century.","24.03.2019 12:45");

new Location ("Prater","Vienna",1020,"Prater Strasse 2","./img/prater.jpg","Adventure, tradition, and Viennese charm at once - no other place radiates so much energy and joie de vivre as the Vienna Prater.","24.03.2019 12:45");





/////looping througt locationArr//////////////
for (let i in locationArr) {
    document.getElementById("content").innerHTML+=locationArr[i].display();
} 

 var  btns=document.getElementsByClassName("btn");
for (let i in locationArr) { 
    btns[i].addEventListener("click",function(){
        document.getElementsByClassName("card-text1")[i].innerHTML=locationArr[i].moreInfo()
    })
  }  
  
  
  
 
 /////////////create classes Restaurant and Events ///////////////////

 class Restaurants extends Location {
    email:string;
    type:string;
    tel:string;

    constructor(title: string, city: string, zipcode: number, address: string, image: string,discription: string,datetime:string,email: string,type: string,tel:string)
    {
        super(title,city,zipcode,address,image,discription,datetime);
        this.email=email;
        this.type=type;
        this.tel=tel;
        restaurantsArr.push(this);
        
        }

        diss() {
            return `
            
            <div class="card col-lg-3 col-md-6 col-sm-12 border-0 mt-5" style="width: 18rem;">
            <h5 class="cardtitle">${this.title}</h5>
            <p class="card-text"> ${this.address} ${this.zipcode} ${this.city} </p>
            <p class="card text-danger">Last visited - ${this.datetime}</p>
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="email text-secondary">email- ${this.email}</p>
        <p class="tel text-secondary">tel: ${this.tel}</p>
        <p class="type text-primary"></p>
        
        
        <button class="btn 2 btn-primary">Our cuisine</button>
        
        </div>
        </div>
            `
        }

        showType() {
            return `<div>${this.type}</div>`
            
        }
}

var restaurant=new Restaurants("Leon","Vienna",1010,"Steasse 23","./img/restaurant1.png","Leon is a fast food chain based in the United Kingdom, established in 2004.","24.03.2019 12:45","leon@orr.at","American Fast-Food","+43 1 699 31 37");
new Restaurants("Café Central","Vienna",1010,"Steasse 23","./img/restaurant2.png","Leon is a fast food chain based in the United Kingdom, established in 2004.","24.03.2019 12:45","leon@orr.at","Austrian","+43 1 699 31 37");

new Restaurants("Wolf","Vienna",1010,"Steasse 23","./img/wolf.webp","Leon is a fast food cha","24.03.2019 12:45","leon@orr.at","Austrian-Traditionelles","+43 1 699 31 37");
new Restaurants("Leon","Vienna",1010,"Steasse 23","./img/palm.jpg","Leon is a fast food chain based in the United Kingdom, established in 2004.","24.03.2019 12:45","leon@orr.at","Austrian","+43 1 699 31 37");

for (let i in restaurantsArr) {
    document.getElementById("restaurants").innerHTML+=restaurantsArr[i].diss();
} 

var  butType=document.getElementsByClassName("btn 2");
for (let i in restaurantsArr) { 
butType[i].addEventListener("click",function(){
        document.getElementsByClassName("type")[i].innerHTML=restaurantsArr[i].showType()
    })
  } 


////////////////////////////Events///////////////////////////
class Events extends Location {
    price:number;
    date:string;

    constructor(title: string, city: string, zipcode: number, address: string, image: string,discription: string,datetime:string,price:number,date:string)
    {
        super(title,city,zipcode,address,image,discription,datetime);
        this.price=price;
        this.date=date;
        eventsArr.push(this);
        

        
    }

    dis() {
        return `
        
        <div class="card col-lg-3 col-md-6 col-sm-12 border-0 mt-5" style="width: 18rem;">
        <h5 class="cardtitle">${this.title}</h5>
        <p class="card-text"> ${this.address} ${this.zipcode} ${this.city} </p>
        <p class="card text-danger">Last visited - ${this.datetime}</p>
    <img src="${this.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="para">${this.price} Euro</p>
    <p class="card-text">${this.date}</p>
    <p class="more text-secondary"></p>
    
    
    <button class="btn 1 btn-primary">More Info</button>
    
    </div>
    </div>
        `
    }
    showMore() {
        return `<div>${this.discription}</div>`
        
    }
    
}
//constructor(title: string, city: string, zipcode: number, address: string, image: string,discription: string,datetime:string,price:number,date:number)
var events =new Events ("Kris Kristofferson","Viena",1234,"bli bla","./img/event1.jpg","Kristoffer Kristofferson is an American singer-songwriter and actor. ","coming soon",80,"30.12.2020-Monday");

new Events ("Lenny Kravitz","Viena",1234,"bli bla","./img/event2.jpg","Leonard Albert Kravitz is an American singer-songwriter, multi-instrumentalist, record producer, and actor.","comming soon",100,"03.05.2021-Sunday");

new Events ("Wien Modern 33","Viena",1234,"bli bla","./img/modern.jpg","A festival with contemporary music","coming soon",25,"04.06.2021-Tuesday");
new Events ("Orchester","Viena",1234,"bli bla","./img/phil.jpg","Wiener Johann Strauss Orchester","comming soon",60,"03.05.2021-Sunday");

for (let i in eventsArr) {
    document.getElementById("events").innerHTML+=eventsArr[i].dis();
} 



var  bt=document.getElementsByClassName("btn 1");
for (let i in eventsArr) { 
    bt[i].addEventListener("click",function(){
        document.getElementsByClassName("more")[i].innerHTML=eventsArr[i].showMore()
    })
  } 






 





 




 



 


