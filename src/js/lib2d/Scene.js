import Vector from "./Vector";

class Scene {
    constructor(w, h, ctx, o = 10) {
        this.width = w;
        this.height = h;
        this.ctx = ctx;
        this.origin = o;
        this.init_scene();
    }

    init_scene = () => {
        for (let i = 1; i < 20; i++) {
            if (i != this.origin)
                this.draw_line([i * 20, 0], [i * 20, this.height], "#1f1f1f", true);
            if (i != 20 - this.origin)
                this.draw_line([0, i * 20], [this.width, i * 20], "#1f1f1f", true);
        }
        this.draw_line([this.origin * 20, 0], [this.origin * 20, this.height], "#ff0000", true);
        this.draw_line([0, this.height - this.origin * 20], [this.width, this.height - this.origin * 20], "#ff0000", true);
    }

    draw_line = (from, to, color = "#1f1f1f", noctx = false) => {
        let [from_x, from_y] = this.transform_xy(from);
        let [to_x, to_y] = this.transform_xy(to);
        if (noctx) {
            [from_x, from_y] = from;
            [to_x, to_y] = to;
        }

        this.ctx.beginPath();

        this.ctx.strokeStyle = color;
        this.ctx.moveTo(from_x, from_y);
        this.ctx.lineTo(to_x, to_y);
        this.ctx.stroke();

        this.ctx.closePath();
    }

    reset = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.init_scene();
    }

    transform_xy = (vector) => {
        let x = 20 * (vector.x + this.origin);
        let y = this.height - (20 * (vector.y + this.origin));

        return [x, y];
    }

    add_point = (vector, color = "#ffffff") => {
        const [x, y] = this.transform_xy(vector);
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x - 2, y - 2, 4, 4);
        this.ctx.closePath();
    }
}

export default Scene;