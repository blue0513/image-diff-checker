var looksSame = require('looks-same');

looksSame('./image/image1.png', './image/image2.png', function(error, {equal}) {
  if (equal) {
    console.log("no diff")
  } else {
    console.error("!!!! diff !!!!")
  }
});

console.log("finish")
