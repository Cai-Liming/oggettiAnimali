function button1(){
    const animale={
        specie: "mucca",
        razza: "chiana",
        zampe: "4" 
    }
    document.getElementById("demo").innerHTML="la specie è:"+" "+ animale.specie +" "+ "la razza è:"+" "+ animale.razza +" "+ "le zampe dell'animale è:"+" "+ animale.zampe;
}
function button2(){
    const animale1={
        specie: "cane" ,
        razza : "bassotto",
        zampe: "4",
        fullName: function(){
        return "la specie è:" +" "+this.specie +" "+"la razza è:"+ this.razza +" "+ "le zampe sono:"+" "+ this.zampe;
        }
    }
    document.getElementById("mytext").innerHTML= animale1.fullName();
}
function button3(){
    const animale2={
        specie: "gallina",
        razza: "andalusa",
        zampe: "2"
    };
    document.getElementById("txt").innerHTML= "la specie è:"+" "+ animale2["specie"]+" "+" la razza è:"+" "+animale2["razza"]+" "+"le zampe sono :"+animale2["zampe"];
}