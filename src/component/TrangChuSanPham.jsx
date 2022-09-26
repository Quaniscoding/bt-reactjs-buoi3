import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";
import shoesData from "./shoesData.json";
import DanhSachSanPham from "./DanhSachSanPham";
export default class TrangChuSanPham extends Component {
  state = {
    stateShoes: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  hanldeChiTiet = (shoes) => {
    this.setState({
      stateShoes: shoes,
    });
  };
  render() {
    let { stateShoes } = this.state;
    return (
      <div className="card-group container">
        <div>
          <h1>SHOES SHOP</h1>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body row">
              <DanhSachSanPham
                dataShoesProps={shoesData}
                hanldeChiTiet={this.hanldeChiTiet}
              />
              <SanPham stateShoes={stateShoes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
