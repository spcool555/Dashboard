import React, { Component } from "react";

export default class empRegistration extends Component {
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Employee Registration Form</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Employee Registration Form
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Employee Details</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form>
            <div className="card-body row">
              <div className="form-group col-md-4">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="dob">D.O.B</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  placeholder="Enter DOB"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender">
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="mobile">Mobile No.</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter Mobile number"
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="exampleInputEmail1">User id</label>
                <input
                  type="text"
                  className="form-control"
                  id="uid"
                  placeholder="Enter User Id"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="Password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="department">Gender</label>
                <select className="form-control" id="department">
                  <option>Select Department</option>
                  <option value="Admin">Admin</option>
                  <option value="Finance">Finance</option>
                  <option value="Hr">HR</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="empstatus">Emp. Status</label>
                <select className="form-control" id="empstatus">
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer col-md-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
