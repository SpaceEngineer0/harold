# harold

Simple discord bot with handful of commands. It can flip a coin, tell a joke, or play rock paper scissors.

Insert your bot token in the `config.json` file, then type `node .` in the terminal. The bot will be ready in a few seconds.

## commands

Default prefix: `,`

Arguments with `?` are optional

* `chelp <command>` explains a command `chelp echo`
* `coin` flips a coin
* `contactdev` get contact info of me
* `dice <n?>` rolls an #n-side dice `dice 20`
* `echo <string>` sends everything after the keyword `echo lorem ipsum`
* `help` sends a help message
* `img <index?>` sends random or certain image from folder `img 1`
* `morsenotation` get morse code notation (`morse-tr` module)
* `morsetr <morse/text>` translate morse code using `morse-tr` module `morsetr .- -... -.-.`
* `ping` get bot latency
* `prefix <new prefix>` changes the bot's prefix `prefix ,`
* `purge <num>` deletes #num messages `purge 16`
* `quote <index?>` sends a random or certain quote from `./src/misc/quotes.txt` file `quote 39`
* `rps <move>` play rock, paper scissors with the bot `rps paper`
* `serverinfo` sends important information about the server

## To Do

* `blackjack` play blackjack with the bot
* `hangman` play hangman with the bot

## Collaborate

If you want to contribute or spot a bug, please contact me.

---

This Discord bot uses [morse-tr](https://github.com/SpaceEngie/morse-tr) module for morse code operations.
