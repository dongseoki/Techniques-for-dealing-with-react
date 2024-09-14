# 요걸 어떻게 설정했나?

```sh
mkdir jest_tutorial
cd jest_tutorial
npm init
npm install --save-dev jest typescript
npm i -D ts-jest @types/jest
npx ts-jest config:init
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx install-peerdeps --dev eslint-config-airbnb



# 무슨 설정 제거
# __test__
```

# 참고 사항

- tslint는 deprecated 되었음.

```sh
npm i -D tslint
npm i -D   typescript-tslint-plugin
```

# 타입스크립트 테스트 코드

- https://jestjs.io/docs/configuration
- https://mong-blog.tistory.com/entry/jest%EB%A1%9C-typescript-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0-1%EA%B8%B0%EB%B3%B8%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
- https://medium.com/nerd-for-tech/testing-typescript-with-jest-290eaee9479d
- https://velog.io/@xortm854/Typescript-React-Eslint-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95-2%ED%8E%B8-ESLint-Prettier-%EC%84%A4%EC%A0%95
  - 여기서 prettier설정만 빼고 작업을 진행했다.
