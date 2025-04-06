
// let group1 = ["Vlad", "Kirill", "Stephan", "Anton", "Maxim"];
// let group2 = ["Evgeny", "Fedor", "Oleg"];
// let group3 =["Evgeny", "Fedor", "Oleg"]
// let students = group1.concat(group2, group3 );
// let newstuden = `Nikita`;
// group2 = group2.concat(students);
// students.push(`Nikita`);

// console.log(students);


// localStorage.setItem(`student`, JSON.stringify(students));

// let storegstudent = JSON.parse(localStorage.getItem(`student`));

// console.log(storegstudent);
     
// storegstudent.filter( (item) => {

//       console.log(item[0])

// });


// let Dima = {
//     firstname: "Dima",
//     lastname: "Fenton",
//     birthday: "07/22/1996",
//     showInfo: function () {
//         const fullname = `${this.firstname} ${this.lastname}`;
//         console.log(`Student name: ${fullname}`);
//     },
//     showAge: function () {
//         const deltaTime = Date.now() - Date.parse(this.birthday);
//         const studentsAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
//         const ageInfo = `${this.firstname} ${this.lastname} is ${studentsAge} years old`;
//         console.log(ageInfo);
//     }
// };

// Dima.showInfo();
// Dima.showAge();


// let michael = new Student("Michael", "Dowson", "11/23/2001");
// console.log(michael);
// michael.showAge();

// let lisa = new Student("Lisa", "Paltrow", "08/12/1998");
// console.log(lisa);
 

class Hotel {
    #id;
    constructor (imges, name, count, rooms, occupied, price) {
    this.imges = imges;    
    this.name = name;
    this.count = count;
    this.rooms =  rooms;
    this.bookedRooms = occupied;
    this.price = price;
    this.#id = Math.floor(Math.random() * 1000);
  }

numbers () {
  return  this.rooms - this.occupied;
};
};

const grids = document.querySelector('.grids');

