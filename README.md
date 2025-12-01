# Cloudinary SDK Example

A small demo app which shows off using the Cloudinary JavaScript SDK to manipulate images running in Vite.

## Building and Running

First, clone this repository to your local system. You can do this with `git clone https://github.com/seanmtracey/cloudinary-demo.git` in your chosen Terminal.

Next, `cd` into the newly created `cloudinary-demo/reference` directory , and run `npm install` to install all of the project dependencies. Once that's finished, you'll have everything you need to run the server locally for testing, and for pushing your application to a production environment (if you want to).

To run the development server, run `npm run dev`. This should start a Vite development server that listens on port `5173` which you can access in a web browser by going directly to `http://localhost:5173` or by clicking [here](http://localhost:5173).

![A screenshot of this demo application running](./images/screenshot.jpg "Cloudinary SDK Demo Application")

## Project Structure

The source files for this demo are in the `reference` directory.

Within the `reference/assets` directory, you will find a `style.css` and `main.js` file which the `index.html` file will load when accessed through your browser.

All of the functional code - including the the calls the Cloudinary API - are in the `reference/assets/main.js` file.

## Demo Functionality

This application demonstrates three features of the Cloudinary Transformation URL API:

1. Text Overlays ([Documentation](https://cloudinary.com/documentation/javascript_image_transformations#adding_text_and_image_overlays))
2. Image Cropping ([Documentation](https://cloudinary.com/documentation/javascript_image_transformations#transforming_your_image))
3. Image Effects and Filters ([Documentation](https://cloudinary.com/documentation/javascript_image_transformations#applying_image_effects_and_filters))

The effects in this demo are additive, that is, each effect is applied in the order that you apply them by clicking on the buttons instead of applying each effect separately to the original image. To see the effect that each image has individually, you can reload the page to start again.

For this demo, we're using some images that are publicly available from the Cloudinary Demo account, but you can use the exact same code to manipulate and transform images and videos from your own [Cloudinary account](https://cloudinary.com/users/register_free).