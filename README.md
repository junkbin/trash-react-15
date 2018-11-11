## NOTE NEW - GHPAGES APPRACH [BRANCH PUSH]
* For relative reference of resources, useful at github pages, update package.json with
```
    "homepage": "https://junkbin.github.io/trash-react-15/",
```

* For publishing at github pages with master branch, update package.json with,
```
    "build": "react-scripts build",
```

* Add dependency
```
      yarn add --dev gh-pages
```

* Update scripts at `package.json`
```
    "scripts": {
      // ...
      "predeploy": "yarn build",
      "deploy": "gh-pages -d build"
    }
```

* Run Command 
```
    yarn run deploy
```


## NOTE OLD APPROACH MANUAL PUSH##
* For relative reference of resources, useful at github pages, update package.json with
```
    "homepage": "./"
```

* For publishing at github pages with master branch, update package.json with,
```
    "build": "react-scripts build && rm -rf docs && mv build docs",
```


## REACT + BOOTSTRAP
* For bootstrap integration, Install following packages.
```
    npm install react-bootstrap@next bootstrap
```
And update your bootstraping index.js with
```
    import 'bootstrap/dist/css/bootstrap.min.css';
```

## TODO
* Bootstrap
* Material
* TypeCheck
* Default Value
* Router
* Native
* Redux

