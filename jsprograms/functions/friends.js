async function getFriends() {
    let people = await fetch("https://randomuser.me/api/?results=5");
    let data = await people.json();
    const timeline = document.getElementById("friendslist");
    data.results.forEach(user => {
        console.log("user ->", user);
        let image = document.createElement("img");
        image.src = user.picture.large;
        image.style.padding = "10px";
        image.style.boxShadow = "0px 0px 5px 5px #ccc";
        image.style.margin = "0px 10px 0px 10px";
        timeline.appendChild(image);
    })
}

getFriends();