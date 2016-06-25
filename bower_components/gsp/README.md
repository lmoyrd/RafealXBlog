![Grunt Survival Pack](https://dummyimage.com/1000x300/ff191a/ffffff&text=Grunt+Survival+Pack)
![Grunt task management for Zend Framework 2](https://dummyimage.com/1000x100/00b232/ffffff&text=Grunt+task+management+for+Zend+Framework+2)


GSP
===

> Grunt task management for Zend Framework 2 and beyond. Manage your local frontend development and continuous integration process over a large amount of projects with a single dependency - we take care to update your projects to the latest Grunt components.

[![Build Status](https://img.shields.io/travis/redaxmedia/gsp.svg)](https://travis-ci.org/redaxmedia/gsp)
[![Dependency Status](https://www.versioneye.com/user/projects/53b82233609ff0762f000002/badge.svg)](https://www.versioneye.com/user/projects/53b82233609ff0762f000002)
[![Dependency Status](https://www.versioneye.com/user/projects/53b82235609ff0b61a000012/badge.svg)](https://www.versioneye.com/user/projects/53b82235609ff0b61a000012)
[![Latest Stable Version](https://img.shields.io/bower/v/gsp.svg)](https://github.com/redaxmedia/gsp)
[![Latest Stable Version](https://img.shields.io/packagist/v/redaxmedia/gsp.svg)](https://packagist.org/packages/redaxmedia/gsp)
[![Total Downloads](https://img.shields.io/packagist/dt/redaxmedia/gsp.svg)](https://packagist.org/packages/redaxmedia/gsp)
[![License](https://img.shields.io/packagist/l/redaxmedia/gsp.svg)](https://packagist.org/packages/redaxmedia/gsp)
[![GitHub Stats](https://img.shields.io/badge/github-stats-ff5500.svg)](http://githubstats.com/redaxmedia/gsp)


Components
----------

- PHP and Javascript unit tester
- PHP code sniffer
- LESS and SASS preprocessor
- CSS autoprefixer
- CSS colorguard
- CSS and Javascript beautifier
- Table of contents generator
- CSS, HTML, Javascript and JSON linter
- GIF, JPG, PNG and SVG image optimizer
- Mobile first fallback generator
- CSS and Javascript minifier


Structure
---------

Tasks are configured to match the Zend Framework 2 folder structure.

- module
- public
- tests
- vendor


Requirements
------------

node.js - Install using <code>apt-get install nodejs</code>

node package manager - Install using <code>apt-get install npm</code>

grunt.js - Install using <code>npm install -g grunt-cli</code>


Config
------

Each task is configured inside <code>config/{task}.json</code> and can be overriden using the <code>--config</code> option.


Usage
-----

Run <code>sh vendor/bin/gsp.sh {options}</code> from console.


**Example:**

Perform the <code>test</code> task in verbose mode:

<pre>sh vendor/bin/gsp.sh test --verbose</pre>

Override the config path:

<pre>sh vendor/bin/gsp.sh --config=../../../{config}</pre>

Redirect <code>{task}</code> errors to a file:

<pre>sh vendor/bin/gsp.sh {task} 2> {task}.log</pre>


**Options:**

<code>--install, -i</code> - Installs Grunt dependencies

<code>--install-nbl, -j</code> - Installs Grunt dependencies (no bin links)

<code>--update, -u</code> - Updates Grunt dependencies

<code>--config=&lt;path&gt;</code> - Overrides config path

<code>--disable=&lt;task&gt;</code> - Disables listed tasks

<code>--help, -h</code> - Prints usage information


Bower
-----

How to register GSP inside [bower.json](https://github.com/bower/bower):

<pre>
{
	"devDependencies":
	{
		"gsp": "2.4.9"
	}
}
</pre>


Composer
--------

How to register GSP inside [composer.json](https://github.com/composer/composer):

<pre>
{
	"require-dev":
	{
		"redaxmedia/gsp": "2.4.9"
	}
}
</pre>


Troubleshooting
---------------

GSP needs third party libraries to work properly.


**IMG:**

optipng - Install using <code>apt-get install optipng</code>

libjpeg - Install using <code>apt-get install libjpeg-progs</code>


**SASS:**

ruby - Install using <code>apt-get install ruby</code>

rubygems - Install using <code>apt-get install rubygems</code>

sass - Install using <code>gem install sass</code>
