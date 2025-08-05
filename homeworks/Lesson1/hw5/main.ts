
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
