import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  render() {
    let { dataShoesProps, hanldeChiTiet } = this.props;
    console.log(dataShoesProps);
    return (
      <div className="row">
        {dataShoesProps.map((shoes, index) => {
          return (
            <div key={index} className="col-4" style={{ borderColor: "red" }}>
              <img
                className="card-img-top img-fluid"
                src={shoes.image}
                alt="Card image cap"
                style={{ width: "300px", height: "280px" }}
              />
              <h5 className="card-title">Name: {shoes.name}</h5>
              <p className="card-text">Price: {shoes.price}$</p>
              <p>Description: {shoes.shortDescription}</p>
              <p>Quantity: {shoes.quantity}</p>
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  hanldeChiTiet(shoes);
                }}
              >
                Add to card
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
