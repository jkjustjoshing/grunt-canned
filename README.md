# grunt-canned

> Grunt wrapper around [`canned`](https://github.com/sideshowcoder/canned) node module. Requires [`grunt-contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch)

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
    }
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

#### options.logger
Type: `String` or `Boolean`
Default value: `process.stdout`

Log access and error, set to `false` to disable logging.

#### options.cors
Type: `Boolean`
Default value: `true`

Enable or disable CORS headers

#### options.cors_headers
Type: `Array`
Default value: `[]`

Customize headers to be sent, see canned [response.js](https://github.com/sideshowcoder/canned/blob/master/lib/response.js) for format


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

The canned config is optional in this case - an equally valid Grunt config setting wolud be:

```js
grunt.initConfig({
  
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

## Usage
Running `grunt canned` on the command line will not persist the canned server. Once the server starts, Grunt will immediately shut it down again. To prevent this, the grunt-contrib-watch task must be run after running the canned task. 

If you are only running a canned server, use the command `grunt canned watch`.

You can also run other commands without problems, as long as any other servers are not being started on the same port as the canned server. To run a clean task and a livereload tasks as well as a canned server, run `grunt clean livereload canned watch`.

The best way to do that is by registering a custom task:

```js
grunt.initConfig({
  canned: {
    options: {
      src: './samples/test/api',
      port: 7500
    }
  }
})

grunt.registerTask('serve', [
  'clean',
  'livereload',
  'canned',
  'watch'
]);
```

and then running `grunt serve`.

## Contributing
If you see something that should be added to the canned feature set, or a bug with the functionality of the mock API
server itself, please create a bug ticket with the [canned project](https://github.com/sideshowcoder/canned). If you find a problem with the grunt task itself, or a piece of functionality with the canned project that isn't accessible from this grunt task, submit a pull request!

## Release History
 - **0.0.4** (2014-07-18): Task works with a basic source and port configuration option. No other canned library options exposed.
 - **0.0.3** (2014-07-13): Figuring out how to publish to NPM and tag with git. This is my first consumable library - it takes a few tries to get this right!

## License
Copyright (c) 2014 Josh Kramer. Licensed under the MIT license.
