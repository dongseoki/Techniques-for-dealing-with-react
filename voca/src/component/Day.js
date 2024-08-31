// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
  // var {id, name} = {id : "id1", name:"name12"}
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
