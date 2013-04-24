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
	var newRect = new Kinetic.Rect({
		width: 200,
		height:200,
		x:stage.getWidth()/2 - 100,
		y:stage.getHeight()/2 - 100,
		draggable: true,
		fill: 'white'
	});
	mainLayer.add(newRect);
	mainLayer.draw();
});