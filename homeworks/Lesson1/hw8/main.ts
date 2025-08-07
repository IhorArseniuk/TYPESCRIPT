//  task 8-1 #iz6emEsP2BA //

    //type CourseType={id?:number,title:string,monthDuration:number};
    //type Course1Type={title:string,monthDuration:number}

   // type Course2Type = Course1Type & {id:number}

    interface Course1Type{title:string,monthDuration:number}

    interface Course2Type extends Course1Type{
        id:number
    }

    let coursesAndDurationArray : Course1Type[]= [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4},
    ];
    //console.log(coursesAndDurationArray.map(function(value, index){return {id:index+1, ...value  }}))
    console.log(coursesAndDurationArray.map<Course2Type>((value:Course1Type, index:number)=>{return {id:index+1,...value}}));


// task 8-2 #AiN5CoUQ //

    function copyDeep<T>(object:T):T|string{
        if(object){
            let functions:{functionClone:Function,key:string}[]=[];
            for(let key in object){
                if(typeof(object[key])==='function'){
                    const functionClone=(object[key] as Function).bind({})
                    functions.push({functionClone,key});
                }
            }
            let copy:T =JSON.parse(JSON.stringify(object));
            for(let func of functions){
                (copy as any)[func.key]=func.functionClone
            }
            return copy;
        }else return 'try again'
    }
    const user=copyDeep({name:'Brian', age:40, nationality:'Ukrainian', greeting(){console.log `Hello`}})
    console.log(user);



