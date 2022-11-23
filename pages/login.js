import Link from "next/link";
import stil from "../styles/mojStil.module.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpassword, setCnfmpassword] = useState("");

  //   if (password === cnfmpassword) {
  //     {
  //       alert("radi");
  //     }
  //   } else {
  //     {
  //       alert("Nisu iste sifre");
  //     }
  //   }

  const submitClick = async (e) => {
    e.preventDefault(); //da se ne refresuje
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className={stil.pozadina}>
        <form className="stil.form">
          <div>
            <input
              className={stil.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={stil.input}
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={stil.input}
              type="text"
              placeholder="Confirm password"
              value={cnfmpassword}
              onChange={(e) => setCnfmpassword(e.target.value)}
            />
          </div>
          <input type="checkbox" />
          <label>Remember me</label>
          {/* ne pada mi nista na pamet da sacuva podatke pri prijavi */}
          <button className={stil.button} onClick={submitClick}>
            SignUp/Login
          </button>
          {/* {username.map((name) => {
            return (
              <div key={name.username}>
                <p>
                  {name.username} {`${name.username}@.gmail.com`}
                </p>
              </div>
            );
          })} */}
        </form>
      </div>
    </>
  );
}
export default Login;
