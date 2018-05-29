# some-js-modules
Just a loose collection of code snippets and modules

## access-manager
This module is published on NPM (not in this repo). Frequently updated.
[https://www.npmjs.com/package/access-manager](https://www.npmjs.com/package/access-manager)

## login-logout-registration
Example Vue.js front-end components

## express-basic-rest-crud
An minimal express+mongoose server with a /rest/products route with:

- POST (Create) one item
- GET (Read) many items
- GET (-"-) one item
- PUT (Update) one item
- DELETE (Delete) one item

## basic-vue-app
A simple vue app with a couple of components and a repeater

## cart-example
An example of a basic cart implementation on both client and server. Note these things to do:

- Creating cart and cart-item components in the client
- Registering them in the client script
- Adding the component scripts in index.html
- Adding the component tags in your html
- Adding a cart model and a cart middleware in the server
– Adding express routes for the cart in the server
- Updating the ACL-list to allow the /rest/cart

## router example
An example of implementing the vue router in the client, with HTML5 popstate and providing virtual routes for popstate in the server. Note these things to do:

- Add the vue router script in index.html.
- Define your routes in the client script.
- Create page-components for the full page views (which will hold your "normal" components for parts of the page views).
- Define a wildcard route in the server (that does not match the rest routes).
- Add a menu with (special) links.