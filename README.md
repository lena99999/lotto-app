# Lotto App Coding Challenge

## Project setup

- Vue 3 with TS, composition api & VueRouter
- build tool: Vite
- component library: Vuetify
- graphql library: vue apollo
- VueUse composable collection
- testing: Vitest

The app consists of the following pages

- **home** with one card for eurojackpot. The card also shows the result of the latest draw (by clicking on it the details for this draw are shown) and a button to show the latest draws.
- **draws** showing a list of the lastest 10 eurojackpot draws (by clicking on an entry the details are shown)
- **draw details** showing the details of this draw including odds etc.

## Run app

I added a script for the proxy to the project, so the proxy needs to be started first or if the proxy of the project is not needed, use the real api url in .env

## Task

Create a website for a lottery supplier using a fictive brand of your choice.

- The website has to contain a welcome page greeting the visitor as well as a lottery page for eurojackpot only.
- The lottery page has to contain the drawing results which have to be fetched from the existing GraphQL endpoint http://www.lottohelden.de/graphql. (You might need to install the https://github.com/garmeeh/local-cors-proxy ‑ package to reach the endpoint from your local environment.)

KEEP IT SIMPLE - remember: we're not looking for a full-blown business application, but a basis for discussion and further development. A simple text output for the result will do.

Please be sure to take care of the following things:

- Vuejs, Typescript and GraphQL have to be used. You may use a component library of your choice.
- The implementation should contain one or more components (i.e. be component based).
- The website should be responsive - by using CSS preprocessing.
- The application has to be tested (you can skip browser-tests).

You should follow clean code best practices, keep your solution simple and keep in mind that your implementation will be the base for discussions, refactoring and extension.
