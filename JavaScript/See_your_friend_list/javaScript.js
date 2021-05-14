let myName = document.querySelector('#name');
let btn = document.querySelector('#btn');
let btn_1 = document.querySelector('#btn_1');

let arrayOfName = [];

let enterName;


const refresh = () => {
    window.location.reload();
}

const popup = () => {

    enterName = prompt("How many friend name you want to enter");

    for (let i = 0; i < enterName; i++) {
        let checkName = prompt(`Enter your friend name ${i + 1}`);

        if (checkName.length!=0) {
            if(checkName.length >= 3){
            arrayOfName[i] = checkName;
            }
            else{
                i--;
                alert("Enter more than 3 character");
            }
        }
        else {
            i--;
            alert("Please! Do not leave Blank");
        }

        if ((checkName >= 'a' && checkName <= 'z') || (checkName >= 'A' && checkName <= 'Z')) {

            for (let j = 0; j < checkName.length; j++) {
                if (checkName[j] != '@' && checkName[j] != '%' && checkName[j] != '$' && checkName[j] != '%') {
                    arrayOfName[i] = checkName;
                }
                else {
                    i--;
                    alert("Do not enter special character!");
                    break;
                }

            }

            for (let k = 0; k < checkName.length; k++) {
                if ((checkName[k] >= 'a' && checkName[k] <= 'z') || (checkName[k] >= 'A' && checkName[k] <= 'Z') || checkName[k] ==' ') {
                    arrayOfName[i] = checkName;

                }
                else {
                    if(checkName[k] != '@' && checkName[k] != '%' && checkName[k] != '$' && checkName[k] != '%'){
                    alert("Do not enter number!");
                    i--;
                    break;
                    }
                }

            }
        }
        else {
            if (checkName.length > 0) {
                i--;
                alert("Do not enter number!");

            }
        }


       



    }
    if (arrayOfName.length == 0) {
        myName.innerHTML = " ";
    }
    else {
        myName.innerHTML = "Wait a moment....";
        setTimeout(() => {
            myName.innerHTML = arrayOfName[next_counter];
        }, 1000)

    }

}





let next_counter = 0;


const Previous = () => {
    if (next_counter >= 1) {
        myName.innerHTML = "Loading..";
    }
    setTimeout(() => {
        if (next_counter >= 1) {
            myName.innerHTML = arrayOfName[--next_counter];
        }
    }, 300);



}

const Next = () => {
    if (next_counter < arrayOfName.length - 1) {
        myName.innerHTML = "Loading...";
    }

    setTimeout(() => {
        if (next_counter < arrayOfName.length - 1) {

            myName.innerHTML = arrayOfName[++next_counter];
        }
    }, 300)

}



btn_1.addEventListener('click', Next);
btn.addEventListener('click', Previous);






