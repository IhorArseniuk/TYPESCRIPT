
{
    let hello:string = 'hello';
    let owu:string = 'owu';
    let com:string = 'com';
    let ua :string= 'ua';
    let a :number= 1;
    let b :number= 10;
    let c:number = -999;
    let v:number = 123;
    let n:number = parseFloat('3.14');
    let m = parseFloat('2.7');
    let s:number = 16;
    let d:boolean = true;
    let f:boolean = false;
    console.log(hello);
    console.log(owu);
    console.log(com);
    console.log(ua);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(v);
    console.log(n);
    console.log(m);
    console.log(s);
    console.log(d);
    console.log(f);
}
//task 1-2 #6Qb97gsv//
{
    let fistName :string= 'Ihor';
    let midleName:string = 'Arseniuk';
    let lastName :string= 'Ivanovich';
    let person:string = `${fistName} ${midleName} ${lastName}`;
    console.log(person);
}
//task 1-3 #4N0y5tufA//
{
    let a:number = 100;
    let b:string = '100';
    let c:boolean = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
//task 1-4 #ruUtWDUI//
{
    let name:string|null= prompt('What is your name?', 'Ihor');
    let lastName:string|null = prompt('What is your last name?', 'Ivanovich');
    let age:string|null = prompt('How old are you', '19');
    let person :string= `${name} ${lastName} ${age}`;
    console.log(person);
}

/// lesson 1 homeworks ///
console.log('')
console.log('')

// task 2-1 #67kfznmiMl //
{
    let card:(number|string|boolean|{firstname:string}|{age:number}|{gender:string})[]=[123,'Tito',true,13.4,1245,'Litvin',145,{firstname:'Ivanovich'}, {age:18}, {gender:'man'} ];
    console.log(card[0]);
    console.log(card[1]);
    console.log(card[2]);
    console.log(card[3]);
    console.log(card[4]);
    console.log(card[5]);
    console.log(card[6]);
    console.log(card[7]);
    console.log(card[8]);
    console.log(card[9]);}
// task 2-2 #LARqoUj5I //
{
    let book1:{title:string,pageCount:number,genre:string}={title:'Green Mile', pageCount:123, genre:'Drama'}
    let book2:{title:string,pageCount:number,genre:string}={title:'Effect Lucifer', pageCount:309, genre:'Psychological'}
    let book3:{title:string,pageCount:number,genre:string}={title:'Weel Of Time', pageCount:576, genre:'Fantasy'}
}
// task 2-3 #sA3Gg1sCp//
{
    let bookOdisea:{title:string,pageCount:number,genre:string,authors:[{name:string,age:number},{name:string,age:number}]}={title:'Odisea', pageCount:222, genre:'Drama', authors:[{name: 'Gomer', age:21}, {name:'Ofelio', age:22}]};
    let bookFawn:{title:string,pageCount:number,genre:string,authors:[{name:string,age:number},{name:string,age:number}]}={title:'Fawn', pageCount:222, genre:'Drama', authors:[{name:'Roberto',age:44},{name:'Filirino',age:55}]};
    let bookHarryPother:{title:string,pageCount:number,genre:string,authors:[{name:string,age:number},{name:string,age:number}]}={title:'Harry Potter', pageCount:123, genre:'Fantasy', authors:[{name:'Joane',age:67},{name:'Jane',age:78}]};
}
// task 2-4 #jCHFnEbdmFd //
{
    let users:{name:string,username:string,password:string}[]=[
        { name:'Ihor', username:'IA', password:'man1' },
        {name:'b', username:'b',password:'b1'},
        {name:'c', username:'c',password:'c1'},
        {name:'f', username:'f',password:'f1'},
        {name:'g', username:'g', password:'g1'},
        {name:'h1', username:'h1', password:'h1'},
        {name:'r', username:'r', password:'r1'},
        {name:'s', username:'s', password:'s1'},
        {name:'t',username:'t',password:'t1'},
        {name:'u', username:'u', password:'u1'},
    ]
    console.log(users[7]);
}
// task 2-5 #coYydZuaeEB //
{
    type WeatherType={morning:number,afternoon:number,evening:number};

    let monday:WeatherType= {morning:+10,afternoon:+15, evening:+7};
    let tuesday:WeatherType={morning: +12,afternoon:+17,evening:+10};
    let wednesday:WeatherType={morning:+13,afternoon:+18,evening:+7};
    let thursday:WeatherType={morning:+9,afternoon:+19,evening:+5};
    let friday:WeatherType={morning:+7,afternoon:+13,evening:+6};
    let saturday:WeatherType={morning:+9,afternoon:+17,evening:+10};
    let sunday:WeatherType={morning:+3, afternoon:+11,evening:+12};
    let weekWeather:WeatherType[]=[
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    ];
    console.log(weekWeather[5])
}
// task 2-6 #bAUsaq6LI //
{
    let x:number=+-3;
    if(x!==0){
        console.log('Вірно')
    }else{
        console.log('Невірно')
    }
}
// task 2-7 #3ckURgvs //
{
    let time:number = 55;

    if (time >= 0 && time < 15) {
        console.log('1/4 quarter')
    } else if (time >= 15 && time < 30) {
        console.log('2/4 quarter')
    } else if (time >= 30 && time < 45) {
        console.log('3/4 quarter')
    } else if (time >= 45 && time < 60) {
        console.log('4/4 quarter')
    }
}
// task 2-8 #UMoNq4biWGe //
{
    let day:number= 31;
    if (day>=1 && day<=10) {
        console.log('1 decade')
    }else if (day>=11 && day<=21){
        console.log(' 2 decade')
    }else if(day>=22 && day<=31){
        console.log('3 decade')
    }
}
// task 2-9 #KzrtqyQ //
{
    type WeekDaysType={id:number,name:string}

    let week:WeekDaysType[]=[{id:1,name:'monday'}, {id:2,name:'tuesday'},{id:3, name:'wednesday'},{id:4, name:'thursday'},{id:5,name:'friday'},{id:6,name:'saturday'},{id:7,name:'sunday'}]
    let dayDate:string|null=prompt('Write the day of the week');
    //switch(dayDate){
    //    case 1:
    //        console.log(monday);
    //        break
    //    case 2:
    //        console.log(tuesday);
    //        break
    //    case 3:
    //        console.log(wednesday);
    //        break
    //    case 4:
    //        console.log(thursday);
    //        break
    //    case 5:
    //        console.log(friday);
    //        break
    //    case 6:
    //        console.log(saturday);
    //        break
    //    case 7:
    //        console.log(sunday);
    //        break
    //     default:
    //         console.log('Error')
    //}
    if(dayDate!==null) {
        let numValue = Number(dayDate);
    if(numValue!==0) {
        switch(numValue){
            case 1:
                console.log(week[0]);
                break
            case 2:
                console.log(week[1]);
                break
            case 3:
                console.log(week[2]);
                break
            case 4:
                console.log(week[3]);
                break
            case 5:
                console.log(week[4]);
                break
            case 6:
                console.log(week[5]);
                break
            case 7:
                console.log(week[6]);
                break
            default:
                console.log('Error')
        }
    }
    }
    }

// task 2-10 #uwsz1RnTQJ1 //
{
    let userNum1:number=6;
    let userNum2:number=12;
    if (userNum1>userNum2){
        console.log(userNum1)
    }else if( userNum2>userNum1){
        console.log(userNum2)
    }else if(userNum1===userNum1){
        console.log('===')
    }
}
// task 2-11 #iBvqtjEm //
{
    let x:number|null|undefined|string|boolean=0;
    if(!x){
        x='default'
        console.log(x)}

    let y:number|string=0;
    if(! y){
        y='default'
        console.log(y)
    }
}
// task 2-12 #awLXL6TBzg //
{
    type CourseType={title:string,monthDuration:number};

    let coursesAndDurationArray:CourseType[]= [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    const cour1:CourseType=coursesAndDurationArray[0]!;

    if(cour1.monthDuration>5){
        console.log('Супер')
    }
    const cour2:CourseType|undefined=coursesAndDurationArray[1];

    if(cour2&&cour2.monthDuration>5){
    console.log('Супер')
}
    const cour3:CourseType|undefined=coursesAndDurationArray[2];
    if(cour3&&cour3.monthDuration>5){
    console.log('Супер')
}
    const cour4:CourseType=coursesAndDurationArray[3]!;
    if(cour4.monthDuration>5){
    console.log('Супер')
}
    const cour5:CourseType=coursesAndDurationArray[4]!;
    if(cour5.monthDuration>5){
    console.log('Супер')
}
    const cour6:CourseType=coursesAndDurationArray[5]!;
    if(cour6.monthDuration>5){
    console.log('Супер')
}

}
/// Lesson 2 homeworks ///
console.log('')
console.log('')
// task 3-1 #y7crMeFwHcS //
{
    for (let i = 0; i<10; i++){
        document.write( '<div>hello</div>')
        console.log(i);
    }
}
// task 3-2 #TYj7ncx //
{
    console.log('');
    for (let i =0;i<10;i++){
        document.write(
            `<div>Hello gays ${[i]}</div>`
        )
        console.log(i);
    }
}
// task 3-3 #uzkt71dp //
{
    console.log('');
    let i:number=0;
    while(i<20){
        document.write(
            `<h1>fifa</h1>`);
        i++;
        console.log(i);

    }
}
// task 3-4 #OeT7t3uUMFi //
{
    console.log('');
    let i:number=0;
    while(i<20){
        document.write(`<h1>Fifa ${i}</h1>`)
        i++;
        console.log(i);
    }
}
// task 3-5 #vLSZKMlO //
{
    console.log('');
    let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write('<ul>');
    for (let listItem of listOfItems){
        document.write(`<li>${listItem }</li>`);
    }
    document.write('</ul>');
}
// task 3-6 #Hdjws7E //
{
    type ProductType={title:string,price:number,image:string};
    let products :ProductType[]= [
        {title: 'milk',
            price: 22,
            image:'https://w7.pngwing.com/pngs/543/416/png-transparent-organic-milk-organic-food-dairy-products-cream-milk-packaging-cream-grocery-store-organic-farming.png'},

        {

            title: 'juice',

            price: 27,

            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

        },

        {

            title: 'tomato',

            price: 47,

            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

        },
        {

            title: 'tea',

            price: 15, image: 'https://img.freepik.com/free-vector/tea-ad-with-hand-drawing-decoration_52683-30533.jpg?semt=ais_hybrid&w=740'

        }];
    for (let product of products){
        document.write(`
        <div class=”product-card”>

        <h3 class=”product-title”>${product.title}. Price –${product.price}</h3>

        <img src="${product.image}" alt="product" class="product-image">

</div>`)
    }
}
// task 3-7 #4WrHwFTEop0 //
{
    type UserType={name:string,age:number,status:boolean};

    let users :UserType[]= [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    //for (let user of users){
    //    if (user.status===true)
    //  console.log(user)}
    //}
    //for (let user of users){
    //  if (!user.status){
    //      console.log(user)
    //  }
    //}
    for (let user of users){
        if (user.age==31){
            console.log(user)
        }
    }
}
// task 3-8 //
{
    type UserAddressType={street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}};

    type UserCompanyType={name:string,catchPhrase:string,bs:string};

    type UserType={id:number,name:string,username:string,email:string,address:UserAddressType,phone:string,website:string,company:UserCompanyType}

    let usersList:UserType[] = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];
    document.write(`<div class="users-box">`)
    for (let user of usersList){
        document.write(`<div class="user-block">

                <h2>${user.id} – ${user.name} – ${user.username} </h2>

                <h3>${user.email} – ${user.phone}</h3>

                <div class="address-block">

                    <p>City – ${user.address.city}</p>

                    <p>Street – ${user.address.street}</p>

                    <p>Suite – ${user.address.suite}</p>

                    <p>Zip code – ${user.address.zipcode}</p>

                </div>
            </div>`)}
    document.write('</div>')
}

/// Lesson 3 homework ///
console.log('')
console.log('')


// task 4-1 #I2XsG6f //
{function S (a:number,b:number):number{
    return a*b;
}
    let a:number= S(10,34)
    console.log(a);}

// task 4-2 #ETGAxbEn8l //
{
    console.log('');

        function  Scircl (radius:number):number{
            let pi:number=3.14;
            return pi*radius*radius
        }

    let circl:number= Scircl(34);
    console.log(circl);
}

// task 4-3 #Mbiz5K4yFe7 //
{
    console.log('');
    function Scylinder (r:number, h:number):number{
        return  2*3.14*r*(h + r);
    }
    let cylinder:number  = Scylinder(45, 80)
    console.log(cylinder);
}
// task 4-4 #SIdMd0hQ //
{
    console.log('');
    function ShowArray<T>(array:T[]):T[]{
        for(let i of array){
            console.log(i)
        }
        return array;
    }
    let rivo:number[] = [1,2,3,4,5,6,75,8,9,106];
    ShowArray(rivo);
}
// task 4-5 #SIdMd0hQ //
{
    function writeP (element:string):void{
        return document.write(`<p>${element}</p>`);

    }
    let hello:string = 'hello';
    writeP (hello)
}
// task 4-6 #hOL6126 //
{
    /* function writer (){
         return document.write(`<ul>
                                  <li>${arguments[0]}</li>
                                  <li>${arguments[1]}</li>
                                  <li>${arguments[2]}</li>
                               </ul>`)
     }
     let text =writer('one', 'two', 'three');*/
    function writer (text:string):void{
        return document.write(`<ul>
                                 <li>${text}</li>
                                 <li>${text}</li>
                                 <li>${text}</li>
                              </ul>`)
    }
    writer('one');
}
// task 4-7 #0Kxco1edSN //
{
    function listWriter(text:string, count:number):void{
        document.write(`<ul>`);
        for (let i=0;i<count;i++){
            document.write (`<li>${text}</li>`)
        }
        document.write(`</ul>`)
    }
    listWriter('miracle', 6)
}
// task 4-8 #gEFoxMMO //
{
    function arrayRebuilder<T>(array:T[]):void{
        document.write(`<ul>`);
        for(let i of array){
            document.write(`<li>${[i]}</li>`)
        }
        document.write(`</ul>`);
    }
    let array:(string|number|boolean)[] = [1,2,true, 'roma', 'gigo',8,10, 'mayo','sriracha'];
    arrayRebuilder(array);
}
// task 4-9 #bovDJDTIjt //
{
    interface IUser  {id:number,name:string,age:number}
    function usersFabric(array:IUser[]):void{
        document.write(`<div class="user-box">`)
        for(let i of array){
            document.write(`<div class="user">
                            <div class="user-key">${i.id}</div>
                            <div class="user-key">${i.name}</div>
                            <div class="user-key">${i.age}</div>
                                      </div>`)}
        document.write(`</div>`)
    }
    let users:IUser[] =[
        {id: 1, name: 'vasya', age: 31},
        {id: 2, name: 'petya', age: 30},
        {id: 3, name: 'kolya', age: 29},
        {id: 4, name: 'olya', age: 28}
    ]
    usersFabric(users);
    /*usersFabric([
        {id: 10, name: 'vasya', age: 90},
        {id: 11, name: 'oleg', age: 99},
        {id: 12, name: 'max', age: 123},
    ])*/
}
// task 4-9 #pghbnSB //
{
    console.log('');
    function arrayMinNumber<T>(array:T[]):number{
        let min:number=Number(array[0]);
        for(let i =1;i<array.length;i++){
            let number:number= Number(array[i])

            if(!isNaN(number)&&number<min){
                min=number;
            }
        }
        return min;
    }
    console.log(arrayMinNumber([5,6,8,10,11,-23,56,78,90,123,456,789]));
    let numbers =[3,7,8,90,10,-125,11,45.8,4.8,123,456,789];
    console.log(arrayMinNumber(numbers));
}
// task 4-10 #EKRNVPM //
{
    console.log('');
    function arrayNumbersSum(array:number[]):number{
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum+=Number(array[i]);
        }
        return sum;
    }
    let numbers =[3,7,8,90,10,-125,11,45.8,4.8,123,456,789];
    console.log(arrayNumbersSum(numbers));
    console.log(arrayNumbersSum([13,14,16,78,90,88,56,34,12.22]));
}
// task 4-11 #kpsbSQCt2Lf //
{
    console.log('');
    function arraySwapElements(array:number[],index1:number,index2:number):number[]|undefined{
        if(array[index1]!==undefined&& array[index2]!==undefined) {
            let value1: number = Number(array[index1]);
            array[index1] = array[index2];
            array[index2] = value1;

            return array;
        }
        }
    console.log(arraySwapElements( [12,34,5,6,7,76,89,12,],0,5))
}
// task 4-12 #mkGDenYnNjn //
{
interface ICurrency{currency:string,value:number}

function exchange(sumUa:number,currencyValues:ICurrency[],exchangeCurrency:string):string{
    let currentChosen;
    for(let i of currencyValues){
        if(i.currency===exchangeCurrency){
            currentChosen=i;
        }
    }
    if(!currentChosen){
        throw new Error('Invalid currency '+' '+exchangeCurrency);
    }
    return sumUa/currentChosen.value+currentChosen.currency;
}
console.log(exchange(100000,[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}],'JPY'))

}

