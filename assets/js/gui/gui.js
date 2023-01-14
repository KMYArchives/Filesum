Layout.hash_compare()

window.onload = e => {

	Events.click( el_add_file_btn, e => { OpenFile.open() })
	
	Events.change('select', e => {
		El.value(
			'.hash-input', El.value('select')
		)
	})
	
}