let buttonX = document.querySelector(".x");
let textInput = document.querySelector(".input");
let textInputContainer = document.querySelector(".text-input")
let plus = document.querySelector(".plus");
let add = document.querySelector(".add")
let list = document.querySelector(".list");
let listContainer = document.querySelector('.l-list')
let imgX = document.querySelector('.x-img');
let aToZButton = document.querySelector(".order-a-z"); 
let zToAButton = document.querySelector(".order-z-a"); 
let arr=[]; 



buttonX.addEventListener("click",()=>{
    textInput.value = "";
})
buttonX.addEventListener('mouseover', () => {
    imgX.src = "./images/Xbuttonpurple.svg"
});
buttonX.addEventListener('mouseout', () => {
    imgX.src = "./images/Xbutton.svg"
});

function addItem() {
    if (textInput.value.trim() !== "") {
        let li = document.createElement("li");
        let para = document.createElement("span")
        para.innerText = `${textInput.value}`;
        li.innerHTML = `<button class="xs"><img class="xs-img" src="./images/Xbutton.svg" alt="click"></button>`;
        li.prepend(para)
        let buttonXs = li.querySelector(".xs")
        let imgXs = li.querySelector(".xs-img")
        buttonXs.addEventListener('mouseover', () => {
            imgXs.src = "./images/Xbuttonpurple.svg"
        });
        buttonXs.addEventListener('mouseout', () => {
            imgXs.src = "./images/Xbutton.svg"
        });
        buttonXs.addEventListener('click', function() {
            li.remove();
            if(list.children.length === 0){
                listContainer.style.display = "none";
            }
        });
        list.appendChild(li);
        textInput.value = "";
        textInputContainer.style.display = "none";
        listContainer.style.display = "block";
        }
    }
plus.addEventListener("click",()=>{
    textInputContainer.style.display = "flex";
})

function sortList(ascending) {
    let items = Array.from(list.children);
    items.sort(function(a, b) {
        if (ascending) {
            return a.textContent.localeCompare(b.textContent);
        } else {
            return b.textContent.localeCompare(a.textContent);
        }
    });
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
}

aToZButton.addEventListener("click", () => {
    sortList(true);
    aToZButton.style.display = "none";
    zToAButton.style.display = "block";
});

zToAButton.addEventListener("click", () => {
    sortList(false);
    zToAButton.style.display = "none";
    aToZButton.style.display = "block";
});

 
   
add.addEventListener("click", addItem);
