# grunt-canned

> Grunt wrapper around https://github.com/sideshowcoder/canned node module

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-canned --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-canned');
```

## The "canned" task

### Overview
In your project's Gruntfile, add a section named `canned` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  canned: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.src
Type: `String`
Default value: `./api`

The directory that holds your mock API files. Defaults to a directory at the root of your project called `api`

#### options.port
Type: `Integer`
Default value: `3000`

The port on which the canned mock API server will run.

### Usage Examples

#### Default Options
In this example, you should have mock API files in a folder at the root of your project called `api` and nothing else running on port 3000.

```js
grunt.initConfig({
  canned: {
    options: {}
  },
})
```

#### Custom Options
In this example, you should have mock API files in the folder `samples/test/api` in your project directory. The mock API server will run on port 7500.

```js
grunt.initConfig({
  canned: {
    options: {
      src: './samples/test/api',
      port: 7500
    }
  },
})
```

## Contributing
If you see something that should be added to the canned feature set, or a bug with the functionality of the mock API
server itself, please create a bug ticket with the [canned project](https://github.com/sideshowcoder/canned). If you find a problem with the grunt task itself, or a piece of functionality with the canned project that isn't accessible from this grunt task, submit a pull request!

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Josh Kramer. Licensed under the MIT license.
