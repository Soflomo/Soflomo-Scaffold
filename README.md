Soflomo Scaffold
===

This Soflomo scaffold repository contains the default set-up for Soflomo projects. The scaffold is intented to allow fast bootstrapping of Zend Framework 2 applications with a preconfigured setup of serveral tools. Use at your own will.

Components
---

The scaffold is based on the following libraries:

 1. [Zend Framework 2](http://github.com/zendframework/zf2): more specifically, it looks similar to the [ZendSkeletonApplication](https://github.com/zendframework/ZendSkeletonApplication)
 2. [Soflomo\Common](http://github.com/Soflomo/Common): a set of tools used in any Soflomo project
 3. [Soflomo\Prototype](http://github.com/Soflomo/Prototype): a small module that allows prototyping of applications
 4. [Composer](https://github.com/composer/composer): Composer to load all external php dependencies (ZF2 and the Soflomo\* libraries)
 4. [Bower](https://github.com/bower/bower): a frontend dependency management tool
 5. [normalize.scss](https://github.com/necolas/normalize.css/): to normalize styles across different browsers
 6. [Modenizr](https://github.com/Modernizr/Modernizr): to enable progressive enhancements across browsers
 7. [Compass](https://github.com/chriseppstein/compass): to parse SASS files into CSS

Installation
---

You can install the scaffold by using composer. Load the composer.phar file and execute the following line:

    php composer.phar create-project soflomo/scaffold my-dir
    bower install
    npm install
    gulp build

This will install the scaffold in "my-dir", load all dependencies from bower and runs the compilation step from compass. If you have a repository available for your new project, add this as remote and start coding.

Usage
---

Inside the scaffold several string values are used to indicate the project's name. You can find & replace all of them for your own need.

 * --Project Name--: this is meant as a user-friendly and readable format for the project. It is for example used in the title element inside the layout.
 * project-name: an internal name for the project, used for example in the bower.json
 * example.com: the domain name for the project's intended public url, used in the robots.txt file
