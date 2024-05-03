/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle ={
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    } 
  }
  /**  
  @param { object }  data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "./asset/aliens_screen_image.jpg")
  }
  /**@param {object} data */
  create(data) {
    this.titleSceneBackgroundImage = this.add
    .sprite(0, 0, "titleSceneBackground")
    .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920/2
    this.titleSceneBackgroundImage.y = 1080/2

    this.titleSceneText = this.add
      .text(1920/2, 1080/2 + 350 ,"Space Alien", this.titleSceneTextStyle)
      .setOrigin(0.5)
  }
  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene