const btnEle = document.querySelector("#submit");

const ratingEles = document.querySelectorAll(".rating");

ratingEles.forEach(
    (rating) => {
        rating.addEventListener("click",()=>{
            console.log();
        }
        );
    }
)

btnEle.addEventListener("click",()=>{
        console.log("clicked")
    }
);