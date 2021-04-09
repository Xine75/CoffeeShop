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
                <div>Region: ${b.region}</div>
                <br>
                <div>Notes: ${b.notes}</div>
                <br>`)

        })


})
saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id == "saveBean") {
        let name = document.querySelector("#beanName").value
        let region = document.querySelector("#region").value
        let notes = document.querySelector("#notes").value

        console.log(name);

        const newBean = {
            name,
            region,
            notes
        }
        debugger;
        addBeanVariety(newBean);

    }

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