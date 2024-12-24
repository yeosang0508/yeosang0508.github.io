document.addEventListener("DOMContentLoaded", () => {
    // 새로고침 시 기본 섹션(section1)으로 이동
    const targetId = "section1";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }

});

/// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
    // 스크롤 위치가 100px 이상일 때 버튼 보이기
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById('btn-back-to-top').style.display = 'block';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
});

// 클릭 시 #section1으로 부드럽게 이동
function backToSection1() {
    const section1 = document.getElementById('section1');
    if (section1) {
        section1.scrollIntoView({ behavior: 'smooth' });
    }
}

