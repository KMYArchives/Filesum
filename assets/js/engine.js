"use strict";var CMD={copy:function(){El.select(".hash-input"),document.execCommand("copy")},compare:function(){""!=El.value(".hash-input")&&""!=El.value(".compare-input")&&(El.show(".message"),El.value(".hash-input")==El.value(".compare-input")?El.text(".message","The hashes are matched"):El.text(".message","The hashes are not matched"))}},Hashes={core:function(t,o){return new Promise(function(t,n){var e=crypt.createHash(o),a=fs.createReadStream(JSON.parse(Storage.get("current-file")).path);a.on("error",n),a.on("data",function(t){e.update(t)}),a.on("close",function(){t(e.digest("hex"))})})},md4:function(t){Hashes.core(t.path,"md4").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tMD 4\n\t\t\t\t</option>\n\t\t\t"))})},md5:function(t){Hashes.core(t.path,"md5").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tMD 5\n\t\t\t\t</option>\n\t\t\t"))})},sha1:function(t){Hashes.core(t.path,"sha1").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tSHA 1\n\t\t\t\t</option>\n\t\t\t"))})},sha224:function(t){Hashes.core(t.path,"sha224").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tSHA 224\n\t\t\t\t</option>\n\t\t\t"))})},sha256:function(t){Hashes.core(t.path,"sha256").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tSHA 256\n\t\t\t\t</option>\n\t\t\t"))})},sha384:function(t){Hashes.core(t.path,"sha384").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tSHA 384\n\t\t\t\t</option>\n\t\t\t"))})},sha512:function(t){Hashes.core(t.path,"sha512").then(function(t){El.append(".hash","\n\t\t\t\t<option value='".concat(t,"'>\n\t\t\t\t\tSHA 512\n\t\t\t\t</option>\n\t\t\t"))})},all_basic_hashes:function(t){this.md4(t),this.md5(t),this.sha1(t),this.sha224(t),this.sha256(t),this.sha384(t),this.sha512(t)}},Layout={hash_compare:function(){El.empty(".content"),El.append(".content",'\n\t\t\t<div class="label">Select a hash:</div>\n\t\t\t<select class="hash">\n\t\t\t\t<option value="">Select a hash</option>\n\t\t\t</select>\n\t\n\t\t\t<div class="label">\n\t\t\t\tHash:\n\t\t\t\t<div class="fas fa-copy" onclick="CMD.copy()"></div>\n\t\t\t</div>\n\n\t\t\t<input type="text" placeholder="Hash file" class="hash-input" readonly>\n\t\n\t\t\t<div class="label">Hash to compare:</div>\n\t\t\t<input type="text" placeholder="Hash to compare" class="compare-input">\n\t\n\t\t\t<button onclick="CMD.compare()">Compare hash</button>\n\t\t\t<button onclick="VirusTotal.scan()">Scan hash</button>\n\t\t\t<div class="message"></div>\n\t\t')}},OpenFile={open:function(){El.empty("select"),El.empty("#filename"),El.value(".hash-input",""),El.append("select","\n\t\t\t<option value=''>\n\t\t\t\tSelect a hash\n\t\t\t</option>\n\t\t"),selectFiles().then(function(t){_.forEach(t,function(t){Storage.set("current-file",JSON.stringify({name:t.name,path:t.path,type:t.type,size:t.size,lastModified:t.lastModifiedDate})),Hashes.all_basic_hashes(t),Attr.set("#filename","title","".concat(t.path)),El.text("#filename","".concat(Str.cut(t.name,50)," (").concat(Format.bytes(t.size),")"))})})},name:function(){return JSON.parse(Storage.get("current-file")).name}};