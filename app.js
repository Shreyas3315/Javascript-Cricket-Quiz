const questions = [{
    'que':'Who was the first Indian batsman to hit a century in a Test match?',
    'a':'Lala Amarnath Bharadwaj',
    'b':'Kapil Dev',
    'c':'Sunil Gavaskar',
    'd':'Vijay Hazare',
    'correct':'a'
},
{
    'que':'How many times has India won the Asia Cup?',
    'a':'5',
    'b':'6',
    'c':'7',
    'd':'8',
    'correct':'c'
},
{
    'que':'How many wickets Kapil Dev had taken in Test matches when he retired?',
    'a':'450',
    'b':'478',
    'c':'434',
    'd':'413',
    'correct':'c'
},
{
    'que':'Whom did India beat in the opening match of the 1983 World Cup?',
    'a':'England',
    'b':'Australia',
    'c':'New Zealand',
    'd':'West Indies',
    'correct':'d'
},
{
    'que':'When did Sourav Ganguly made his ODI debut?',
    'a':'1991',
    'b':'1992',
    'c':'1993',
    'd':'1995',
    'correct':'b'
}
]
let index = 0;
let total = questions.length;
let right =0,wrong=0;
let quesBox = document.getElementById('quesBox');
let optionInput = document.querySelectorAll('.options');
const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans,data.correct);
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        })
        return answer;
}
const reset = ()=>{
    optionInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}
const endQuiz = ()=>{
    document.getElementById('box').innerHTML = `
    <div style="margin-top:30%; margin-left:18%;font-size:120%">
    <h3>Thank you for playing the Quiz</h3>
    <h2 style="margin-left:11%">${right}/${total} are correct</h2>
    </div>
    `
}
loadQuestion();