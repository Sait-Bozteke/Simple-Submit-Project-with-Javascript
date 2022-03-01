const form=document.getElementById("car-form")
const resim=document.getElementById("resim")
const model=document.getElementById("model")
const renk=document.getElementById("renk")
const km=document.getElementById("km")
const fiyat=document.getElementById("fiyat")

const cars=document.getElementById("cars")
const btn=document.querySelector(".btn")
// console.log(form);

form.addEventListener("click",(e)=>{


cars.innerHTML=`               <tr>
<td><img src=${resim.value} class="img-fluid img-thumbnail"></td>
<td>${model.value}</td>
<td>${renk.value}</td>
<td>${km.value}</td>
<td>${fiyat.value}</td>
<td><a href="#" id = "delete-car" class = "btn btn-danger">Satıldı</a></td>
</tr>`

clear()

e.preventDefault()

})


function clear(){
form.value.remove()


}