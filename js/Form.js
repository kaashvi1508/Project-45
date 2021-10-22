class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Select Game Level");
    this.space = createButton("Space");
    this.land = createButton("Land");
    this.water = createButton("Water");
  }

  setElementsPosition() {
    this.input.position(width / 2 - 110, height / 2 - 150);
    this.space.position(width / 2 - 280, height / 2 + 50);
    this.land.position(width / 2 - 90, height / 2 + 50);
    this.water.position(width / 2 + 100, height / 2 + 50);
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.space.class("customButton");
    this.land.class("customButton");
    this.water.class("customButton");
  }

  hide() {
    this.space.hide();
    this.land.hide();
    this.water.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.land.mousePressed(() => {
      this.input.hide();
      this.land.hide();
      this.water.hide();
      this.space.hide();
      gameState=1;
    });
    this.water.mousePressed(() => {
      this.input.hide();
      this.land.hide();
      this.water.hide();
      this.space.hide();
      gameState=2;
    });
    this.space.mousePressed(() => {
      this.input.hide();
      this.land.hide();
      this.water.hide();
      this.space.hide();
      gameState=3;
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
