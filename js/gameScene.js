/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })
  }
  /**  
  @param { object } data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Game Scene")
  }
  /**@param {object} data */
  create(data) {

  }
  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    
  }
}

export default GameScene