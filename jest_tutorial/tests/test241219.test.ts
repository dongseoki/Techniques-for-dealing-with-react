interface DownCd {
    parentCd: string | null;
    value5: string | null;
    dspOrder: number;
    attachGrpCd: string | null;
    value2: string | null;
    level: number;
    value1: string;
    value4: string | null;
    masterVal: string;
    value3: string | null;
    remark: string | null;
    updateDt: string | null;
    createDt: string;
    masterCd: string;
    delYn: string;
    projectCd: string;
    periodStartDt: string | null;
    detailCd: string;
    siteId: number;
    langCd: string;
    useYn: string;
    createNo: number;
    periodEndDt: string | null;
    updateNo: string | null;
}

interface CategoryDetail {
    detailCd: string;
    projectCd: string;
    siteId: number;
    masterCd: string;
    langCd: string;
    masterVal: string;
    attachGrpCd: string;
    parentCd: string;
    level: number;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    remark: string;
    periodStartDt: string;
    periodEndDt: string;
    dspOrder: number;
    delYn: string;
    useYn: string;
    createNo: number;
    createDt: string;
    updateNo: string | null;
    updateDt: string;
    downCd: DownCd[];
}

let categoryDetailList: Array<CategoryDetail> = [
    {
        "detailCd": "DIK001",
        "projectCd": "DIKIDIKI",
        "siteId": 1021,
        "masterCd": "DIK",
        "langCd": "KR",
        "masterVal": "디키디키",
        "attachGrpCd": "",
        "parentCd": "",
        "level": 1,
        "value1": "디키디키",
        "value2": "",
        "value3": "",
        "value4": "",
        "value5": "",
        "remark": "",
        "periodStartDt": "",
        "periodEndDt": "",
        "dspOrder": 6,
        "delYn": "N",
        "useYn": "Y",
        "createNo": 20716,
        "createDt": "2022-05-26 17:05:08.0",
        "updateNo": null,
        "updateDt": "",
        "downCd": [
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "입장권",
                "value4": null,
                "masterVal": "디키디키",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK001",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK001001",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            }
        ]
    },
    {
        "detailCd": "DIK002",
        "projectCd": "DIKIDIKI",
        "siteId": 1021,
        "masterCd": "DIK",
        "langCd": "KR",
        "masterVal": "디디랩",
        "attachGrpCd": "",
        "parentCd": "",
        "level": 1,
        "value1": "디디랩",
        "value2": "",
        "value3": "",
        "value4": "",
        "value5": "",
        "remark": "",
        "periodStartDt": "",
        "periodEndDt": "",
        "dspOrder": 6,
        "delYn": "N",
        "useYn": "Y",
        "createNo": 20716,
        "createDt": "2022-05-26 17:05:08.0",
        "updateNo": null,
        "updateDt": "",
        "downCd": [
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "COOKING",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002001",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "특별 프로그램",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002002",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "SENSE",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002003",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "ART",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002004",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "컬러 디자인",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002005",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "캐릭터 디자인",
                "value4": null,
                "masterVal": "디디랩",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK002",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK002006",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            }
        ]
    },
    {
        "detailCd": "DIK003",
        "projectCd": "DIKIDIKI",
        "siteId": 1021,
        "masterCd": "DIK",
        "langCd": "KR",
        "masterVal": "F&B",
        "attachGrpCd": "",
        "parentCd": "",
        "level": 1,
        "value1": "F&B",
        "value2": "",
        "value3": "",
        "value4": "",
        "value5": "",
        "remark": "",
        "periodStartDt": "",
        "periodEndDt": "",
        "dspOrder": 6,
        "delYn": "N",
        "useYn": "Y",
        "createNo": 20716,
        "createDt": "2022-05-26 17:05:08.0",
        "updateNo": null,
        "updateDt": "",
        "downCd": [
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "커피",
                "value4": null,
                "masterVal": "F&B",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK003",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK003001",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            },
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "식사",
                "value4": null,
                "masterVal": "F&B",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK003",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK003002",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            }
        ]
    },
    {
        "detailCd": "DIK004",
        "projectCd": "DIKIDIKI",
        "siteId": 1021,
        "masterCd": "DIK",
        "langCd": "KR",
        "masterVal": "디키디키 키오스크",
        "attachGrpCd": "",
        "parentCd": "",
        "level": 1,
        "value1": "디키디키",
        "value2": "",
        "value3": "",
        "value4": "",
        "value5": "",
        "remark": "",
        "periodStartDt": "",
        "periodEndDt": "",
        "dspOrder": 6,
        "delYn": "N",
        "useYn": "N",
        "createNo": 20716,
        "createDt": "2022-05-26 17:05:08.0",
        "updateNo": null,
        "updateDt": "",
        "downCd": [
            {
                "parentCd": null,
                "value5": null,
                "dspOrder": 6,
                "attachGrpCd": null,
                "value2": null,
                "level": 1,
                "value1": "입장권",
                "value4": null,
                "masterVal": "디키디키 키오스크",
                "value3": null,
                "remark": null,
                "updateDt": null,
                "createDt": "2022-05-26T17:05:08.000+09:00",
                "masterCd": "DIK004",
                "delYn": "N",
                "projectCd": "DIKIDIKI",
                "periodStartDt": null,
                "detailCd": "DIK004001",
                "siteId": 1021,
                "langCd": "KR",
                "useYn": "Y",
                "createNo": 20716,
                "periodEndDt": null,
                "updateNo": null
            }
        ]
    }
]

// 위와 같은 데이터에서 detailCd가 input으로 주어졌을때, return으로 option태그목록을 반환하는 함수를 작성하고 싶어.
// ex) getDetailOptionTagList('DIK001') => '<option value="DIK001001">입장권</option>'

function getDetailOptionTagList(detailCd: string): string {
    let optionAllTag = '<option value="">전체</option>';
    if (detailCd === '') {
        return optionAllTag;
    }
    let result = '';
    categoryDetailList.forEach((categoryDetail) => {
        if (categoryDetail.detailCd === detailCd) {
            categoryDetail.downCd.forEach((downCd) => {
                result += `<option value="${downCd.detailCd}">${downCd.value1}</option>`;
            });
        }
    });
    return optionAllTag + result;
}

describe('리스트 만들고 데이터 추출하기.', () => {
    // 개별 테스트 케이스
    test('테스트', () => {
        let result = getDetailOptionTagList('DIK001');
      expect(result).toBe('<option value="">전체</option><option value="DIK001001">입장권</option>');
    });
  
  });