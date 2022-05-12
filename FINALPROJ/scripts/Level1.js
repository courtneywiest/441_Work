import Phaser from "phaser";

export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: "Level1"});
  }

  preload() {} 

  create() {
    this.scene.start("Level2")
  }
}