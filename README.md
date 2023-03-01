# Travlr Application
### Jad Alrehaoui

## Stack in use: MEAN

# Setup and Installation

- NodeJS
- ExpressJS

Let's start by generating an express project that has the views as hbs (Handlebars)

Run the following command
> express --view=hbs --git --force <folder-name>

access the folder and run 
>npm install

Once everything is installed 
> npm start

# Repo walkthrough

```app_server``` is MVC Structured, holds the models, routes, views and controllers. 

The ```controllers``` folder has an ```index.js``` file that is called by the routes to require the logic of each controller. ```index.js``` must be updated whenever we add a new controller. 

Each page has its own controller for now. 

The ```routes/index.js``` file holds all the routes we have right now, it imports the controllers and exports the router.

The ```views``` are files of type hbs (Handlebars), personally I would prefer ```ejs``` as it is easier and has more functionality. 

The ```layout.hbs``` is the theme, or we can say the header and footer of each page.
* I added ```partials``` to the views and separated the header and footer to have a cleaner code.

The ```static_theme``` folder holds ```html``` pages that are not used in the project but they are the template we chose. 

# Data
The data folder is built in the early stages of the development of this project. It was used to mimic the database functionality to be added later on. 
For now it only has 3 types of records ```rooms, meals, trips``` as jsons, because we are going to get JSON objects from the nosql database to be implemented later on. 
 
