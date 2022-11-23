import Link from "next/link";
import stil from "../styles/mojStil.module.css";
import { useState } from "react";

export default function Home() {
  const [something, setSomething] = useState([]);

  const meni = async () => {
    const response = await fetch(
      "https://dev-v2-mrp.insby.tech/api/v2/session/restaurant/menu?appId=2"
    );
    const data = response.json();
    setSomething(data);
  };

  return (
    <>
      <div className={stil.pozadina}>
        <form className={stil.form}>
          <div>
            <p className={stil.promena}>(username) email@email.com</p>
            <Link href={"/login"}>
              <button className={stil.but}>Sign-up/Login</button>
            </Link>
          </div>
          {something.map((some) => {
            return <div key={some.productId}>{some.category}</div>;
          })}
          <div>
            <img src={`.jpg`} alt="slika" className="stil.img" />
            {something.map((some) => {
              return (
                <div key={some.productId}>
                  <p>{some.productName}</p>
                </div>
              );
            })}
            {something.map((some) => {
              return (
                <div key={some.productId}>
                  <p>{some.price}</p>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
