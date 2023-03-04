var NameInput=document.getElementById('ProductName');
var PriceInput=document.getElementById('ProductPrice');
var CatgoryInput=document.getElementById('ProductCat');
var DescInput=document.getElementById('ProductDesc');
var SearchInput=document.getElementById('SearchInput');
var addBtn=document.getElementById('addBtn');
var Inputs=document.getElementsByClassName('form-control');
var products=[];
var currentIndex=0;


if(JSON.parse(localStorage.getItem('productsList')) != null){
    products=JSON.parse(localStorage.getItem('productsList'));
    displayProduct();
}

addBtn.onclick=function(){
    if(addBtn.innerHTML=='Add Product'){
        addProduct();
    }else{
        upDateProduct();
    }

displayProduct();
clearForm();
}

function addProduct(){
    var product={
        name:NameInput.value,
        price:PriceInput.value,
        catogry:CatgoryInput.value,
        desc:DescInput.value
    }
    products.push(product);
    localStorage.setItem('productsList',JSON.stringify(products));
}

function displayProduct(){
    var cartona='';
    for(var i=0;i<products.length;i++){
        cartona+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].catogry}</td>
        <td>${products[i].desc}</td>
        <td><button class="text-success fw-bold border border-0 bg-transparent" onclick="getProduct(${i})" ><i class="fa-solid fa-pen-to-square fs-3"></i></button></td>
        <td><button class="text-danger fw-bold border border-0 bg-transparent" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash fs-3"></i></button></td>
        </tr>`
    }
    document.getElementById('tbody').innerHTML=cartona;
}

function deleteProduct(index){
products.splice(index,1);
displayProduct();
}

function clearForm(){
for(var i=0;i<Inputs.length;i++){
    Inputs[i].value='';
}
}

SearchInput.onkeyup=function(){
    var cartona='';
    for(var i=0;i<products.length;i++){
      if(products[i].name.toLowerCase().includes(SearchInput.value.toLowerCase())){
        cartona+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].catogry}</td>
        <td>${products[i].desc}</td>
        <td><button class="text-success fw-bold border border-0 bg-transparent" onclick="getProduct(${i})"><i class="fa-solid fa-pen-to-square fs-3"></i></button></td>
        <td><button class="text-danger fw-bold border border-0 bg-transparent" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash fs-3"></i></button></td>
        </tr>`
      }
    }
    document.getElementById('tbody').innerHTML=cartona;
}

function getProduct(index){
    currentIndex=index;
   var currentProduct=products[index];
   NameInput.value=currentProduct.name;
   PriceInput.value=currentProduct.price;
   CatgoryInput.value=currentProduct.catogry;
   DescInput.value =currentProduct.desc;
   addBtn.innerHTML='Update Product';
}

function upDateProduct(){
    var product={
        name:NameInput.value,
        price:PriceInput.value,
        catogry:CatgoryInput.value,
        desc:DescInput.value
    }
    products[currentIndex]=product;
    localStorage.setItem('productsList',JSON.stringify(products));
    addBtn.innerHTML='Add Product';
}

var AlertName=document.getElementById('AlertName');

NameInput.onkeyup=function(){
    var NameRegex=/^[A-Z][a-z]{3,8}$/;
    if(NameRegex.test(NameInput.value)){
        addBtn.removeAttribute('disabled');
        NameInput.classList.add('is-valid');
        NameInput.classList.remove('is-invalid');
        AlertName.classList.add('d-none');
    }else{
         addBtn.disabled='true';
         NameInput.classList.add('is-invalid');
         NameInput.classList.remove('is-valid')  ;
         AlertName.classList.remove('d-none');
          }
}

var AlertPrice=document.getElementById('AlertPrice');
PriceInput.onkeyup=function(){
    var PriceRegex=/^[0-9]{1,7}$/;
    if(PriceRegex.test(PriceInput.value)){
        addBtn.removeAttribute('disabled');
        PriceInput.classList.add('is-valid');
        PriceInput.classList.remove('is-invalid');
        AlertPrice.classList.add('d-none');
    }else{
         addBtn.disabled='true';
         PriceInput.classList.add('is-invalid');
         PriceInput.classList.remove('is-valid')  ;
         AlertPrice.classList.remove('d-none');
          }
}

var AlertCatogry=document.getElementById('AlertCatogry');
CatgoryInput.onkeyup=function(){
    var CategoryRegex=/^[A-Z][a-z\s]{3,18}$/;
    if(CategoryRegex.test(CatgoryInput.value)){
        addBtn.removeAttribute('disabled');
        CatgoryInput.classList.add('is-valid');
        CatgoryInput.classList.remove('is-invalid');
        AlertCatogry.classList.add('d-none');
    }else{
         addBtn.disabled='true';
         CatgoryInput.classList.add('is-invalid');
         CatgoryInput.classList.remove('is-valid')  ;
         AlertCatogry.classList.remove('d-none');
          }
}

var AlertDesc=document.getElementById('AlertDesc');
DescInput.onkeyup=function(){
    var DescRegex=/^[A-Z][a-z\s]{3,18}$/;
    if(DescRegex.test(DescInput.value)){
        addBtn.removeAttribute('disabled');
        DescInput.classList.add('is-valid');
        DescInput.classList.remove('is-invalid');
        AlertDesc.classList.add('d-none');
    }else{
         addBtn.disabled='true';
         DescInput.classList.add('is-invalid');
         DescInput.classList.remove('is-valid')  ;
         AlertDesc.classList.remove('d-none');
          }
}