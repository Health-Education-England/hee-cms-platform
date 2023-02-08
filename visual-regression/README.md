# Local visual regression for HEE brXM Backend

Provides [BackstopJS](https://garris.github.io/BackstopJS/) config `backstop.js` to perform visual regression on the local instance.

## Installation

The project requires [BackstopJS](https://garris.github.io/BackstopJS/). Please make sure you have it installed on your machine and available globally.

## Usage

- To generate reference screenshots for the first time or to update existing reference screenshots:
```
$ backstop reference --config backstop.js
```

- To test current screenshots against reference screenshots:
```
$ backstop test --config backstop.js
```

- To open the BackstopJS report (explicitly) in a web browser:
```
$ backstop openReport --config backstop.js
```

For more details of the above commands or for other supported commands, refer [BackstopJS](https://garris.github.io/BackstopJS/).

## Configuration

- Refer property `scenarios` on `backstop.js` to manage the URLs configured for visual regression.
- Refer property `viewports` on `backstop.js` to manage viewports with which the visual regression needs to be performed.
- Use `browser` property on `backstop.js` to configure the browser under which visual regression needs to be performed.