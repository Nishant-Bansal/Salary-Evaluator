window.addEventListener('load',bindEvent);
function bindEvent()
{
    document.querySelector('#compute').addEventListener('click',takeValue);
}
function takeValue()
{
    var basicSalary =document.querySelector("#basicsalary").value;    
    salaryOperations.takeSalary(basicSalary);
    for (let key in salaryOperations) {
        if (key=='salary'||key=='takeSalary') {
            continue;
        }
        var pTag=document.createElement("p");
        pTag.innerHTML=`${key} is ${salaryOperations[key]()}`;
        document.querySelector('#output').appendChild(pTag);
    }
}
