export default class Boot extends Phaser.Scene{
    constructor(){
        super("BootScene")
    }

    preload(){
        this.load.image("loadingBar", "./assets/imagens/loadingBar.png")
    }

    create(){
        this.scene.start("LoadScene");
    }
}

