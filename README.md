## NOTE ##
* For relative reference of resources, useful at github pages, update package.json with
```
     "homepage": "./",
```

* For publishing at github pages with master branch, update package.json with,
```
    "build": "react-scripts build && rm -rf docs && mv build docs",
```

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

