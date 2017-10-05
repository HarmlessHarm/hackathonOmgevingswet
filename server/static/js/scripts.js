$(document).ready(function() {
	$('#satelite-swap').click(function() {
		if($('#satelite').hasClass('hidden')){
			$('#satelite').removeClass('hidden')
		} else {
			$('#satelite').addClass('zoomed')
		}
	})


	$('#possibilities-wrapper .option').click(function() {
		console.log('toggle')
		if( $(this).hasClass('collapsed')) {
			$('#possibilities-wrapper .option').addClass('collapsed')
			$(this).removeClass('collapsed')
		} else {
			$(this).addClass('collapsed')
		}
	})

	$('#possibilities-wrapper .checkbox input').change(function() {
		var checked = (document.querySelectorAll('input[type="checkbox"]:checked').length);
		var perc = checked * 20;
		$('#bar').css('width', parseInt(perc) + '%')
	})

	$('#possibilities-wrapper .checkbox').click(function() {
		
	})

	$('#positive').click(function() {
		var val = $('#positive .counter').text()
		var newval = parseInt(val) + 1;
		$('#positive .counter').text(newval)
		$('#replies .bar').css('width', parseInt(newval) + '%')
		$('.bartext .nr').text(parseInt(newval))
	})

	$('#negative').click(function() {
		var val = $('#negative .counter').text()
		$('#negative .counter').text(parseInt(val) + 1)
	})
})