/// Lesson 4 homeworks ///
// task 5-1 #I2XsG6f //
{
    let squareSquare= (a:number,b:number):number=> a*b;
    console.log(squareSquare(5,5));
}
// task 5-2 #ETGAxbEn8l //
{
    console.log('');
    let squareCircle = (radius:number):number => Math.PI *radius*radius;
    console.log(squareCircle(12));
}
// task 5-3 #Mbiz5K4yFe7 //
{
    console.log('');
    let squareCilinder=(height:number, radius:number):number=>2*Math.PI*radius*(height+radius);
    console.log(squareCilinder(34,30));
}
// task 5-4 #SIdMd0hQ //
{
    console.log('');
    let arrayElementShower=(array:number[],i:number):string=>{
        console.log(array[i]);
        i++;
        if(i<array.length){
            arrayElementShower(array,i);
        }
        return '';
    }
    console.log(arrayElementShower([1,2,3,4,5,6,75,8,9,106],0));
}
// task 5-5 #59g0IsA //
{
    let paragrafCreator=(text:string):void=>{
        document.write(`<p>${text}</p>`)
    }
    paragrafCreator('hell yea')
}
// task 5-6 #hOL6126 //
{
    let listCreator=(text:string):void=>{
        document.write(`<ul>
                         <li>${text}</li>
                         <li>${text}</li>
                         <li>${text}</li>
                      </ul>`)
    }
    listCreator('Emperor win')
}
// task 5-7 #0Kxco1edSN //
{
    let listCreatorAndShower=( quantity:number, text:string):void=>{
        document.write(`<ul> `)
        for( let i=0;i<quantity; i++){
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
        };

    listCreatorAndShower(5,'FAFA')
}
// task 5-8 #gEFoxMMO //
{
    let arrayBuilder:<T>(array:T[],item:number)=>void=(array,item)=>{document.write(`<ul>`);
        if(item<array.length){
            document.write(`<li>${array[item]}</li>`)
            item++;
            arrayBuilder(array,item);
        }
        document.write(`</ul>`);}
    arrayBuilder([1,2,true, 'roma', 'gigo',8,10, 'mayo','sriracha'],0);
}
// task 5-9 #bovDJDTIjt //
{
    type UserType={id:number,name:string,age:number};

    let userFabric=(array:UserType[]):void=> {
for(let user of array){
        document.write(`
                          <div class="user">
                            <h1>${user.id}</h1>
                            <h2>${user.name}</h2>
                            <h2>${user.age}</h2>
                           </div>`)
    }
    }
    userFabric([{id: 1, name: 'vasya', age: 31}, {id: 2, name: 'petya', age: 30}, {id: 3, name: 'kolya', age: 29}]);
}
// task 5-10 #pghbnSB //
{
    let minNumberOfArray=(array:number[]):number=>{
        let min=0;
        for(let item of array){
            if(item<min){
                min=item;
            }
        }
        return min;
    }
    console.log(  minNumberOfArray([12, 23, 45, 67, 89, -100, 111, 123, 145, 200]));
}
// task 5-11 #EKRNVPM //
{
    console.log('');
    let sumOfArray=(array:number[])=>{
        let sum:number=0;
        for(let i=0;i<array.length;i++){
            sum+=Number(array[i]);
        }
        return console.log(sum);
    }
    sumOfArray([1,2,3,4,5,6,75,8,9,106]);
}
// task 5-12 #kpsbSQCt2Lf //
{
    console.log('');
    let swapNumbers=(array:number[],index1:number,index2:number):number[]|undefined=>{

       if(array[index1]!==undefined&&array[index2]!==undefined){

        let value1:number=Number(array[index1]);
        array[index1]=array[index2];
        array[index2]=value1;
        return array;
       }
       }
    console.log(swapNumbers([1, 2, 3, 4, 5, 6, 75, 8, 9, 106], 3, 6));
}
// task 5-12 #mkGDenYnNjn //
{
    type CurrencyType={currency:string,value:number};
    console.log('');
    let exhange=(sumUa:number,currentValue:CurrencyType[],exhangeValue:string):string =>{
      let chosenCurrency
        for(let i of currentValue){
            if(i.currency===exhangeValue){
                chosenCurrency=i

            }
        } if(!chosenCurrency){
            throw new Error('Invalid value')
        }
        return sumUa/chosenCurrency.value+chosenCurrency.currency;}
    console.log(exhange(100000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 43}, {currency: 'JPY', value: 0.24}], 'JPY'));
}

