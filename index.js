#!/usr/bin/env node

const [,, ...args] = process.argv
const chalk = require('chalk');

if (args == "serve") {
    const handler = require('serve-handler');
    const http = require('http');

    const server = http.createServer((request, response) => {
      return handler(request, response);
    })

    var port = Math.floor(Math.random() * (9000 - 3000 + 1) ) + 3000;

    server.listen(port, () => {
      console.log('Running at http://localhost:' + port);
    });
} else if (args == "help") {
	const log = console.log;
	log(chalk.white('\n\t      (   (( . : (    .)   ) :  )\n')+
        chalk.white('\t       (   ( :  .  :    :  )  ))\n')+
        chalk.white('\t         ( ( ( (  .  :  . . ) )\n')+
        chalk.white('\t          ( ( : :  :  )   )  )\n')+
        chalk.white('\t           ( :(   .   .  ) .\n')+
        chalk.white('\t             . :(   :    )\n')+
        chalk.white('\t              (   :  . )  )\n')+
        chalk.redBright('\t               )   :   #@##\n'+
        '\t              #,###  #@  #@#\n'+
        '\t             #/ @ # @#     ##\n'+
        '\t           ##  @@# @##@  `..@#\n'+
        '\t         @#  #@#   _##     `  #_\n' +
        '\t       @##;  `#~._.  ##@       #_\n'+
        '\t     .-#/           @#@#@--,_,--/#\n'+
        '\t    # @#@..,     .~###          `.#_\n'+
        '\t  _#         -.- #@####@            # \n'+
        '\t_#     &^^       ^#^##~##&&&   %    __#\n'));

	log(chalk.bold('\nvolcano') + ' - A Hackathon project');
	log('\n  ' + chalk.bold('USAGE\n'));
	log('\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' serve\n');
	log('\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' help\n');
	log('\t' + chalk.bold('$ ') + chalk.redBright('volcano') + ' version\n');
	log('\t' + 'By default,' + chalk.redBright('volcano') + ' will provide a random port\n\n');
	log('  ' + chalk.bold('OPTIONS\n'));
	log('\t' + 'help\t\t\t' + 'Shows this help message');
	log('\t' + 'version\t\t\t' + 'Displays the current version of volcano');
	log('\t' + 'serve\t\t\t' + 'Provides a random port to host\n');
} else if (args == "version") {
	console.log('1.0.5');
}