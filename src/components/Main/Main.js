import "./Main.css";

function Main() {
  return (
    // <!-- Main body content -->
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">Max</h1>
            <h1 id="person-description">
              UI Developer. UX Designer. Problem Solver.
            </h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="banner-buttons">
            <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
              <a className="btn btn-default btn-border" href="#about">
                Info
              </a>
            </div>

            <div className="col-sm-1 col-md-1">
              <a className="btn btn-default btn-border" href="#projects">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
