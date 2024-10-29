const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
let kick = 0 ;
$btn2.disabled = true ; 
const character = { 
  name: 'Pikachu', 
  defaultHP: 100, 
  damageHP: 100, 
  elHP: document.getElementById('health-character'), 
  elProgressbar: document.getElementById('progressbar-character') // Предполагаем, что у вас есть элемент прогрессбара
};

const enemy = { 
  name: 'Charmander', 
  defaultHP: 180, 
  damageHP: 180, 
  elHP: document.getElementById('health-enemy'), 
  elProgressbar: document.getElementById('progressbar-enemy') // Предполагаем, что у вас есть элемент прогрессбара для врага
};

function init() { 
  console.log('Start Game!'); 
  renderHP(character); 
  renderHP(enemy); 
}

function renderHP(person) { 
  renderHPLife(person); 
  renderProgressbarHP(person); 
}

function renderHPLife(person) { 
  person.elHP.innerText = person.damageHP + '/' + person.defaultHP; 
}

function renderProgressbarHP(person) { 
  const healthPercentage = (person.damageHP / person.defaultHP) * 100; // Вычисляем процент здоровья
  person.elProgressbar.style.width = healthPercentage + '%'; // Обновляем ширину прогрессбара
}
function changeHP(count , person){
    if(person.damageHP < count){
        person.damageHP = 0 ;
        alert('Бедний' + person.name + 'проиграл бой!');
        $btn1.disabled = true;
        $btn2.disabled = true;
    }  else{
        person.damageHP -= count ;
    }
    if( kick % 3 === 0){
        $btn2.disabled = false;
    }
    else{
        $btn2.disabled = true;
    }
    renderHP(person);
}
function random(num){
    return Math.ceil(Math.random() * num);
}
$btn2.addEventListener('click' , function(){
    changeHP(random(70) , character)
    changeHP(random(70), enemy);
    $btn2.disabled = true ; 
})
$btn1.addEventListener('click' , function(){
    kick++ ;
    console.log('Kick');
    changeHP(random(20) , character)
    changeHP(random(20), enemy);
   
    
})
// Инициализация игры
init();


