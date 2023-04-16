import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  return (
    <div className="center">
      <MainDesk />
    </div>
  );
}

function MainDesk() {
  const [one, setone] = useState("");
  const [two, settwo] = useState("");
  const [three, setthree] = useState("");
  const [four, setfour] = useState("");
  const [five, setfive] = useState("");
  const [six, setsix] = useState("");
  const [seven, setseven] = useState("");
  const [eight, seteight] = useState("");
  const [nine, setnine] = useState("");
  // folowing the turn
  const [turn, setTurn] = useState(0);

  //variables for easier use
  let web = [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
  ];
  //set winer to darw from the start
  const [win, setWin] = useState("Draw");
  //print O ans X onclick
  function handleClick(el, webEl) {

    if(webEl === ''){
      setTurn(turn + 1);
      if (turn % 2 != 0) {
        if (el === 'one') {
          setone("O");
        } else if (el === 'two') {
          settwo("O");
        } else if (el === 'three') {
          setthree("O");
        } else if (el === 'four') {
          setfour("O");
        } else if (el === 'five') {
          setfive("O");
        } else if (el === 'six') {
          setsix("O");
        } else if (el === 'seven') {
          setseven("O");
        } else if (el === 'eight') {
          seteight("O");
        } else if (el === 'nine') {
          setnine("O");
        }
      } else {
        if (el === 'one') {
          setone("X");
        } else if (el === 'two') {
          settwo("X");
        } else if (el === 'three') {
          setthree("X");
        } else if (el === 'four') {
          setfour("X");
        } else if (el === 'five') {
          setfive("X");
        } else if (el === 'six') {
          setsix("X");
        } else if (el === 'seven') {
          setseven("X");
        } else if (el === 'eight') {
          seteight("X");
        } else if (el === 'nine') {
          setnine("X");
        }
      }
    }
  }
  const [stop, setStop] = useState("");

 //find out winer  
  useEffect(() => {
    for(let i = 0; i < web.length; i++) {
      if(turn >= 5 ) {
        if(web[0][0] === web[1][1] && web[1][1] === web[2][2] && web[0][0] != '') {
          setStop('disabled')
          
        }
        if(web[0][2] === web[1][1] && web[1][1] === web[2][0] && web[0][2] != '') {
          setStop('disabled')
          
        }

        if (web[i].every(val => val === web[i][0]) && web[i][0] != "") {
          setStop('disabled')
          
        }
        if (web[0][i] === web[1][i] && web[1][i] === web[2][i] && web[0][i] != '') {
          setStop('disabled')
          
        }
    }
  }
}, [turn]);

// restart button
  function restart() {
    setStop("");
    setWin("Draw");
    setone('');
    settwo('');
    setthree('');
    setfour('');
    setfive('');
    setsix('');
    setseven('');
    seteight('');
    setnine('');
    setTurn(0);

  }
 // print winer
  useEffect(() => {
      if(turn % 2 != 0 && stop === 'disabled') {
        setWin("winer-X")
      }
      if(turn % 2 === 0 && stop === 'disabled') {
        setWin("winer-O")
      }
  },[stop])

  


  return (
    <div className="flex">
      <div>
        <h1>Tik-Tak-Toe</h1>
      </div>
      <div className={"conteiner"}>
        <button
          className="sell"
          onClick={() => handleClick('one',web[0][0])}
          disabled={stop}
        >
          <span className="figur">{web[0][0]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('two',web[0][1])}
          disabled={stop}
        >
          <span className="figur">{web[0][1]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('three',web[0][2])}
          disabled={stop}
        >
          <span className="figur">{web[0][2]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('four',web[1][0])}
          disabled={stop}
        >
          <span className="figur">{web[1][0]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('five',web[1][1])}
          disabled={stop}
        >
          <span className="figur">{web[1][1]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('six',web[1][2])}
          disabled={stop}
        >
          <span className="figur">{web[1][2]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('seven',web[2][0])}
          disabled={stop}
        >
          <span className="figur">{web[2][0]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('eight',web[2][1])}
          disabled={stop}
        >
          <span className="figur">{web[2][1]}</span>
        </button>
        <button
          className="sell"
          onClick={() => handleClick('nine',web[2][2])}
          disabled={stop}
        >
          <span className="figur">{web[2][2]}</span>
        </button>
      </div>
      <div className="printWin">
        <h2 className="winer">{win}</h2>
      </div>
      <button className="restart" onClick={() => restart()}>Restart</button>
    </div>
  );
}

export default App;