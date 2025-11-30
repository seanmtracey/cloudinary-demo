# Cloudinary SDK Example

A small demo app which shows off using the Cloudinary JavaScript SDK to manipulate images running in Vite.

# Building and Running

First, clone this repository to your local system. You can do this with `git clone https://github.com/seanmtracey/cloudinary-demo.git` in your chosen Terminal.

Next, `cd` into the directory, and run `npm install` to install all of the project dependencies. Once that's finished, you'll have everything you need to run the server locally for testing, and for pushing your application to a production environment (if you want to).

To run the development server, run `npm run dev`. This should start a Vite development server that listens on port `5157` which you can access in a web browser by going directly to `http://localhost:5157` or by clicking [here](http://localhost:5157).

# Project Structure

The source files for this demo are in the root of the project directory (`index.html`) and in the `./src` directory. 

Within the `./src` directory, you will find a `style.css` and `main.js` file which the `index.html` file will load when accessed through your browser.

All of the functional code - including the the calls the Cloudinary API - are in the `./src/main.js` file.