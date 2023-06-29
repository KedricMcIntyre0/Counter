let count = 0;

let number = document.getElementById("countingNumber");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = (e.currentTarget.classList);
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else if(styles.contains("reset")){
            count = 0;
        }
        if(count > 0){
            number.style.color = "#7CFC00";
        }
        else if(count < 0){
            number.style.color = "#FF0000";
        }
        else{
            number.style.color = "#000000";
        }
        number.textContent = count;
    });
});

