# The big idea
Beeline lets you share your clipboard among web-enabled devices (PCs, smartphones, tablets). The objective is to make Ctrl-C Ctrl-V work as transparently as possible across devices, just like it does now on the same machine.

# Tech choices
## Interface
Only web interface is envisioned currently. It's ubiquituous; and it doesn't take a ton of time to implement a web app that works everywhere.

## Front end
Clojurescript

## Back end
Clojure

## Infrastructure considerations
The transfer should be peer-to-peer to avoid storing much of anything on a server.

Web RTC seems like an obvious choice here, unless another viable peer-to-peer tech is possible (IPFS?)

We'll start with local connection, then adding trickle ICE and STUN server to improve discoverability/connectivity.

Since TURN would add significant complexity and operation cost, it's lowest on the priority list.

A good high-level overview: https://webrtcglossary.com/stun/

# Priorities

* WebRTC POC to transfer text data between local connections (in progress)
* Send richer types of data: at least image/png and one more exotique type
* ICE and STUN POC
* Design web interface
* Deployment automation, deploy a public instance
