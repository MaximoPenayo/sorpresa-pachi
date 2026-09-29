const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
const optionsContainer = document.getElementById('options-container');

// Elementos Opción 1
const textSmart = document.getElementById('text-smart');
const textLike = document.getElementById('text-like');
const imgMinecraft = document.getElementById('img-minecraft');
const textThen = document.getElementById('text-then');
const imgDog = document.getElementById('img-dog');
const secondOptions = document.getElementById('second-options-container');
const btnTroll = document.getElementById('btn-troll');
const btnWhatsapp1 = document.getElementById('btn-whatsapp-1');

// Elementos Opción 2
const textMoto1 = document.getElementById('text-moto1');
const textMoto2 = document.getElementById('text-moto2');
const finalMotoContainer = document.getElementById('final-moto-container');

// Elementos Opción 3
const textExcellent = document.getElementById('text-excellent');
const imgCombo = document.getElementById('img-combo');
const finalComboContainer = document.getElementById('final-combo-container');

const rainContainer = document.getElementById('rain-container');

// ---- SECUENCIA INICIAL ----
async function runSequence() {
    await sleep(1000);
    text1.classList.replace('hidden', 'visible');
    await sleep(3500);
    text1.classList.replace('visible', 'hidden');
    await sleep(1500);
    
    text2.classList.replace('hidden', 'visible');
    await sleep(3500);
    text2.classList.replace('visible', 'hidden');
    await sleep(1500);
    
    text3.classList.replace('hidden', 'visible');
    await sleep(2000);
    text3.style.top = "20%";
    
    await sleep(1000);
    optionsContainer.classList.replace('hidden', 'visible');
}

window.onload = runSequence;

// Modal genérico
function selectOption(mensaje) {
    document.getElementById('modal-text').innerText = mensaje;
    document.getElementById('modal').classList.replace('hidden', 'visible');
}
function closeModal() {
    document.getElementById('modal').classList.replace('visible', 'hidden');
}

// ---- SECUENCIA OPCIÓN 1 (MINECRAFT) ----
async function playOption1() {
    optionsContainer.classList.replace('visible', 'hidden');
    text3.classList.replace('visible', 'hidden');

    createRain(['❤️']); // Mandamos un array con el corazón
    await sleep(2000); 

    textSmart.classList.replace('hidden', 'visible');
    await sleep(3500);
    textSmart.classList.replace('visible', 'hidden');
    await sleep(1500);

    textLike.classList.replace('hidden', 'visible');
    imgMinecraft.classList.replace('hidden', 'visible');
    await sleep(4500);
    
    textLike.classList.replace('visible', 'hidden');
    imgMinecraft.classList.replace('visible', 'hidden');
    await sleep(1500);

    textThen.classList.replace('hidden', 'visible');
    imgDog.classList.replace('hidden', 'visible');
    await sleep(1000);
    
    secondOptions.classList.replace('hidden', 'visible');
}

// Botón Troll
btnTroll.addEventListener('mouseover', function() {
    const maxX = window.innerWidth - this.offsetWidth - 20;
    const maxY = window.innerHeight - this.offsetHeight - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    this.style.position = 'fixed';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

btnTroll.addEventListener('touchstart', function(e) {
    e.preventDefault(); 
    const maxX = window.innerWidth - this.offsetWidth - 20;
    const maxY = window.innerHeight - this.offsetHeight - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    this.style.position = 'fixed';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

async function playFinalOption() {
    textThen.classList.replace('visible', 'hidden');
    imgDog.classList.replace('visible', 'hidden');
    secondOptions.classList.replace('visible', 'hidden');
    btnTroll.style.display = 'none'; 

    createRain(['❤️']);
    await sleep(1500);

    document.body.classList.add('bg-golem');
    btnWhatsapp1.classList.replace('hidden', 'visible');
}

// ---- SECUENCIA OPCIÓN 2 (MOTO) ----
async function playOption2() {
    optionsContainer.classList.replace('visible', 'hidden');
    text3.classList.replace('visible', 'hidden');

    createRain(['🏍️']); // Mandamos un array con la moto
    await sleep(2000);

    textMoto1.classList.replace('hidden', 'visible');
    await sleep(6500); 
    textMoto1.classList.replace('visible', 'hidden');
    await sleep(1500);

    document.body.classList.add('bg-moto');
    textMoto2.classList.replace('hidden', 'visible');
    
    await sleep(1500);
    finalMotoContainer.classList.replace('hidden', 'visible');
}

// ---- SECUENCIA OPCIÓN 3 (AMBAS) ----
async function playOption3() {
    optionsContainer.classList.replace('visible', 'hidden');
    text3.classList.replace('visible', 'hidden');

    // Lluvia combinada
    createRain(['❤️', '🏍️', '🎊', '🎉']); // Añadí confetis también a la lluvia!
    await sleep(2000);

    // Aparece el texto de victoria y la foto (imagen5.jpg)
    textExcellent.classList.replace('hidden', 'visible');
    imgCombo.classList.replace('hidden', 'visible');
    
    await sleep(1500);

    // Aparece el botón de WhatsApp
    finalComboContainer.classList.replace('hidden', 'visible');
}

// ---- FUNCIÓN DE LLUVIA DINÁMICA MEJORADA ----
// Ahora recibe un array y elige un elemento al azar para cada "gota"
function createRain(emojis) {
    const totalItems = 60; // Subí un poquito la cantidad para que se vea más festivo
    for (let i = 0; i < totalItems; i++) {
        setTimeout(() => {
            const item = document.createElement('div');
            item.classList.add('rain-item');
            
            // Elegimos un emoji al azar del array que le pasemos
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            item.innerHTML = randomEmoji;
            
            item.style.left = Math.random() * 100 + 'vw';
            const fallDuration = Math.random() * 2 + 2; 
            item.style.animationDuration = fallDuration + 's';
            
            rainContainer.appendChild(item);

            setTimeout(() => {
                item.remove();
            }, fallDuration * 1000);
        }, i * 100);
    }
}