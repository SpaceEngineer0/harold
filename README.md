# harold

Simple discord bot with handful of commands. It can flip a coin, tell a joke, or play rock paper scissors.

Insert your bot token in the `config.json` file, then type `node .` in the terminal. The bot will be ready in a few seconds.

## commands

Default prefix: `,`

Arguments with `?` are optional

* `chelp <command>` explains a command `chelp echo`
* `coin` flips a coin
* `dice <n?>` rolls an #n-side dice `dice 20`
* `echo <string>` sends everything after the keyword `echo lorem ipsum`
* `help` sends a help message
* `img <index?>` sends random or certain image from folder `img 1`
* `ping` get bot latency
* `purge <num>` deletes #num messages `purge 16`
* `quote <index?>` sends a random or certain quote from `./src/misc/quotes.txt` file `quote 39`
* `rps <move>` play rock, paper scissors with the bot `rps paper`
* `serverinfo` sends important information about the server

## To Do

* `prefix <new prefix>` changes the bot's prefix `prefix ,`

*If you want to contribute or spot a bug, please contact me.*
