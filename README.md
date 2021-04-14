# Weather Journal App

This is an asynchronous web app that uses Web API and user data for udacity's front end web developer nanodegree program.

This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather-Journal App.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Contents**

1- Feeling Content:
-----------
It is a textarea in which the user can enter his/her feeling(s) at the current moment.


2- Zip Code:
-----------
It is an input in which the user can enter a valid US zip code.


3- Generate Button:
-----------
When click on this button, the user interface will be updated with the data from the server.


4- Most Recent Content:
-----------
It is an area in which the new data appears.


5- Footer:
-----------
This project has a pretty designed footer which has a copyrights reserved text and social contact icons.


6- Font awesome:
-----------
This is for the icons used.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Some Notes**

- When the user enters an invalid US zip code or leaves it empty, an error will appear to him/her below the zip code input's field.

- When the user clicks on generate button to update the UI, the feeling content textarea will be empty in order to allow the user to enter something else new directly.

- When the user interface is updated, the background changes according to the temperature that is received from the server and so do the style of the app headline, and this is of course based on some conditions of the temperature.

- The temperature appears in Kelvin, Fahrenheit, and Celsius units.

- For example, you can use (12345) zip code for cold weather, (71111) for mild weather, and (85005) for hot weather. These examples work in sometimes as said.

- I added the city name of the entered zip code for just some pretty function.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Technologies Used**

- HTML
- CSS
- Bootstrap
- JavaScript
- Node & Express js

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Architecture**

node_modules

website

    assets
       - fontawesome
          - css
             - all.min.css
             - fontawesome.min.css
          - webfonts

    css
       - images
       - bootstrap.min.css
       - style.css

     js
       - app.js

     index.html

package.json

package-lock.json

README.md

server.js

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Result**

- The Codes:
-----------
https://github.com/yewess97/Weather-Journal-App


- The Weather Journal App:
-----------
https://weather-expressjs-app.herokuapp.com/