$(function() {
	var elements = ['presetSelector', 'richToggle', 'harpoonCountSelector', 'jumpSelector']

	elements.forEach(function(item) {
		var elem = document.getElementById(item)
		elem.value = localStorage.getItem(item) || elem.options[0].value
		elem.onchange = function () {
			localStorage.setItem(item, elem.value)
		}
	})
})
