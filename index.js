const walk = require('walk');
const fileSize = require('file-size');

let fileCount = class FileCount {
  constructor(path, fileExtn) {
    this.path = path;
    this.fileExtn = fileExtn;
    this.fileCnt = 0;
    this.size = 0;
  }
}

fileCount.prototype.count = function() {
  let options = {
    listeners: {
      file: (root, fileStats, next) => {
        if (this.fileExtn) {
          if (fileStats.name.endsWith(this.fileExtn)) {
            this.fileCnt++;
            this.size = this.size + fileStats.size;
          }
        } else {
          this.fileCnt++;
          this.size = this.size + fileStats.size;
        }
        next();
      }
    }
  };
  walk.walkSync(this.path, options);
  this.size = fileSize(this.size).human();
  return { cnt: this.fileCnt, size: this.size };
}

module.exports = fileCount;
