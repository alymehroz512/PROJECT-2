let cell = ['' , '' , '' , '' , '' , '' , '' , '' , ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');
let conditions = [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                 ];
const tictactoe = (element,index)=>{
                                        element.value    = currentPlayer;
                                        element.disabled = true;
                                        cell[index]     = currentPlayer;
                                        currentPlayer    = currentPlayer == 'X' ? 'O' : 'X';
                                        result.innerHTML =  `Player ${currentPlayer} Turn`;
                                        for(let i = 0; i < conditions.length; i++)
                                        {
                                            let condition = conditions[i];
                                            let a          = cell[condition[0]];
                                            let b          = cell[condition[1]];
                                            let c          = cell[condition[2]]; 
                                            if (a == '' || b == '' || c == '') 
                                            {
                                                continue;
                                            }
                                            if ((a == b) && (b == c))
                                            {
                                                result.innerHTML = `Player ${a} Won`;
                                                button.forEach((button)=> button.disabled = true);
                                            }
                                        }
                                    };
function reset()
{
    cell = ['' , '' , '' , '' , '' , '' , '' , '' , ''];
    button.forEach((button)=>{button.value = '';});   
    currentPlayer = 'X';
    result.innerHTML = 'Player X Turn';
    button.forEach((button)=> button.disabled = false);
};

document.querySelector('#reset').addEventListener('click',reset);
button.forEach((button,i)=>{button.addEventListener('click',()=> tictactoe(button,i));});
