# Anonymous for Animal Rights Switzerland
This is the repository for the test environment of the AARS website.

## Carrd export
Originally, the site was built using [Carrd](https://carrd.co/), which creates a single HTML file which includes all the styling and scripts. That site was then refactored and moved to this repository.

In some cases, e.g. getting inspiration for icons or styling, using Carrd might still be useful.

## The calendar
The calendar is implemented with Vue.js. Since the calendar itself is split into multiple components, and therefore needs to be imported using the `import` statement, we need a small http server. That is because, the `import` statement does not work over the `file://` protocol, only `https://`.

### How to start the server
1. Install [Node.js](https://nodejs.org/en)
2. Open a terminal
3. Switch into the root directory of this project
4. Run the command `npx serve`
5. Open the browser at the URL the command outputs (usually [http://localhost:3000](http://localhost:3000))
6. Navigate to the calendar

### Updating cube events
Check the folder `./calendar/data` and update the file `event.json` accordingly.

## The guides
For more text intensive sites, a [Github Pages](https://pages.github.com/) template is applied on markdown files.

The following files are relevant:
- `_config.yml`: basic configuration, such as theme selection
- `_includes/*.html`: additional content that is added to the guides
- `assets/css/style.scss`: contains style changes for the guides
- `guides/*.md`: the actual content of the guides
- `guides/assets/*`: other assets, such as images, that are only used in the guides

To easily create a table of content over a markdown file, this [generator](https://derlin.github.io/bitdowntoc/) can be used.
