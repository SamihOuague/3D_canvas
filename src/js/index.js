import Scene from "./lib2d/Scene";

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");


let scene = new Scene(400, 400, ctx, 10);


class Vector {
    constructor(x, y, w = 1) {
        this.x = x;
        this.y = y;
        this.w = w;
    }
}

class Neurone {
    constructor(b, w1, w2) {
        this.w1 = w1;
        this.w2 = w2;
        this.bias = b;
    }

    get_z(x1, x2) {
        return (this.w1 * x1) + (this.w2 * x2) + this.bias;
    }
}

let n = new Neurone(0, 1, 0.5);

let sy = -(n.w1/n.w2);

let y = -(n.bias/n.w2);

scene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, "#ffffff");

let elt = document.getElementsByClassName("range");
let points = [new Vector(2, 3), new Vector(4, -3), new Vector(1, -1), new Vector(-4, 1)];

let d_points = () => {
    for (const p in points) {
        const { x, y } = points[p]
        scene.add_point(points[p], (n.get_z(x, y) >= 0) ? "#ffffff" : "#ff0000");
    }
}

d_points();

scene.add_point({x: 2, y: 3}, "#ffffff");

for (let i = 0; i < elt.length; i++) {
    elt[i].addEventListener("change", (e) => {
        switch(e.target.name) {
            case "w1":
                n.w1 = Number(e.target.value);
                break;
            case "w2":
                n.w2 = Number(e.target.value);
                break;
            case "b":
                n.bias = Number(e.target.value);
                break;
        }
        sy = (-n.w1/n.w2);
        y = -(n.bias/n.w2);

        scene.reset();
        d_points();
        scene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, "#ffffff");
    });
}