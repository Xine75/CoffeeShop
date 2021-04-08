const url = "https://localhost:5001/api/beanvariety/";
const url2 = "https://localhost:5001/api/coffee/";

const beanTarget = document.querySelector(".bean__container");



const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.forEach(b => beanTarget.innerHTML +=
                `<div>Bean Name: ${b.name}</div>
                <div>Region: ${b.notes}</div>
                <div>Notes: ${b.notes}</div>`)

        })


    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(url2).then(resp => resp.json());
}