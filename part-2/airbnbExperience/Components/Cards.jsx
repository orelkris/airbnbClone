import ratingImage from "../src/assets/card/star.svg";
import cardImage1 from "../src/assets/card/katie-zaferes.png";
import cardImage2 from "../src/assets/card/wedding-photography1.png";
import cardImage3 from "../src/assets/card/mountain-bike1.png";
import { Card } from "./Card";
function Cards(props) {
  return (
    <div className="cards">
      <Card
        extra="Sold Out"
        image={cardImage1}
        title="Life Lessons with Katie Zaferes"
        price={136}
        ratingImg={ratingImage}
        ratingAmount={6}
        rating={5.0}
        country="USA"
      />
      <Card
        extra="Online"
        image={cardImage2}
        title="Learn wedding photography"
        price={124}
        ratingImg={ratingImage}
        ratingAmount={30}
        rating={5.0}
        country="USA"
      />
      <Card
        extra=""
        image={cardImage3}
        title="Group Mountain Biking"
        price={50}
        ratingImg={ratingImage}
        ratingAmount={2}
        rating={4.8}
        country="USA"
      />
    </div>
  );
}

export { Cards };
