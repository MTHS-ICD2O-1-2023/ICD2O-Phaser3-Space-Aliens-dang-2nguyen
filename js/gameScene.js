/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })
    this.background = null
    this.ship = null
  }
  /**  
  @param { object } data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Game Scene")
    this.load.image("starBackground","./asset/starBackground.png")
    this.load.image("ship","./asset/spaceShip.png")
  }
  /**@param {object} data */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0,0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100 , "ship")
  }
  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    
  }
}

export default GameScene