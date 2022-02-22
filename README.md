# Personal Website V2

This is the project about the second personal website of Andreas Rissling. Here you find all information you need to develop and build the website.

## Tech stack

In this chapter only the main technologies of the project are listed. A detailed overview can be found in the _package.json_ file under the keys **dependencies** and **devDependencies**.

The whole project is based on **Gatsby** and written in **TypeScript.** Some configuration files are written in **JavaScript**. The main technologies are:

- [Gatsby](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)

To support the development process the technologies listed below are used:

- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint staged](https://github.com/okonet/lint-staged#readme)

## Requirements and Setup

`npm` and `Node.js` are needed to installed on the local maschine. When is started this project i was using `npm` _v6.14.8_ and `Node.js` _v14.15.0_.

To get started clone the repository from github to your local maschine.

```
git clone git@github.com:arisslin/jsmpc.git
```

Then switch into the repo and install the projects dependencies.

```
cd personal-website-v2
npm i
```

## Developing

For running the development server you can run following `npm` scripts in your console.

```
npm start
```

or

```
npm run develop
```

The site is now running at http://localhost:8000. You aslo find **GraphiQL**, an in-browser IDE, to explore the site's data and schema with `GraphQL` on http://localhost:8000/\_\_\_graphql

## Build and deploy

To compile the app and make it ready for deployment use following command:

```
npm run build
```

Afterwards you will find in the projects root folder a folder named `./public`. Inside this folder you find the compiled site ready for deployment.

For testing the compiled site you can run a production server on your local maschine. Therefor type the command below into you console:

```
npm run serve
```

You can view the site in the browser now on http://localhost:9000/

## Cleanup

If the local project has issues `Gatsby` provides a clean up script.

```
npm run clean
```

For more information read the documentation on https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean

## ESlint

...follows

## Storybook

Used for isolated developmend of React components and for documentation.

## Testing

... fowllows

## Scripts

... follows
