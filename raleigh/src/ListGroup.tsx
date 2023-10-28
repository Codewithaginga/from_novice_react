import { Fragment } from "react";
// import { MouseEvent } from "react";

function ListGroup() {
  let country = ["Belgium", "Norway", "Sweeden", "Egypt"];
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //  className={selectedIn === index ? "active" : "Notactive"}
  const selectedIn = 0;
  //   country = [];
  //   const mess = country.length === 100 && <p>Not found </p>;
  return (
    <>
      <h1>Premier League</h1>

      <ul>
        {country.map((item, index) => (
          <li className={selectedIn === index ? "active" : "Notactive"}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
