const container = document.getElementById("container");

fetch("https://aa-api-kappa.vercel.app/users/").then((res) =>
    res.json().then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);

            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h2");
            title.textContent = data[i].name;

            card.appendChild(title);

            container.appendChild(card);
        }
    })
);
