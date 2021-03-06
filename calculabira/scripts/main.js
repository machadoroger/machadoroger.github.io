$(function () {

	$('#filter').keyup(function () {
		var q = this.value.toUpperCase();
		$('#beer-list ul>li').each(function (index) {
			($(this).text().toUpperCase().search(q) == -1) ? $(this).hide() : $(this).show();
		});
	});

	$('#btn-chg-volume').click(function () {
		$('#conversion').hide();
		$('#volume-list').show();
	});

	$('#btn-chg-beer').click(function () {
		$('#beer-name').hide();
		$('#conversion').hide();
		$('#volume-list').hide();
		$('#beer-list').show();
	});

	$('#input-beer, #input-volume').keypress(function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13')
			$(this).closest('.input-group').find('button').click();
	});

	$('#input-beer, #input-volume').keyup(function () {
		if ($(this).val().length > 0)
			$(this).closest('.input-group').removeClass('has-danger');
	});

	$('#btn-add-beer').click(function () {
		if ($('#input-beer').val().length > 0) {
			var beerList = JSON.parse(localStorage.getItem('beerList'));
			beerList.push($('#input-beer').val());
			beerList.sort(function (a, b) {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
			localStorage.setItem('beerList', JSON.stringify(beerList));
			refreshBeerList();
			$('#beer-modal').modal('hide');
		}
		else {
			$('#input-beer').closest('.input-group').addClass('has-danger');
			$('#input-beer').focus();
		}
	});

	$('#btn-add-vol').click(function () {
		if ($('#input-volume').val().length > 0) {
			var volumeList = JSON.parse(localStorage.getItem('volumeList'));
			volumeList.push(parseInt($('#input-volume').val()));
			volumeList.sort(function(a, b){
				return a - b;
			});
			localStorage.setItem('volumeList', JSON.stringify(volumeList));
			refreshVolumeList();
			$('#volume-modal').modal('hide');
		}
		else {
			$('#input-volume').closest('.input-group').addClass('has-danger');
			$('#input-volume').focus();
		}
	});

	$('#volume-modal, #beer-modal').on('shown.bs.modal', function (e) {
		$(this).find('input').focus();
	});

	$('#volume-modal, #beer-modal').on('hidden.bs.modal', function (e) {
		$(this).find('input').val('');
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
		$('#price-1l').text(isNaN(preco_1l) ? 'R$ 0,00' : Number(preco_1l.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

		if ($('#input-price').val().length > 0)
			$('#input-price').closest('.input-group').removeClass('has-danger');
	});

	$('#btn-add-price').click(function () {
		if ($('#input-price').val().length > 0) {
			var priceList = JSON.parse(localStorage.getItem('priceList'));
			priceList.push({
				brand: $('#beer-name>small').text(),
				volume: $('#volume').data('ml'),
				price: $('#input-price').val(),
				priceL: $('#price-1l').data('price')
			});
			localStorage.setItem("priceList", JSON.stringify(priceList));
			$('#input-price').val('');
			refreshPriceList();
		}
		else {
			$('#input-price').closest('.input-group').addClass('has-danger');
			$('#input-price').focus();
		}
	});

	$('#btn-del-beer-list').click(function () {
		if ($(this).find('.material-icons').text() == 'delete') {
			$('.btn-del-beer').show();
			$(this).find('.material-icons').text('check');
		}
		else {
			$('.btn-del-beer').hide();
			$(this).find('.material-icons').text('delete');
		}
	});

	$('#btn-del-volume-list').click(function () {
		if ($(this).find('.material-icons').text() == 'delete') {
			$('.btn-del-volume').show();
			$(this).find('.material-icons').text('check');
		}
		else {
			$('.btn-del-volume').hide();
			$(this).find('.material-icons').text('delete');
		}
	});

	if (!localStorage.getItem('beerList'))
		localStorage.setItem('beerList', JSON.stringify(['Amstel','Bohemia Puro Malte','Brahma Extra Lager','Devassa Puro Malte','Eisenbahn','Heineken','Proibida Puro Malte','Serra Malte','Skol Puro Malte','Stella Artois']));
	if (!localStorage.getItem('volumeList'))
		localStorage.setItem('volumeList', JSON.stringify([300, 330, 355, 473, 500, 600, 1000]));
	if (!localStorage.getItem('priceList'))
		localStorage.setItem('priceList', JSON.stringify([]));

	refreshBeerList();
	refreshVolumeList();
	refreshPriceList();
});

var table = $('#rancking').DataTable({ "dom": '<"top">rt', "oLanguage": { "sZeroRecords": "", "sEmptyTable": "" } });

function refreshBeerList() {

	$('#beer-list ul').empty();

	JSON.parse(localStorage.getItem('beerList')).forEach(beer => {
		$('#beer-list ul').append($('<li>').addClass('list-group-item').data('name', beer).html('<div>'+beer+'</div>').prepend('<button class="btn btn-just-icon btn-link btn-del-beer"><i class="material-icons">delete</i></button>'));
	});

	$('#beer-list ul>li').click(function () {
		$('#beer-name>small').text($(this).data('name'));
		$('#beer-list').hide();
		$('#beer-name').show();
		$('#volume-list').show();
	});

	$('.btn-del-beer').click(function () {
		var btn = $(this);
		var beerList = JSON.parse(localStorage.getItem('beerList'));
		var newBeerList = beerList.filter(function(value, index, arr){ return value != btn.closest('li').data('name'); });

		localStorage.setItem('beerList', JSON.stringify(newBeerList));

		refreshBeerList();
	});

	if ($('#btn-del-beer-list').find('.material-icons').text() == 'delete')
		$('.btn-del-beer').hide();
}

function refreshVolumeList() {

	$('#volume-list ul').empty();

	JSON.parse(localStorage.getItem('volumeList')).forEach(volume => {
		$('#volume-list ul').append($('<li>').addClass('list-group-item').data('ml', volume).text(volume + 'ml').prepend('<button class="btn btn-just-icon btn-link btn-del-volume"><i class="material-icons">delete</i></button>'));
	});

	$('#volume-list ul>li').click(function () {
		$('#volume-list').hide();
		$('#volume').text($(this).data('ml') + 'ml');
		$('#volume').data('ml', $(this).data('ml'));
		$('#input-price').val('');
		$('#price-1l').text('R$ 0,00');
		$('#conversion').show();
		$('#conversion input').focus();
	});

	$('.btn-del-volume').click(function () {
		var btn = $(this);
		var volumeList = JSON.parse(localStorage.getItem('volumeList'));
		var newVolumeList = volumeList.filter(function(value, index, arr){ return value != btn.closest('li').data('ml'); });

		localStorage.setItem('volumeList', JSON.stringify(newVolumeList));

		refreshVolumeList();
	});

	if ($('#btn-del-volume-list').find('.material-icons').text() == 'delete')
		$('.btn-del-volume').hide();
}

function refreshPriceList() {

	table.clear();

	var priceList = JSON.parse(localStorage.getItem('priceList') || '[]');

	priceList.forEach(beer => {
		table.row.add($('<tr>').append('\
			<td class="brand" >' + beer.brand  + '</td>\
			<td class="volume">' + beer.volume + '</td>\
			<td class="price" >' + beer.price  + '</td>\
			<td class="priceL">' + beer.priceL + '</td>\
			<td><button class="btn btn-danger btn-fab btn-fab-mini btn-round btn-del-price"><i class="material-icons">delete</i></button></td>\
		'));
	});

	table.order([[3, 'asc']]).draw();

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
