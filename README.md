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
