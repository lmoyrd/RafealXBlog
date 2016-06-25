#!/bin/bash

if [ "$1" = "--help" ] || [ "$1" = "-h" ]
then
	echo "GSP by Redaxmedia:"
	echo
	echo "--install, -i      Installs Grunt dependencies"
	echo "--install-nbl, -j  Installs Grunt dependencies (no bin links)"
	echo "--update, -u       Updates Grunt dependencies"
	echo "--config=<path>    Overrides config path"
	echo "--disable=<task>   Disables listed tasks"
	echo "--help, -h         Prints usage information"
elif [ "$1" = "--install" ] || [ "$1" = "-i" ]
then
	echo "GSP: Installing Grunt dependencies."
	echo
	npm install --prefix vendor/redaxmedia/gsp/
elif [ "$1" = "--install-nbl" ] || [ "$1" = "-j" ]
then
	echo "GSP: Installing Grunt dependencies (no bin links)."
	echo
	npm install --no-bin-links --prefix vendor/redaxmedia/gsp/
elif [ "$1" = "--update" ] || [ "$1" = "-u" ]
then
	echo "GSP: Updating Grunt dependencies."
	echo
	npm update --prefix vendor/redaxmedia/gsp/
else
	echo "GSP: Running Grunt tasks."
	echo
	grunt --gruntfile vendor/redaxmedia/gsp/gruntfile.js $@
fi
