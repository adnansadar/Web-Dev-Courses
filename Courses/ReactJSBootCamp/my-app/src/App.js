import React from "react";
// import ContactCard from "./components/ContactCard";
// import Joke from "./components/Joke";
// import jokesData from "./components/JokesData";
import ProductsData from "./components/ProductsData";
import Product from "./components/Product";

function App() {
  const productsArr = ProductsData.map((item) => (
    <Product productname={item} />
  ));

  return productsArr;
  // const jokeComponents = jokesData.map((joke) => (
  //   <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  // ));
  // return <div>{jokeComponents}</div>;
  // <div>
  //   <ContactCard
  //     contact={{
  //       name: "Adnan Sadar",
  //       contact: "734897832",
  //       email: "asds@gmail.com",
  //       image:
  //         "https://images.unsplash.com/photo-1610194426904-0460481cf7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  //     }}
  //   />
  // </div>
  // <div className="todo-list">
  //   <TodoItem />
  //   <TodoItem />
  //   <TodoItem />
  //   <TodoItem />
  // </div>
  // <h1>My name is {firstName + " " + lastName}!</h1>
  // const date = new Date();
  // const hours = date.getHours();
  // const styles = {
  //   fontSize: 20,
  // };
  // let timeOfDay;

  // if (hours < 12) {
  //   timeOfDay = "morning";
  //   styles.color = "blue";
  //   styles.backgroundColor = "black";
  // } else if (hours > 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  //   styles.color = "yellow";
  // } else {
  //   timeOfDay = "night";
  //   styles.color = "violet";
  // }

  // return <h3 style={styles}>Time of day is {timeOfDay + " " + hours}</h3>;
  // return <h3>Time of day is {`${timeOfDay} ${hours}`}</h3>;

  // return <h1>My name is {`${firstName} ${lastName}`}!</h1>; //template strings used for including JS code

  // <div>
  //   <Header />
  //   <MainContent />
  //   <Footer />
  // </div>
}

export default App;
