import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import "../../../src/index.css" 

function FlowAdsComponent() {
  return (
    <div className="flow-ads col-md-12">
      <div className="row mt-5 mb-4">
        <div className="col-md-6">
          <div className="btn-group float-md-left" role="group">
            <div className="dropdown">
              <button
                className="btn bg-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Group
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            &nbsp;
            <div className="dropdown">
              <button
                className="btn bg-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Fanpage
              </button>
              <div
                className="dropdown-menu left"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-success  float-md-right">
            Add new fanpage
          </button>
        </div>
      </div>

      <div className="row card--ads">
        <h1 className="text-left p-3 card--header">Khởi chạy tháng 1 năm 2021</h1>
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3">
                        <div className="col-md-6 d-flex">
                          <img
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                '#fff url("https://picsum.photos/40/40") no-repeat center',
                              borderRadius: "50%",
                            }}
                          />
                          <div className="ml-2 card--title ">
                            <p>Thời trang Lux W</p>
                            <span className="float-md-left">Được tài trợ</span>
                          </div>
                        </div>
                        <div className="col-md-6 card--date text-md-right mt-1">
                          20/04/2021
                        </div>
                      </div>
                      <p className="card--description text-justify mt-3">
                        🌱 Đầu tiên hãy phủ một tấm vải (ga giường) ra rồi vơ
                        hết đống quần áo trong tủ bỏ lên đó (chắc chắn là tất cả
                        nhé) vì chúng ta có biết là mình có tất cả bao nhiêu bộ
                        quần áo đâu. 🌸̣👏 👏 thường mặc thì có mấy cái, những
                        cái không mặc thì cứ mãi ở ...
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 p-0">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div> 
                        <div className="col-md-6 p-0 card--image">
                          <img
                            alt=""
                            src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                            className="card--image"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <p className="card--id">3644980279304958</p>
                        <button 
                          type="button" 
                          className="btn float-md-right card--button"
                        >
                          Gửi Tin Nhắn
                        </button>
                      </div>
                      <hr/>
                      <div className="d-flex mt-3 mb-4" >
                        
                        <img
                          src={'images/iconLogo20.svg'}
                          alt=""
                        />
                        &nbsp;
                        <p style={{color:'#83859C'}}>5 Quảng cáo sử dụng nội dung văn bản này</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowAdsComponent;
