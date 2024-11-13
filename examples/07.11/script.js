// let option = prompt("1-ден 3-ке дейын сан танданыз");

// switch (option) {
//     case "1":
//     alert("Сыз 1 тандадыныз");
//     break;
//     case "2":
//     alert("Сыз 2 тандадыныз");
//     break;
//     case "3":
//     alert("Сыз 3 тандадыныз");
//     break;
//     default:
//         alert("Кате вариант");
// }

let order = "";
var total = 0;
var suma = "";


var burger = prompt('Бургер тапсырыс берыныз' + '\n' + 'А) Куриный' + '\n' + 'B) Говяжий' + '\n' + 'C) Етсыз');

switch (burger) {
    case "A":
        order += 'Бургер Куриный 1000тг \n';
        total += 1000
        break;
        case "В":
            order += 'Бургер Говяжий 950тг \n';
            total += 950
            break;
            case "C":
                order += 'Бургер Етсыз 850тг \n';
                total += 850
                break;
                default:
                    alert("Кате вариант"); 
}

var susyn = prompt('Сусын тапсырыс берыныз' + '\n' + 'A) Cola' + '\n' + 'B) Sprite' + '\n' + 'C) Fanta');

switch (susyn) {
    case "A":
        order += 'Cola 450tg \n';
        total += 450
        break;
        case "B":
            order += 'Sprite 400tg \n';
            total += 400
            break;
            case "C":
                order += 'Fanta 500tg \n';
                total += 500
                break;
                default:
                    alert("Кате вариант");

}


alert(order);
alert('\n' + total + suma);




// var a = Number(prompt("Бырыншы сан танданыз"));
// var b = prompt(" + - ");
// var c = Number (prompt("Екыншы санды танданыз"));
// var p = 0;

// switch (b) {
//     case "+":
//         p = a + c;
//         break;
//         case "-":
//             p = a - c;
//             break;
//             default:
//                 alert("Тек сандар жазыныз");


// }
// alert(p);



