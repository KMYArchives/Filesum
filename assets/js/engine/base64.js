const Base64 = {

    encode () {
        El.value('#md4-hash', JSON.parse(Storage.get('md4-hash')).base64)
        El.value('#md5-hash', JSON.parse(Storage.get('md5-hash')).base64)
        El.value('#sha1-hash', JSON.parse(Storage.get('sha1-hash')).base64)
        El.value('#sha224-hash', JSON.parse(Storage.get('sha224-hash')).base64)
        El.value('#sha256-hash', JSON.parse(Storage.get('sha256-hash')).base64)
        El.value('#sha384-hash', JSON.parse(Storage.get('sha384-hash')).base64)
        El.value('#sha512-hash', JSON.parse(Storage.get('sha512-hash')).base64)
    },

    decode () {
        El.value('#md4-hash', JSON.parse(Storage.get('md4-hash')).hex)
        El.value('#md5-hash', JSON.parse(Storage.get('md5-hash')).hex)
        El.value('#sha1-hash', JSON.parse(Storage.get('sha1-hash')).hex)
        El.value('#sha224-hash', JSON.parse(Storage.get('sha224-hash')).hex)
        El.value('#sha256-hash', JSON.parse(Storage.get('sha256-hash')).hex)
        El.value('#sha384-hash', JSON.parse(Storage.get('sha384-hash')).hex)
        El.value('#sha512-hash', JSON.parse(Storage.get('sha512-hash')).hex)
    },

}