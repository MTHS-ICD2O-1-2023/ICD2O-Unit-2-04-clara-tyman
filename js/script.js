// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara
// Created on: Mar 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of the triangle
 */
function calculateAreaOfRectangle () {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = base * height / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
