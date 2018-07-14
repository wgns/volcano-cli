#!/usr/bin/env node

const [,, ...args] = process.argv
const chalk = require('chalk');

if (args == "serve") {
    const handler = require('serve-handler');
    const http = require('http');

    const server = http.createServer((request, response) => {
        return handler(request, response);
    })

    var port = Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000;

    server.listen(port, () => {
        console.log('Running at http://localhost:' + port);
    });
} else if (args == "help") {
	const log = console.log;
	log(chalk.white('\n\t      (   (( . : (    .)   ) :  )\n'+
        '\t       (   ( :  .  :    :  )  ))\n'+
        '\t         ( ( ( (  .  :  . . ) )\n'+
        '\t          ( ( : :  :  )   )  )\n'+
        '\t           ( :(   .   .  ) .\n'+
        '\t             . :(   :    )\n'+
        '\t              (   :  . )  )\n')+
        '\t               (   :   ' + chalk.redBright('#@##\n'+
        '\t              #,###  #@  #@#\n'+
        '\t             #/ @ # @#     ##\n'+
        '\t           ##  @@# @##@  `..@#\n'+
        '\t         @#  #@#   _##     `  #_\n' +
        '\t       @##;  `#~._.  ##@        #_\n'+
        '\t     .-#/           @#@#@--,_,--/ \\\n'+
        '\t    # @#@..,     .~###          `. #_\n'+
        '\t  _#         -.- #@####@             \\_\n'+
        '\t_/     &^^       ^#^##~##&&&   %       \\_\n'));

	log(chalk.bold('\n volcano') + ' - A Hackathon project\n\n' + chalk.bold(' USAGE\n') +
	   '\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' serve\n' +
	   '\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' help\n' +
	   '\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' version\n\n' +
	   '\t' + 'By default, ' + chalk.redBright('volcano') + ' will provide a random port\n\n' +
	   chalk.bold(' OPTIONS\n') +
	   '\thelp\t\t\tShows this help message\n' +
	   '\tversion\t\t\tDisplays the current version of volcano\n' +
	   '\tserve\t\t\tProvides a random port to host');
} else if (args == "version") {
	console.log('1.0.7');
} else {
    console.log('usage:\t  volcano [serve] [help] [version]\n\nThese are the only ' + 
        chalk.redBright('volcano') + ' commands available.');
}