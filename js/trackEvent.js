function trackEvent() {
    let trackId = document.getElementById('trackId');
    let stdEvent = document.getElementById('stdEvent');

    let buttonSubmit = document.getElementById('submit');

    if(stdEvent.value == 'select') {
        event.preventDefault();
        alert('표준이벤트를 선택하세요.');
    }
    else {
        if(!trackId.value){
            event.preventDefault();
            alert('트랙 ID를 입력하세요.');
        }
        else{
            let standard = stdEvent.value;
            event.preventDefault();
            console.log("트랙 ID: " + trackId.value);
            console.log("표준이벤트: " + stdEvent.value);
            
            if(stdEvent.value == "search"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).search();

            }
            else if(stdEvent.value == "completeRegistration"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).completeRegistration();
            }
            else if(stdEvent.value == "addToCart"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).addToCart();
            }
            else if(stdEvent.value == "addToWishList"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).addToWishList();
            }
            else if(stdEvent.value == "participation"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).participation();
            }

            else {
                kakaoPixel(trackId.value).pageView();
                document.getElementById('sub_result').innerText = stdEvent.value + " 이벤트를 생성할 수 없습니다.";
            }

            const r = " 완료";
            document.getElementById('result').innerText = stdEvent.value + r;
        }
    }
};

