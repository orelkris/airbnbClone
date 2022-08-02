function Navbar(props) {
  return (
    <nav className="nav--primary">
      <div className="nav--content">
        <img className="nav--logo" src={props.logo} />
      </div>
    </nav>
  );
}

export { Navbar };
