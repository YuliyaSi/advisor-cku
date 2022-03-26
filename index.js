const getData = async () => {
    await fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(res => res.slip).then(slip => {
    document.getElementById('advise_id').innerHTML = slip.id;
    document.getElementById('advise_text').innerHTML = slip.advice;
    });
}

// window.addEventListener('load', getData);
// document.querySelector('.icon').addEventListener("click", getData);


// async function getData() {
//     await fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(res => res.slip).then(slip => {
//     document.getElementById('advise_id').innerHTML = slip.id;
//     document.getElementById('advise_text').innerHTML = slip.advice;
//     });
// }