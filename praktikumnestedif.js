const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan olahraga : ", function(olahraga) {
rl.question("Masukkan durasi (menit): ", function(durasi) {

        durasi = parseInt(durasi);
        let kalori = 0;

        if (olahraga == "lari") {
            if (durasi > 0) {
                kalori = (durasi / 5) * 60;
            }
        } 
        else {
            if (olahraga == "push-up") {
                if (durasi > 0) {
                    kalori = (durasi / 30) * 200;
                }
            } 
            else {
                if (olahraga == "plank") {
                    if (durasi > 0) {
                        kalori = durasi * 5;
                    }
                } 
                else {
                    console.log("Olahraga tidak tersedia");
                    input.close();
                    return;
                }
            }
        }
        console.log('=====DAY  1=====');
        console.log('=====ALMIRA=====');
        console.log("Olahraga:", olahraga);
        console.log("Durasi:", durasi, "menit");
        console.log("Kalori:", kalori, "kalori");

rl.close(); }); });