/**
 * Assigned events
 */

const app_controller = document.getElementById("app-controller");
let x = 0,
    y = 0,
    z = 0;

app_controller.addEventListener("click", () => {
    changeTrianglesPosition(x++, y++, z++);
});


/**
 * Functions
 */

//  Persons functions

function changePersonsColor(value = "black") {
    document.getElementById("app-person")
        .setAttribute("color", value);
}

function changePersonsPosition(x = 0, y = 1.5, z = 0) {
    document.getElementById("app-person")
        .setAttribute("position", x + " " + y + " " + z);
}

//  Triangle functions

function changeTrianglesPosition(x = 0, z = 0) {
    document.getElementById("app-triangle")
        .setAttribute("position", x + " 0 " + z);
}

function changeTrianglesColor(value = "black") {
    document.getElementById("app-triangle")
        .setAttribute("color", value);
}

//  Event functions

function fallDown() {
    const person = document.getElementById("app-person");

    //  Set person's color to fired
    person.setAttribute("color", "#282828");

    //  Set triangle to the same position as person
    let persons_position = person.getAttribute("position");
    changeTrianglesPosition(persons_position.x, persons_position.z);

    //  Blink with triangle
    let blink = false;
    setInterval(() => {
        if (blink) {
            changeTrianglesColor("#e80707");
            blink = false;
        } else {
            changeTrianglesColor("green");
            blink = true;
        }
    }, 500);
}



