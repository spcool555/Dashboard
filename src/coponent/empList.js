import React from "react";

function empList() {
  return (
    <div>
      <div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Simple Full Width Table</h3>
              <div className="card-tools">
                <ul className="pagination pagination-sm float-right">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      «
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      »
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{ width: "40px" }}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-danger"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-danger">55%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-warning">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "30%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">30%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success">90%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Striped Full Width Table</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{ width: "40px" }}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-danger"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-danger">55%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-warning">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "30%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">30%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success">90%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default empList;
