<h1 align="center"> The Secret Recipies</h1>

This is Microverse's final project in React/Redux's course.

The objective of this project was to create a single page recipe catalogue using React, Redux and TheMealDB API.

## Table of contents
- [About](#about)
- [The catalogue](#the-catalogue)
  - [How to open](#how-to-open)
  - [Technologies used](#technologies-used)
- [Author](#author)
- [Contribution](#contribution)
- [Disclaimer](#disclaimer)

## About

This project's goal was to build a browsable list of items that you can filter and access to the details of one item. The list should be accessed from an API, so I choose the [TheMealDB-API][TheMealDB-API] and filtered it to store only meals based on their categories.

Link to a live version [here][live-version].

Repository: `https://github.com/Ralph-1/The-Sercet-Recipes`

## The catalogue

When you open the catalog the React APP downloads the data from the server using an API and stores it in the Redux store.
- A user can view all the meals categories in the CookBook
![initScreenshot][initScreenshot]

- A user can click on any category and get to see the meals listed under that category.
![mealsScreenshot][mealsScreenshot]

- Under each category, a user sees a variety of dishes to make a choice from and each dish chosen has a list of all the ingredients that were used to prepare it, area where it originates from and the category it belongs to:

![descriptionScreenshot][descriptionScreenshot]

### How to open

You can open the catalog online clicking [here][live-version] or locally following these steps:

* Click on the green button "Clone or Download"
* Click on Download ZIP or clone the repository to your desired directory
* Extract the project (This step is for those who download the ZIP)
* In your terminal, navigate to the folder
* Run `npm install` or `yarn install`
* Run `npm start` or `yarn start`

A tab will be opened in the browser.

### Technologies used

To create this project I used:

* JavaScript
* A bit of HTML and CSS
* Eslint
* React
* Redux
* PropTypes
* [TheMealDB-API][TheMealDB-API]

## Author

👤 **Ralph Oburu**

- Github: [Ralph-1](https://github.com/ralph-1)
- Twitter: [@NotRalph0](https://twitter.com/NotRalph0)
- LinkedIn: [Ralph](https://linkedin.com/in/ralph-oburu)

### Contribution 🤝
Contributions, issues and feature requests are welcome!

<!-- Links -->
[TheMealDB-API]: https://www.themealdb.com/api.php
[live-version]: https://61714b4270b5acd256658123--hungry-johnson-4b570f.netlify.app/
[initScreenshot]: ./src/assets/images/initial.png
[mealsScreenshot]: ./src/assets/images/meals.png
[descriptionScreenshot]: ./src/assests/images/description.png
