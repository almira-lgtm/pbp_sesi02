const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan total Belanja: ", function(totalBelanja){
    totalBelanja = parseInt(totalBelanja);

    if (totalBelanja>=250000){
        dis = totalBelanja*0.10
        const total_harga = totalBelanja - dis
        console.log('total harganya: Rp',total_harga)
    }else if(totalBelanja>=100000){
        dis = totalBelanja*0.5
        const total_harga = totalBelanja - dis
        console.log('total harganya: Rp',total_harga)
    }else if(totalBelanja>=50000){
        dis = totalBelanja*0.3
        const total_harga = totalBelanja - dis
        console.log('total harganya: Rp',total_harga)
    }else{
        console.log('Gadapet Diskon')
    }


rl.close(); });