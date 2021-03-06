import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => {
    return state.handleCart;
  });
  console.log(cartItems);

  return (
    <div>
      <div className="py-3">
        <div className="container">
          <h6>Checkout</h6>
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> First Name </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Last Name </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Phone Number </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Email Address </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Full Address </label>
                        <textarea rows="3" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> City </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> State </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> Zip Code </label>
                        <input type="" name="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <button type="button" className="btn btn-primary">
                          {" "}
                          Place Order{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <table>
                <thead>
                  <tr>
                    <th width="50%">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>${(item.qty * item.price).toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
