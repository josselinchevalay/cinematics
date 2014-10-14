cinematics
==========

# Architecture

LENP is a software architecture based on four components : 

* Lowbd : it is a system database based on flat files to JSON [repo](https://github.com/typicode/lowdb " lowdb repo").
* Express : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. [site](http://expressjs.com/ "offical website").
* Node js : Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. [site](http://nodejs.org/ "offical website").
* Polymer : Web Components usher in a new era of web development based on encapsulated and interoperable custom elements that extend HTML itself. Built atop these new standards, Polymer makes it easier and faster to create anything from a button to a complete application across desktop, mobile, and beyond. [site](https://www.polymer-project.org/ "official website").

# Directories

* app 
    * routes.js : contains the routes of the application
* config
    * db.json : contains data
    * config.js : configure lowdb instance
* node_modules : contains node modules
* public 
    * js : contains all developpement and web components
    * libs : contains own librairies
    * views : contains index.html and other views
* servers.js : represent own server


# Run project

`node server.js`





