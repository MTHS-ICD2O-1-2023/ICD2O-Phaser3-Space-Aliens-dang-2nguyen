/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    let alienXVelocity = Math.floor(Math.random()* 50) +1
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

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
    this.load.image("alien", "asset/alien.png")
    this.load.audio('laser',"asset/laser1.wav")
  }
  /**@param {object} data */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0,0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100 , "ship")

    this.missileGroup = this.physics.add.group()

    this.alienGroup = this.add.group()
    this.createAlien()
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
    this.missileGroup.children.each( function(item) {
      item.y = item.y - 15
      if (item.y<0){
        item.destroy()
      }
    }

    )
  }
}

export default GameScene