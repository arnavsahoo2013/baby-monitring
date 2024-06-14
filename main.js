video = "";
status = "";
number_of_objects = "";
objects = [];
function setup()
{
    can = createCanvas(400,310);
    can.center();
}
function preload()
{
    
}
function draw()
{
    image(video, 0, 0, 400, 310);

    if(status != "")
        {
            myModel.detect(video,gotResults);
            for(i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";
                document.getElementById("number_of_objects").innerHTML = "Objects detected are:-" + objects.length;
    
                fill("red");
                percent = floor(objects[i].confidence*100);
                text(objects[i].label+" "+percent+"%",objects[i].x , objects[i].y);
                noFill();
                stroke("red");
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            } 
        }
}
function start()
{
    myModel = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects").innerHTML = "Objects detected are:-";
}
function modelLoaded()
{
    console.log("model_has_loaded");
    status = true;
    number_of_objects = true;
}
function gotResults(error,results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}