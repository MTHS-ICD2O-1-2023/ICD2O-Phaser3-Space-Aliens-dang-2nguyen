/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }
  /**  
  @param { object }  data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
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

export default MenuScene