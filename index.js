const myInfo = require('./information.js')

let cowsay = require("cowsay")

console.log(cowsay.say({
	text : `Hello I'm ${myInfo.myName} from ${myInfo.myCampus}`,
	e : "oO",
	T : "U "
}));


