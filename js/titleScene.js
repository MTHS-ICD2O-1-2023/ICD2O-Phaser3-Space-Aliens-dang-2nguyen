/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })
  }
  /**  
  @param { object }  data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Title Scene")
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

export default TitleScene