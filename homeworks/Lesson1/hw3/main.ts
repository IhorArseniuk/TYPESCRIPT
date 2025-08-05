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
