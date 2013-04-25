var stage;
var mainLayer;

$(document).ready(function() {
	stage = new Kinetic.Stage({
		container: 'stage',
		height: window.innerHeight,
		width: window.innerWidth
	});
	mainLayer = new Kinetic.Layer();
	stage.add(mainLayer);
	drawMainStage();
});

$(window).resize(function() {console.log('drawing');drawMainStage();});

function drawMainStage() {
	stage.setHeight(window.innerHeight);
	stage.setWidth(window.innerWidth);
	mainLayer.removeChildren();
	var newRect = new Kinetic.Rect({
		width: 200,
		height:200,
		x:stage.getWidth()/2 - 100,
		y:stage.getHeight()/2 - 100,
		draggable: true,
		fill: 'white'
	});
	var leftup = new Kinetic.Rect({
		width:5,
		height:5,
		x:0,
		y:0,
		fill: 'white'
	});
	var leftdown = new Kinetic.Rect({
		width:5,
		height:5,
		x:0,
		y:stage.getHeight()-5,
		fill: 'white'
	});
	var rightup = new Kinetic.Rect({
		width:5,
		height:5,
		x:stage.getWidth()-5,
		y:0,
		fill: 'white'
	});
	var rightdown = new Kinetic.Rect({
		width:5,
		height:5,
		x:stage.getWidth()-5,
		y:stage.getHeight()-5,
		fill: 'white'
	});
	mainLayer.add(leftup);
	mainLayer.add(leftdown);
	mainLayer.add(rightup);
	mainLayer.add(rightdown);
	mainLayer.add(newRect);
	stage.draw();
}