# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Light Mode](#light-mode)
    - [Dark Mode](#dark-mode)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshots

#### Light Mode 

![image](https://user-images.githubusercontent.com/55962587/230546160-2eedd148-0d63-4872-9979-056585f01622.png)
![image](https://user-images.githubusercontent.com/55962587/230546200-ac1c1e84-9c40-4381-a1aa-c72fe903b5f4.png)

#### Dark Mode 

![image](https://user-images.githubusercontent.com/55962587/230546275-d5913cd1-0d66-47eb-b2d9-633d4a017aa7.png)
![image](https://user-images.githubusercontent.com/55962587/230546244-2d372107-81a0-4020-8a79-237c1dbe9215.png)

### Links

- Solution URL: [Github Repository](https://github.com/sarahkwon/REST-Countries-Website)
- Live Site URL: [View Here](https://your-live-site-url.com)

## My process

For this project I used React for front-end functionality, CSS/HTML for styling, and Axios to fetch data. I started off with developing the front-end. For both the home and details page, I decided to create the individual components and style them first so that formatting the page afterwards becomes a simpler process.

For the REST Countries API, I used React's useState and useEffect hooks to fetch and store the data, and displayed them using JavaScript's map function. If a user goes to a country details page, the app gets more data for that specific country and displays it for the user. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Love

### What I learned

Before this project, I mainly used UI libraries to get the job done for the front-end. However, I wanted to have a good grasp on HTML and CSS fundamentals, so I learned the concepts behind Flexbox, CSS Grid, and HTML5 semantics. I also learned how to implement dark mode! 

### Useful resources

- [Flexbox Froggy](https://flexboxfroggy.com/) - I had a hard time understanding flexbox until I completed this tutorial
- [Grid Garden](https://cssgridgarden.com/) - Made by the same creators of Flexbox Froggy, they made it very easy to understand the concepts behind CSS Grids
- [Easy Dark Mode](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - A tutorial on how to implement dark mode

## Author

- Website - [Sarah Kwon](https://sarahkwon.github.io)
- Frontend Mentor - [@sarahkwon](https://www.frontendmentor.io/profile/sarahkwon)
- GitHub - [@sarahkwon](https://github.com/sarahkwon)
