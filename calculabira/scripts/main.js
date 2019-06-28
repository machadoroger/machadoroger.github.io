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
			$('#btn-add-price').click();
	});

	$('#input-price').keyup(function () {

		var preco = parseFloat(this.value.replace(/\./g, '').replace(/\,/g, '.'));
		var ml = parseFloat($('#volume').data('ml'));
		var preco_1l = (preco / ml) * 1000;

		$('#price-1l').data('price', preco_1l.toFixed(2).replace('.', ','));
		$('#price-1l').text(isNaN(preco_1l) ? '' : Number(preco_1l.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

		if ($('#input-price').val().length > 0)
			$('#input-price').removeClass('is-invalid');
	});

	$('#btn-add-price').click(function () {
		if ($('#input-price').val().length > 0) {
			var priceList = JSON.parse(localStorage.getItem('priceList'));
			priceList.push({
				brand: $('#brand>small').text(),
				volume: $('#volume').data('ml'),
				price: $('#input-price').val(),
				priceL: $('#price-1l').data('price')
			});
			localStorage.setItem("priceList", JSON.stringify(priceList));
			$('#input-price').val('');
			refreshPriceList();
		}
		else {
			$('#input-price').addClass('is-invalid');
			$('#input-price').focus();
		}
	});

	$('#btn-add-vol').click(function () {
		if ($('#input-vol').val().length > 0) {
			var volumeList = JSON.parse(localStorage.getItem('volumeList'));
			volumeList.push(parseInt($('#input-vol').val()));
			volumeList.sort(function(a, b){return a - b});
			localStorage.setItem('volumeList', JSON.stringify(volumeList));
			refreshVolumeList();
			$('#myModal').modal('hide');
		}
		else {
			$('#input-vol').addClass('is-invalid');
			$('#input-vol').focus();
		}
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

	if (!localStorage.getItem('volumeList')) localStorage.setItem('volumeList', JSON.stringify([300, 330, 355, 473, 500, 600, 1000]));
	if (!localStorage.getItem('priceList')) localStorage.setItem('priceList', JSON.stringify([]));

	refreshVolumeList();
	refreshPriceList();
});

var table = $('#rancking').DataTable({ "dom": '<"top">rt', "oLanguage": { "sZeroRecords": "", "sEmptyTable": "" } });

function refreshVolumeList() {

	$('#volume-list ul').empty();

	JSON.parse(localStorage.getItem('volumeList')).forEach(volume => {
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

function refreshPriceList() {

	var priceList = JSON.parse(localStorage.getItem('priceList') || '[]');

	priceList.forEach(beer => {
		table.row.add($('<tr>').append('\
			<td class="brand" >' + beer.brand  + '</td>\
			<td class="volume">' + beer.volume + '</td>\
			<td class="price" >' + beer.price  + '</td>\
			<td class="priceL">' + beer.priceL + '</td>\
			<td><a class="btn-floating btn-sm btn-danger btn-del-price"><i class="fas fa-trash"></i></a></td>\
		'));
	});

	table.order([[4, 'asc']]).draw();

	$('.btn-del-price').click(function () {

		table.row($(this).parents('tr')).remove().draw();
		
		var priceList = [];

		$("table>tbody>tr").each(function (index) {
			if ($(this).find('.brand').length > 0) {
				priceList.push({
					brand: $(this).find('.brand').text(),
					volume: $(this).find('.volume').text(),
					price: $(this).find('.price').text(),
					priceL: $(this).find('.priceL').text()
				});
			}
		});

		localStorage.setItem("priceList", JSON.stringify(priceList));
	});
}
