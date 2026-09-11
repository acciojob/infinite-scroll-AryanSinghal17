const list = document.getElementById("infi-list");

let count = 1;

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${count++}`;
    list.appendChild(li);
}

function addItems() {
    for (let i = 0; i < 2; i++) {
        const li = document.createElement("li");
        li.innerText = `Item ${count++}`;
        list.appendChild(li);
    }
}

window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
    ) {
        addItems();
    }
});