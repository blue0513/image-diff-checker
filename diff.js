var looksSame = require('looks-same');

const pathA = 'image/image1.png'
const pathB = 'image/image2.png'
const pathDiff = 'image/diff.png'

looksSame.createDiff(
  {
    reference: pathA,
    current: pathB,
    diff: pathDiff,
    highlightColor: '#ff00ff'
  },
  function(error) {
    console.error(error)
  }
)

console.log("finish")
