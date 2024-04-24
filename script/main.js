let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	//e쓰는거 빠뜨리지 마세요

	e.preventDefault();
	// 가지고 있는 이벤트를 멈춰달라./ a태그가 가지고 있는 속성을 끊어달라.
	btnCall.classList.toggle('on');
	// 토글 안되면 add, remove 씀.
	menuMo.classList.toggle('on');
});
