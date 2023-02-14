# Local visual regression for HEE brXM Backend

Provides [BackstopJS](https://garris.github.io/BackstopJS/) config `backstop.js` to perform visual regression on the local instance.

## Installation

The project requires the following dependencies installed on your machine:

- [BackstopJS](https://garris.github.io/BackstopJS/)
  ```shell
  $ npm install --global backstopjs
  ```
- [Docker](https://docs.docker.com/get-docker/)

## Usage

The `--docker` option on the following backstop commands will run the corresponding backstop commands on the docker container and it is essentially to eliminate cross-platform rendering issues. Make sure `docker` is running when invoking the following commands.

- To generate reference screenshots for the first time or to update existing reference screenshots:
```
$ backstop reference --config backstop.js --docker
```

- To test current screenshots against reference screenshots:
```
$ backstop test --config backstop.js --docker
```

- To open the BackstopJS report (explicitly) in a web browser:
```
$ backstop openReport --config backstop.js --docker
```

In order to run the test on the host platform or OS, uncomment the following:
```javascript
const local_uri = 'http://localhost:8080/site';
```
and comment the following:
```javascript
// const local_uri = 'http://host.docker.internal:8080/site';
```
and run the above backstop commands without `--docker` option.

<br/>

For more details of the above commands or for other supported commands, refer [BackstopJS](https://garris.github.io/BackstopJS/).

## Configuration

- Refer property `scenarios` on `backstop.js` to manage the URLs configured for visual regression.
- Refer property `viewports` on `backstop.js` to manage viewports with which the visual regression needs to be performed.
- Use `browser` property on `backstop.js` to configure the browser under which visual regression needs to be performed.