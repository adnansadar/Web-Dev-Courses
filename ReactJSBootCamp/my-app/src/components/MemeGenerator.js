import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    toptext: "",
    bottomtext: "",
    randomimage: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.toptext);
    console.log(this.state.bottomtext);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomimage: randMemeImg });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="toptext"
            onChange={this.handleChange}
            value={this.state.toptext}
          />
          <input
            type="text"
            name="bottomtext"
            onChange={this.handleChange}
            value={this.state.bottomtext}
          />
          <button>Generate</button>
        </form>

        <div>
          <img src={this.state.randomimage} alt="dfdsf" />
          <h2>{this.state.toptext}</h2>
          <h2>{this.state.bottomtext}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
