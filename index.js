fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 1; i++) {
            let body = document.querySelector("tbody")
            body.innerHTML += `
            <tr>
                <th scope="row">${data[i].id}</th>
                <td> <img class="w-25" src="${data[i].url}" alt=""></td>
                <td>${data[i].title}</td>
                <td>${data[i].albumId}</td>
            </tr>
            `
        }
    })

document.querySelector("button").addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        body: JSON.stringify({
            url: document.querySelector(".image").value,
            title: document.querySelector(".title").value,
            albumId: document.querySelector(".album").value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            let body = document.querySelector("tbody")
            body.innerHTML += `
                <tr>
                <th scope="row">${json.id}</th>
                <td> <img class="w-25" src="${json.url}" alt=""></td>
                <td>${json.title}</td>
                <td>${json.albumId}</td>
                 </tr>
                `

        });
        document.querySelector(".image").value = "";
        document.querySelector(".title").value = "";
        document.querySelector(".album").value = "";
})