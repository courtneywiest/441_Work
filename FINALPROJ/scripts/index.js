class Level1 extends Phaser.Scene {
    
    constructor () {
        super({key: 'Level1'});
    }

    preload() {

    }

    create() {
        this.textA = this.add.text(10, 10, 'Level1', {font: '32px Arial', fill: 'black'});

        this.scene.lauch('Level2');
    }
}











class Level2 extends Phaser.Scene {
    constructor () {
        super({key: 'Level2'});

    }

    preload() {

    }

    create() {
        this.textB = this.add.text(10, 10, 'Level2', {font: '32px Arial', fill: 'black'});

    }

    update() {

    }
    
}






var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};







var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    scene: [Level1, Level2]

};

var game = new Phaser.Game(config);