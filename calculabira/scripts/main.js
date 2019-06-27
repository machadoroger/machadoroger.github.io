$(function () {

	$('#filter').keyup(function () {
		var q = this.value.toUpperCase();
		$('#beer-list ul>li').each(function (index) {
			($(this).text().toUpperCase().search(q) == -1) ? $(this).hide() : $(this).show();
		});
	});

	$('#clear').click(function () {
		$('#filter').val('');
		$('#filter').keyup();
		$('#beer-list').show();
		$('#volume-list').hide();
		$('#conversion').hide();
		$('#input-price').val('');
		$('#price-1l').text('0.00');
	});

	$('#beer-list ul>li').click(function () {
		$('#brand>small').text($(this).text());
		$('#beer-list').hide();
		$('#brand').show();
		$('#volume-list').show();
	});

	$('#btn-chg-volume').click(function () {
		$('#conversion').hide();
		$('#volume-list').show();
	});

	$('#btn-chg-brand').click(function () {
		$('#brand').hide();
		$('#conversion').hide();
		$('#volume-list').hide();
		$('#beer-list').show();
	});

	$('#input-price').keypress(function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13')
			$("#btn-add-price").click();
	});

	$('#input-price').keyup(function () {

		var preco = parseFloat(this.value.replace(/\./g, '').replace(/\,/g, '.'));
		var ml = parseFloat($('#volume').data('ml'));
		var preco_1l = (preco / ml) * 1000;

		$('#price-1l').data('price', preco_1l.toFixed(2).replace('.', ','));
		$('#price-1l').text(isNaN(preco_1l) ? '' : Number(preco_1l.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

		if ($('#price').val().length > 0)
			$('#price').removeClass('is-invalid');
	});

	$('#btn-add-price').click(function () {
		if ($('#price').val().length > 0) {
			$('#rancking').DataTable().row.add($('<tr>').append('\
				<td><a class="btn-floating btn-sm btn-danger btn-del-price"><i class="fas fa-trash"></i></a></td>\
				<td class="brand" >'+ $('#brand>small').text() + '</td>\
				<td class="volume">'+ $('#volume').data('ml') + '</td>\
				<td class="price" >'+ $('#price').val() + '</td>\
				<td class="priceL">'+ $('#price-1l').data('price') + '</td>\
			')).order([[4, 'asc']]).draw();

			$('.btn-del-price').click(function () {
				$('#rancking').DataTable().row($(this).parents('tr')).remove().draw();
				refreshLocalStorage();
			});

			$('#price').val('');

			refreshLocalStorage();
		}
		else {
			$('#price').addClass('is-invalid');
			$('#price').focus();
		}
	});

	$('#btn-add-vol').click(function () {
		var volumeList = JSON.parse(localStorage.getItem('volumeList'));
		volumeList.push(parseInt($('#input-vol').val()));
		volumeList.sort(function(a, b){return a - b});
		localStorage.setItem('volumeList', JSON.stringify(volumeList));
		refreshVolumeList();
		$('#myModal').modal('hide');
	});

	$('#myModal').on('shown.bs.modal', function (e) {
		$('#input-vol').focus();
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		$('#input-vol').val('');
	});

	$('#input-vol').keypress(function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13')
			$('#btn-add-vol').click();
	});

	refreshVolumeList();
	refreshTable();
});

function refreshLocalStorage() {

	var beerList = [];

	$("table>tbody>tr").each(function (index) {
		if ($(this).find('.brand').length > 0) {
			beerList.push({
				brand: $(this).find('.brand').text(),
				volume: $(this).find('.volume').text(),
				price: $(this).find('.price').text(),
				priceL: $(this).find('.priceL').text()
			});
		}
	});

	localStorage.setItem("beerList", JSON.stringify(beerList));
}

function refreshTable() {

	var table = $('#rancking').DataTable({ "dom": '<"top">rt', "oLanguage": { "sZeroRecords": "", "sEmptyTable": "" } });
	var beerList = JSON.parse(localStorage.getItem('beerList') || '[]');

	beerList.forEach(beer => {
		table.row.add($('<tr>').append('\
			<td><a class="btn-floating btn-sm btn-danger btn-del-price"><i class="fas fa-trash"></i></a></td>\
			<td class="brand" >' + beer.brand  + '</td>\
			<td class="volume">' + beer.volume + '</td>\
			<td class="price" >' + beer.price  + '</td>\
			<td class="priceL">' + beer.priceL + '</td>\
		'));
	});

	table.order([[4, 'asc']]).draw();

	$('.btn-del-price').click(function () {
		table.row($(this).parents('tr')).remove().draw();
		refreshLocalStorage();
	});
}

function refreshVolumeList() {

	var defaultVolumeList = [300, 330, 355, 473, 500, 600, 1000];
	var volumeList = JSON.parse(localStorage.getItem('volumeList') || JSON.stringify(defaultVolumeList));

	$('#volume-list ul').empty();

	volumeList.forEach(volume => {
		$('#volume-list ul').append($('<li>').addClass('list-group-item').data('ml', volume).text(volume + 'ml').prepend('<a class="btn-floating btn-sm btn-danger btn-del-vol"><i class="fas fa-trash"></i></a>'));
	});

	$('#volume-list ul>li').click(function () {
		$('#beer-list').hide();
		$('#volume-list').hide();
		$('#volume').text($(this).text());
		$('#volume').data('ml', $(this).data('ml'));
		$('#input-price').val('');
		$('#price-1l').text('0.00');
		$('#conversion').show();
		$('#conversion input').focus();
	});

	$('.btn-del-vol').click(function () {
		var btn = $(this);
		var volumeList = JSON.parse(localStorage.getItem('volumeList'));
		var newVolumeList = volumeList.filter(function(value, index, arr){ return value != btn.closest('li').data('ml'); });

		localStorage.setItem('volumeList', JSON.stringify(newVolumeList));

		refreshVolumeList();
	});
}