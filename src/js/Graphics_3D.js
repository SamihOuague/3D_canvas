class Graphics_3D {
    constructor(w, h, v) {
        let canvas = document.getElementById("game");
        this.ctx = canvas.getContext("2d");
        this.width = w;
        this.height = h;
        this.initial_vertices = [...v];
        this.vertices = v;
        this.vectors = [];
    }

    init_graphic = () => {
        for (let i in this.vertices) {
            let v = this.vertices[i];
            this.draw_point(v[0], v[1]);
        }
    }

    draw_point = (x, y) => {
        let pos_x = (x * 20) + 100;
        let pos_y = 100 - (y * 20);
        this.ctx.beginPath();
        this.ctx.fillStyle = "#afafaf";
        this.ctx.fillRect(pos_x - 2, pos_y - 2, 4, 4);
        this.ctx.closePath();
    }

    draw_line = (from, to) => {
        let [start_x, start_y] = from;
        let [end_x, end_y] = to;
        let x = [(start_x * 20) + 100, (end_x * 20) + 100];
        let y = [100 - (start_y * 20), 100 - (end_y * 20)]
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.moveTo(x[0], y[0]);
        this.ctx.lineTo(x[1], y[1]);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    reset_graph = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    get_radians = (deg) => {
        return deg * (Math.PI/180);
    }

    rotation_3D = (alpha, beta, gamma) => {
        let tetha_x = this.get_radians(alpha);
        let tetha_y = this.get_radians(beta);
        let tetha_z = this.get_radians(gamma);

        let [cos_x, sin_x] = [Math.cos(tetha_x), Math.sin(tetha_x)];
        let [cos_y, sin_y] = [Math.cos(tetha_y), Math.sin(tetha_y)];
        let [cos_z, sin_z] = [Math.cos(tetha_z), Math.sin(tetha_z)];
        this.vertices = [...this.initial_vertices];
        for (let i in this.vertices) {
            let [x, y, z] = this.vertices[i];
            this.vertices[i] = [x, (y * cos_x) - (z * sin_x), (y * sin_x) + (z * cos_x)];

            [x, y, z] = this.vertices[i];
            this.vertices[i] = [(x * cos_y) + (z * sin_y), y, (z * cos_y) - (x * sin_y)];

            [x, y, z] = this.vertices[i];
            this.vertices[i] = [(x * cos_z) - (y * sin_z), (x * sin_z) + (y * cos_z), z];
        }

        this.reset_graph();
        this.init_graphic();
    }
}

export default Graphics_3D;