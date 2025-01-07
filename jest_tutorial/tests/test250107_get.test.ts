let testResult = {
    "meta": {
        "code": 0,
        "message": "Success"
    },
    "data": {
        "totalCount": 7,
        "list": [
            {
                "cardCompanyName": "국민카드",
                "approvalCount": 71,
                "approvalAmount": 1800520,
                "cancellationCount": 6,
                "cancellationAmount": 12000,
                "netApprovalCount": 65,
                "netApprovalAmount": 1788520
            },
            {
                "cardCompanyName": "비씨카드",
                "approvalCount": 6,
                "approvalAmount": 225250,
                "cancellationCount": 0,
                "cancellationAmount": 0,
                "netApprovalCount": 6,
                "netApprovalAmount": 225250
            },
            {
                "cardCompanyName": "신한카드",
                "approvalCount": 23,
                "approvalAmount": 515350,
                "cancellationCount": 0,
                "cancellationAmount": 0,
                "netApprovalCount": 23,
                "netApprovalAmount": 515350
            },
            {
                "cardCompanyName": "전북카드",
                "approvalCount": 71,
                "approvalAmount": 1800520,
                "cancellationCount": 6,
                "cancellationAmount": 12000,
                "netApprovalCount": 65,
                "netApprovalAmount": 1788520
            },
            {
                "cardCompanyName": "하나(외환)카드",
                "approvalCount": 6,
                "approvalAmount": 43700,
                "cancellationCount": 0,
                "cancellationAmount": 0,
                "netApprovalCount": 6,
                "netApprovalAmount": 43700
            },
            {
                "cardCompanyName": "현대카드",
                "approvalCount": 29,
                "approvalAmount": 187700,
                "cancellationCount": 0,
                "cancellationAmount": 0,
                "netApprovalCount": 29,
                "netApprovalAmount": 187700
            },
            {
                "cardCompanyName": "미분류",
                "approvalCount": 667,
                "approvalAmount": 13185900,
                "cancellationCount": 32,
                "cancellationAmount": 352250,
                "netApprovalCount": 635,
                "netApprovalAmount": 12833650
            }
        ]
    }
}

function getSearchCardCompanyNameOptionTags(testResult) {
    `						<option value="국민카드">국민카드</option>
						<option value="비씨카드">비씨카드</option>
						<option value="신한카드">신한카드</option>
						<option value="삼성카드">삼성카드</option>
						<option value="현대카드">현대카드</option>
						<option value="롯데카드">롯데카드</option>
						<option value="농협카드">농협카드</option>
						<option value="하나(외환)카드">하나(외환)카드</option>
						<option value="우리카드">우리카드</option>
						<option value="씨티카드">씨티카드</option>`
                        // 이런식의 option 태그를 만들어서 리턴해야함

    let optionTags = testResult.data.list.map((item) => {
        return `<option value="${item.cardCompanyName}">${item.cardCompanyName}</option>`
    })
    return optionTags.join('\n')
}

describe('리스트 만들고 데이터 추출하기.', () => {
    // 개별 테스트 케이스
    test('테스트', () => {
        // get result with String type
        // let result = getSearchCardCompanyNameOptionTags(testResult);
        let  result: String  = getSearchCardCompanyNameOptionTags(testResult);

        // 길이가 10보다 크다
      expect(result.length).toBeGreaterThan(10);
      //result 를 로그 찍어서 보고 싶으면?
      console.log('로그 시작')
        console.log(result);
        console.log('로그 종료')
    });
  
  });