function fitBackground() 
{
	windowHeight = parseInt($(window).height())
	windowWidth = parseInt($(window).width())

	imageWidth = 2000
	imageHeight = 1334

	imageProportions = imageWidth / imageHeight
	windowProportions = windowWidth / windowHeight

	if(imageProportions < windowProportions)
	{
		$('.background_image img').css('width', windowWidth)
		$('.background_image img').css('height', imageHeight*(windowWidth/imageWidth))
	}
	else
	{
		$('.background_image img').css('height', windowHeight)
		$('.background_image img').css('width', imageWidth*(windowHeight/imageHeight))
	}

	newImageHeight = parseInt($('.background_image img').css('height'))
	newImageWidth = parseInt($('.background_image img').css('width'))
	if(newImageHeight > windowHeight)
	{
		$('.background_image img').css('top', (windowHeight-newImageHeight)/2)
	}
	else
	{
		$('.background_image img').css('top', 0)
	}
	if(newImageWidth > windowWidth)
	{
		$('.background_image img').css('left', (windowWidth-newImageWidth)/2)
	}
	else
	{
		$('.background_image img').css('left', 0)
	}
}

$(document).ready(function () {
	fitBackground()
	$(window).resize(function() {
		fitBackground()
	})
})