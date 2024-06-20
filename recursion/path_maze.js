// otpitmise for larger inputs
const paths = []
function maze(target, maxX, maxY, path = "00", currentX = 0, currentY = 0) {

    /**
     * 
     * 
     */
    if ((currentX + 1 == maxX) && (currentY + 1 == maxY)) {
        // path=path.toString()+'-->'+currentX.toString()+currentY.toString()
        // console.log('path',path)
        paths.push(path)
        return
    }
    if (currentX < (maxX - 1)) {
        maze(target, maxX, maxY, path.toString() + '-->' + (currentX + 1).toString() + currentY.toString(), currentX + 1, currentY)
    }
    if (currentY < (maxY - 1)) {
        maze(target, maxX, maxY, path.toString() + '-->' + (currentX).toString() + (currentY + 1).toString(), currentX, currentY + 1)
    }

}
// maze('2211',23,12)
// console.log(paths,paths)


var uniquePaths = function (m, n) {
    // let count = 0
    function mazeoptimized( currentX = 0, currentY = 0,count=0) {

        let countx=0,county=0;
        if ((currentX + 1 == m) && (currentY + 1 == n)) {
            // path=path.toString()+'-->'+currentX.toString()+currentY.toString()
            // console.log('path',path)
            // paths.push(path)
            // count++
            return 1
        }
        if (currentX < (m - 1)) {
            countx = mazeoptimized( currentX + 1, currentY,count)
        }
        if (currentY < (n - 1)) {
            county = mazeoptimized(currentX, currentY + 1,count)
        }
        return countx+county
    }
    return mazeoptimized()
    // return count
}
uniquePaths(3, 7)
// paths 