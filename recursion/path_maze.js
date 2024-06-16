

function maze(target,maxX,maxY,path="00",currentX=0,currentY=0){

    /**
     * 
     * 
     */
    if((currentX+1 == maxX) && (currentY+1 == maxY)){
        // path=path.toString()+'-->'+currentX.toString()+currentY.toString()
        console.log('path',path)
        return
    }
    if(currentX < (maxX-1)){
        maze(target,maxX,maxY,path.toString()+'-->'+(currentX+1).toString()+currentY.toString(),currentX+1,currentY)
    }
    if(currentY < (maxY-1)){
        maze(target,maxX,maxY,path.toString()+'-->'+(currentX).toString()+(currentY+1).toString(),currentX,currentY+1)
    }

}
maze('22',3,3)

