function Card(props) {
  return (
    <article className="card">
      <div className={props.extra.length !== 0 ? "card--extra" : "hidden"}>
        {props.extra ?? ""}
      </div>
      <img className="card--image" src={props.image} alt="Katie Zaferes" />
      <div className="card--rating-content">
        <img className="card--rating-image" src={props.ratingImg} alt="star" />
        <span className="card--rating">{props.rating.toFixed(1)}</span>
        <span className="card--rating-amount">
          ({props.ratingAmount}) <span className="circle">&#9679;</span>
        </span>
        <span className="card--rating-country"> {props.country}</span>
      </div>
      <h3 className="card--title">{props.title}</h3>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </article>
  );
}

export { Card };
