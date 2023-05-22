import React, { useState, useEffect } from "react";
import axios from "axios";

const MyMoves = () => {
  const [goods, SetGoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.data)
      .then((data) => SetGoods(data.Customer_Estimate_Flow));
  }, []);
  return (
    <>
      <div className="container-fluid  mt-5">
        <div className="row">
          <div className="col">
            <h3>My Moves</h3>
            {goods.map((item) => {
              return (
                <div className="container-fluid border mb-3 border-black p-2">
                  <div className="row p-2 ">
                    <div className="col col-md-4">
                      <h5>From</h5>
                      {item.moving_from}
                    </div>
                    <div className="col col-md-2">
                      <i class="fa-solid fa-circle-arrow-right fa-2x text-danger"></i>
                    </div>
                    <div className="col col-md-4">
                      <h5>To</h5>
                      {item.moving_to}
                    </div>
                    <div className="col col-md-2">
                      <h5>Request#</h5>
                      <h4 className="text-danger">{item.estimate_id}</h4>
                    </div>
                  </div>
                  <div className="mt-3 mb-3">
                    <i class="fa-solid fa-house fa-lg text-danger ml-5 mr-2"></i>
                    <span>{item.property_size}</span>
                    <i class="fa-solid fa-building fa-lg text-danger ml-5  mr-2"></i>
                    <span>{item.new_floor_no}</span>
                    <i class="fa-solid fa-route fa-lg text-danger ml-5 mr-2"></i>
                    <span>{item.distance}</span>
                    <i class="fa-solid fa-truck fa-lg text-danger ml-5 mr-2"></i>
                    <span>{item.moving_on}</span>
                    <i class="fa-solid fa-pencil ml-5"></i>
                    <i class="fa-solid fa-square-check ml-5 text-danger fa-lg mr-2"></i>
                    <span>Is Flexible</span>
                    <a
                      className=" btn btn-outline-danger ml-5 px-3"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      View Move Details
                    </a>
                    <button className="btn btn-danger ml-5 px-3">
                      Quotes Waiting
                    </button>
                    <br />
                    <i class="fa-sharp fa-solid fa-triangle-exclamation  ml-5 fa-xl text-danger mt-2 mr-2"></i>
                    <span className="h5">Disclaimer :</span>{" "}
                    <span className="d-inline">
                      Please Update your move time before two days of shifting{" "}
                    </span>
                    {/* collpase */}
                    <div class="collapse" id="collapseExample">
                      <div class=" d-flex justify-content-between mt-4">
                        <h5>Addtional Information</h5>
                        <button className="btn btn-dark">
                          Edit Addtional Info
                        </button>
                      </div>
                      Test Data
                      <div class=" d-flex justify-content-between mt-4 mb-2">
                        <h5>House Detials</h5>
                        <button className="btn btn-dark">
                          Edit House Details
                        </button>
                      </div>
                      <h5 className="text-danger">Existing House Details</h5>
                      <table className="table table-borderless  text-center">
                        <thead>
                          <tr>
                            <th scope="col">Floor No</th>
                            <th scope="col">Elevator available</th>
                            <th scope="col">
                              Distance From Elevator/Staircase to Truck
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.old_floor_no}</td>
                            <td>{item.old_elevator_availability}</td>
                            <td>{item.old_parking_distance}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h5 className="text-danger">New House Details</h5>
                      <table className="table table-borderless  text-center">
                        <thead>
                          <tr>
                            <th scope="col">Floor No</th>
                            <th scope="col">Elevator available</th>
                            <th scope="col">
                              Distance From Elevator/Staircase to Truck
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.new_floor_no}</td>
                            <td>{item.new_elevator_availability}</td>
                            <td>{item.old_parking_distance}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-between mt-2 mb-2">
                        <h5>Inventory Details</h5>
                        <button className="btn btn-dark">Edit Inventory</button>
                      </div>
                      {/* accordian */}
                      <div
                        class="accordion accordion-flush  border  "
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item ">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Furniture
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">

                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Electronics
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">

                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Vehicle
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">

                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              Boxes/Trollery
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">

                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-secondary h2 text-warning"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              Custom Items
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMoves;
