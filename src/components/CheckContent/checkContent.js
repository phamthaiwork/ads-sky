import React from "react";

function CheckContentComponent() {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-3 text-left">
          <div className="d-flex justify-content-between align-items-center">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#1A1D3C" }}
            >
              GROUP
            </p>
            <button
              type="button"
              className="btn float-md-right d-flex button--add align-items-center"
            >
              <img src={"images/iconPlus.svg"} alt="" className="mr-2" />
              <p>Add New</p>
            </button>
          </div>
          <div className="btn-group-vertical content--list mt-2">
            <div>
              <button className="btn btn-group" type="button">
                Chạy quảng cáo quần áo nam
                <button
                  className="btn btn-group m-0 pr-0 pt-1 d-flex justify-content-end button--more"
                  type="button"
                >
                  <img src={"images/iconMore16.svg"} alt="" />
                </button>
              </button>
            </div>
            <div>
              <button className="btn" type="button">
                Quần áo nữ
              </button>
            </div>
            <div>
              <button className="btn" type="button">
                Vòng đeo tay nữ
              </button>
            </div>
            <div>
              <button className="btn" type="button">
                Combo quần áo hè
              </button>
            </div>
            <div>
              <button className="btn" type="button">
                Combo du lịch
              </button>
            </div>
            <div>
              <button className="btn" type="button">
                Thời trang hè cho nữ
              </button>
            </div>
          </div>
        </div>
        <div className="col-9 bg-white rounded">
          <div className="d-flex justify-content-between mt-4">
            <p className="content--title">Nhóm từ khóa chạy quảng cáo.</p>
            <button type="button" className="btn btn-success">
              Add new
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="d-flex">
              <form className="form-inline justify-content-between">
                <div className="form-check form-switch">
                  <input
                    style={{ height: "20px" }}
                    className="form-check-input m-0"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked
                  />
                </div>
                <div className="form-group mx-sm-3">
                  <input
                    type="text"
                    className="form-control input--present mr-1"
                    id="inputKeyword2"
                    placeholder="Tìm từ khóa..."
                  />
                  {/* <div> */}
                  <input
                    type="color"
                    id="color"
                    name="color"
                    value="#000000"
                  ></input>
                  {/* </div> */}
                </div>
              </form>
            </div>

            <div className="d-flex">
              <form className="form-inline justify-content-between">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control input--replace"
                    id="inputKeyword2"
                    placeholder="Thêm từ khóa..."
                  />
                </div>
              </form>
            </div>
            <button
              className="d-flex align-items-center ml-2"
              style={{ border: "none", background: "#fff" }}
            >
              <img src={"images/iconRemove.svg"} alt="" />
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="d-flex ">
              <form className="form-inline justify-content-between">
                <div className="form-check form-switch">
                  <input
                    style={{ height: "20px" }}
                    className="form-check-input m-0"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <div className="form-group mx-sm-3">
                  <input
                    type="text"
                    className="form-control input--present mr-1"
                    id="inputKeyword2"
                    placeholder="Tìm từ khóa..."
                  />
                  {/* <div> */}
                  <input
                    type="color"
                    id="color"
                    name="color"
                    value="#000000"
                  ></input>
                  {/* </div> */}
                </div>
              </form>
            </div>

            <div className="d-flex ">
              <form className="form-inline justify-content-between">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control input--replace"
                    id="inputKeyword2"
                    placeholder="Thêm từ khóa..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="d-flex ">
              <form className="form-inline justify-content-between">
                <div className="form-check form-switch">
                  <input
                    style={{ height: "20px" }}
                    className="form-check-input m-0"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked
                  />
                </div>
                <div className="form-group mx-sm-3">
                  <input
                    type="text"
                    className="form-control input--present mr-1"
                    id="inputKeyword2"
                    placeholder="Tìm từ khóa..."
                  />
                  {/* <div> */}
                  <input
                    type="color"
                    id="color"
                    name="color"
                    value="#000000"
                  ></input>
                  {/* </div> */}
                </div>
              </form>
            </div>

            <div className="d-flex ">
              <form className="form-inline justify-content-between">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control input--replace"
                    id="inputKeyword2"
                    placeholder="Thêm từ khóa..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckContentComponent;
