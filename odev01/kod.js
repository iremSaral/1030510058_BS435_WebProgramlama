let counter=0;
function Click(a){
     let b= Mixed();
 if(counter!==2){
    if(a===b){
        win();
             }
    else{
        counter++;
        Mixed();
        Clear();
        }
   
                }
else{
   // alert(counter);
        lose();
    }
                }

function Clear(){
document.getElementById("img0").src="Kart.png";
document.getElementById("img1").src="Kart.png";
document.getElementById("img2").src="Kart.png";
}

function Mixed(){
    const ıd=["img0","img1","img2"];
    var rnd=Math.floor(Math.random()*3);//0-2 arası sayı üretir.
    for(let i=0;i<ıd.length;i++){
        if(i===rnd){
        document.getElementById(ıd[i]).src="kedi.png";
      
                    }
       else{
        document.getElementById(ıd[i]).src="kopek.png";
       
           }
                                 }
   return rnd;
                } 

function win(){
    document.getElementById("kazandiId").style.display="block";
    document.getElementById("alanId").style.display="none";
    document.getElementById("yenildiId").style.display="none";
              }

function lose(){
    document.getElementById("yenildiId").style.display="block";
    document.getElementById("alanId").style.display="none";
    document.getElementById("kazandiId").style.display="none";
              }
                


