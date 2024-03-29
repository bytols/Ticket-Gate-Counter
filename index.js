let count = 0;

let countEl = document.getElementById("count_el");

console.log(countEl)

function increment () {
    console.log("The button was clicked");
    count = count + 1;
    countEl.innerText = count;
}

function save(){
    console.log(count)
} 