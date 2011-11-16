var allCoords = new Array();
var chunkID = 1;
var sender = setInterval("sendAllData();", 300);
var counter = 0; // need only for testing

$(document).ready(function() {

    // write first chunk when the page is loaded
    chunkObj = new Object();
    chunkObj.id = chunkID;
    chunkID += 1;
    chunkObj.x = 0;
    chunkObj.y = 0;
    chunkObj.time = new Date();
    allCoords.push(chunkObj);


    $(document).mousemove(function(event){
        chunkObj = new Object();
        chunkObj.id = chunkID;
        chunkID += 1;
        chunkObj.x = event.pageX;
        chunkObj.y = event.pageY;
        now = new Date();
        chunkObj.time = now;
        allCoords[allCoords.length-1].time = now - allCoords[allCoords.length-1].time // calculate the time spent in the previous point
        allCoords.push(chunkObj);
        $('#coords').html(event.pageX + ', ' + event.pageY);
   });

});



var sendAllData = function() {
    lastObj = allCoords.pop(); // send without last element

    // comment for local testing
    $.post('/spider/', {data: allCoords});

    // uncomment for local testing
    /*
    if (allCoords.length) {console.log(allCoords)};
    counter += 1;
    if (counter > 20) {
        clearInterval(sender);
    };
    */

    allCoords = []
    allCoords.push(lastObj); // add last element from previous array
};



