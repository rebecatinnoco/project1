Vue.component('pagecomp', {
  props: ['item'],
  template:`<div id="images">
                 
                    <img v-bind:src='item.url' v-bind:alt='item.alt'>
                    <h5 class='leg'> {{item.title}}</h5>
                    <p class='desc'>{{item.desc}}<br>$ {{item.pric}}</p>
                    <button class="btn btn-light buttonP">Add to Cart</button>
                
             </div>`
});
let app = new Vue({
  el : '#vue',
  data: {
      catalog: [
          {
            url: "https://cdn.shopify.com/s/files/1/0072/6802/products/reflect-collar-yellow01_700x.jpg?v=1571438512",
            title: "Custom Reflective Dog Collar - Medium",
            desc: "Reflective Collar with personalized buckle",
            alt: "petstar",
            pric: "21.10",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0645/1173/8103/products/712iUesHShL_480x.jpg?v=1653077357",
            title: "Smart Automatic Bone Toy For Dogs ",
            desc: "Automatic & Intelligent",
            alt: "wickedbone",
            pric: "120.90",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0645/1173/8103/products/712XScWOtsL_480x.jpg?v=1653077309",
            title: "Plush Donut Calming Dog Bed | Beige",
            desc: "Plush donut dog bed will create a calm.",
            alt: "puppy-usa inc",
            pric: "15.10",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0645/1173/8103/products/71JUqjCZzyL_480x.jpg?v=1653544031",
            title: "Pet Indoor Teepe Tent | Navy Blue",
            desc: "A safe and comfortable resting place and home decoration",
            alt: "puppy-usa inc",
            pric: "65.54",
            },
          {
            url: "https://cdn.shopify.com/s/files/1/0645/1173/8103/products/71QyGn1TVcL_480x.jpg?v=1653543999",
            title: "Interactive Fetch Toy | Orange",
            desc: "Made with rubber and foam and durable canvas fabric",
            alt: "chuckit",
            pric: "45.15",
            },
          {
            url: "https://cdn.shopify.com/s/files/1/0645/1173/8103/products/81rRDWjin8L_480x.jpg?v=1653543995",
            title: "Hanging Bungee Tug Toy",
            desc: "Interesting Bungee Design: Dogs love tug of war games",
            alt: "hokinety",
            pric: "21.10",
            },
        ],
      }
});