function loadPage() {
    function glazeVisible() {
        document.getElementById("glaze").style.visibility = "visible";
    }
    
    function subVal() {
        var st = this.id.slice(-1)
        var no = Number(document.getElementById("quant"+st).innerHTML)
        if(no === 1){

        }
        else if(no === 3){
            document.getElementById("quant"+st).innerHTML = 1;
        }
        else if(no === 6){
            document.getElementById("quant"+st).innerHTML = 3;
        }
        else if(no === 12){
            document.getElementById("quant"+st).innerHTML = 6;
        }
    }
    function addVal() {
        var st = this.id.slice(-1)
        var no = Number(document.getElementById("quant"+st).innerHTML)
        if(no === 1){
            document.getElementById("quant"+st).innerHTML = 3;
        }
        else if(no === 3){
            document.getElementById("quant"+st).innerHTML = 6;
        }
        else if(no === 6){
            document.getElementById("quant"+st).innerHTML = 12;
        }
        else if(no === 12){

        }
    }
    document.getElementById("bun1").addEventListener("click", glazeVisible);
    document.getElementById("bun2").addEventListener("click", glazeVisible);
    document.getElementById("bun3").addEventListener("click", glazeVisible);
    document.getElementById("bun4").addEventListener("click", glazeVisible);
    document.getElementById("bun5").addEventListener("click", glazeVisible);
    document.getElementById("bun6").addEventListener("click", glazeVisible);

    document.getElementById("sub1").addEventListener("click", subVal);
    document.getElementById("sub2").addEventListener("click", subVal);
    document.getElementById("sub3").addEventListener("click", subVal);
    document.getElementById("sub4").addEventListener("click", subVal);
    document.getElementById("sub5").addEventListener("click", subVal);
    document.getElementById("sub6").addEventListener("click", subVal);

    document.getElementById("add1").addEventListener("click", addVal);
    document.getElementById("add2").addEventListener("click", addVal);
    document.getElementById("add3").addEventListener("click", addVal);
    document.getElementById("add4").addEventListener("click", addVal);
    document.getElementById("add5").addEventListener("click", addVal);
    document.getElementById("add6").addEventListener("click", addVal);
  
    document.getElementById("backBt").addEventListener("click", function(){
        document.getElementById("glaze").style.visibility = "hidden";
    });

    document.getElementById("submit").addEventListener("click", function() {
        alert("Added to Cart!!");
    });
}