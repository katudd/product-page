import React from "react"

class Products extends React.Component {
  render() {
    return (


          <div className="productbox">

            <div className="box-hover">
                <div className="description">
                  <p>{this.props.description}</p>
                </div>


              <div className="heading">{this.props.name}
              </div>

              <div className="imagecontainer">
              <img src={this.props.image} />
              </div>

              <div className="list">
                <ul>
                  <p><li>{this.props.substance}</li></p>
                  <p><li>{this.props.size}</li></p>
                  <p><li>{this.props.numberInPack} st i förpackningen</li></p>
                </ul>
              </div>

            </div>

            <div className="buybox">
              <div className="price">
                {this.props.price} KR
              </div>
              <a className="btn" href="https://www.apoteket.se/varumarken/alvedon/">Köp</a>
            </div>

            <div className="delivery">
              Leveranstid {this.props.deliveryTime}
            </div>

          </div>
    )
  }
}

export default Products
