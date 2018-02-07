import React from "react"
import Products from "./product"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="app">
        {productsJson.products.map((item) => {
          return <Products
            key = {item.id}
            id = {item.id}
            name = {item.name}
            type = {item.type}
            size = {item.size}
            numberInPack = {item.numberInPack}
            substance = {item.substance}
      		  price = {item.price}
      			deliveryTime = {item.deliveryTime}
      			image = {item.image}
      			description = {item.description}
          />
        })}

      </div>
    )
  }

}

export default App
