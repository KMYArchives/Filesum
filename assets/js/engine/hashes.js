const Hashes = {

	core (path, algo) {
		return new Promise(function (resolve, reject) {
			const hash = crypt.createHash(algo)
			const input = fs.createReadStream(
				JSON.parse(
					Storage.get('current-file')
				).path
			)
		
			input.on('error', reject)
		
			input.on('data', function (chunk) {
				hash.update(chunk);
			})
		
			input.on('close', function () {
				resolve(hash.digest('hex'))
			})
		})
	},

	md4 (file) {
		Hashes.core(
			file.path, 'md4'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					MD 4
				</option>
			`)
		})
	},

	md5 (file) {
		Hashes.core(
			file.path, 'md5'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					MD 5
				</option>
			`)
		})
	},

	sha1 (file) {
		Hashes.core(
			file.path, 'sha1'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					SHA 1
				</option>
			`)
		})
	},

	sha224 (file) {
		Hashes.core(
			file.path, 'sha224'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					SHA 224
				</option>
			`)
		})
	},

	sha256 (file) {
		Hashes.core(
			file.path, 'sha256'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					SHA 256
				</option>
			`)
		})
	},

	sha384 (file) {
		Hashes.core(
			file.path, 'sha384'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					SHA 384
				</option>
			`)
		})
	},

	sha512 (file) {
		Hashes.core(
			file.path, 'sha512'
		).then( hash => {
			El.append('.hash', `
				<option value='${ hash }'>
					SHA 512
				</option>
			`)
		})
	},

	all_basic_hashes (file) {
		this.md4(file)
		this.md5(file)
		this.sha1(file)
		this.sha224(file)
		this.sha256(file)
		this.sha384(file)
		this.sha512(file)
	},

}