/// Lesson 5 homeworks ///
console.log('')
console.log('')
// task 6-1 #dFeorS3m7u //
{
    type IndexType=(item:string)=>void;
    function length (item:string,index:IndexType):void{
        return index(item)
    }
    length('hello world',(item)=>{console.log(item.length)});
    length('lorem ipsum',(item)=>console.log(item.length));
    length('javascript is cool',(item)=>console.log(item.length));

    let strings:string[]=['hello world','lorem ipsum','javascript is cool'];
    for(let string of strings){
        console.log(string.length);
    }
}
// task 6-2 #8lld9HMxXWB //
{
    console.log('');
    let strings:string[]=['hello okten', 'lorem ipsum','javascript is cool'];
    for(let string of strings){
        console.log(string.toUpperCase())
    }

    type UpperCaseType=(item:string[])=>void;

    function toUpperCasez(string:string[], toUpperCase:UpperCaseType):void{
            return toUpperCase(string)

    }
    toUpperCasez(strings,(string)=>{for(let i of string){console.log(i.toUpperCase())}})
}
// task 6-3 #ClDsAm7xba7 //
{
    console.log('');
    let strings:string[]=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
    for(let string of strings){
        console.log(string.toLowerCase())
    }
type LoverCaseType=(item:string|string[])=>void;

    function toLowerCasez(string:string|string[], toLowerCase:LoverCaseType):void{
        return toLowerCase(string)
    }
    toLowerCasez(strings,(string)=>{for(let i of string){console.log(i.toLowerCase())}})
}
// task 6-4 #0b89BkYZwu //
console.log('');
{
    let str:string = ' dirty string   ';
    console.log(str.trim());
}
// task 6-5 #bfoJuse4ZzP //
{
    type StringFuncType=(str:string)=>string[]

    console.log('');
    let str:string = 'Чому ревуть воли як ясла повні';
    let stringToarray:StringFuncType=(str)=>{
        if(str){
            return str.split(' ')}
      else{  return ['']}
    }
    console.log(stringToarray(str))

}
// task 6-6 #Rbr5kEQ //
{
    console.log('');
    let nums:number[] = [10,8,-7,55,987,-1011,0,1050,0];
    let mappededNums:string[] = nums.map(function(value:number):string{
        return value+'';
    })
    console.log(mappededNums);

}
// task 6-7 #5hqyKTfmc //
{
    console.log('');

    type SortNumsType=(array:number[],direction:string)=>string|number[];

    let nums:number[] = [11,21,3];
    let sortNums:SortNumsType=(array,direction)=>{
        if(direction==='ascending'){
            return(array.sort((a,b) => a-b))
        }
        else if(direction==='descending'){
            return(  array.sort((a,b)=>b-a))
        }
        else{return 'Error'}
    }
    console.log(sortNums(nums ,'descending'));
}
// task 6-8 #yo06d74c1C //
{
    console.log('');

    type CoursesType={title:string,monthDuration:number,id?:number};
    let coursesAndDurationArray:CoursesType[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let mappedCourses:CoursesType[]=coursesAndDurationArray.sort((a,b) =>b.monthDuration-a.monthDuration)
        .filter((a)=>a.monthDuration>5)
        .map((value,index)=>{
            value.id=index+1
            return value;
        });
    console.log(mappedCourses);
}
// task 6-9 #4LJn7zBx //
{
    console.log('');

    type CoursesType={title:string,monthDuration:number,hourDuration:number,modules:string[]};

    let coursesArray:CoursesType[] = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
//let searchSassInCourses=(array)=>{return  array.forEach((value)=>{if(value.modules.includes('sass')){
//    console.log(value)}})}
//    searchSassInCourses(coursesArray);
//console.log('');
//let searchDockerInCourses=(array)=>{return array.forEach((value)=>{if(value.modules.includes('docker'))
//{console.log(value);}
//})}
//    searchDockerInCourses(coursesArray);
    console.log(coursesArray.filter((value)=>{return value.modules.includes('sass')}))
    console.log(coursesArray.filter((value)=>{return value.modules.includes('docker')}))
}
// task 6-10 #bolvdlhP //
{
    type CardType={cardSuit:string,value:number|string,color?:string};
    type CardsFuncType=(suit:string)=>string|void;

    console.log('');

    let cardsHolder:CardType[] = [];


    let cards:CardsFuncType=(suit)=>{
        let color:string;
        if(suit==='heart'||suit==='diamond'){
            color='red'
        }else if(suit==='spade'||suit==='club'){
            color='black'
        }else{ return 'Try again'}
        let suits:CardType[]=   [   {  cardSuit:suit, value: 6, color: color},
            {  cardSuit:suit, value: 7, color: color},
            {  cardSuit:suit, value: 8, color: color},
            {  cardSuit:suit, value: 9, color: color},
            {  cardSuit:suit, value: 10, color:color},
            {  cardSuit:suit, value: 'jack', color:color},
            {  cardSuit:suit, value: 'queen', color:color},
            {  cardSuit:suit, value: 'king', color:color},
            {  cardSuit:suit, value: 'ace', color: color}]
        cardsHolder.push(...suits)
    }

    cards('heart',);
    cards('spade');
    cards('diamond');
    cards('club');
    console.log(cardsHolder);
    console.log(cardsHolder.find((item)=>{return item.cardSuit==='spade'&& item.value==='ace';}));
    console.log(cardsHolder.filter(value=> value.value===6))
    console.log(cardsHolder.filter(value=> value.color==='red'))
    console.log(cardsHolder.filter(value=>value.cardSuit==='diamond'))
    console.log(cardsHolder.filter((value)=>{return value.cardSuit==='club'&& value.value!==6&& value.value!==7&& value.value!==8&& value.value!==9 }))


// task 6-11 #EP5I1UUzAX //

    type RedusedCardType={
        heart:CardType[],
        diamond:CardType[],
        spade:CardType[],
        club:CardType[],
    }

    console.log('');
    const redusedCards=cardsHolder.reduce<RedusedCardType>((accumulator,value:CardType)=>{
            if(value.cardSuit==='heart'){
                accumulator.heart.push(value);
            }else if(value.cardSuit==='diamond'){
                accumulator.diamond.push(value);
            }else if(value.cardSuit==='spade'){
                accumulator.spade.push(value);
            }else if(value.cardSuit==='club'){
                accumulator.club.push(value);
            }return accumulator;},
        {heart:[], diamond:[],spade:[] , club:[],});
    console.log(redusedCards);
}
/// Lesson 6 homeworks ///
