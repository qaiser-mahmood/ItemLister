import { LiItem } from "./classes/LiItem.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector("#addForm");
const items = document.querySelector("#items");
const item = document.querySelector("#item");
const filter = document.querySelector("#filter");
const listItems = new ListTemplate(items);
form.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();
    const itemText = item.value.trim();
    if (itemText !== "") {
        const liKey = "li" + Math.floor(Math.random() * 1000000);
        const liItem = new LiItem(itemText, liKey);
        const li = liItem.getLiItem();
        items.appendChild(li);
        listItems.addItem(li);
    }
    item.value = "";
}
items.addEventListener("click", removeItem);
function removeItem(e) {
    if (e.target) {
        const delButton = e.target;
        if (delButton.classList.contains("delete")) {
            const li = delButton.parentNode;
            listItems.removeItem(li);
        }
    }
}
window.onload = function () {
    const keys = Object.keys(localStorage);
    const liList = [];
    keys.forEach((key) => {
        const itemText = localStorage.getItem(key);
        if (itemText) {
            const liItem = new LiItem(itemText, key);
            const li = liItem.getLiItem();
            liList.push(li);
        }
    });
    listItems.addItems(liList);
};
