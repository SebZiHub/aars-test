# Anonymous for Animal Rights Switzerland
Repository for the test environment of the AARS website.

## Website deployment
Follow these steps to prepare the website:
- Insert beautified code taken from [carrd](https://aars-cube.carrd.co)
- Add meta information 
```
    <meta name="keywords" content="Tierrecht, Aktivismus, Tierrechtsaktivismus, Anonymous, Voiceless, Z&uuml;rich, Basel, Aarau, Schweiz, Cube, Truth, Vegan, Animal, Rights, Switzerland"/>
    <meta name="language" content="Deutsch, de" />
    <meta name="revisit-after" content="9 days" />
    <meta name="robots" content="index" />
    <meta name="robots" content="follow" />
    <meta name="author" content="Anonymous for Animal Rights Switzerland" />
    <link href="assets/images/favicon.ico" rel="shortcut icon" />
```
- Remove footer section containing `Made with`
- Remove version number behind `bg.jpg`, `image01.jpg` (or `.png`) references
- Refactor gallery01 references (e.g. `jeannie.jpg`)
- Refacor the `assets/images/card.jpg` reference 
- Refactor the "Kalender"-Link
- Refactor `aars-cube.carrd.co` references

## The calendar
The calendar is implemented with Vue.js. Since the calendar itself is split into multiple components, and therefore needs to be imported using the `import` statement, we need a small http server. That is because, the `import` statement does not work over the `file://` protocol, only `https://`.

### How to start the server
1. Install [Node.js](https://nodejs.org/en)
2. Open a terminal
3. Switch into the root directory of this project
4. Run the command `npx serve`
5. Open the browser at the URL the command outputs (usually [http://localhost:3000](http://localhost:3000))
6. Navigate to the calendar
