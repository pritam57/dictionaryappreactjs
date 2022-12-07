import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Screen2.css";

const Screen2 = () => {

    const apidata = useSelector((state: any) => state.worddata);
    const [url, seturl] = useState("");
    apidata.data[0].phonetics.map((a: any, b: any) => {

        if (a.audio !== "") {
            if (url === "") {
                seturl(a.audio)
            }
        }
    })

    return (

        <div className="mainc">

            <h1 className="heading" >word:</h1>
            <h3> {apidata.data[0].word}</h3>
            <div>
                {apidata.data[0].meanings.map((a: any, b: any) => {

                    return (
                        <div key={b} >
                            <h1 className="heading" >{a.partOfSpeech} :</h1>
                            {a.definitions.map((a: any, b: any) => {
                                if (a.example !== undefined) {
                                    return (
                                        <div key={b} className="bord">
                                            <h1 className="heading">defination :</h1>
                                            <h3>{a.definition}</h3>
                                            <h1 className="heading">example :</h1>
                                            <h3>{a.example}</h3>
                                        </div>
                                    )
                                }
                            })}

                        </div>

                    )
                })}

            </div>
            <div>
                {url.length !== 0 ?
                    <audio controls>
                        <source src={url} type="audio/mpeg" />
                    </audio> : null}
            </div>
        </div>

    )
}

export default Screen2;

