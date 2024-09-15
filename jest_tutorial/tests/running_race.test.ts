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
    callings.forEach((overTakerName) => {
        // 추월 정보를 갱신한다.
        // 더 자세히. 추월하는 자와, 추월 당하는 자의 위치를 바꾼다.
        // 더 더 자세히. 추월하는 자의 위치를 찾아서, 추월 당하는 자와 위치를 바꾼다.

        // 보조 기억 장치로 위치를 찾는다.
        let overTakerPos:number = nameToPos.get(overTakerName) ?? -1;
        let overTakeAttackedPos:number = overTakerPos - 1;
        let overTakeAttackedName = players[overTakeAttackedPos];

        // 위치를 바꾼다.
        [players[overTakeAttackedPos], players[overTakerPos]]
             = [players[overTakerPos], players[overTakeAttackedPos]];

             // 보조 기억장치의 위치 정보를 갱신한다.
        nameToPos.set(overTakerName, overTakeAttackedPos);
        nameToPos.set(overTakeAttackedName, overTakerPos);        
        console.log("-------")
        console.log("callingItem : ",overTakerName);
        console.log("pos : ", overTakerPos)
        console.log("players result : ",players);
        console.log("-------")
    });
    return players;
}

describe('running', () => {
    test('running test', () => {
        expect(solution2(["mumu", "soe", "poe", "kai", "mine"]	, ["kai", "kai", "mine", "mine"])).toStrictEqual(["mumu", "kai", "mine", "soe", "poe"]);
    });
});


// function solution(players, callings) {
//     let idx;
//     let name1;
//     let name2;
//     const idxList = {}

//     players.forEach((name,index)=>idxList[name]=index)
//     for(let call of callings){
//         idx = idxList[call]
//         name1 = players[idx]
//         name2 = players[idx-1]
//         idxList[call]-=1
//         idxList[name2]+=1
//         players[idx] = name2
//         players[idx-1] = name1
//     }    

//     return players;
// }

// 다른 코드 풀이를 참고해보니, 단순 object를 이용해서 풀이를 하였다. 참고

// Object.entries(players).map((v)=> v[1])

// function solution(players, callings) {
//     let obj = {};
//     players.forEach((v, idx) => obj[v] = idx);
//     for(let i = 0; i < callings.length; i++){
//         let idx = obj[callings[i]];
//         let player = players[idx-1];
//         players[idx-1] = callings[i];
//         players[idx] = player;
//         obj[callings[i]]--;
//         obj[player]++;
//     }
//     return Object.entries(players).map((v)=> v[1])
// }

// 이 코드는 다음과 같은 작업을 수행합니다:
// Object.entries(players):
// players 객체의 키-값 쌍을 배열로 변환합니다.
// 결과는 [키, 값] 형태의 배열들로 구성된 배열입니다.
// .map((v) => v[1]):
// 각 [키, 값] 쌍에 대해 매핑 함수를 실행합니다.
// v[1]은 각 쌍의 두 번째 요소, 즉 값을 선택합니다.
// 이 코드의 목적은 players 객체의 모든 값들만을 추출하여 새로운 배열로 만드는 것입니다.
// 예를 들어, players가 다음과 같다면: