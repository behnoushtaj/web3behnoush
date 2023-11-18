const Responsibility = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let responsibility = `
   
    <div class="res"> ${res.responsibility.txt1}</div>
    <div class="text1">
      <span> ${res.responsibility.txt2}</span>
      <span>  ${res.responsibility.txt3}</span>
    </div>
    <div class="text2"> ${res.responsibility.txt4} </div>

    <div class="img">
      <img src=" ${res.responsibility.img}" alt="" />
    </div>
    <div class="line"></div>
    <div class="text-res">
      <h3> ${res.responsibility.title}</h3>
      <p>
      ${res.responsibility.content}
      </p>
      <a href="#"> ${res.responsibility.link} </a>
    </div>
   
    `;
    document.querySelector(".Responsibility").innerHTML = responsibility;
  };


  export default Responsibility;