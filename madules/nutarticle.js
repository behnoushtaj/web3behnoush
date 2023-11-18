const Nutarticle = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let nutarticle = `

   <div class="ro1">${res.title}</div>
            <p>
            ${res.nutarticle.content} 
            </p>
            <div class="links">
              <a href="#"> ${res.lnk1}</a>
            </div> 
   
    `;
    document.querySelector(".nutarticle").innerHTML =  nutarticle;
  };

 
  
  export default Nutarticle;