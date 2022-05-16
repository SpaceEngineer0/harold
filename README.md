# harold

Simple discord bot with handful of commands. It can flip a coin, tell a joke, or play rock paper scissors.

Insert your bot token in the `config.json` file,
then type `node .` or `npm run startBot` in the terminal.

## commands

Default prefix: `,`

* `chelp <command>` explains a command
* `coin` flips a coin
* `contactdev` get contact info about me
* `dice [<n>]` rolls an #n-side dice
* `echo <string>` sends everything after the keyword
* `help` sends a help message
* `img [<index>]` sends random or certain image from folder
* `morsenotation` get morse code notation (`morse-tr` module)
* `morsetr <morse|text>` translate morse code using `morse-tr` module `morsetr .- -... -.-.`
* `ping` get bot latency
* `prefix <new prefix>` changes the bot's prefix
* `purge <num>` deletes #num messages
* `quote [<index>]` sends a random or certain quote from `./src/misc/quotes.json` file
* `rps <your move>` play rock, paper scissors with the bot
* `serverinfo` get information about the server
