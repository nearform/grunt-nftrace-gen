# grunt-nftrace-gen

> A grunt plugin for generating lttng tracepoints.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nftrace-gen --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nftrace-gen');
```

## The "nftrace-gen" task

### Overview
In your project's Gruntfile, add a section named `nftrace-gen` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nftrace_gen: {
      options: {
        provider: 'yourProvider',
        outputLocation: './node_modules', 
        probes: [{
          name: 'probe1',
          fields: ['int:number', 'string:message'],
          args: ['number']
        }]
      }
    }
});
```

### Options

#### options.provider
Type: `String`
Default value: `'nearForm'`

The provider of your lttng tracepoints.

#### options.outputLocation
Type: `String`
Default value: `'./node_modules'`

The directory you want the ganerated package to be in.

#### options.provider
Type: `String`
Default value: `'nearForm'`

The provider of your lttng tracepoints.

#### options.probes
Type: `Array`
Default value: `'undefined'`

An array of your probe objects. Must have name, fields and args variables.

##### options.probes[i].name
Type `String`

The name of the probe.

##### options.probes[i].fields
Type `Array`

An array of the fields the probe takes. Must be strings. must be in the format `'type:name'`. eg. `'int:number'` or `'string:message'`. The name of the field is meaningful here, as it is used in the fields.

##### options.probes[i].args
Type `Array`

An array of the arguements the probe prints out when called. Must be strings. must be in the format `'name'`. eg. `'number'` or `'message'`. The name of the arg is meaningful here, as it is used in the correspinds to the field. LTTng supports the ability to place constants here, which will be added at a later date.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
