// 박스 2개 만들기
// 드랍다운 리스트 만들기
// 환율정보 들고오기
// 드랍다운 리스트에서 아이템 선택하면 아이템 바뀜
// 금액을 입력하면 환전이 된다.
// 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨

// 숫자를 한국어로 읽는 법
// 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다.

let currencyRatio = {
    USD: {
      KRW: 1247.44,
      USD: 1,
      VND: 23440.0,
      unit: "달러",
    },
    KRW: {
      KRW: 1,
      USD: 0.001,
      VND: 19.021,
      unit: "원",
    },
    VND: {
      KRW: 0.053261127,
      USD: 0.000042683191,
      VND: 1,
      unit: "동",
    },
  };

  let nowcurrency = {
    KRW: "원",
    USD: "달러",
    VND: "동",
  }

  // 1. console.log(currencyRatio.VND.unit);
  
  // console.log(currencyRatio["VND"]["unit"]);
  // = console.log(currencyRatio["VND"].unit );
  let fromCurrency = "USD";
  let toCurrency = "USD";
  
  document.querySelectorAll("#from-currency-list a").forEach((menu) =>
    menu.addEventListener("click", function () {
      //1. 버튼을 가져온다
      //2. 버튼에 값을 바꾼다
      document.getElementById("from-button").textContent = this.textContent;

      //3. 선택된 currency값을 변수에 저장해준다.
      fromCurrency = this.textContent;
      // console.log("fromcurrey는", fromCurrency);
      // 2번 과제 !!
      document.getElementById("from-money").textContent = nowcurrency[fromCurrency];

      convert();
    })
  );
  
  document.querySelectorAll("#to-currency-list a").forEach((menu) =>
    menu.addEventListener("click", function () {
      document.getElementById("to-button").textContent = this.textContent;
      toCurrency = this.textContent;


      document.getElementById("to-money").textContent = nowcurrency[toCurrency];

      convertreverse();
    })
  );
  
  //1. 키를 입력하는 순간
  //2. 환전이 되서
  //3. 환전된 값이 보인다.
  
  function convert() {
    // 1. 환전
    // 얼마를 환전? 가지고 있는 돈이 얼마인지, 바꾸고자하는 돈이 뭔지
    // 돈 * 환율 = 환전금액
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log("환전 결과!", convertedAmount);
  
    document.getElementById("to-input").value = convertedAmount;
  }
  
  function convertreverse() {
      let amounts = document.getElementById("to-input").value;
      let convertedAmounts = amounts * currencyRatio[toCurrency][fromCurrency];
  
      document.getElementById("from-input").value = convertedAmounts;
  }
  
  //1. 드랍다운 리스트에 값이 바뀔때마다
  //2. 환전을 다시한다.
  