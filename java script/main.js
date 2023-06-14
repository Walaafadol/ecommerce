let bar = document.getElementById("bar");
let links = document.getElementById("links");
let close = document.getElementById("close");
let cartscreen = document.getElementById("cart-screen");
function openMenu() {
  links.style.right = "0";
}
function closeMenu() {
  links.style.right = "-300px";
}
cartscreen.innerHTML += `<div class="shop">
<h2>#cart</h2>

<p>add your coupon code & save up to 70%</p>
</div> 
<div id="tablee" dir="ltr" class="table section-padding">
<table id="table">
  <thead>
    <tr>
      <td>remove</td>
      <td>image</td>
      <td>product</td>
      <td>price</td>
      <td>quantity</td>
      
    </tr>
  </thead>
  <tbody id="tbody"> </tbody>
  </table>
</div>
<div class="apply section-padding" dir="ltr">
<div class="input-coupon">
  <h3>apply coupon</h3>
  <input type="text" placeholder="enter your coupon" />
  <button class="btn">apply</button>
</div>
<div class="totals">
  <h3>cart totals</h3>
  <table>
    <tr>
      <td>cart subtotal</td>
      <td id="allsubtotal"></td>
    </tr>
    <tr>
      <td>shopping</td>
      <td class="free">free</td>
    </tr>
    <tfoot>
      <tr>
        <td >total</td>
        <td id="finaltotal"></td>
      </tr>
    </tfoot>
  </table>
  <button class="btn">proceed to checked</button>
</div>
</div>


`;
// single image product
let mainImage = document.getElementById("show");
let smallImage = document.getElementsByClassName("s-image");

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].onclick = function () {
    mainImage.src = smallImage[i].src;
  };
}

let cart = document.getElementsByClassName("fas fa fa-shopping-bag");
let allcarbtn = document.querySelectorAll(".car");

let allproducts = document.querySelectorAll(".pro");
let prodetail = document.getElementById("pro-details");
let i = 1;
allcarbtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.setAttribute("disabled", "");

    document.getElementsByClassName(
      "fas fa fa-shopping-bag"
    )[0].style.backgroundColor = "red";
    document.getElementsByClassName(
      "fas fa fa-shopping-bag"
    )[0].textContent = `${i}`;
    i++;

    let parent = item.parentElement;
    let imageproductsrc = parent.getElementsByTagName("img")[0].src;

    let titleproduct = parent.getElementsByTagName("h5")[0].textContent;
    let theprice = parent.getElementsByTagName("h4")[0].textContent;

    let congrats = document.createElement("div");
    congrats.className = "mbrook";
    congrats.textContent = "congratulation";
    document.body.append(congrats);
    setTimeout(function () {
      congrats.style.transform = "translateX(-550%)";
    }, 2000);
    setTimeout(() => {
      congrats.remove();
    }, 4000);

    // cartscreen.style.transform = "translateX(0)";
    // let containerdiv = document.createElement("div");

    tbody.innerHTML += `  <tr class ="dataa">
    <td id="trr">
      <a href="#"><i class="fas  del fa-times-circle"></i></a>
    </td>
    <td><img src="${imageproductsrc}" /></td>
    <td class="titlepro">${titleproduct}</td>
    <td class="pric">${theprice}</td>
    <td><input type="number"  value="1" min="1" id="thecount" class="counts" /></td>
 
   
  </tr> `;

    function total() {
      let total = 0;
      document.querySelectorAll(".dataa").forEach((event) => {
        let theprice = Number(
          event.getElementsByClassName("pric")[0].textContent.slice(1)
        );
        let coun = event.getElementsByClassName("counts")[0].value;
        total = total + theprice * coun;
      });
      allsubtotal.textContent = `$ ${total}`;
      finaltotal.textContent = `$ ${total}`;
    }
    total();

    cartscreen.addEventListener("change", function () {
      total();
    });
    document.querySelectorAll(".dataa").forEach((item) => {
      item.addEventListener("click", (eo) => {
        if (eo.target.classList.contains("del")) {
          i--;
          let titleproduct =
            item.getElementsByClassName("titlepro")[0].textContent;
          document.getElementsByClassName(
            "fas fa fa-shopping-bag"
          )[0].textContent = `${i - 1}`;

          if (i == 1) {
            document.getElementsByClassName(
              "fas fa fa-shopping-bag"
            )[0].textContent = "";
            document.getElementsByClassName(
              "fas fa fa-shopping-bag"
            )[0].style.backgroundColor = "transparent";
          }
          item.remove();
          total();

          document.querySelectorAll(".pro").forEach((e) => {
            let title = e.getElementsByTagName("h5")[0].textContent;
            if (titleproduct == title) {
              e.getElementsByClassName("car")[0].removeAttribute("disabled");
            }
          });
        }
      });
    });
  });
});

for (let i = 0; i < 2; i++) {
  cart[i].onclick = function () {
    cartscreen.style.transform = "translateX(0)";
  };
}

let closecart = document.getElementsByClassName("close")[0];
closecart.onclick = function () {
  cartscreen.style.transform = "translateX(100%)";
};
