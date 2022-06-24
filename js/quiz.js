const form = document.querySelector('form');
const results = document.querySelector('.results');
const correctAnswers = ['A', 'B', 'A', 'A'];
const fa = document.querySelectorAll('.fa');

fa.forEach(fa => {
    fa.style.opacity = `0`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    results.classList.remove('d-none');
    scrollTo(0,0);
    fa.forEach(fa => {
        fa.style.opacity = `1`;
    });

    let output = 0;
    const timer = setInterval(() => {
        results.querySelector('span').textContent = `${output}`;
        if(output === score) {
            
        } else {
            output++
        }
    }, 10);
});