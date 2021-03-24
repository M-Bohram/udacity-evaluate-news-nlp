## Evaluate News Article with Natural Language Processing

Project at [Udacity](https://www.udacity.com/course/react-nanodegree--nd019) Become a React Developer Nanodegree program.

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

## Installation

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
   1. Install the dotenv package
   ```
   npm install dotenv
   ```
   2. Create a new `.env` file in the root of your project
   3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
6. Start the project

| Command | Action |
| :-----: | :----: |

### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:

- cd into your new folder and run in prod mode
- `npm install` installs the dependencies and devDependencies in project.json file
- `npm start` runs the Express server on port 8081
- `npm run build-dev` builds and runs the webpack dev server for development
- `npm run build-prod` builds and generates a dist folder for production

**Note:** The web page can be accessed with `localhost:8080`

8. Open browser at http://localhost:8080/

---

Made with ❤️️ and javascript
This README.md is inspired by [mohammedelzanaty](https://github.com/mohammedelzanaty)
