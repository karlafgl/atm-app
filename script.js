class Bill {
    constructor(v, q){
        this.value = v;
        this.quantity = q;
    }
}

function deliveredCash(){
    var input = document.getElementById('inputUser');
    cashAsked = parseInt(input.value);
    for(var bi of caja){
        if(cashAsked > 0 ){
            div = Math.floor(cashAsked/ bi.value);
            if(div > bi.quantity){
                papeles=bi.quantity;     
            } else {
                papeles= div;
            }
            delivered.push(new Bill(bi.value, papeles));
            cashAsked= cashAsked - (bi.valor * papeles);
            
        }
    }
    if(cashAsked > 0 ){
        result.innerHTML = "Sorry for the inconvenience, but this ATM don't have enough money"
    } else {
        for(var e of delivered){
            if(e.quantity > 0){
                resultado.innerHTML += e.quantity + " Bills of $" + e.value + "<br />";
            }
        }
    }
}

let caja=[]; //guardara los billetes
let delivered = []; // guarda los billetes entregados
// se empujan los billetes
caja.push(new Bill(100,5));
caja.push(new Bill(50,3));
caja.push(new Bill(20,2));
caja.push(new Bill(10,2));
caja.push(new Bill(5,5));

let cashAsked= 0;
let btn = document.getElementById('botonExtraer'); 
let papeles = 0;
let div=0;
let result = document.getElementById('resultado');
let transactionBtn = document.getElementById('transaction')
btn.addEventListener('click', deliveredCash);
transactionBtn.addEventListener('click', otherTransaction);




function otherTransaction(event){
    event.target.result.remove();
    // console.log('work')
}
