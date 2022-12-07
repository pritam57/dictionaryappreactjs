import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList, themecolor } from "../redux/action";
import { useNavigate } from "react-router-dom";
import "./Screen1.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const Screen1 = () => {
  let navigates = useNavigate();
  const dispatch = useDispatch();
  const apidata = useSelector((state: any) => state.worddata);
  const [word, setword] = useState("");
  const [randomw, setrandom] = useState<any[]>([]);
  const [show, setshow] = useState(false);
  const [d, setd] = useState(false);
  const currenttheme = useSelector((state: any) => state.themedata);
  const [dp, setdp] = useState(false);
  const [state, setState] = useState(true);

  useEffect(() => {
    fetchrandomword();
  }, [])


  const saveword = (e: any) => {
    console.log(e.target.value);
    setword(e.target.value);
    if (e.target.value.length === 0) {
      setdp(false);
    }
    if (e.target.value.length > 0) {
      setdp(true);
    }
  }


  const navigatepage = () => {
    navigates("/screen2")
  }


  function fetchrandomword() {
    fetch("https://random-words-api.vercel.app/word").then((res) => {
      res.json().then((respo) => {
        console.log(respo);
        console.log(respo[0].word);
        setrandom(respo);
        setshow(true);
      })
    })
  }

  useEffect(() => {
    if (d === true) {
      navigatepage();
    }
    setd(true);
  }, [apidata])

  function changepath() {
    dispatch(productList(word));
    setword("");
  }

  const showdetail = () => {
    dispatch(productList(randomw[0].word));
  }

  function changecolortheme() {
    if (state === true) {
      setState(false);
    }
    else {
      setState(true);
    }
    if (currenttheme === "dark") {
      dispatch(themecolor("light"))
      console.log("light")
    }
    if (currenttheme === "light") {
      dispatch(themecolor("dark"));
      console.log("dark")
    }

  }

  return (

    <div className="main">

      {show === false ? <div><h1>...loading</h1></div> :
        <div>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={state}
                  onChange={changecolortheme}
                  color="primary"
                  name="status"
                />
              }
              label={currenttheme + " " + "mode"}
            />


            <h1 >Dictionary App</h1>
          </div>
          <div>
            <input className='inputbox' type={"text"} placeholder={"Enter word "} onChange={saveword} value={word} />

            <div >
              {dp === false ? <button className="btn" disabled onClick={changepath}>search</button> : null}
              {dp === true ? <button className="btn" onClick={changepath}>search</button> : null}

            </div>
          </div>
          <div className="block">
            <h1 style={{ color: "darkblue" }}>Word of the day</h1>
            <div>
              <h1 className="heading" >word :</h1>
              <h3>{randomw[0].word}</h3>
            </div>
            <div>
              <h1 className="heading">defination :</h1>
              {<h3>{randomw[0].definition}</h3>}
            </div>
            <div>
              <h1 className="heading">pronunciation :</h1>
              <h3>{randomw[0].pronunciation}</h3>
            </div>
            <div>
              <button className="btn1" onClick={showdetail}>readmore</button>
            </div>
          </div>

        </div>}
    </div>

  )
}

export default Screen1;