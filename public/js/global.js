$(document).ready(() => {
	$('#enableEmail').on('click', () => {
		$('#enableEmail').hide();
		$('#email').html('enrico@sintoni.dev');
		$('#email').prop('href', 'mailto:enrico@sintoni.dev');
		$('#email').prop('target', '_blank');

	});
	$('#year').html(new Date().getFullYear());
});