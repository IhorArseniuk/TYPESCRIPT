// task 7-1 #XjJuucOMR0 //

    class User{
          constructor(private _id:number, public name:string, private surname:string, private email:string,private phone:string){
    }
    get id():number{
              return this._id
    }
    set id(id:number){
              this._id = id
    }
    }
    let users:User[]=[
        new User(198,'Kernes','Migdalovich','buymeacoffe.@gmail.com','+360465789678'),
        new User(2234,'Bogdan','Dzdanov','buymeacakeffe.@gmail.com','+360465789678'),
        new User(3977,'Dina','Linovka','buymeacoffe.@gmail.com','+360465789678'),
        new User(42,'Hilary','Klinton','buymeacoffe.@gmail.com','+360465789678'),
        new User(521,'Barak','Jonson','buymeacoffe.@gmail.com','+360465789678'),
        new User(6,'Maria','Lucia','buymeacoffe.@gmail.com','+360465789678'),
        new User(72,'Nicolle','Birkovka','buymeacoffe.@gmail.com','+360465789678'),
        new User(855,'Mazola','Mihran','buymeacoffe.@gmail.com','+360465789678'),
        new User(94,'Vlad','Dracula','buymeacoffe.@gmail.com','+360465789678'),
        new User(101,'Britney','Spears','buymeacoffe.@gmail.com','+360465789678'),]
    console.log(users);
    console.log('')
    // task 7-2 #2ikXsE2WiKZ //
    console.log(users.filter(user=>user.id%2===0));
    console.log('')
    // task 7-3 #pOeHKct //
    console.log(users.sort ((user1,user2 )=>{
        return  user1.id - user2.id}))

// task 7-4  #nkMXISv //
{
    console.log('')

    class Client{
        id:number;
        name:string;
        surname:string;
        email:string;
        phone:string;
        products:Product[]
        constructor( id:number, name:string,  surname:string, email:string,  phone:string, products:Product[]) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.products=products
        }

    }
    class Product{
        title:string;
        price:number;
        constructor(title:string, price:number){
            this.title = title;
            this.price = price;
        }
    }


    const clients:Client[] = [
        new Client(1, 'Ivan', 'Arseniuk', 'loveworld.@gmail.com', '+380987456123', [new Product('kit-kat',12),new Product('milk',34)]),
        new Client(2, 'David', 'Petrenko', 'loveyou.@gmail.com', "+380098123457",  [new Product('cola',34),new Product( 'nugat',40)]),
        new Client(3, 'jana', 'Semenchuk', 'loveflover.@gmail.com', '+380567890123',  [new Product('phone',12000)]),
        new Client(4, 'Matilda', 'Jaroslavivna', 'lovenight.@gmail.com', '+380456754196',  [new Product('wiskas',50)]),
        new Client(5, 'Rico', 'Simson', 'lovefootball.@gmail.com', '+380967354679',  [new Product('Diablo V',1023)]),
        new Client(6, 'Fedir', 'Sedjuk', 'lovesells@gmail.com', '+380759146223', [new Product('Ball',123),new Product( 'Skate',500)]),
        new Client(7, 'Johan', 'Mariarty', 'loveeducation.@gmail.com', '+380345786193',[ new Product('square',43)]),
        new Client(8, 'Merry', 'Poppins', 'loveokten.@gmail.com', '+380475197109', [new Product('cake Margarita',56),new Product( 'pizza Chicago', 120)]),
        new Client(9, 'Theodor', 'Rustbelt', 'lovecountry.@gmail.com', '+380786232667',  [new Product('mario',2000)]),
        new Client(10, 'Jasmine', 'Madringo', 'lovenature.$gmail.com', '+380334125789', [new Product('Halo',2389),new Product( 'battlefield 2099',1500),new Product( 'God of War |||',678)]),]
    console.log(clients);
    console.log('');

    // task 7-5 #8abtVjRv //

    console.log(clients.sort((a,b)=>{return a.products.length-b.products.length}))
}
// task 7-6 #vV9a6584I5 //
{
    console.log('')
    class Car{
        model:string;
        brand:string;
        yearOfManufacturer:number;
        maxSpeed:number;
        engineCapacity:number;
        driver?:string
    constructor (  model:string, brand:string , yearOfManufacturer:number, maxSpeed:number,  engineCapacity:number) {
                this.model=model;
                this.brand=brand;
                this.yearOfManufacturer = yearOfManufacturer;
                this.maxSpeed = maxSpeed;
                this.engineCapacity = engineCapacity;
    }
    drive ():string{
            return`Їдемо зі швидкістю ${this.maxSpeed}`};

        info():void{
            for(const item in this){
                console.log(item, this[item]);
            }} ;
        increaseMaxSpeed(newSpeed:number):number|undefined{
            if(newSpeed>0) return this.maxSpeed= newSpeed + this.maxSpeed};
        changeYear(newYear:number):number|undefined{
            if(newYear>1850)return this.yearOfManufacturer=newYear;
        };
        addDriver(driver:string) {
            return this.driver = driver};

    }
    let car1= new Car('prius','BMW',2008,250,300);

    car1.drive();
    car1.info();
    car1.increaseMaxSpeed(300);
    car1.changeYear(1980);
    car1.addDriver('Vito');
    console.log(car1);
}
// task 7-8 #zg6Fifnqig //


    class Cinderella{
        constructor(public name:string,public age:number, public footSize:number,public love?:string){
    }}

    let girls=[
        new Cinderella('Elizabet',15,35),
        new Cinderella('Mary',40,42),
        new Cinderella('Anna',23,37),
        new Cinderella('Sindy',33,39),
        new Cinderella('Victoria',21,36),
        new Cinderella('Luiza',52,34),
        new Cinderella('Margot',27,41),
        new Cinderella('Alina',18,37),
        new Cinderella('Jasmine',25,38),
        new Cinderella('Maria',31,43),
    ]
    class Prince{
        constructor(public name:string,public age:number,public shoe:number){
        }
        findCinderella(array:Cinderella[]){
            for(let item of array){
                    if(item.footSize===this.shoe){ console.log(item)}
                }
            }
        }


    let prince= new Prince('Alladin',24,38);
    prince.findCinderella(girls)
    console.log('')
    console.log(girls.find(Cinderella=>Cinderella.footSize===38))

