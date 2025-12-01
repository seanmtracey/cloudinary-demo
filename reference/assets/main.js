'use strict';

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cartoonify } from "@cloudinary/url-gen/actions/effect";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

const cld = new Cloudinary({
	cloud: {
		cloudName: 'demo'
	}
});

const img = cld.image('sample.jpg');

const photoHolder = document.querySelector(".main-photo");
const imgElement = photoHolder.querySelector("img");
const btnGroup = document.querySelector(".btn-group");
const actionBtns = btnGroup.querySelectorAll("[data-action]");

actionBtns.forEach(btn => {

	btn.addEventListener("click", function(e){

		e.preventDefault();
		e.stopImmediatePropagation();

		const action = this.dataset.action;

		console.log(action);

		applyTransformation(action);

	}, false);

});

function applyTransformation(transformationType){

	console.log(transformationType);

	if(transformationType === "crop"){

		img.resize(fill().width(250).height(250));
		imgElement.src = img.toURL();

	}

	if(transformationType === "cartoonify"){
		img.effect(cartoonify());
		imgElement.src = img.toURL();
	}

	if(transformationType === "text"){

		img.overlay(
			source(
				text(
					'Flowers!',
					new TextStyle('Cookie', 150)
					.fontWeight('bold'))
					.textColor('#FFF')
			).position(
				new Position().gravity(compass('center'))
			)
		)
		
		imgElement.src = img.toURL();

	}

}