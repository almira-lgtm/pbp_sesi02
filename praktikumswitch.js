const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan olahraga : ", function(olahraga) {
rl.question("Masukkan durasi (menit): ", function(durasi) {

        durasi = parseInt(durasi);
        let kalori = 0;

        switch (olahraga) {

            case "lari":
                if (durasi > 0) {
                    kalori = (durasi / 5) * 60;
                }
                break;

            case "push-up":
                if (durasi > 0) {
                    kalori = (durasi / 30) * 200;
                }
                break;

            case "plank":
                if (durasi > 0) {
                    kalori = durasi * 5;
                }
                break;

            default:
                console.log("Olahraga tidak tersedia");
        }

        if (kalori > 0) {
            console.log('=====DAY  1=====');
            console.log('=====ALMIRA=====');
            console.log("Olahraga:", olahraga);
            console.log("Durasi:", durasi, "menit");
            console.log("Kalori terbakar:", kalori, "kalori");
        }

rl.close(); }); });