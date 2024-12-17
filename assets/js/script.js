document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".side-nav");
    const sections = document.querySelectorAll("section");

    // 메뉴 아이콘 클릭 시 메뉴 표시/숨김
    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // 메뉴 클릭 시 부드러운 스크롤 및 active 클래스 추가
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });

            nav.classList.remove("show");
        });
    });

    // IntersectionObserver를 사용한 섹션 감지
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target.getAttribute("id");
                links.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === currentSection) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {threshold: 0.6}); // 섹션이 60% 이상 보일 때 감지

    // 각 섹션을 감시하도록 설정
    sections.forEach(section => observer.observe(section));
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
