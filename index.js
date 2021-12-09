var cartItems = 0;
var newItem = 0;
$(document).ready(function(){
  
  // Generates new product
  $('#add_div').on('click', function(){
    newItem++;
    $('#container').append($("<div id='"+newItem+"' class='item'>"+'<img width="100" height="100" onerror=\'this.src="noimage.png"\' src=\'testimage-wrong.png\'/>'+'<button id="add_to_cart">Add to Cart</button>'));
  });

  // Remove item and move to cart
  $("#container").on("click", "#add_to_cart", function() {
    console.log("Removing"+$(this).parent().attr('id'));
    $(this).parent().remove();
  });

  // Checks if image src is valid
  $(document).ready(function(){
    $("img").bind("error",function(){
     // Replacing image source
     $(this).attr("src","noimage.png");
    });
   });

   var products = [
    {
      id:0,
      name:"Fender Jazzmaster",
      price:"100.00",
      image:"https://www.fmicassets.com/Damroot/ZoomJpg/10001/0149753305_gtr_frt_001_rr.jpg",
      color:"red"
    },
    {
      id:1,
      name:"Yamaha GB1K",
      price:"200.00",
      image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
      color:"green"
    },
    {
      id:2,
      name:"Maton S60 ",
      price:"300.00",
      image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
      color:"blue"
    },
    {
      id:3,
      name:"Fender Mustang",
      price:"400.00",
      image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
      color:"red"
    },
    {
      id:4,
      name:"Yamaha Genos",
      price:"500.00",
      image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
      color:"green"
    },
    {
      id:5,
      name:"Maton SRS808",
      price:"600.00",
      image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
      color:"blue"
    }
  ];
  


  function clearCart(){
    var restockStore = new items();
    // need to pop off elements in cart array 
  }

  // When item image is clicked make details pop up
  function popUp(idx) {
      var that = this; 
    
      this.ele = document.createElement("div");
         this.ele.classList.add("popUp");
      this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
      this.nameEle = document.createElement("p");
        this.nameEle.innerHTML ="Name: " + products[idx].name;
      this.priceEle = document.createElement("p");
        this.priceEle.innerHTML ="Price: $" + products[idx].price;
      
      this.ele.appendChild(this.imgEle);
      this.ele.appendChild(this.nameEle);
      this.ele.appendChild(this.priceEle);

    // Click off to Exit popUp 
      this.ele.addEventListener("click", function() {
        that.ele.style.display = "none"; 
    });
      document.body.appendChild(this.ele);
  }
  
  function items() {
    var that = this;
    this.products = [];
    this.ele = document.createElement("div");
 
    for (let i = 0; i < products.length; i++) {
      this.products.push(new fruit(i));
       //popUp only when image is clicked on 
      this.products[i].imgEle.addEventListener("click", function(){
        var pop = new popUp(i);
      });
      this.ele.appendChild(this.products[i].ele);
    }
    document.body.appendChild(this.ele);
  }
  
  function addToCart(idx) {
    cartItems++;
    console.log(cartItems);
    document.getElementById("myCart").innerHTML = cartItems;
    $(".item").on("click", ".add_to_cart", function() {
      console.log("Removing"+$(this).parent().attr('class'));
      $(this).parent().detach().appendTo('.cart');
      // add element to cart array 
    });
  }

  function fruit(idx) {
    var that = this;
    
    this.ele = document.createElement("div");
      this.ele.classList.add("item");
    this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
    this.nameEle = document.createElement("p");
      this.nameEle.innerHTML = products[idx].name;
    this.priceEle = document.createElement("p");
      this.priceEle.innerHTML = products[idx].price;
    this.btnEle = document.createElement("button");
      this.btnEle.classList.add("add_to_cart");
      this.btnEle.innerHTML = "Add to Cart";
      this.btnEle.addEventListener("click", addToCart);

    // Change Background color on mouse hover
    this.ele.addEventListener("mouseover", function() {
      that.ele.style.backgroundColor = products[idx].color; 
    });
    this.ele.addEventListener("mouseout", function(){
      that.ele.style.backgroundColor = "white";
    });
    this.ele.appendChild(this.imgEle);
    this.ele.appendChild(this.nameEle);
    this.ele.appendChild(this.priceEle);
    this.ele.appendChild(this.btnEle);
    document.body.appendChild(this.ele);
  }
  
  var restockStore = new items();

});