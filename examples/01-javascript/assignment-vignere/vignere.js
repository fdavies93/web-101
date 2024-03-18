const encipher = (plaintext, key) => {
  plaintext = plaintext.toLowerCase()
  key = key.toLowerCase()
  let key_i = 0
  output = ""
  for (let char of plaintext) { 
    if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97) continue
    shift = key.charCodeAt(key_i) - 97
    normalChar = char.charCodeAt(0) - 97
    
    // this is the only part of the function that differs
    shifted = ((normalChar + shift) % 26) + 97
    output = output + String.fromCharCode(shifted)
    
    
    key_i += 1
    key_i = key_i % key.length
  }

  return output
}

const decipher = (ciphertext, key) => {
  ciphertext = ciphertext.toLowerCase()
  key = key.toLowerCase()
  let key_i = 0
  output = ""
  for (let char of ciphertext) {    
    if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97) continue
    shift = key.charCodeAt(key_i) - 97
    normalChar = char.charCodeAt(0) - 97

    // this is different
    shifted = normalChar - shift
    if (shifted < 0) shifted += 26
    shifted += 97
    
    output = output + String.fromCharCode(shifted)
    key_i += 1
    key_i = key_i % key.length
  }
  return output
}


const main = () => {
  let cipher = encipher("THE bird is singing!!!","apple")
  console.log(cipher)
  let plain = decipher(cipher, "apple")
  console.log(plain)
}

main()
