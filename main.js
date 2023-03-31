
function blog(){
    let blogpost = document.querySelector(".container2");
    

    blogpost.classList.toggle("hide-input");
}





// ----------post--------

function postblog(){
    let addtitle = document.querySelector(".addtitle");
    let addblog = document.querySelector(".addblog");
    let imglink = document.querySelector(".imglink");
    let blogTag = document.querySelector(".blogTag");
    let container = document.querySelector(".container");
     let now = new Date();
     let mins = now.getMinutes();
     let hour = now.getHours();
     let ampm = now.get

    if (addtitle.value === ""){
        alert("ADD Title");
        
    }
    else if(addblog.value === ""){
        alert("add your blog")
    }
    else if(imglink.value === ""){
        alert ("Add Feature Image link")
    }
    else if (blogTag.value === ""){
        alert ("add blog Tag")
    }
    else{
        container.innerHTML += `<div class="card">
            <div class="card__header">
                <img src="${imglink.value}" alt="card__image" class="card__image" width="600">
            </div>
            <div class="card__body">
                <span class="tag tag-blue">${blogTag.value}</span>
                <h4>${addtitle.value}</h4>
                <p>${addblog.value}</p>
            </div>
            <div class="card__footer">
                <div class="user">
                    <img src="img/03.jpeg" alt="user__image" class="user__image">
                    <div class="user__info">
                        <h5>Sourov Dey</h5>
                        <small>${hour} : ${mins} min</small>
                    </div>
                </div>
            </div>
        </div>`
    addtitle.value = "";
    addblog.value = "";
    imglink.value = "";
    blogTag.value = "";
    }


 blog()
    

}




