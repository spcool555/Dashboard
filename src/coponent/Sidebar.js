import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Main Sidebar Container */}
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="d-block">
                    Alexander Pierce
                  </a>
                </div>
              </div>
              {/* SidebarSearch Form */}
              <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                  <input
                    className="form-control form-control-sidebar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-sidebar">
                      <i className="fas fa-search fa-fw" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                  <li className="nav-item menu-open">
                    <NavLink to="/" className="nav-link active">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>Dashboard</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-edit" />
                      <p>
                        Employee Managment
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <NavLink to="empRegistration" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Employee Registration</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="empList" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Employee List</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/editors.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Task Status</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/kanban" className="nav-link">
                      <i className="nav-icon fas fa-columns" />
                      <p>Kanban Board</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-envelope" />
                      <p>
                        Mailbox
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/mailbox.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Inbox</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/compose.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Compose</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/mailbox/read-mail.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Read</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-book" />
                      <p>
                        Pages
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <NavLink to="sample" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Invoice</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/profile.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Profile</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/e-commerce.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>E-commerce</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/projects.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Projects</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-add.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Add</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-edit.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Edit</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-detail.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Detail</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/contacts.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Contacts</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/faq.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>FAQ</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/contact-us.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Contact us</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-plus-square" />
                      <p>
                        Extras
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>
                            Login &amp; Register v1
                            <i className="fas fa-angle-left right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              href="pages/examples/login.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Login v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/register.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Register v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/forgot-password.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Forgot Password v1</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/recover-password.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Recover Password v1</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>
                            Login &amp; Register v2
                            <i className="fas fa-angle-left right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              href="pages/examples/login-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Login v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/register-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Register v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/forgot-password-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Forgot Password v2</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages/examples/recover-password-v2.html"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <p>Recover Password v2</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/lockscreen.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Lockscreen</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/legacy-user-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Legacy User Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/language-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Language Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/404.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Error 404</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/500.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Error 500</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/pace.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Pace</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/blank.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Blank Page</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="starter.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Starter Page</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-search" />
                      <p>
                        Search
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/search/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Search</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/search/enhanced.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Enhanced</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">MISCELLANEOUS</li>
                  <li className="nav-item">
                    <a href="iframe.html" className="nav-link">
                      <i className="nav-icon fas fa-ellipsis-h" />
                      <p>Tabbed IFrame Plugin</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://adminlte.io/docs/3.1/"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-file" />
                      <p>Documentation</p>
                    </a>
                  </li>
                  <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Level 1
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Level 2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>
                            Level 2
                            <i className="right fas fa-angle-left" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Level 2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-header">LABELS</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-danger" />
                      <p className="text">Important</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-warning" />
                      <p>Warning</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-info" />
                      <p>Informational</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
        </div>
        ;
      </div>
    );
  }
}
