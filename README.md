# fingerPicker
fingerPicker is simply a tool for randomizing finger picking patterns on guitar and ukulele. It can provide inspiration for writing, or just great technical practice for different styles of each instrument.

I aim to build this into a web interface and continue adding some fun and experimental features.

## How to use fingerPicker

- make sure that you have installed node on your system
- the following commands randomly generate tabs for their respective instrument
  - guitar: run `$ node -e 'require("./main").logGuitarTabs()'`
  - ukelele: run `$ node -e 'require("./main").logUkeleleTabs()'`
  - jazzGuitar: run `$ node -e 'require("./main").logJazzGuitarTabs()'`
- you can specify the number of notes in a measure by passing the number as an argument
  - example: run `$ node -e 'require("./main").logGuitarTabs(4)'`
  - this example will result in a measure that is four eighth values long
  - by default it randomly selects a number between 3 and 16 if no argument is passed
- pick up your instrument
- practice over your favorite chord progressions
- improve your plucking vocabulary
- try writing some music
- remember that it's okay to break some rules and have fun

## Reading the tablature
- string plucks are denoted by `-0-`
- rests are denoted by `-=-`

## Classical Guitar Finger-Picking Basics

- pluck the lower three strings with your thumb
- pluck the G string with your index finger
- pluck the B string with your middle finger
- pluck the high e string with your ring finger
- in the end, your style is up to you
