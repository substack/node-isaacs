isaacs
======

Your very own isaacs.

![isaacs](http://substack.net/images/isaacs.png)

examples
========

speak.js
--------

````javascript
var isaacs = require("isaacs")

isaacs(function (izs) {
  var s = isaacs.speak().join(" ")
  console.log(s)
  izs.end()
})
````

output:

    because I'm also path munging in the child process implementation for windows

methods
=======

var isaacs = require("isaacs")

isaacs(cb)
----------

Calls `cb(isaacs)` once your isaacs has loaded enough to speak.

isaacs.speak(text=isaacs.markov.pick())
---------------------------------------

Talk to your isaacs with some `text` or else request that your isaacs talk to
you.

isaacs.markov
-------------

The [markov](https://github.com/substack/node-markov) handle of your isaacs.

command-line
============

Run `isaacs` to launch an interactive chat:

    $ isaacs
    > oh hello
    and yeah, totally not your fault. i have a var I want to escape arguments in
    theCommand
    > pretty much
    ok, its still beyond moment :P my level at this
    > you can do it, you just have to have belief in belief
    time though all the I can do it

Or to get `n` lines of isaacs:

    $ isaacs -n 3
    how should i go update it about switching but doesn't the maintainer that name of the module wanted
    i'd love or separate. to take of npmjs.org a stab a part at it, either as
    question this is a serious

install
=======

With [npm](http://npmjs.org) do:

    npm install isaacs

to get isaacs as a library or:

    npm install -g isaacs

to get the isaacs command.
