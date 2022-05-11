import Phaser from "phaser";

export default class Level2 extends Phaser.Scene {
  constructor() {
    super({ key: "Level2" });
  }

  preload() {}

  create() {
    const { width, height } = this.sys.game.config;

    this.add
      .text(width / 2, height / 2, "level\n2", {
        font: "15vw courier",
        color: "white"
      })
      .setOrigin(0.5, 0.5);
  }

  update(time, delta) {}
}