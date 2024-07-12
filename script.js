document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    const answers = document.querySelectorAll(".answer");
    
    for(let i = 0 ; i < questions.length ; i++)
    {
        questions[i].addEventListener('click', () => {
            answers[i].classList.toggle('hidden');
            if (answers[i].classList.contains('hidden')) {
                questions[i].querySelector('i').classList.replace('fa-xmark', 'fa-plus');
                // questions[i].querySelector('i').classList.replace('fa-regular', 'fa-solid');
            } else {
                questions[i].querySelector('i').classList.replace('fa-plus', 'fa-xmark');
                questions[i].querySelector('i').classList.replace('fa-regular', 'fa-solid');
            }
            for(let j = 0 ; j < questions.length ; j++){
                if(i!=j){
                    answers[j].classList.add('hidden')
                    questions[j].querySelector('i').classList.replace('fa-xmark', 'fa-plus');
                }
            }
      })
    }
  });