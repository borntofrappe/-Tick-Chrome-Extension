# \`Tick\` Chrome Extension

A chrome extension to display the blue outline of a working clock on a dark background. 

Materialize said clock by clicking the icon for the chrome extension, or by opening a new tab.

# Preface

Currently, the simple application is not published in the Chrome Store. For the time being, that will remain the case, as it doesn't really solve any purpose beside allowing me to practice creating a React Application and including the code behind said application in a chrome extension.

You can get a general idea of what the extension will look like by checking out this [pen](https://codepen.io/borntofrappe/pen/wXGKpg). If you'd like to test out the concept, proceed to the following section.

# How to Use

Acknoweleding the preface, you can still download this repository and use the extension as here briefly instructed. 

1. download the repository;

1. unzip the downloaded file;

1. go to the extension section on google chrome, which you can find at the URL of `chrome://extensions/`;

1. select _load unpacked_;

1. select in the newfound menu the _build_ folder.

And that's pretty much it. 

You should now be able to see the nice-looking clock by clicking on the clock icon in the extension bar or by opening a new tab.
Neat.

---

# Lessons Learned 

Here are few thoughts that went behind the build process of the chrome extension. A good excuse to sharpen and refine React core concepts and a couple of Chrome-specific thoughts.

## React

### Developer Environment 

In the past I relied on HTML boilerplate or a simple codepen integration to include react and the connected logic in my project.

For the chrome extension, I figured it a good place to start and build a react app with a serious development environment.

### Install create-react-app

Following React's [own docs](https://reactjs.org/docs/add-react-to-a-new-app.html), I installed create-react app, as follows:

```
npm install -g create-react-app
```

## Create a new react-powered project

In a project folder, I then instantiated a new project, as follows:

```
create-react-app my-app
```

Following the two commands, and a bit of time, I ended up with a plethora of files, but I'll get to that later. 

## Start a server

To start working on the app, and materialize it on a web-page, a command needs to run the folder bearing the name of the application. As the documentation suggests, I included said command in the just-created folder.

```
cd my-app
npm start
```

A local host will be here described to see the application in action. Like `http://localhost:5000`. 

Go to the prescribed URL and you'll see the code behind the react application live.

## Build Application

In order to finalize the application, all that is required is a build of the created files, in the same location.

```
npm run build
```

This command allows to create a **build** folder, which can be then uploaded to create a functioning web-page or, as in the case of the project at hand, to create an unpacked chrome extension.


## React Structure

Following the instance of the new project, created by running `npm start`, a React application is initiated with several node packages, found in a folder bearning the same name, json files, which keep track of the used dependencies, and other folders which describe the substance and the form of the application.

### Public

In the **public** folder you find the HTML file in which reacts renders its component-logic, as well as a modifiable icon and a _manifest.json_ file. This last one describes few key traits of the application.

### Src

In the **src** folder, you then find the essence of the react application. You find here components, built in JavaScript files, as well as stylesheets which modify their appearance.

While in the CSS files you can include CSS as you'd normally do, in the JavaScript files there exist a couple of new lines of code with which to get acquainted.

**Import**

Each component _imports_ the dependencies required for it to work properly. Moreover, each component _imports_ other JS files, which describe nested components/elements.

In the top of the file you can include a separate JS resource like follows:

```JS
import Clock from './Clock';
```

Referencing the name of the component and its location. Location which can make due without the .extension of the file.

**React logic**

Following the import statements, components are built like you'd expect in react. With functions or classes alike.

**Export**

Importing a resource is only one side of the equation. For an import statement to effectively include a different file, said file needs to include an export statement, which states the asset to be exported and used from other locations.

In the Clock.js file for instance, the statement in question will look as follows:

```JS
export default Clock;
```

# Chrome Extension

Chrome has plenty of [materials](https://developer.chrome.com/extensions/getstarted) to get acquainted with chrome extensions.

The project at hand modifies only the manifest.json file, in the **build** folder, to create a functioning extension.

## manifest.json

Every chrome extension requires a manifest.json file. This is used to describe the application, but also the actions the applications takes and the permission the application needs granted.

For the simple react application, the included manifest looks as follows:

```JSON
{
  
  "name": "`Tick`",
  "description": "Display a clock built with react and drawn with svg",
  "version": "2.0",
  "manifest_version": 2,

  "browser_action": {
    "default_popup": "index.html",
    "default_title": "Show Clock"
  },
  "icons": {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png"
  },
  "permissions": [
  ],
  "chrome_url_overrides" : {
    "newtab": "index.html"
  }
}
```

The documentation is helpful in clarifying the function of each key-value pair, but for here and now I'd like to call out a couple of fields.

- `browser_action` allows to define an HTML file which can be used as a popup, whenever the attached icon is clicked in the extension bar
- `chrome_url_overrides` can be tweaked to allow for the extension to be run on particular instances, like when a new tab is opened.
