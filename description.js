/*
    데이터 -> (변수)
    / 로직 -> 제어문 -> 반복문
          -> 연산자
    /강한 타입의 언어 (엄격한, Java) ex) 타입을 맞추지 않거나 없으면 에러.
      => 왜 자바는 기본 정수로 int를 쓸까? => 운영체제와 관련 => 32비트와 64비트라는 단위 => 한 번에 처리하는 단위
      => 처리하는 단위가 32비트라면 밑 단위를 쓰는 것이 큰 의미가 없음 => 마치 32인분 밥솥으로 2인분만 짓는 것과 비슷
      => 그럼 왜 타입이 필요했을까? => 옛날에 만들어진 언어는 하드웨어의 제약이 크므로 타입이 필수적 요소
      => 타입은 변수가 처음 선언될 때만 사용. => 타입을 지정한다는 것은 처음 만들어진다는 의미. => 같은 이름으로 타입을 지정해버리면 에러.
      => 변수 앞에 타입을 놓을 때의 뜻 = 새로 메모리 공간 할당, 데이터 종류 명시

    \약한 타입의 언어 (느슨한 언어, JS/Python) : ex) 타입 구분 없음
      => 스크립트 언어는 프로그램 안에서 굴리기 위한 언어 => 자바스크립트는 브라우저에서 쓰는 언어로 만듦 => 지금과 같을 거라 예상 못함
      => 자바 스크립트는 기본적으로 대충 만든 언어에 가깝다. 그래서 변수에 타입 지정할 필요가 없는 것
      => let과 const는 Scope({}(브레이스))를 따지는 타입
      => 브레이스를 벗어나면 변수를 받을 수 없다. 자바스크립트는 범위를 벗어나도 변수를 받는다.
      => 범위를 표현하는 것은 필요하기에 let(가변)과 const(상수)가 쓰임
      => 그러나 대용량 프로그램을 다루기에 문제가 생기므로 이를 보완하기 위해 TypeScript를 사용하는 쪽으로 발전 중.

    ※ 데이터는 간단하지가 않다.
    => 변수라는 것은 원래 데이터를 잡으려고 하는 것. => 데이터가 값 하나로 이루어지는 경우는 거의 없다.
    => ex) 메뉴도 메뉴와 값으로 구성, 핸드폰 번호도 이름과 번호 등으로 구성 => 메타버스할 때 메타 => 데이터를 추가 설명하는 것이 metadata
    => 그래서 데이터를 표현하는데 규격이 필요했던 것. (데이터를 여러 개 묶기 위해서) => 그래서 배열, 구조체, 클래스의 개념을 이용했다.
    => 이름/번호로 구성된 핸드폰을 떠올려 보자.
    => 15명이라면 총 30개의 데이터(이름과 번호)를 만들 것이냐, 이름과 번호를 하나의 묶음으로 만들어서 처리할 것이냐 하는 문제 봉착할 것.
    => 대체로 하나의 묶음으로 만드는 방향으로 추구할 것 => 복잡한 것을 단순하게 만드는 방향으로 해결하려고 하기 때문.
    => 그래서 데이터를 담는 방식이 2가지가 된다. 그래서 기본 자료형과 참조 자료형을 쓴다.
    (=> 초창기의 IT 영웅들은 그 당시의 인프라를 소프트웨어에 반영할 수 밖에 없다는 여담)
    => 대입 연산자는 오른쪽 변수를 로드해서 왼쪽 변수에 세이브한다. (같은 변수이름이라도 가능한 이유)
    => 변수 안에 있는 데이터가 너무 크다면 어떤 문제가 발생할까? => 가져오는 것이 느릴 것이고 메모리도 많이 쓰는 프로그램을 쓰게 되는 것
    => 그래서 직접적으로 데이터를 가져다 쓰는 방법(기본 자료형)과 간접적으로 데이터를 가져다 쓰는 방법(참조 자료형)이 쓰인다.
    => 간접적이라는 뜻은 실제 값은 담지 않고 주소만 기억하는 것 => C에서는 포인터(가리킨다), 자바에서는 레퍼런스(참조)
    => 이러한 상황으로 가비지 컬렉터도 설명이 가능 => 기기의 리모콘이 사라지고, 덜렁 값만 남았다? => 알아서 메모리 회수
    => C언어는 직접 메모리 회수하는 것.

    ※ 프로그램을 짤 때 제일 먼저 하는 것
    => 지금 내게 주어진 데이터가 뭔지를 정확히 파악하라.
    => 옛날 코딩하는 분들은 변수를 쫙 선언한다. => 마치 요리책의 재료 나열하는 것과 비슷
    => 요리라는 행위를 하는 동물은 인간 뿐 => 요리하는 인간이라는 표현을 쓴다.

    ※ 틈틈이 말씀
    오류가 뜨면 오류 수정 필요
    이 일로 먹고 살려면
    PC를 자유롭게 밀고 깔고 개발환경을 마련할 수 있어야 함

    return은 쉽게 말해 그것으로 끝났다는 뜻.
    자바는 증감 연산자를 사용( 파이썬은 쓰지 않음 )

    ※ github 사용 이유
    개발하고 있음을 인증하기 위함.
    그러나 잘하고 있음을 증빙해야 할 필요가 있다. (정제된 좋은 코드)
    올릴 거라면 정리 후 몰아서 올리는 것이 필요하지 않을까?

    과제 1. 웹스톰은 깃허브와 연동하기가 좋다 VCS 항목에서 연동하는 방법 찾고 가보는 게 어떨까?

    ※ 앞에 얘기 이어서 (간접 자료형)

    간접 자료는 변수에서 값을 꺼내면 주소가 튀어나옴
    값을 얻기 위해 점프를 해야하는데 6~7개 언어를 해본 경험으로 . 혹은 []를 이용하는데 배열은 .을 씀.

    배열로 선언한다면 그 자료는 무엇인가? what ? 
    1. 같은 종류(자바)
    2. 동일한 의미의 데이터
    3. 비정형 데이터 - 규칙이 없고 연관성도 없는 자료인데 반복처리가 필요할 때 - ex) 학생별 - 성적
    
    특징 : 각각의 데이터는 의미없는데 모여있을 때는 의미가 생김 - 배열인지 구조체인지 정할 수 있는 기준

                                    배열 비교
                자바                  |               자바스크립트
                길이 고정 (fix)                     길이 가변
                기능 많음                           기능 적음
                여러 종류의 데이터

    자바는 배열의 값을 중간 값을 빼서 배열을 조정하거나 추가로 넣거나 하는 것이 불가능
    자바스크립트는 가능하다 splice를 이용

    ※ 반복문 구분

                for문 (= counted Loop)                  |                while (= uncounted Loop)
                   초기문; 검사식; 변환식                              검사식 => true, false에 따라서 반복 결정
                   카운팅 하고 싶은 만큼 반복                           얼마나 반복할 지 알 수 없을 때 사용
                                                                    while(true) { break } 형식으로 코딩하는 경우 많음

    오늘 진도 총 정리

    배열
    - 배열 생성 방법 / 추가 / 삭제 / 변경

    반복문

    - 배열을 반복해서 출력 하는 거
    - 배열에 로또 처리 1번

    for/while/do ~ while

    while 루프 예제 1~2개 더 만들어보기



    do~while 예제 1~2개 더 만들어보기

    github 연동 (=> 나아가 홈페이지처럼 꾸미기 가능)
    
    webstrom 가지고 프로젝트 만들어서 github 이랑 연동 연습

    ※ 학습 흐름
    변수 -> 제어문 -> 반복문 -> 배열 -> 객체

    const arr= []
    객체 => 보통 자바에서 많이 접하게 됨 => 왜 자바의 배열과 자바스크립트의 배열은 다른가?
    => 객체의 내용이 변하는 애들이 가변 객체 <-> 불변 객체
    => 자바 스크립트의 push 기능은 List의 개념으로 이해할 수 있다.
    => 자바스크립트는 Key => 값으로 되어 있다.

    ※ 배열을 쓰는 이유 다시 Review
    규칙 x, 하나하나는 의미 없고, 반복 처리하고 싶을 때 쓰는 것이 배열

    ※ 면접 문제 팁

    for 문을 while 문으로 바꿔보아라 => 역으로도 가능

    ※ do-while 문
    => 쓰는 시기 => 한번의 실행을 보증하고 싶을 때

    ※ 2차원 배열
    테이블 모양으로 보이지만 리모콘을 가리키는 리모콘의 개념
    키 => 키 => 값
    자바로 예를 들면
    int [][] arr = { {1,2}, {3,4} }
    int [] temp = arr[0]
    배열을 담은 배열이라고 할 수 있다.

    ※ nullpoint exception
    무조건 리모콘 타입에서만 발생
    .이랑 []을 이용해서 점프하지 않는 한 발생하지 않는다

    ※
    데이터 => 여러 데이터 뭉쳐서 하나의 의미 => 엑셀 스럽다
          => 근데 바로 옆에 있어도 대각선이나 세로 데이터는 서로 의미 없음
          => 자바스크립트는 같은 묶음에 여러 타입이 들어갈 수 있지만
          => 자바는 한 배열에 여러 타입이 들어갈 수 없다.
          => 그래서 C언어에서는 구조체, 자바에서는 클래스를 만들어서 해결한다.
    로직   =>

    ※ 객체 리터럴
    xml, JSON 활용
    웹에서 데이터를 받아서 의미 있는 데이터로 만드는 작업 필요
    키값을 이용하면 마음대로 정보를 조작할 수 있다.
    배열은 정보가 흩어지지 않도록 구조화시킨다.

    ※ 자바에서 타입이 무너진다. => 람다식
    => 타입을 지우고 로직을 삽입
    =>

    ※ 과제 1
    영화 데이터배열 [{action:..., kiss:..., category:'A' or 'M'}, ...]
    target = {action:..., kiss:..., category:'A'}, ...
    movies.sort (...)
    3개의 영화 조사 -> A, M
    -> M이 많이나오면 이 영화는 멜로영화/A가 많이 나오면 액션 영화

    ※ 과제 2
    매출 분기 중에 몇 월이 가장 매출이 좋은지 찾기
*/