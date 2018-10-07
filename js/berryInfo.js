function loadPage() {
    document.getElementById("bun2").addEventListener("click", function(){
        document.getElementById("glaze").style.visibility = "visible";
    });
    
    document.getElementById("backBt").addEventListener("click", function(){
        document.getElementById("glaze").style.visibility = "hidden";
    });
    
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
    document.getElementById("sub2").addEventListener("click", subVal);
    document.getElementById("add2").addEventListener("click", addVal);

    document.getElementById("submit").addEventListener("click", function() {
        alert("Added to Cart!!");
    });
}
