import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    function onSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3001/words/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("생성이 완료되었습니다.");
                history(`/day/${dayRef.current.value}`);
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label>Eng</label>
                    <input type="text" placeholder="computer" ref={engRef}/>
                </div>
                <div>
                    <label>Kor</label>
                    <input type="text" placeholder="컴퓨터" ref={korRef}/>
                </div>
                <div>
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map(day => {
                            return <option key={day.id} value={day.day}>{day.day}</option>
                        })}
                    </select>
                </div>
            </div>
            <button>저장</button>
        </form>
    );
}