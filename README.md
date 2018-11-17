# file-count-custom

Get your files size & counts in directory with specific extension.

## Install

`npm install file-count-custom `


## Usage

### For specific extension.

```
const fileCountCustom = require('file-count-custom'):
let fileInfo = fileCountCustom('/root', 'png').count();
console.log(fileInfo.count); // ex: 10
console.log(fileInfo.size);  // ex: 85.55 KiB
```

### For all files.
```
const fileCountCustom = require('file-count-custom'):
let fileInfo = fileCountCustom('/root').count();
console.log(fileInfo.count); // ex: 95
console.log(fileInfo.size);  // ex: 101.4 MB
```
