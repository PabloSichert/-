# Installation
```bash
$ cd path/to/project
$ npm install -
```

# Usage
Given the folder structure
```
project/
├── foo/
│   └── foo/
|       └── index.js
├── bar/
|   └── bar/
|       └── index.js
└── package.json
```

```js
// foo/foo/index.js

import bar from '-/bar/bar';
// import bar from '../../bar/bar';
```
