document.getElementsByTagName('button')[0].addEventListener('click', schmyak);
function schmyak()
{
    document.getElementsByTagName('button')[0].remove();
    let newButton = document.createElement('button');
    newButton.innerHTML = 'ОУ ЄС';
    document.body.appendChild(newButton);
    alert('З ДР МАЛИЙ, копіруй презент https://drive.google.com/drive/u/2/folders/1Ic1_CCxrrxp41G059GNQ1xCMjRM1jCBM');
}