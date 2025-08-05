
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
