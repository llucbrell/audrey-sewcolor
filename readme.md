# audrey-sewcolor

> Seed for audrey-two VCCLI (View-Control-Command-Line-Interface) ^v2.0.0


## What this seed does?

Include into your audrey-two-view string in different colors. The string changes with the audrey-errors passed. Uses the err, warn, suc of the audrey-custom-view-object.

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags. Now taggies replaced by custom audrey-seeds can be included or not in your projects.

This node-module redefine the older audrey-two taggy "?". Now you can use it again with audrey.

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-sewcolor
```
## Usage

Example

```js
var myTerminalDisplay={
	body:["??MyErrors"],//tell audrey where you want to display it
	MyErrors:"You've got ...",//tell audrey what to write
	colors:{warning: "yellow", 
		 	error: chalk.red.bold,
			success: "green", }//tell audrey wich color use
};

var audrey2= require('audrey-two');
var audrey= audrey2(myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.seed(["audrey-errsign-%%"]);//tell audrey that there is a new seed
audrey.feed("E01","I'm an eror..");
/* pass an error to audrey
 * if first param start in "W"--> print in yellow
 *  "   "     "     "   "  "E"-->   "    "  red
 *  "   "     "     "   "  "S"-->   "    "  green
 */
audrey.talk();//run audrey to display view
```
