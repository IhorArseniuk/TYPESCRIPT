// task 10-1 #sH8c4er //
{
    let div=document.getElementById('text');
    const button=document.querySelector('button') as HTMLButtonElement;
    //document.getElementByTagName('button')[0]
    button.onclick=function(){
        if(div instanceof HTMLDivElement ) {
            div.setAttribute('id', 'text');
            div.style.backgroundColor = 'rgb(123,45,45)';
            div.style.color = 'rgb(123,67,89,0.00)';
            console.log('click');
        }
    }
}
// task 10-3 #ymAmN2xJ //
{
    let formUser:HTMLCollectionOf<HTMLFormElement>=document.forms;
    let form =formUser[0];
    if(form instanceof HTMLFormElement) {
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
    })

    form.addEventListener('submit',function(){
        const div:HTMLDivElement=document.createElement('div');
        div.className='user-info';

        /* const nameH2=document.createElement('h2');
         nameH2.innerText=formUser.name.value;

         const surnameH2=document.createElement('h2');
         surnameH2.innerText=formUser.surname.value;

         const ageP=document.createElement('p');
         ageP.innerText=formUser.age.value;

         div.append(nameH2,surnameH2,ageP);*/

        const userName=form.nname.value;
        const userSurname=form.surname.value;
        const userAge=form.age.value;
        let user:{userName:string,userSurname:string,userAge:number}={userName,userSurname,userAge};
        console.log(user);
        div.innerText=`${userName} ${userSurname} ${userAge}`;
        document.body.appendChild(div);
    })}
}
// task 10-4 #2VaLt4vDczH //
{
    let stored:string|null= localStorage.getItem('number');

    let  currentNumber =stored ? Number(stored) : 0;

    localStorage.setItem('number',String(currentNumber));

   let numberDiv= document.getElementById('numberdiv');
   if(numberDiv instanceof HTMLDivElement) {
        numberDiv.innerText=String(currentNumber);
   }
}
// task 10-5 #LhSfdhM3 //
{
    type SesionListType=string[];

    let rawList=localStorage.getItem('sessionlist')

    let sessionList=rawList?JSON.parse(rawList) as SesionListType:[];
    sessionList.push(new Date().toString())
    localStorage.setItem('sessionList',JSON.stringify(sessionList));
}
// task 10-6 #Jg0gPO00 //
{
    let formConvertator:HTMLFormElement=document.forms.namedItem('weightConvert')  as HTMLFormElement;
    formConvertator.weight.addEventListener('input',()=>{
        const pounds=document.getElementById('pounds') as HTMLInputElement;
        pounds.innerText=+formConvertator.weight.value*2.2+'pounds'
    })
}
// task 10-7 #RbQGnH5DuC //
{ type userType={name:string,age:number,status:boolean};

    let users:userType[] = [
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
    localStorage.setItem('users',JSON.stringify(users))

    function addToLocalStorage<T>(arrayName:string,objToAdd:T):void{

        let arrayJson:string|null= localStorage.getItem(String(arrayName));

        let array=JSON.parse(String(arrayJson));

        array.push(objToAdd)

        return localStorage.setItem(String(arrayName),JSON.stringify(array))
    }

    addToLocalStorage('users',{age:20})
}
// task 10-8 #kUSgFqWY //
{
    const table=document.getElementById('table') as HTMLTableElement;
    let formTable=document.forms.namedItem('formTable') as HTMLFormElement;
    formTable.addEventListener('submit',(ev)=>{
        ev.preventDefault()
        for(let item = 0;item<+formTable.trCount.value;item++) {
            const tr:HTMLTableRowElement= document.createElement('tr')
            table.appendChild(tr);
            for(let i =0;i<+formTable.lineCount.value;i++) {
                const td:HTMLTableCellElement= document.createElement('td')
                td.innerText=formTable.content.value;
                tr.appendChild(td)}
        }})
}
// task 10-2 #j693ca8 //
{
    let f1=document.getElementById('age-form') as HTMLFormElement;
    f1.onsubmit=function(ev){
        ev.preventDefault();
    }
    let ageBtn=document.getElementById('age-butn') as HTMLButtonElement;
    ageBtn.addEventListener('click',function(){
        const ageInput=document.getElementById('age-input')  as HTMLInputElement;
        if(ageInput.value!==''){
            if(Number(ageInput.value)>18){
                alert('You to young')
            }}
    })
}
// task 10-9 #bq1zkx7WP //
{
    // another variant //
    /* let hrivna=+localStorage.getItem('hrivna')
      function fo(){  hrivna+=10;
         localStorage.setItem('hrivna',hrivna)}
      let div=document.getElementById('hrochi');
      div.innerText=100+hrivna+'грн'
      setTimeout(fo,10000)*/

    let baseCount:number=100
    let timer:number= Date.now()

    let lastReloadStorage:string|null= localStorage.getItem('lastReload');

    let lastReload:number = lastReloadStorage !==null ? +lastReloadStorage : 0;

    let hrochi=+(localStorage.getItem('hrochi')??0);
    if(lastReload===0){
        localStorage.setItem('lastReload',JSON.stringify(timer));
    }
    // timer-lastReload correct; lastReload-timer incorrect
    else if(timer-lastReload>=10000){
        hrochi+=10;
        localStorage.setItem('hrochi',JSON.stringify(hrochi));
        localStorage.setItem('lastReload',JSON.stringify(timer));
    }

    let baseValue= document.getElementById('hrochi');
    if(baseValue instanceof HTMLDivElement) {
        baseValue.innerText = baseCount + hrochi + 'грн';

    }}

// task 10-10 #NKB0tgWIK1G //
{
    type userType={name:string,surname:string,id:number};
    type emtyType={};

    function stringCreator (Length:number,customCharacters?:string):string{
        const characters:string = customCharacters || 'QWERTYUIOPASDFGHJKLZXCVBNM';
        const charactersLength:number = characters.length;
        let result:string='';
        for(let i =0;i<Length;i++){
            const randomNumber:number= Math.floor(Math.random()*charactersLength);
            result+= characters.charAt(randomNumber)
        }
        return result;
    }

    function users (name:number,surname:number,count:number):userType[]{
        const counts:number=count
        let result:userType[]=[]
        for(let i =0;i<count;i++) {
            const user={} as userType;
            user.name = stringCreator(name);
            user.surname = stringCreator(surname);
            user.id=Math.floor(Math.random()*100+1);
            result.push(user)
        }return result ;}

    let usersArray:userType[]=users(6,8,100);


    let divStorage=document.getElementById('storageDiv') as HTMLDivElement;

    let butnPrev=document.getElementById('prev') as HTMLButtonElement;
    let butnNext=document.getElementById('next') as HTMLButtonElement;

    let usersPerPage:number=10;
    let curentPage:number=0;

    function showPage(page:number):void{
        divStorage.innerHTML = '';
        const startIndex:number= page * usersPerPage;
        const endIndex:number= startIndex + usersPerPage;
        const usersOnPage:userType[]= usersArray.slice(startIndex,endIndex)

        usersOnPage.forEach(user=>{
            let div:HTMLDivElement=document.createElement('div')
            div.className='user'
            div.innerHTML=`<h2>${user.name}</h2><h3>${user.surname}</h3><p>${user.id}</p>`;
            divStorage.appendChild(div);
        })
        butnPrev.disabled = page === 0;
        butnNext.disabled = endIndex >= usersArray.length;
    }
    document.addEventListener('DOMContentLoaded',()=>{showPage(curentPage)})


    butnNext.addEventListener('click',()=>{
        curentPage++;
        showPage(curentPage);});

    butnPrev.addEventListener('click',()=>{
        curentPage--;
        showPage(curentPage);
    })
    console.log(usersArray)
}
