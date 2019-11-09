## Psuedocode & Plan

The goal is to create an app using next.js for the routing.
Using the two APIs provided, generate their data to the page.
As the APIs return so many results, use infinite scroll to generate/update the data as the user scrolls down the list.

Install infinite scroll.
Create App.js to allow next routing.
Three pages, home, passages and problems.
Create a card to grab all the data.
Using an axios call, grab the API data and store them in state.
Map through the data and return say, 10 results.
After 10 results have been scrolled through, append 10 more. Continue until reaching the bottom of the page, upon where a div saying "END OF RESULTS" will show.

 ### COMPONENTS TO CREATE
 - Card wrapper
 - Card
 - App.js
 - Navbar - switch between 'problems' and 'passages' pages.