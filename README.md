# Socket Lists

In order to run:

1. npm install
2. npm run
3. open the web dashboard on http://localhost:3333

## What does it do?
It has 4 events on the socket.

* `FEMALE.LOAD` which loads the initial data for females
* `FEMALE.SAVE` which will add a new female name to the list
* `FEMALE.NEW` which will boardcast the new female name to all listeners
* `CITY.LOAD` which loads the initial data for cities
* `CITY.SAVE` which will add a new city name to the list
* `CITY.NEW` which will boardcast the new city name to all listeners

It initally send 5 city names and female names to the client on socket connection. And you can add items to the list after the connection is established. You can try to open multiple tabs to see hwo they all get updates as soon as there is a new item.
