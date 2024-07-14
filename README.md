# aars-test
AARS Testing Page

## The calendar
The calendar is implemented with Vue.js.
Since the calendar itself is split into multiple components, and therefore needs to be imported using the ``import`` statement,
we need a small http server. That is because, the ``import`` statement does not work over the ``file://`` protocol, only ``https://``.

### How to start the server
1. Install Node.js: (Node.js website)[https://nodejs.org/en]
2. Open a terminal
3. Switch into the root directory of this project
4. Run the command ``npx serve``
5. Open the browser at the URL the command outputs (usually (http://localhost:3000)[http://localhost:3000])
6. Navigate to the calendar