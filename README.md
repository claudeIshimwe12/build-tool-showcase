# Build Tools Web Application

This project demonstrates the use of various build tools and package managers in a small web application. The application features a list of popular build tools retrieved from a JSON file, styled with Sass, and built using Webpack. It also includes Babel for transpiling ES6+ JavaScript, ESLint for linting, and Jest for testing.

## Project Setup

### Prerequisites

- **Node.js installed on your machine**.
- **npm for managing dependencies**.

### Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/build-tools-web-app.git
```

2. Navigate to the project directory:

```bash
cd build-tools-web-app
```

3. Install the project dependencies:

```bash
npm install
```

### Available npm Scripts

The following npm scripts are available to manage various tasks in the project:

```bash
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production",
  "lint": "eslint src/**/*.js",
  "test": "jest"
}
```

- **npm start**: Runs the application in development mode using webpack-dev-server. It watches for file changes and hot-reloads the browser with updates.

- **npm run build**: Creates a production build, minifying and optimizing JavaScript and CSS, and generates the final assets in the dist folder.

- **npm run lint**: Runs ESLint on the project’s JavaScript files (src/\*_/_.js) to ensure that the code follows the linting rules, including disallowing console.log statements.

- **npm test**: Runs the Jest test suite to ensure that all the functions in your application behave as expected.

### Build Process

#### This project uses Webpack as the main build tool.

- **Webpack**: bundles all JavaScript, CSS, and assets into a single output file for easy distribution.

- **Bable**: Ensures browser compatibility by transpiling modern JavaScript (ES6+) into a version that can be understood by older browsers.

- **Sass**: The project uses Sass to write styles in .scss files, which are compiled into regular CSS by Webpack.

- **ESLint**: Enforces code quality by checking for potential errors, and ensures that no console.log statements are left in the code.

- **Jest**: Provides a simple framework for unit testing JavaScript functions to ensure correctness.

#### Development Mode

In development mode, Webpack serves the app using webpack-dev-server, which watches for changes and refreshes the browser automatically. Source maps are generated for easier debugging.

#### Production Mode

In production mode, Webpack optimizes the code by minifying JavaScript and CSS, and implements code splitting to load external libraries more efficiently.

## Contribution

Feel free to colone and fork the repo to raise a PR
