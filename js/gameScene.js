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
    this.fireMissile
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
    this.load.image("missile", "asset/missile.png")
  }
  /**@param {object} data */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0,0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100 , "ship")

    this.missileGroup = this.physics.add.group()
  }
  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    const keyLeftObj =  this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true){
      this.ship.x-=15
      if(this.ship.x<0){
        this.ship.x=0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x +=15
      if (this.ship.x >1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true){
      if (this.fireMissile === false){
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
        this.missileGroup.add(aNewMissile)
      }
    }

    if (keySpaceObj.isUp === true){
      this.fireMissile = false
    }
  }
}

export default GameScene