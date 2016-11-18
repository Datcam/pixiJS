var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var sprite = PIXI.Sprite.fromImage('b.png');

sprite.position.set(230,264);
sprite.interactive = true;
console.dir(sprite);
sprite.on('mousedown', onDown);
sprite.on('touchstart', onDown);

stage.addChild(sprite);

function onDown (eventData) {
    console.log('ddd');

    sprite.scale.x += 10.3;
    sprite.scale.y += 10.3;
}
// start animating
animate();

function animate() {

    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
}
