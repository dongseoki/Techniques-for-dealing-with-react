import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  // var {id, name} = {id : "id1", name:"name12"}
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
