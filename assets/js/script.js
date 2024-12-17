document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".side-nav");
    const sections = document.querySelectorAll("section");

    let scrolling = false; // 부드러운 스크롤 이벤트 플래그

    // 메뉴 아이콘 클릭 시 메뉴 표시/숨김
    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // 메뉴 클릭 시 부드러운 스크롤 및 active 클래스 추가
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            scrolling = true; // 부드러운 스크롤 이벤트 시작
            setTimeout(() => scrolling = false, 1000); // 이벤트 플래그 해제

            // 모든 링크에서 active 클래스 제거
            links.forEach(item => item.classList.remove("active"));

            // 클릭된 링크에 active 클래스 추가
            this.classList.add("active");

            // 대상 섹션으로 부드럽게 스크롤 이동
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });

            // 작은 화면에서 메뉴 닫기
            nav.classList.remove("show");
        });
    });

    // 스크롤 이벤트에 따라 active 클래스 자동 업데이트
    window.addEventListener("scroll", function () {
        if (scrolling) return; // 클릭 이벤트의 부드러운 스크롤 시 무시

        let currentSection = "";

        // 현재 화면에 보이는 섹션 감지
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // 메뉴 높이 고려
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        // active 클래스 업데이트
        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });


    });
});


// 타이핑 효과 적용
var typed = new Typed('.typed', {
    strings: ["SHIN SEUNG-AE.", "a Developer."],
    typeSpeed: 50,        // 타이핑 속도
    startDelay: 1200,     // 시작 전 딜레이
    backSpeed: 20,        // 백스페이스 속도
    backDelay: 500,       // 백스페이스 딜레이
    loop: true,           // 반복 여부
    showCursor: false,    // 커서 표시 여부
    cursorChar: "|",      // 커서 문자
    contentType: 'html'   // 콘텐츠 타입
});
