import React, { Component } from "react";
import axios from "axios";

class ArticleCard extends Component {
  constructor() {
    super();
    this.state = { article: null, imgUrl: "" };
  }
  componentDidMount() {
    axios
      .get(`/articles/${this.props.articleId}`)
      .then(res => res.data)
      .then(article => {
        //transform buffer to 8bits unsign
        const arrayBufferView = new Uint8Array(article.file.data);
        const imgBlob = new Blob([arrayBufferView], { type: "image/jpeg" });
        const imgUrl = URL.createObjectURL(imgBlob);
        this.setState({ article, imgUrl });
      })
      .catch(error => error);
  }
  render() {
    const { article, imgUrl } = this.state;
    return (
      <div className="ArticleCard">
        <h3 className="ArticleCard_Title">
          {article ? article.title : "Titre"}
        </h3>
        <img
          className="ArticleCard_Image"
          src={
            article && imgUrl
              ? imgUrl
              : "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale"
          }
        />
        <div className="ArticleCard_Description">
          <p>{article ? article.country : "France"}</p>
          <p>{article ? article.title : "France"}</p>
          <p>{article ? article.description : "Je suis un article"}</p>
        </div>
      </div>
    );
  }
}
export default ArticleCard;
