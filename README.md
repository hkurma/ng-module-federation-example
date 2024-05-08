# NgModuleFederationExample

This Angular workspace is an example for [Module Federation by Angular Architects](https://www.npmjs.com/package/@angular-architects/module-federation). With this solution, modules doesn't have to be local to the project and known during the compilation time, they can be fetched from a remote location and they act just as lazily loaded modules. This makes it a perfect solution for implementation microfrontends.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11 and followed this article to setup [Module Federation](https://www.angulararchitects.io/blog/the-microfrontend-revolution-module-federation-in-webpack-5/).

## In this Project

This project contains 3 applications

- Portal
- Dashboard
- Widgets

Portal application has routes `/home`, which loads `HomeComponent` and `/dashboard`, which lazy loads a remote module named `DashboardModule` from Dashboard application. Dashboard application has an action, which loads a remote component based on the type (`ChartComponent/KpiComponent`) from Widgets application and renders it.

## Running this project

Install the dependencies

```
npm install
```

Start the Dev Server

```
npm run dev
```

This will compile all the 3 applications and starts the server. You can access the portal application on `http://localhost:4200`
