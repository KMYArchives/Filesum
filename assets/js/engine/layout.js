const Layout = {

	hash_compare () {
		El.empty('.content')
		El.append('.content', `
			<div class="label">Select a hash:</div>
			<select class="hash">
				<option value="">Select a hash</option>
			</select>
	
			<div class="label">
				Hash:
				<div class="fas fa-copy" onclick="CMD.copy()"></div>
			</div>

			<input type="text" placeholder="Hash file" class="hash-input" readonly>
	
			<div class="label">Hash to compare:</div>
			<input type="text" placeholder="Hash to compare" class="compare-input">
	
			<button onclick="CMD.compare()">Compare hash</button>
			<button onclick="VirusTotal.scan()">Scan hash</button>
			<div class="message"></div>
		`)
	},

}