class Color {
  private red: number;
  private green: number;
  private blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  clone = () => {
    return new Color(this.red, this.green, this.blue);
  };

  getRed = () => {
    return this.red;
  };

  getGreen = () => {
    return this.green;
  };

  getBlue = () => {
    return this.blue;
  };

  getRgbString = () => {
    return `rgb(${String(this.red)},${String(this.green)},${String(this.blue)})`;
  };
}

export default Color;
