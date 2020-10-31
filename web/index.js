"use strict";
const editor = document.querySelector("#editor");
const output = document.querySelector("#script-output");
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

    const textValue = event.clipboardData.getData("text");
    output.append(document.createTextNode(textValue));

    event.preventDefault();
});

const connect = document.querySelector("#rtc-connect");
connect.addEventListener("click", event => {
    console.log(event)
});

const connection1 = new RTCPeerConnection();
const connection2 = new RTCPeerConnection();

connection1.addEventListener("icecandidate", e => console.log.bind(window, e))
connection2.addEventListener("icecandidate", e => console.log.bind(window, e))
connection1.addEventListener("icestatechange", e => console.log.bind(window, e))
connection2.addEventListener("icestatechange", e => console.log.bind(window, e))

// here we setup a crude connection by setting the connection descriptions directly
// not gonna bother with ICE for now
// inspect connection1 and connection2 to see their internals
connection1.createOffer() // initilise connection
    .then(offer => connection1.setLocalDescription(offer))
    .then(() => connection2.setRemoteDescription(connection1.localDescription))
    .then(() => connection2.createAnswer()) // initilise receiving end
    .then(answer => connection2.setLocalDescription(answer))
    .then(() => connection1.setRemoteDescription(connection2.localDescription));

// to be continued
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
