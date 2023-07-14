import Scene from "./lib2d/Scene";
import Vector from "./lib2d/Vector";
import Neurone from "./lib2d/Neurone";


let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let scene = new Scene(400, 400, ctx, 10);


let canvas2 = document.getElementById("tanh");
let ctx2 = canvas2.getContext("2d");

let actfun = new Scene(400, 400, ctx2, 10);


let n = new Neurone(Math.random() * 2, Math.random() * 2, Math.random() * 2);

let sy = -(n.w1/n.w2);

let y = -(n.bias/n.w2);

scene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, "#ffffff");

let elt = document.getElementsByClassName("range");
let points = [];
const e = 2.71828;

let d_points = () => {
    for (const p in points) {
        const { x, y } = points[p];
        actfun.add_point({x, y});
    }
}


let y0_points = [];
let y1_points = [];

for (let i = -10; i < 10; i += 0.5) {
    points.push(new Vector(i, Math.tanh(i)));
}

if (Math.round(Math.random() * 10) % 2 != 0) {
    for (let i = 0; i < 20; i++) {

        let x = Math.floor(Math.random() * 20) - 10;
        let y = Math.floor(Math.random() * 8) - 10;
        y0_points.push(new Vector(x, y));

        x = Math.floor(Math.random() * 20) - 10;
        y = Math.floor(Math.random() * 13) - 10;
        y1_points.push(new Vector(x, -y));
    }
} else {
    for (let i = 0; i < 15; i++) {
        let x = Math.floor(Math.random() * 10) - 10;
        let y = Math.floor(Math.random() * 20) - 10;
        y0_points.push(new Vector(x, y));

        x = Math.floor(Math.random() * 10) - 10;
        y = Math.floor(Math.random() * 20) - 10;
        y1_points.push(new Vector(-x, y));
    }
}
let e_points = () => {
    for (let i = 0; i < y0_points.length; i++) {
        
        scene.add_point(y0_points[i], "#ff0000");
        scene.add_point(y1_points[i], "#00ff00");
    }
}

d_points();
e_points();



document.getElementById("add-point").addEventListener("submit", (e) => {
    e.preventDefault();
    let r = 0.1;
    
    for (let i = 0; i < y1_points.length; i++) {
        let { x, y } = y1_points[i];
        if (n.get_z(x, y) < 0) {
            n.w1 = n.w1 + (r * 1 * x);
            n.w2 = n.w2 + (r * 1 * y);
            n.bias = n.bias + (r * 1 * 1);
        }
    }
    

    for (let i = 0; i < y0_points.length; i++) {
        const { x, y } = y0_points[i];
        if (n.get_z(x, y) > 0) {
            n.w1 = n.w1 + (r * -1 * x);
            n.w2 = n.w2 + (r * -1 * y);
            n.bias = n.bias + (r * -1 * 1);
        }
    }

    
    sy = -(n.w1/n.w2);
    y = -(n.bias/n.w2);

    scene.reset();
    d_points();
    e_points();
    scene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, "#ffffff");
    for (let i = 0; i < elt.length; i++) {
        switch(elt[i].name) {
            case "w1":
                elt[i].value = n.w1;
                break;
            case "w2":
                elt[i].value = n.w2;
                break;
            case "b":
                elt[i].value = n.bias;
                break;
        }
    }
});
