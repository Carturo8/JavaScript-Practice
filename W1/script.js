// function printInConsole () {
//     console.log("Click on the button")
// }

// function numberPositive (number) {
//     if (number > 0) {
//         console.log("The number is positive")
//     } else {
//         console.log("The number is negative")
//     }
// }
//
// function numberPositive_2 (number) {
//     number > 0 ? console.log("The number is positive") : console.log("The number is negative")
// }
//
// numberPositive(220)
// numberPositive_2(-220)
//
// const sumar2 = (value1, value2) => {
//     console.log(`La suma es ${value1 + value2}`)
// }
//
// sumar2(2, 2)

let counter = 0

const decrease = () => {
    counter = counter - 1
    document.getElementById("my_counter").textContent = counter
}

const increase = () => {
    counter = counter + 1
    document.getElementById("my_counter").textContent = counter
}

const reset = () => {
    counter = 0
    document.getElementById("my_counter").textContent = counter
}

const show = () => {
    document.getElementById("my_counter").textContent = document.getElementById("input_1").value
}

function show_fizzbuzz() {
    // Obtiene referencia al primer elemento del DOM que tenga la clase 'fizzbuzz-list'
    const fb_list = document.querySelector(".fizzbuzz-list");
    // Limpiar el contenido anterior
    fb_list.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        // Crear un elemento de lista para cada número
        const li = document.createElement("li");

        // Determinar qué texto mostrar según las reglas
        if (i % 3 === 0 && i % 5 === 0) {
            li.textContent = "FizzBuzz";
        } else if (i % 3 === 0) {
            li.textContent = "Fizz";
        } else if (i % 5 === 0) {
            li.textContent = "Buzz";
        } else {
            li.textContent = `${i}`;
        }

        // Agregar el elemento a la lista
        fb_list.appendChild(li);
    }
}

const message = document.createElement("h2")
document.body.appendChild(message);

function show_average_grade() {

    let sum_grade = 0

    for (let i = 1; i <= 5; i++) {
        let grade = document.getElementById(`grade_${i}`).value;
        sum_grade = sum_grade + +grade
    }

    const average_grade = (sum_grade / 5).toFixed(2)

    if (average_grade >= 3) {
        message.innerHTML = `The average is ${average_grade} - Student Approved`
    } else {
        message.innerHTML = `The average is ${average_grade} - Student Failed`
    }
}