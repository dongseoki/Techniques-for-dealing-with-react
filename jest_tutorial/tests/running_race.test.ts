// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript
function solution(players:String[], callings:String[]):String[] {
    var answer = [];
    // for(let i:number = 0 ; i < callings.length ; i++){
    // }
    callings.forEach((callingItem) => {
        let pos:number = players.indexOf(callingItem);
        // players[pos-1], players[pos] = players[pos], players[pos-1];
        // above code is wrong way.
        [players[pos-1], players[pos]] = [players[pos], players[pos-1]];
        console.log("-------")
        console.log("callingItem : ",callingItem);
        console.log("pos : ", pos)
        console.log("players result : ",players);
        console.log("-------")
    });
    return players;
}

function solution2(players:String[], callings:String[]):String[] {
    var answer = [];
    let nameToPos :Map<String, number> = new Map();
    players.forEach((value, idx)=>{
        nameToPos.set(value, idx);
    })
    callings.forEach((callingItem) => {
        let pos:number = nameToPos.get(callingItem) ?? -1;
        
        [players[pos-1], players[pos]] = [players[pos], players[pos-1]];
        console.log("-------")
        console.log("callingItem : ",callingItem);
        console.log("pos : ", pos)
        console.log("players result : ",players);
        console.log("-------")
    });
    return players;
}

describe('running', () => {
    test('running test', () => {
        expect(solution(["mumu", "soe", "poe", "kai", "mine"]	, ["kai", "kai", "mine", "mine"])).toStrictEqual(["mumu", "kai", "mine", "soe", "poe"]);
    });
});