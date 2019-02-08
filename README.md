# Tower-Defense-Game
Elemental Tower Defense game created with JavaScript, HTML5, Node.js, and MelonJS.

## Description
Elemental Tower Defense is a modified version of tower defense where the player is capable of placing specialized elemental towers onto the game board. Each tower is based on one of the four elements - earth, fire, water, air - and possesses a special ability or attribute, making the game strategy highly dynamic and exciting when playing through the levels. The player can choose between easy, medium, and hard difficulty and must win by surviving ten waves of enemy units. Each wave is equipped with unique and challenging enemy units that differ by speed, health, and animation. The player has the added ability to upgrade towers where each tower can receive a final upgrade and new final ability.

## Download Instructions
Download Instructions can be followed under the "melonJS boilerplate" section if a local copy is desired, however a working version of the game can be played [here](https://frandyjayr.github.io/Tower-Defense-Game/)

## Controls
- Use the Arrow keys to move around towers
- Press 'Enter' to place towers and to choose menu options
- Press the following to spawn respective towers:
	- Q: Air Tower
	- W: Water Tower
	- E: Fire Tower
	- R: Earth Tower
	- T: Upgrading Tower Tool
- Press 'P' to start the current wave of enemies

## Gameplay 
![title_screen](https://user-images.githubusercontent.com/23549050/52458684-b60b1d00-2b15-11e9-937a-f411088e18e0.png)
![image1](https://user-images.githubusercontent.com/23549050/52458692-bf948500-2b15-11e9-818c-818b807520da.JPG)


melonJS boilerplate
-------------------------------------------------------------------------------

features :
- video autoscaling
- mobile optimized HTML/CSS
- swiping disabled on iOS devices
- debug Panel (if #debug)
- default icons
- distribution build
- standalone build for desktop operating systems
- optional ES5 shim for non ES5 compliant browser (see index.html)

## To run distribution

To build, be sure you have [node](http://nodejs.org) installed. Clone the project:

    git clone https://github.com/melonjs/boilerplate.git

Then in the cloned directory, simply run:

    npm install

You must also have `grunt-cli` installed globally:

    npm install -g grunt-cli

Running the game:

	grunt serve

And you will have the boilerplate example running on http://localhost:8080

## Building Release Versions

To build:

    grunt

This will create a `build` directory containing the files that can be uploaded to a server, or packaged into a mobile app.

----

Building a standalone desktop release:

    grunt dist

Running the desktop release on Windows:

    .\bin\electron.exe

Running the desktop release on macOS:

    open ./bin/Electron.app

Running the desktop release on Linux:

    ./bin/electron

Note that you may have to edit the file `Gruntfile.js` if you need to better dictate the order your files load in. Note how by default the game.js and resources.js are specified in a specific order.

-------------------------------------------------------------------------------
Copyright (C) 2011 - 2017 Olivier Biot
melonJS is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)
