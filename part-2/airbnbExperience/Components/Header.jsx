function Header(props) {
  return (
    <nav className="header--container">
      <div className="header--primary">
        <div className="header--grid">
          <img
            className="grid--item-1"
            src="../src/assets/main/first.png"
            alt=""
          />

          <img
            className="grid--item-2"
            src="../src/assets/main/top-second.png"
            alt=""
          />

          <img
            className="grid--item-3"
            src="../src/assets/main/bottom-second.png"
            alt=""
          />

          <img
            className="grid--item-4"
            src="../src/assets/main/top-third.png"
            alt=""
          />

          <img
            className="grid--item-5"
            src="../src/assets/main/bottom-third.png"
            alt=""
          />

          <img
            className="grid--item-6"
            src="../src/assets/main/top-fourth.png"
            alt=""
          />

          <img
            className="grid--item-7"
            src="../src/assets/main/bottom-fourth.png"
            alt=""
          />

          <img
            className="grid--item-8"
            src="../src/assets/main/top-fifth.png"
            alt=""
          />

          <img
            className="grid--item-9"
            src="../src/assets/main/bottom-fifth.png"
            alt=""
          />
        </div>
      </div>
      <h1 className="header--title">Online Experiences</h1>
      <p className="header--content">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </nav>
  );
}

export { Header };
