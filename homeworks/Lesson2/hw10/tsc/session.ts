let sesionArray:string[]=JSON.parse(localStorage.getItem('sessionsList') ||'[]' );
for(let item of sesionArray) {
    let div:HTMLDivElement=document.createElement('div');
    div.innerText=item;
    document.body.appendChild(div);}
