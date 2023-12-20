// 1) повторить все что было на уроке
// сделать такой же запрос как на уроке но на массив из объектов с людьми
// и вывести это всё на страницу через ДОМ элементы, в виде карточек как мы
// это делали на уроке. Показал как должен выглядеть json файл на уроке.

// 2)
const xhr = new XMLHttpRequest()
xhr.open('GET', 'color.json')
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send()
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        let responseData = JSON.parse(xhr.responseText)
        console.log(responseData)
    }
}

const persons = document.querySelector('.persons')
const getPersons = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'peoples.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let responseData = JSON.parse(request.responseText)
            responseData.forEach(person => {
                const div = document.createElement("div")
                div.classList.add("personCard")
                div.style.width = "300px"
                div.style.height = "300px"
                div.style.border = "2px solid purple"

                const name = document.createElement("p")
                name.classList.add("personName")
                name.innerText = person.name

                const age = document.createElement("p")
                age.classList.add("personAge")
                age.innerText = person.age

                const photo = document.createElement("img")
                photo.setAttribute("src", person.photo)

                div.append(photo, name, age)
                persons.append(div)
            })
        }
    }
}

getPersons()