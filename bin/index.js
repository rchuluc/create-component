#! /usr/bin/env node

/**
 * @author rchuluc
 * @version v1.0
 *
 * @description This script create react components in following pattern
 *
 * |src
 * |--|components
 * |----|newComponent
 * |------|index.js
 * |------|styles.scss/css
 *
 * $ node create-component yourComponentName
 *
 * @param {string} componentName name of component folder
 */

const fs = require('fs')

const componentName = process.argv.slice(2)
const basePath = process.cwd()
const componentPath = `${basePath}/${componentName}`
const JsFile = `${componentPath}/index.js`
const SassFile = `${componentPath}/styles.scss`

fs.mkdirSync(componentPath, err => {
  if (err) {
    console.log('Error while create new component')
    return
  }
})

fs.closeSync(fs.openSync(SassFile, 'w'))
fs.closeSync(fs.openSync(JsFile, 'w'))
fs.appendFileSync(
  JsFile,
  `import React from 'react' 
import './styles.scss'`
)

console.log('\n Files created')
