export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};
// Next.js의 API Routes는 특정 상황에서 유용하지만, 사용이 적합하지 않은 경우도 있습니다. 다음과 같은 경우에는 API Routes 사용을 피하는 것이 좋습니다.

// 1. **복잡한 백엔드 로직**: Next.js API Routes는 주로 간단한 서버리스 함수 호출이나 백엔드 로직을 처리하는 데 적합합니다. 하지만 복잡한 비즈니스 로직이나 여러 마이크로서비스와 상호작용이 필요한 경우, 전용 백엔드 서버나 AWS Lambda 같은 더 강력한 서버리스 솔루션을 사용하는 것이 좋습니다.

// 2. **긴 실행 시간**: 서버리스 함수는 일반적으로 짧은 실행 시간을 요구합니다. Next.js API Routes는 Vercel이나 서버리스 환경에서 실행될 경우, 실행 시간이 제한되기 때문에 장기 실행 작업(예: 대용량 데이터 처리, AI 모델 학습 등)을 수행하기에는 적합하지 않습니다.

// 3. **트래픽이 매우 많은 경우**: API Routes는 서버리스 방식으로 작동하기 때문에 높은 트래픽에 맞춰 스케일링되지만, 사용 빈도가 매우 높은 엔드포인트라면 성능이 문제될 수 있습니다. 이럴 경우에는 더 최적화된 서버나 별도의 백엔드 인프라를 구축하는 것이 좋습니다.

// 4. **전문적인 인증 및 권한 관리가 필요한 경우**: API Routes에서는 기본적인 인증 및 권한 관리를 할 수 있지만, OAuth, JWT 등을 사용하는 복잡한 인증 시스템을 구현하려면 API Routes만으로는 충분하지 않을 수 있습니다. 이럴 때는 전용 인증 서버를 구축하는 것이 더 나을 수 있습니다.

// 5. **데이터베이스 연결이 많은 경우**: API Routes에서 데이터베이스와 자주 상호작용하는 경우, 각 API 호출마다 새로운 데이터베이스 연결을 만드는 서버리스 환경의 특성상 성능 저하가 발생할 수 있습니다. 장기적인 데이터베이스 연결을 유지하는 백엔드 환경이 더 적합할 수 있습니다.

// 이런 상황에서는 API Routes 대신 전통적인 백엔드 서버나 다른 서버리스 옵션을 고려하는 것이 좋습니다.
