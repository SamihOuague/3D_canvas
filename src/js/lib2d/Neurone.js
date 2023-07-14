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

export default Neurone;