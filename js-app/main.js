const url = "https://localhost:5001/api/beanvariety/";
const url2 = "https://localhost:5001/api/coffee/";

const beanTarget = document.querySelector(".bean__container");
const saveButton = document.querySelector(".save-bean");

const button = document.querySelector("#run-button");

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.forEach(b => beanTarget.innerHTML +=
                `<div>Bean Name: ${b.name}</div>
                <br>
                <div>Region: ${b.notes}</div>
                <br>
                <div>Notes: ${b.notes}</div>
                <br>`)

        })

    saveButton.addEventListener("click", () => {

        let name = document.querySelector("#beanName").value
        let region = document.querySelector("#region").value
        let note = document.querySelector("#notes").value

        const newBean = {
            name,
            region,
            note
        }
        console.log(newBean)
        addBeanVariety(newBean);


    })

    function addBeanVariety(bean) {
        return fetch(url, {
            method: "POST",
            headers:
                { "Content-Type": "application/json" },
            body: JSON.stringify(bean)
        })

    }

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