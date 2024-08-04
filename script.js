
// https://api.unsplash.com/search/photos/?client_id=B1xiLMaw5JHH57sE4B6JMx9X1EiuuaZ1TK1Wop8Q-QE&page=1&query=dog
const APi_KEY = "B1xiLMaw5JHH57sE4B6JMx9X1EiuuaZ1TK1Wop8Q-QE"
const Form = document.getElementsByTagName("form")[0];
const Container = document.getElementsByClassName("photos")[0];
const search = document.getElementById("search-input");
let page = 0;
const show_more = document.getElementById("show-more-image")

async function  Generate_Data(e) {
    
    e.preventDefault()
    page++;
    if(page==1){
        Container.innerHTML = " "
    }
    const value =  search.value;
    const url = `https://api.unsplash.com/search/photos/?client_id=${APi_KEY}&page=${page}&query=${value}`;
    const data =  await fetch(url);
    const data1 = await data.json();
    console.log(data1)
    generate_cards(data1.results);
    show_more.style.display="block"
}

function generate_cards(data){
    
    data.map(function(values){
        const sub_container1 = document.createElement("div")
        const sub_container2 = document.createElement("div")
        const sub_container3 = document.createElement("div")
        sub_container1.classList.add("box");
        sub_container2.classList.add("image");
        sub_container3.classList.add("text");
        const image = document.createElement("img")
        image.src = values.urls.small
        sub_container3.innerHTML = values.alt_description

        sub_container2.appendChild(image)
        sub_container1.appendChild(sub_container2)
        sub_container1.appendChild(sub_container3)

        Container.appendChild(sub_container1);

        // console.log(sub_container)
    })
}



