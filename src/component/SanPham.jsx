import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { stateShoes } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Information
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={stateShoes.image} alt="" style={{ width: "250px" }} />
              <h4>Name: {stateShoes.name}</h4>
              <h3>Price: {stateShoes.price}$</h3>
              <p>Description: {stateShoes.description}</p>
              <p>Quantity: {stateShoes.quantity}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={() => {
                  alert("Cảm ơn bạn đã thêm sản phẩm vào giỏ hàng !");
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