// task 7-9 #gsKLAsNWM //

const users3:User[] =[
    new User(1 ,'Eduard','Shevchenko','loveUkraine.@gmail.com','+380587624456'),
    new User(2 ,'Mikola','Lewandoski','loveUkraine.@gmail.com','+380587625456'),
    new User(3 ,'Elizabeth','Luka','loveUkraine.@gmail.com','+380587626756'),
    new User(4,'Maria','Chmelnutski','loveUkraine.@gmail.com','+380387128756'),
    new User(5 ,'Liza','Semigora','loveUkraine.@gmail.com','+380387128756'),
    new User(6 ,'Kyrylo','Javdoshak','loveUkraine.@gmail.com','+380987128756'),
    new User(7 ,'Ihor','Nicolovski','loveUkraine.@gmail.com','+3809870943456'),
]
declare global {
    interface Array<T> {
        ownfilter(callback: (value: T) => boolean): T[];
    }
}

Array.prototype.ownfilter = function<T>( callback: (value: T) => boolean): T[] {
    const result: T[] = [];
    for (let item of this) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
};let filtered = users3.ownfilter(user => user.id % 2 === 0);

declare global{
    interface Array<T>{
        myForEach(callbacks:(value:T)=>void):T[];
    }
}


Array.prototype.myForEach=function<T>(callbacks:(value:T)=>void):T[]{
    const result:T[]=[];
    for(let i of this){
        callbacks(i)
        result.push(i)
    }
    return result
};
let userNames=users3.myForEach(function(n){ console.log( n.name.toUpperCase())})

declare global{
    interface Array<T>{
        foreach(callback:(value:T)=>void):T[];
    }
}

Array.prototype.foreach = function <T>( callback: (value: T)=>void):T[] {
    let result:T[]=[];
    for (let item of this) {
        callback(item);
        result.push(item)
    }
    return result;

}
console.log(girls.foreach(function(item) {
    return item.love='popo'
}));

declare global{
    interface Array<T>{
        myfilter(callback:(value:T)=>boolean):T[]
    }
}
Array.prototype.myfilter=function<T>(callback:(value:T)=>boolean):T[] {
    let result:T[]=[];
    for(let item of this){
        if(callback(item))result.push(item);
    }
    return result;
}
console.log(girls.myfilter(function (item) {
    if(item.footSize===38){ alert('cool')
        return true  }
       return false}

));
