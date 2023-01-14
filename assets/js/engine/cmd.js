const CMD = {

    copy () {
        El.select('.hash-input')
        document.execCommand('copy')
    },

	compare () {
		if (El.value('.hash-input') != "" && El.value('.compare-input') != "") {
			El.show('.message')

			if (El.value('.hash-input') == El.value('.compare-input')) {
				El.text('.message', 'The hashes are matched')
			} else {
				El.text('.message', 'The hashes are not matched')
			}
		}
	},

}