// task 9-1 #8Nmt60ZT //
{
    let div:HTMLDivElement=document.createElement('div');
    div.classList.add('wrap','collapse', 'alpha', 'beta');
    div.innerText='HI try div'
    document.body.appendChild(div);

    let copyDiv=div.cloneNode(true) as HTMLDivElement;
    copyDiv.classList.toggle('exclusive')
    document.body.appendChild(copyDiv);
}
// task 9-2 #OPLI89c9G //
{
    let nav:string[]=['Main','Products','About us','Contacts'];
    let menu:HTMLUListElement=document.createElement('ul');
    for(let item:number=0;item<nav.length;item++){
        let option:HTMLLIElement=document.createElement('li');
        option.innerText=String(nav[item]);
        menu.appendChild(option)
    }
    document.body.appendChild(menu);
}
// task 9-3 #jeBqHV525U5 //
{
    type CoursType={ title:string,monthDuration:number};
    let coursesAndDurationArray:CoursType[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let coursesDiv:HTMLDivElement=document.createElement('div');
    /*coursesDiv.classList.add('courses-container');
    for(let cours of coursesAndDurationArray ){
        const coursDiv=document.createElement('div');
        coursDiv.classList.add('course')
            const coursName=document.createElement('h2');
            coursName.innerText=cours.title;
            const coursDuration=document.createElement('p');
            coursDuration.innerText=cours.monthDuration;
            coursDiv.append(coursName,coursDuration);

        coursesDiv.appendChild(coursDiv);
    }*/
    for(let cours of coursesAndDurationArray){
        const course:HTMLDivElement=document.createElement('div');
        course.innerText=`${cours.title} ${cours.monthDuration}`
        coursesDiv.appendChild(course);
    }
    document.body.appendChild(coursesDiv);
}
// task 9-4 #Kx1xgoKy8 //
{
    interface ICourse {title:string, monthDuration:number};

    let coursesAndDurationArray:ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let courses:HTMLDivElement=document.createElement('div');
    courses.className = 'courses-container';
    for(let course of coursesAndDurationArray){
        const cour:HTMLDivElement=document.createElement('div');
        cour.classList.add('item');

        const courseTitle:HTMLHeadingElement=document.createElement('h2');
        courseTitle.innerText=course.title;
        courseTitle.classList.add('heading');

        const courseDuration:HTMLParagraphElement=document.createElement('p');
        courseDuration.innerText=String(course.monthDuration);
        courseDuration.classList.add('description')

        cour.append(courseTitle,courseDuration);
        courses.appendChild(cour)
    }
    document.body.appendChild(courses);
}
// task 9-5 //
{
    type Primitives=number|string|boolean;
    type CourseType={
        title:string,
        monthDuration:number,
        hourDuration:number,
        modules:Primitives[],
    }
    let coursesArray:CourseType[] = [
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

    const coursesDiv:HTMLDivElement=document.createElement('div');
    coursesDiv.className = 'courses-box';

    type CoursesInfoFnType=(array:CourseType[],objeckt:HTMLDivElement)=>void;

    let  coursesInfo:CoursesInfoFnType=(array,objeckt)=>{
        for(let course of array) {

            let courseTitle: HTMLDivElement = document.createElement('div');
            courseTitle.innerHTML = `<h1>${course.title}</h1>`;
            courseTitle.className = 'course-title';

            let courseDuration: HTMLDivElement = document.createElement('div');
            courseDuration.innerHTML = `<p class="month-duration">${course.monthDuration}</p>`;

            const courseHourDuration: HTMLDivElement = document.createElement('div');
            courseHourDuration.innerHTML = `<p>${course.hourDuration}</p>`;

            const modulesDiv: HTMLDivElement = document.createElement('div');
            modulesDiv.className = 'modules-container';

            const modulsList: HTMLUListElement = document.createElement('ul');
            modulsList.className = 'course-ul';
                for (let item of  course.modules ) {
                    if (item !== 'html' && item !== 'css' && item !== 'js') {
                        const modulsLi: HTMLLIElement = document.createElement('li');
                        modulsLi.className = 'modules-li';
                        modulsLi.innerText =String( item);
                        modulsList.appendChild(modulsLi);
                        modulesDiv.appendChild(modulsList);
                    } else {
                        const modulesItemDiv: HTMLDivElement = document.createElement('div');
                        modulesItemDiv.className = 'modules-item-div';
                        modulesItemDiv.innerText = String( item);
                        modulesDiv.appendChild(modulesItemDiv);
                    }
                }

            const courseHourAndMonthDiv: HTMLDivElement = document.createElement('div');
            courseHourAndMonthDiv.append(courseDuration, courseHourDuration);
            courseHourAndMonthDiv.className = 'course-month-hour-duration';

            const courseDiv: HTMLDivElement = document.createElement('div');
            courseDiv.className = 'course-info'
            courseDiv.append(courseTitle, courseHourAndMonthDiv, modulesDiv)

            objeckt.appendChild(courseDiv);
        }
        }

    document.body.appendChild(coursesDiv);
    coursesInfo(coursesArray,coursesDiv);
}
