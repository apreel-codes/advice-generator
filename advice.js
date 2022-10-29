
const btn = document.querySelector("#button");
const newAdvice = document.querySelector('#advice');
const number = document.querySelector(".number");


btn.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await axios.get('https://api.adviceslip.com/advice');
    const generateAdvice = res.data.slip.advice;
    newAdvice.innerText = `" ${generateAdvice} "`
    const num = Math.floor(Math.random() * 1000);
    number.innerText = `${num}`;
})

