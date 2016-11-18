"use strict";

class DropDownList {
    constructor(width, height, colorLine, backgroundColor) {
        this.color = colorLine;
        this.width = width;
        this.height = height;
        this.background = backgroundColor;
        this.arrayOfOptions = ['item', 'item2', 'item3'];
    }

    createRect() {
        let renderer = PIXI.autoDetectRenderer(this.width, this.height, { antialias: true });
        document.body.appendChild(renderer.view);

        let stage = new PIXI.Container();

        let graphics = new PIXI.Graphics();

        graphics.lineStyle(3, this.color, 1);
        graphics.beginFill(this.background, 1);
        graphics.drawRect(170, 50, 160, 50);
        graphics.endFill();

        stage.addChild(graphics);

        animate();

        function animate() {
            renderer.render(stage);
            requestAnimationFrame( animate );
        }
    }
}

let rect = new DropDownList(500, 600, 0xFFCC00, 0x99CCFF);
rect.createRect();