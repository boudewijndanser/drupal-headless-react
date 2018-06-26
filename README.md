![react icon](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/dev-icons/react.svg)![js icon](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/dev-icons/js.svg)![html icon](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/dev-icons/html.svg)![css icon](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/dev-icons/css.svg)![drupal icon](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/dev-icons/drupal.svg)
# Drupal Headless with React
> Assignment for Hoppinger

## Contents
- [Description](#description)
- [Run this project](#to-run-this-project)
- [Wishlist](#wishlist)

![What it looks like...](https://github.com/boudewijndanser/drupal-headless-react/blob/master/public/img/hoppinger-screenshots.png)

### Description
I made this for a job interview at Hoppinger. <br/> They asked me to:

* Setup a headless Drupal with two types of related content
* Configure the Drupal API export settings
* Build REST API to Get data from the database with the Drupal content
* Build a front-end with React to display the content

### To run this project
#### Drupal
For extra easy testing I installed a Drupal 8 CMS on my server, now there is no need to install Drupal yourself. 
* View my (local) [config](https://github.com/boudewijndanser/drupal-headless-react/blob/master/drupal-config.tar.gz?raw=true) file

#### React / Express
* Clone the repo
* Get the dependencies with `yarn`
* Run `nodemon index.js` in src/api
* Edit the Express url 
  ```
  src/
  constants.js
  ```
* Run 'yarn start`

### Wishlist

If there was more time / a time machine:
* More CSS styling, maybe SASS
* Make it responsive
* Write tests (More/ sooner)
* Combine/ re-use functions like getMusic / getMovies / dispatchData
* Find out how to get the img url from Drupal without HTML in it
* Promises in Express functions

> Thanks Abbas and Rein for your awesome tips!
