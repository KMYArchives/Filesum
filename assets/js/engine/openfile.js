const OpenFile = {

	open () {
		El.empty('select')
		El.empty('#filename')
		El.value('.hash-input', '')

		El.append('select', `
			<option value=''>
				Select a hash
			</option>
		`)

		selectFiles().then(files => {
			_.forEach(files, file => {
				Storage.set('current-file', JSON.stringify({
					name: file.name,
					path: file.path,
					type: file.type,
					size: file.size,
					lastModified: file.lastModifiedDate,
				}))

				Hashes.all_basic_hashes(file)
				El.text('#filename', Str.cut(file.name, 30))
				Attr.set('#filename', 'title', `${ file.name } (${ Format.bytes(file.size) })`)
			})
		})
	},

	name () {
		return JSON.parse(
			Storage.get('current-file')
		).name
	}

}