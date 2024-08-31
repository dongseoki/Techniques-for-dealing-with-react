// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";s
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  // var {id, name} = {id : "id1", name:"name12"}
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

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
