import React, { Component } from "react";
require("./Card.scss");

class Card extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="Card">
        <h3 className="Card_Title">{article.title}</h3>
        <img
          className="Card_Image"
          src={
            article.image
              ? article.image
              : "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale"
          }
        />
        <div className="Card_Description">
          <p>{article.country}</p>
          <p>{article.description}</p>
          <a>Lire</a>
        </div>
      </div>
    );
  }
}
export default Card;
