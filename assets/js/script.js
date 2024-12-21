// GSAP 애니메이션 타임라인
gsap.timeline()
    .to(".background-text", {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out"
    }) // 배경 텍스트 확대 효과
    .to(".main-text", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out"
    }, "-=1"); // 메인 텍스트 페이드 인 + 위로 이동

