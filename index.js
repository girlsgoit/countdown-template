console.log("Here");

// Scrie un program, care la click pe butonul start, va începe un
// countdown folosind valoarea introdusă în input în secunde,
// începutul countdown-ului. La click pe butonul stop, countdown-ul
// trebuie să se oprească și progressul să indice 0.
// În timpul progress-ului, el trebuie să fie afișat în pagină
// cu indicatoare pentru minute și secunde.

// 1. Scriem HTML-ul
// 2. Adăugăm id-uri pe input și butoane
// 3. Adăugăm event listner pe butoane
// 4. Citim valoarea din input, transformăm în număr și ștergem valoarea din input
// 5. Începem inteval-ul și îl oprimim
// 6. Implementăm countdown-ul cu condiția de 0 secunde rămase
// 7. Transformăm numărul total de secunde în minute și secunde rămase
// 8. Dăm id-uri la span-uri, le selectăm și schimbăm text-ul din interior
// 9. Creăm text-ul pentru minute și secunde(m și s)
// 10. Dacă numărul e mai mic ca 10, creăm strin-ul cu 0 în față
// 11. La stop, facem reset la span-uri cu valori de 0

let intervalId;
let totalSeconds = 0;

document.getElementById('start-btn').addEventListener('click', handleStart);
document.getElementById('stop-btn').addEventListener('click', handleStop);

function handleStart() {
  if (secondsInput.value !== '' || secondsInput.value !== '0') {
    totalSeconds = Number(secondsInput.value);
    secondsInput.value = '';

    intervalId = setInterval(function() {
      tick();
    }, 1000);
  }
}
  
function handleStop() {
  clearInterval(intervalId);
  totalSeconds = 0;
  showProgress();
}

function tick() {
  totalSeconds--;
  
  if (totalSeconds === 0) {
    handleStop();
    
    alert('Time is up!');
  }
  
  showProgress();
}

function showProgress() {
  let minutes = Math.floor(totalSeconds / 60);
  minutesProgress.innerText = minutes < 10 ? '0' + minutes + 'm' : minutes + 'm';
  let seconds = totalSeconds % 60;
  secondsProgress.innerText = seconds < 10 ? '0' + seconds + 's' : seconds + 's';
}
