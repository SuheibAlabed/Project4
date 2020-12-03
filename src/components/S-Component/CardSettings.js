import { CardSettings } from "./DB";
import "../S-Style/Body.scss";
//import Weather from "./Weather/Weather";

const Cards = () => {
  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <div className="Card">
          <caption>{card.Caption}</caption>
          <div className="CardBody">
            <div className="Item1">
              <b>{card.Label1}</b>
              <p>{card.Label1_Ans}</p>
            </div>
            <div className="Item1">
              <b>{card.Label2}</b>
              <p>{card.Label2_Ans}</p>
            </div>
            <div className="Item1">
              <b>{card.Label3}</b>
              <p>{card.Label3_Ans}</p>
            </div>
            <div className="Item1">
              <b>{card.Label4}</b>
              <p>{card.Label4_Ans}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // Start Card
    <div className="Card-Container">{CardSettings.map(renderCard)}</div>
    //End Card
  );
};

export default Cards;
