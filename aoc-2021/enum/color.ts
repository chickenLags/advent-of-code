
class Color {
    static RED = 0xff0000ff;
    static GREEN = 0x00ff00ff;
    static BLUE = 0x0000ffff;
    static WHITE = 0xffffffff;
    static BLACK: number = 0x000000ff;

    color: number;

    constructor(hex: number) {
        this.color = hex;
    }
}

export {Color}
