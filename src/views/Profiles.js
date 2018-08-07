import React, { Component } from "react";
import axios from "axios";

require("./Profiles.scss");

class Profiles extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    axios
      .get("/users")
      .then(res => res.data)
      .then(users => this.setState({ users }))
      .catch(error => error);
  }
  render() {
    return (
      <div className="Profiles">
        <h2 className="Profiles_Title">Travellers</h2>
        <div className="Profiles_Cards_Container">
          {this.state.users.map(user => (
            <div className="Profiles_Cards_Container_Item" key={user.user_id}>
              <img
                src="https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale"
                alt=""
              />
              <div className="Profiles_Cards_Container_Item_Content">
                <h3>
                  {user.user_lastname} {user.user_firstname}
                </h3>
                <p>{user.user_email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Profiles;
