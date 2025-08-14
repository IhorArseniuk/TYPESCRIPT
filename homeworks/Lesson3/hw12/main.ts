/* async function apiGeter<T>(url:string):Promise<T[]> {
    let optionArray:T[] =await fetch(url)
        .then((res:Response) => res.json())
        .then((res):T[]=>{

           let {elements}=res

            for(let item of elements){
                let divOfElement:HTMLDivElement=document.createElement('div');
                document.body.appendChild(divOfElement);

                for(let option in item) {
                    let optionDiv:HTMLDivElement=document.createElement('div');
                    optionDiv.innerText=`${item[option]}`;
                    divOfElement.appendChild(optionDiv);

                    if(Array.isArray(option)){
                        for(let i of option){
                            let iDiv:HTMLDivElement=document.createElement('div');
                            iDiv.innerText=option[i];
                        }

                    }

                }

            }

            return elements})

     return optionArray;
}*/
let url1=new URL('https://dummyjson.com/recipes');

interface IRecepie{
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];

}

//apiGeter<IRecepie>('https://dummyjson.com/recipes')

/*async function getDataInfo<T> (url:string,option?:string):Promise<T[]>{
    const request:Response= await fetch(url)
      const data:any= await request.json();
    const array:T[]=Array.isArray(data) ? data : data[option as string];

    if(!Array.isArray(array)) {
        throw new Error('Invalid JSON data');
    }
        for(const element of array){
            const resAreaDiv:HTMLDivElement=document.createElement('div');
            document.body.appendChild(resAreaDiv);

            for(const item in element){
                const value =(element as any)[item];
                const itemDiv:HTMLDivElement=document.createElement('div');

                if(Array.isArray(value)||( value && typeof value ==='object')){
                    itemDiv.innerText=`${item} - ${JSON.stringify(value)}`;
                }
                else{
                    itemDiv.innerText=`${item} - ${value}`;
                }
                resAreaDiv.appendChild(itemDiv);
            }
        }
    return array
    }


getDataInfo<IRecepie>('https://jsonplaceholder.typicode.com/users')
*/

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface  IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

async function getInfo<T>(url:string,option?:string):Promise<T[]>{
    const res:Response=await fetch(url);

    const info:any=await res.json()

    const arrayInfo=Array.isArray(info) ? info : info[option as string];

    if(!Array.isArray(arrayInfo)) {
        throw new Error('invalid responce'+res.status)
    }
    else{
        const arrayInfoDiv:HTMLDivElement=document.createElement('div');
        document.body.appendChild(arrayInfoDiv);

        for(const item of arrayInfo){
            const itemDiv:HTMLDivElement=document.createElement('div');
            arrayInfoDiv.appendChild(itemDiv);

             for(const key in item){
                const value=(item as any)[key];
                const keyDiv:HTMLDivElement=document.createElement('div');
                keyDiv.classList.add('key');

                if(Array.isArray(value)){

                    const valueNameDiv:HTMLDivElement=document.createElement('div');
                    valueNameDiv.innerText=String(key);
                    itemDiv.appendChild(valueNameDiv);

                    for(const i in value){

                        const iDiv:HTMLDivElement=document.createElement('div');
                        iDiv.innerText=` ${String(i)}`;
                        iDiv.classList.add('array-item')

                       valueNameDiv.appendChild(iDiv);

                    }
                }
                else{
                    keyDiv.innerText=`${String(key)} - ${JSON.stringify(value)}`;
                    itemDiv.appendChild(keyDiv);
                }
            }
        }
    }
return arrayInfo;
}
getInfo<IUser>('https://jsonplaceholder.typicode.com/users');
