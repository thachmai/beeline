"use strict";
const editor = document.querySelector("#editor");
let thach = null;
editor.addEventListener("paste", (event) => {
    thach = event;
    console.log("event", event)
    console.log("clipboardData", event.clipboardData)

    const items = event.clipboardData.items;
    const types = event.clipboardData.types;
    console.log("types", types)
    for (const item of items) {
        console.log(item.type)
    }
    console.log("as text", event.clipboardData.getData("text"))
});
