## Mic-Check

Mic-Check is a project designed to help musitions coordinate rental equipment delivery to a destination, as well retailers can post items they would like to rent. The project utalized asyncronis fetch calls to [The PostMates API](https://postmates.com/ "The PostMates API") to coordinate the shipping of items for rent. The UI is designed to have all rental items displayed on the main page. A user will have to sign up or login once they have an account to be able to rent equipment or to post thier items for rent. Tech used in this project include: React, Redux, Router, Thunks(middleware), tested with Jest and Enzyme. Local storage was chosen to simuate a backend functionality till a node.js one can be built, a backend was not in the scope of the project. The project was built over the course of 10 days and was an individual project.

### Installation Instructions

* git clone https://github.com/TFisch/movie-tracker
* cd movie-tracker
* cd movie-tracker-be
* npm install
* cd movie-tracker-fe
* npm install
* npm start

### Application Navigation

From the home screeen a user may select "Sign up" to create a new account or "Log in" if they are an existing user. Once information is entered the user will find themselves located at their user page. From here they can select favorites by clicking the heart icon and view the star rating of each film by hovering over it. By clicking the "Favorites" button the user can view the list of selected films.

### Screenshots

![on-page-load](src/Images/screen-login.png)  

![on-page-load](src/Images/screen-user.png) 

![on-page-load](src/Images/screen-favorite.png)  
