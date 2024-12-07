var SelectName = document.getElementById("SelectRestaurantName")
var state = document.getElementById("StateName")
var RName = document.getElementById("RName")
var Days = document.getElementById("Days")
var Dishes = document.getElementById("Dishes")
var Restaurantlist = [
  {
    "CountryName": "Pakistan",
    "State": [
      {
        "Statename": "Punjab",
        "Resturant": [
          {
            "RestaurantsName": "Kababjee",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                 
                  {
                    "dishesname": "Biryani"
                  }
                ]
              },
              {
                "dayname": "Friday",
                "Dishes": [
                 
                  {
                    "dishesname": "Boti Roll"
                  }
                ]
              },
              {
                "dayname": "Saturday",
                "Dishes": [
                  {
                    "dishesname": "Tikka Roll"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CountryName": "India",
    "State": [
      {
        "Statename": "Delhi",
        "Resturant": [
          {
            "RestaurantsName": "Tandoor Villa",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                  {
                    "dishesname": "Butter Chicken"
                  },
                  {
                    "dishesname": "Garlic Naan"
                  },
                  {
                    "dishesname": "Palak Paneer"
                  }
                ]
              },
              {
                "dayname": "Tuesday",
                "Dishes": [
                  {
                    "dishesname": "Aloo Gobi"
                  },
                  {
                    "dishesname": "Chole Bhature"
                  },
                  {
                    "dishesname": "Lassi"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CountryName": "Uk",
    "State": [
      {
        "Statename": "London",
        "Resturant": [
          {
            "RestaurantsName": "The British Grill",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                  {
                    "dishesname": "Fish and Chips"
                  },
                  {
                    "dishesname": "Bangers and Mash"
                  },
                  {
                    "dishesname": "Shepherd's Pie"
                  }
                ]
              },
              {
                "dayname": "Tuesday",
                "Dishes": [
                  {
                    "dishesname": "Full English Breakfast"
                  },
                  {
                    "dishesname": "Ploughman’s Lunch"
                  },
                  {
                    "dishesname": "Sunday Roast"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CountryName": "Australia",
    "State": [
      {
        "Statename": "New south wales",
        "Resturant": [
          {
            "RestaurantsName": "Aussie BBQ",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                  {
                    "dishesname": "Barbecue Ribs"
                  },
                  {
                    "dishesname": "Pavlova"
                  },
                  {
                    "dishesname": "Meat Pies"
                  }
                ]
              },
              {
                "dayname": "Tuesday",
                "Dishes": [
                  {
                    "dishesname": "Fish and Chips"
                  },
                  {
                    "dishesname": "Vegemite Toast"
                  },
                  {
                    "dishesname": "Lamingtons"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CountryName": "Japan",
    "State": [
      {
        "Statename": "Tokyo",
        "Resturant": [
          {
            "RestaurantsName": "Sushi World",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                  {
                    "dishesname": "Sushi"
                  },
                  {
                    "dishesname": "Tempura"
                  },
                  {
                    "dishesname": "Miso Soup"
                  }
                ]
              },
              {
                "dayname": "Tuesday",
                "Dishes": [
                  {
                    "dishesname": "Ramen"
                  },
                  {
                    "dishesname": "Sashimi"
                  },
                  {
                    "dishesname": "Tonkatsu"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CountryName": "Turkey",
    "State": [
      {
        "Statename": "Istanbul",
        "Resturant": [
          {
            "RestaurantsName": "Sultan's Kitchen",
            "Days": [
              {
                "dayname": "Monday",
                "Dishes": [
                  {
                    "dishesname": "Kebabs"
                  },
                  {
                    "dishesname": "Baklava"
                  },
                  {
                    "dishesname": "Pide"
                  }
                ]
              },
              {
                "dayname": "Tuesday",
                "Dishes": [
                  {
                    "dishesname": "Lahmacun"
                  },
                  {
                    "dishesname": "Meze"
                  },
                  {
                    "dishesname": "Dolma"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
RName.addEventListener("change",function(){
   var data = Restaurantlist[SelectName.value].State
    for(var Index in data){
      var data1 = data[Index].Resturant
      for(var data in data1){
        var data2 = data1[data].Days
        Days.innerHTML = "<option disabled selected>Days</option>"
        for(var index in data2 ){
          Days.innerHTML+=`<option value=${index}>${data2[index]["dayname"]}</option>`
          var data3 = data2[index]
          for(var Item in data3){
            var data4 = data3[Item]
             Dishes.innerHTML = "<option selected disabled>Dishes Name</option>"
            for(var item in data4){
              Dishes.innerHTML += `<option>${data4[item].dishesname}</option>`
            }
          }
        }
        

       }
    }
})



state.addEventListener("change",function(){
  RName.innerHTML = "<option disabled selected>Restaurant Name</option>"
  var data = Restaurantlist[SelectName.value].State 
  for(var index in data){
    var data1 = data[index].Resturant
    for(var i in data1){  
    RName.innerHTML += `<option>${data1[i].RestaurantsName}</option>`
  }
}
})




SelectName.addEventListener("change",function(){
   var Cityname = Restaurantlist[SelectName.value].State
   state.innerHTML = "<option disabled selected>State Name</option>"
   for(var index in Cityname){
    console.log(Cityname)
    state.innerHTML += `<option>${Cityname[index].Statename}</option>`
   }
   
})

function Restalist(){
      for(var i in Restaurantlist){
        SelectName.innerHTML += `<option value=${i} >${Restaurantlist[i].CountryName}</option>`
      }
}
Restalist()


function getApiData(){
  fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

getApiData()