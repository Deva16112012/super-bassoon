function b(){
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/amVjZSV95/model.json',e);
}
function e(){
    x.classify(ans);
}
function ans(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("c").innerHTML="I hear - "+result[0].label;
        document.getElementById("d").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("c").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("d").style.color="rgb("+r+","+g+","+b+")";

        i1=document.getElementById("a1");
        i2=document.getElementById("a2");
        i3=document.getElementById("a3");
        i4=document.getElementById("a4");

        if(result[0].label == "clap"){
            i1.src="aliens-01.gif";
            i2.src="aliens-02.png";
            i3.src="aliens-03.png";
            i4.src="aliens-04.png";
        }
        else if(result[0].label == "tap"){
            i1.src="aliens-01.png";
            i2.src="aliens-02.gif";
            i3.src="aliens-03.png";
            i4.src="aliens-04.png";
        }
        else if(result[0].label == "snap"){
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.gif";
            i4.src="aliens-04.png";
        }
        else{
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.png";
            i4.src="aliens-04.gif";
        }
    }
}