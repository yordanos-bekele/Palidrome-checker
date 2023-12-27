const textInput = document.querySelector('.search input');
const checkBtn = document.querySelector('.search button');
const infotest = document.querySelector()
let filterText;

textInput.addEventListener('keyup', () =>{
    
    filterText = textInput.value.replace(/[^A-Za-z0-9]/ig, '');
    // this is the if close that does not give me the "active" class name for the button
    if (filterText){
        checkBtn.classList.add("active");
    }
    checkBtn.classList.remove('active');
    
})
checkBtn.addEventListener('click', () =>{
    let reverseText = filterText.split("").reverse().join("");
    if (reverseText != filterText){

    }
})