const romanPalce2 = new Hotel({ url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrISLHK-nkvfAPcOshCjqP3rsqMa_G1ceWAg&s"}, "Hotel Plaza", "USA", 200, 177, 420);
const romanPalce3 = new Hotel({ url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXn0m8nw-a4bXCZAAN7ns1Lj1FAyPDladQ1g&s"}, "Hotel Miami", "Canada", 155, 77, 322);
const romanPalce4 = new Hotel({ url : "https://content.skyscnr.com/available/1316602142/1316602142_WxH.jpg"}, "Dubai Palace", "Dubai", 190, 155, 550);
const romanPalce5 = new Hotel({ url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpssWcWQ2FN2GTmxQwoFU8j7iNGVs9F6vmMA&s"}, "Napoli Plaza", "Italy", 55, 48, 87);
const romanPalce6 = new Hotel({ url : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/367137374.jpg?k=e7e14683cd60692b49e25d6996149964fbe865b57e3d4f64b40710bcf11b8ef5&o=&hp=1"}, "Vanda hotel", "Vietnam", 33, 22, 122);
const romanPalce = new Hotel({ url: "https://blog.ostrovok.ru/wp-content/uploads/2011/06/negresco.gif"}, "Roman Palace", "Italy", 90, 30, 99);

let newArr = Array(romanPalce);

newArr.push(romanPalce2, romanPalce3, romanPalce4, romanPalce5, romanPalce6);

function render() {
        
        if(newArr.length <= 0) {
                document.querySelector('.title-page').textContent = `Пусто`;
        }
        
        grids.innerHTML = ``;
        newArr.forEach((item, index) => {
             let newHotel = document.createElement('div');
             newHotel.setAttribute('class', 'newhotel');
             newHotel.innerHTML = `
             <div class="zoom">
                <img class="imghotel" src="${item.imges.url}">
             </div>
             <ul class="ulHotel">
                <li class="liHotel">Name: <span class="srooms">${item.name}</span></li>
                <li class="liHotel">Country: <span class="srooms">${item.count}</span></li>
                <li class="liHotel">Rooms: <span class="srooms">${item.rooms}</span></li>
                <li class="liHotel">Free-rooms: <span class="srooms">${item.rooms - item.bookedRooms}</span></li>
                <li class="liHotel">Price: <span class="srooms">${item.price}$</span></li>
             </ul>
             <button data-index="${index}" class="closed" >X</button>
             `
             grids.append(newHotel);
})

}

render();

                           //   Удаление карточки

document.onclick = (e) => {
        const cartPosition = e.target.getAttribute('data-index');
        if(e.target.classList.contains('closed') && cartPosition !== null) {
               newArr.splice(cartPosition, 1);
               render();
        }
};



// class Rodina {
//     #id;
//     constructor(name, surname, nationality, height, age) {
//        this.name = name;
//        this.surname = surname; 
//        this.nationality = nationality; 
//        this.height = height; 
//        this.age = age;  
//        this.#id = Math.floor(Math.random() * 10000);   
//     }
//     showInfo() {
//         const fullname = `${this.name} ${this.surname}`;
//         console.log(fullname);
//     }
// };

// const dcera = new Rodina(`Aneliya`, `Zanzakova`, `KZ`, `151`, `13`)
// const mama = new Rodina(`Zhanara`, `Dovgopolova`, `KZ`, `158`, `30`);
// const papa = new Rodina("Jarda", "Dovhopolov", "KZ", "168", "32");
// console.log(papa);
// papa.showInfo();
// console.log(mama);
// mama.showInfo();
// console.log(dcera);
// dcera.showInfo();

// class Zveripol {
//     constructor(pol) {
//         this.pol = pol;
//     }

// };

// class Zveri extends Zveripol {
//     #id;
//     constructor (pol, firstname, lastname, nationality, year, ves) {
//       super (pol);
//       this.firstname = firstname;
//       this.lastname = lastname;
//       this.nationality = nationality;
//       this.year = year;
//       this.ves = ves;
//       this.#id = Math.floor(Math.random() * 100);
//     }
// informations() {
//       const fullname = `${this.firstname} ${this.lastname}`;
//       return fullname;
// }     
// showAge() {
//     const currentAge = new Date().getFullYear();
//     return currentAge - this.year;
// }
// };

// const cat3 = new Zveri(`Women`, `Ryzhyk`,`Nash`, `KZ`, `2022`, `4kg`);
// const dog = new Zveri( `Woman`, `Vita`, `Nash`, `KZ`, `2016`, `33kg`);
// const cat2 = new Zveri(`Man`, `Murzik`, `Nash`, `SV`, `2012`, `4.6kg`)
// const cat = new Zveri( `Man`, `Tom`, `Nash`, `KZ`, `2023`, `4kg`);
// cat.informations();
// console.log(cat);
// console.log(cat.informations());
// console.log(cat.showAge());
// cat2.informations();
// console.log(cat2);
// console.log(cat2.showAge());
// console.log(cat2.informations());
// console.log(dog);
// console.log(dog.showAge());
// console.log(dog.informations());
// console.log(cat3);
// console.log(cat3.showAge());
// console.log(cat3.informations());
// cat3.informations();


// class Catpol extends Zveri {
//     constructor (firstname, lastname, nationality, year, ves, pol) {
//         super (firstname, lastname, nationality, year, ves);
//         this.pol = pol;
//     }
// };



// let randomNumber = Math.floor(Math.random() * 1000);
// console.log(randomNumber);

// class Car {
//     #id;
//     constructor(name, age, model, color) {
//        this.name = name;
//        this.age = age; 
//        this.model = model; 
//        this.color = color; 
//        this.#id = Math.floor(Math.random() * 100);   
//     }
//     showInfo() {
//         const fullname = `${this.name} ${this.color}`;
//         console.log(fullname);
//     }
//     ageUsed() {
//         const year = new Date().getFullYear();
//         return year - this.age;
//     }
// };

// const car2 = new Car(`Buggati`, `2019`,`Kombi`, `black`);

// const car = new Car("BMW", "2020", "M7", "red");
// console.log(car);
// console.log(car2)
// car2.showInfo();
// console.log(car2.ageUsed());

// class Tuningcar extends Car {
//     constructor(name, age, model, color, speed, turbo) {
//         super(name, age, model, color);
//         this.speed = speed;
//         this.turbo = turbo;
        
//     }
// newmetod() {
//     super.ageUsed();
//     const currenSpeed = this.speed - this.turbo;
//     return currenSpeed
// }

// };

// const car3 = new Tuningcar(`Lamborgini`, 2023, `Xl`, `blue`, 420, 60);
// console.log(car3)
// console.log(car3.ageUsed());
// console.log(car3.newmetod());


// class Rect {
//      #size;
//     constructor(w, h, size) {
//         this.w = w;
//         this.h = h;
//         this.size = `${this.w * this.h}px`;
//     }

// sizeElement() {
//     const newSize = `${this.w * this.h}px`
//     return newSize
// }

//     get size() {
//         return this.#size;
//     }
//     set size(newSize) {
//         this.#size = newSize;
//      }  

// };


// const element = new Rect (10, 50);
// element.size = "500px";
// console.log(element);
// element.sizeElement();
// console.log(element.sizeElement());
  

                               //  JS 4


// class Human {
//     #id;
//     constructor(name, surname, age, height, weight) {
//        this.name = name;
//        this.surname = surname;
//        this.age = age;
//        this.height = height;
//        this.weight = weight;
//        this.#id = Math.floor(Math.random() * 1000000);
//     }
//     get id() {
//         return this.#id;
//     }
//      set id(newId) {
//          this.#id = newId;
//    }
// };

// const me = new Human("Jarda", "Dovgopolov", 32, 168, 60);
// me.age = 40;
// me.id = 55;

// console.log(me);

// class Teacher extends Human {
//     constructor(name, surname, age, height, weight, technologies = []) {
//         super(name, surname, age, height, weight);
//         this.technologies = technologies;
//     }
// };

// const alexis = new Teacher("Alex", "Lowdell", 30, 180, 70, [
//     "Html",
//     "Css",
//     "Js",
// ]);

// console.log(alexis);
     
// class Man extends Teacher {

//   constructor (name, surname, age, height, weight, technologies = [], sports = []) {
//     super(name, surname, age, height, weight, technologies = []);
//     this.sports = sports;
//   }

// showSportsskill() {
//    sports.forEach( item => {
        
//        console.log(item)

//    });
  
// }
// };


// let technologies = [`Html`, `Css`, `Js`];
// let sports = [`Box`, `Darts`, `Tenis`, `Footbol`, `Hokey`];

// const man = new Man("Jarda", "Dovgopolov", 32, 168, 55, technologies, sports);

// console.log(man);

// man.showSportsskill()


                //  Users Student

// class Users {
//   constructor (name, password) {
//     this.name = name;
//     this.password = password;
//   }
// validetpassword() {
//    if (this.password.length < 6 ) {
//         return `Короткий пароль`
//    }
//    else {
//         return `Пароль хороший`
//    }
// }
// };
  
// let firstname = `Alex`;
// let lastna = `Blablabla`
// let pass = `123456`;

// const person = new Users(firstname, lastna, pass);

// console.log(person);
// console.log(person.validetpasswords());


// const student = new Students(`Alex`, `Blablabla`, `1234567`, `GoGa2025`);
// console.log(student)
// console.log(student.validetpasswords());
// console.log(student.validetpassword());


// const manager = new Master (`Valera`, `Bibas`, `1234567`, `Bam123`, skill);

// console.log(manager);
// console.log(manager.showInfo());
// console.log(manager.validetpasswords());
// console.log(manager.validetpassword());

// let arr = [10, 3, 6, 4];

// let totalarr = arr.reduce((acc, product) => {
//        return acc + product
// },0);

// console.log(totalarr);

// arr.forEach( function (item, index) {

//     if(index === 0) {
//         console.log(typeof(item))
//         let numb = parseInt(item)
//         console.log(typeof(numb))
//         let sum = numb + 100
//         console.log(numb)
//         console.log(sum)
//     }

// });


// let skills = [`Run`, `Kik`]
// const manager2 = new Master(`Oleg`, `Bomzik`, 123456789, `Nps333`, skills);
// console.log(manager2);
// console.log(manager2.showInfo());


// let numb = [`Five`, `One`, `Three`];

// let num = `22.334`;
// console.log(num);

// let numbs = Number.parseFloat(num);

// console.log(numbs);

// let randomNumb = Math.floor(Math.random() * 100);
// console.log(randomNumb);


// let i = 0;

// function numbers() {
//     i++;
//     console.log(i)
// };

// numbers();
// numbers();
// numbers();
              
//                      //   Замыкание

// function numb() {
//    let i = 0;
//    return function number() {
//    i++;
//    console.log(i);
// }
// };
// let a = numb();

// a();
// a();
// a();

// let number = [1, 2, 3, 4, 5, 6];
// let num = 33;
// let numb = 44;

// number.push(num);

// number.push(numb);
// console.log(number);

// number.splice(number, 1);
// console.log(number);



               //  Animation Web

// const callback = function (enteresi, observer) {
//      enteresi.forEach(entry => {
//         if(entry.isIntersecting) {
//           entry.target.classList.add(`active`);
//           observer.unobserve(entry.target);
//         }
//      });
// }

// let observer = new IntersectionObserver(callback);

// let targents = document.querySelectorAll(`.anim`);
// targents.forEach(targe => {
//      observer.observe(targe)
// });

            // Switch case

// let role = `admin`;

// switch (role) {
//    case 'admin':
//     console.log(`Welcom admin`);
//     console.log(1);
//     role = `admin`;
//     break;

//    case `student`:
//     console.log(`Welcom student`);
//     console.log(2)
//     break;

//    case `tetcher`:
//     console.log(`Welcom tetcher`);
//     console.log(3);
//     break;

//    default:
//     console.log(`Error`);
// }
    

            //   Promise

// const p1 = new Promise (function() {

// });

// // console.log(p1);

// const p2 = new Promise ((resolve, reject) => {
//     //   fetch(`https://gipotok.com`)
//    fetch(`https://api.itgid.info/api/delay`)
//       .then(Response => {
//         //  console.log(Response)
//          if(Response.ok) {
//             resolve (Response.json());
//          }
//          else reject(Response)
//       })
//       .catch(error => reject(error));
// });

// fetch('https://api.itgid.info/api/delay')
//     .then((response) => {
//         return response.json()
//     })
//      .then((data) => {

//         let arrdata = Array(data);

//         arrdata.forEach((item) => {
//             console.log(item)
//         })
//      })

// p2.then(f1, f2);

// function f1(data) {

//    console.log(p2);
//    console.log(`Susscess`);
//    console.log(data);
// }

// function f2(data) {
//     console.log(p2);
//     console.log(`Error`);
//     console.log(data);
// }


// console.log(p2);
// console.log(`=================`);


        //    Цепочка промисов


// fetch(`https://api.itgid.info/api/delay`)

//     .then(Response => {
//         return  Response.json()
//     })
//     .then(data => {
//         console.log(data);
//         return fetch(`https://api.itgid.info/api/test`)
//     })
//      .then(Response => Response.json())
//      .then(data => {
//         console.log(data);
//     })








