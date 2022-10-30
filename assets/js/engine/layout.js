const Layout = {

	hash_compare () {
		El.empty('.content')
		El.append('.content', `
			<div class="label">Select a hash</div>
			<select class="hash"></select>
	
			<div class="label">Hash</div>
			<input type="text" placeholder="Hash..." class="hash-input" readonly>
	
			<div class="label">Hash to compare</div>
			<input type="text" placeholder="Hash to compare..." class="compare-input">
	
			<button onclick="Hashes.compare()">Compare</button>
			<div class="message">Message</div>
		`)
	},

}