var serviceX = document.querySelector('input[value="Выберите торговый инструмент"]');

onload = function () {
	//serviceX.focus();
	//serviceX.click();
	
	var gas = document.querySelector('select[class="form-control ng-untouched ng-pristine ng-valid"]');

	/*
	var clickMouse = document.createEvent('MouseEvents');
	clickMouse.initMouseEvent( 'click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
	gas.dispatchEvent(clickMouse);*/

	console.log(location.hostname);
	console.log(document.domain);
}



