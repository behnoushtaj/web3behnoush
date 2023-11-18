


const Introduce=async()=>{
let data=await fetch("https://behnoushtaj.github.io/json/db.json")
let res=await data.json()
let introduce= res.map(elem=>{
  return `
   <div class="about ">
  <h4> ${elem.title}</h4>
  <p>
   ${elem.content}
  </p>
</div>
`
           
})
document.querySelector(".introduce").innerHTML=introduce
}
export default Introduce