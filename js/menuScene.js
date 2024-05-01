/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null

  }
  /**  
  @param { object }  data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./asset/aliens_screen_image2.jpg")
    this.load.image("startButton", "./asset/start.png")
  }
  /**@param {object} data */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920/2
    this.menuSceneBackgroundImage.y = 1080/2

    this.startButton = this.add.sprite(1920/2, 1080/2 +100, "startButton")
    this.startButton.setInteractive({useHandCursor:true})
    this.startButton.on("pointerdown", () => this.clickButton())
  }
  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    
  }
  clickButton(){
    this.scene.start("gameScene")
  }
}

export default MenuScene