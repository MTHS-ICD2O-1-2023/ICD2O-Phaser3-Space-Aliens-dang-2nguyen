// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

const config = {
  type: Phaser.AUTO,
  width: 2300,
  height: 1080,
  backgroundcolor: 0x5f6e7a,
  physic: {
    default: "arcade",
    arcade:{
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autocenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config)
console.log(game)