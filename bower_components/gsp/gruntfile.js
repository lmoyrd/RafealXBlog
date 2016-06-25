/**
 * @tableofcontents
 *
 * 1. gsp
 *    1.1 load config
 *    1.2 init config
 *    1.3 process task
 *    1.4 register task
 *    1.5 log disabled
 *    1.6 init
 */

module.exports = function(grunt)
{
	'use strict';

	/* @section 1. gsp */

	global.gsp = global.gsp || {};

	/* package and setup */

	gsp.package = grunt.file.readJSON('package.json');
	gsp.setup = gsp.package['setup'];

	/* misc */

	gsp.enabled = [];
	gsp.disabled = [];
	gsp.register = {};
	gsp.config = {};

	/* wording */

	gsp.wording =
	{
		processing: 'Processing',
		disabledTasks: 'Disabled tasks',
		configOverride: 'Config override',
		configNotFound: 'Config not found',
		task: 'task',
		point: '.',
		colon: ':'
	};

	/* options */

	gsp.options =
	{
		config: grunt.option('config') || '',
		disabled: grunt.option('disabled') ? grunt.option('disabled').split(',') : []
	};

	/* @section 1.1 load config */

	gsp.loadConfig = function (setup, options, wording)
	{
		for (var i in setup)
		{
			var task = setup[i],
				taskName = task.name,
				taskFile = task.file,
				wordingHeader = wording.processing + ' "' + i + '" (' + taskName + ') ' + wording.task;

			/* disabled task */

			if (options.disabled.indexOf(i) > -1)
			{
				gsp.disabled.push(i);
			}

			/* override config */

			else if (grunt.file.isFile(options.config + '/' + taskFile))
			{
				try
				{
					gsp.config[i] = grunt.file.readJSON(options.config + '/' + taskFile);
					grunt.log.header(wordingHeader).ok(wording.configOverride + wording.colon + ' ' + options.config + '/' + taskFile);
				}
				catch (exception)
				{
					gsp.disabled.push(i);
				}
			}

			/* default config */

			else if (grunt.file.isFile('config/' + taskFile))
			{
				try
				{
					gsp.config[i] = grunt.file.readJSON('config/' + taskFile);
				}
				catch (exception)
				{
					gsp.disabled.push(i);
				}
			}

			/* else handle error */

			else
			{
				grunt.log.header(wordingHeader).error(wording.configNotFound + wording.point);
				gsp.disabled.push(i);
			}
		}
	};

	/* @section 1.2 init config */

	gsp.initConfig = grunt.initConfig;

	/* @section 1.3 process task */

	gsp.processTask = function (setup, disabled)
	{
		for (var i in setup)
		{
			var task = setup[i],
				taskName = task.name,
				taskRegister = task.register;

			if (disabled.indexOf(i) < 0)
			{
				/* load task */

				grunt.loadNpmTasks(taskName);

				/* register alias */

				if (taskRegister)
				{
					for (var j in taskRegister)
					{
						gsp.register[j] = gsp.register[j] || [];
						gsp.register[j].push(taskRegister[j]);
					}
				}
			}
		}
	};

	/* @section 1.4 register task */

	gsp.registerTask = function (register)
	{
		for (var i in register)
		{
			grunt.registerTask(i, register[i]);
		}
	};

	/* @section 1.5 log disabled */

	gsp.logDisabled = function (disabled, wording)
	{
		if (disabled.length)
		{
			grunt.log.header(wording.disabledTasks);
			for (var i in disabled)
			{
				grunt.log.error(disabled[i]);
			}
		}
	};

	/* @section 1.6 init */

	gsp.init = function ()
	{
		gsp.loadConfig(gsp.setup, gsp.options, gsp.wording);
		gsp.initConfig(gsp.config);
		gsp.processTask(gsp.setup, gsp.disabled);
		gsp.registerTask(gsp.register);
		gsp.logDisabled(gsp.disabled, gsp.wording);
	};

	/* init */

	gsp.init();
};
