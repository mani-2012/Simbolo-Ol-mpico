bonafina=document.getElementById("jugo");
perri=bonafina.getContext("2d");
bonafina.addEventListener("click",Anubis);
function Anubis(u){
    perri.beginPath(); 
    perri.strokeStyle = "blue";
    perri.lineWidth = 5; 
    perri.arc(250, 210, 40 ,0 , 2*Math.PI); 
    perri.stroke();

    perri.beginPath(); 
    perri.strokeStyle = "black";
    perri.lineWidth = 5; 
    perri.arc(320, 210, 40 ,0 , 2*Math.PI); 
    perri.stroke();
    
    perri.beginPath(); 
    perri.strokeStyle = "green";
    perri.lineWidth = 5; 
    perri.arc(355, 270, 40 ,0 , 2*Math.PI); 
    perri.stroke();

    perri.beginPath(); 
    perri.strokeStyle = "red";
    perri.lineWidth = 5; 
    perri.arc(390, 210, 40 ,0 , 2*Math.PI); 
    perri.stroke();
    
    perri.beginPath(); 
    perri.strokeStyle = "yellow";
    perri.lineWidth = 5; 
    perri.arc(285, 270, 40 ,0 , 2*Math.PI); 
    perri.stroke();
}