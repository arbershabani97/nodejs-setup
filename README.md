# NodeJS Boilerplate

> ##### NodeJS Boilerplate - https://github.com
> ##### NodeJS + MongoDB Boilerplate - https://github.com
> ##### NodeJS + MongoDB + Passport Auth Boilerplate - https://github.com
> ###### Author ~ Arbër Shabani - https://github.com/arbershabani97

#### A beautiful NodeJS Structuring, to make scalable applications, easier project management & simple to understand code

A great structuring for NodeJS:

	* Services
	* Routes
	* Middlewares
	* Controllers
	* Config Keys (.env)

#### Amazing structuring to make scalable projects
You can make **subfolders** of each **Service, Route, Middleware and Controller**, which makes **scaling your app** a lot easier

**Services** - You put the services logic that you need to use throughout your project

**Routes** - You put the routing logic here, to make sure that the user goes through the correct middleware and controller by checking the request (get, post, put, delete, patch) and the link

**Middlewares** - You put the middleware logic to make conditions if the user doesn't have rights to access the routes (which then are used in routes files)

**Controllers** - You put the controller logic here, to make sure you return to the user the page he asked for

**Config Keys** - You put the development keys here, and when you set up your Web you put the production keys in the server only (prod.js is ignored by .gitignore for security reasons) 
