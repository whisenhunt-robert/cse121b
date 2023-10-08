/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Robert Whisenhunt",
    photo: "images/robert.png",
    favoriteFoods: [
        "Pizza",
        "Mac & Cheese",
        "Tacos",
        "Bacon",
        "Chicken"
    ],
    hobbies: [
        "Being creative",
        "Helping others",
        "Playing video games"
    ],
    placesLived: [

    ],
};

myProfile.placesLived.push(
    {
        place: "Winston Salem, North Carolina",
        length: "My whole life."
    }
);

/* Populate Profile Object with placesLive objects */
/* I have always lived in Winston Salem, North Carolina. */
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement("dt");
    dt.textContent = placesLived.place;
    let dd = document.createElement("dd");
    dd.textContent = placesLived.length;
    document.querySelector("#places-lived").appendChild(dt, dd);
});

