//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч 
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Програм эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none'

// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click', function shooShid() {
    // 1-6 доторх санамсаргүй нэг тоог гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = 'block'
        // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        switchToNextPlayer()
    }
});

// HOLD товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    function switchToNextPlayer() {
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ. 
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // Улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // Шоог түр алга болгоно
        diceDom.style.display = 'none'
    }
    switchToNextPlayer();


})