const app = "I don't do much."

function destructivelyAppendKitten(name) {
 kittens.push(name)
 return kittens
 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}


function removeLastKitten () {
<<<<<<< HEAD
return kittens.slice(0, -1)

}

function removeFirstKitten() {
return kittens.slice(1)
}

=======
kittens=kittens.slice(-3)
return kittens

}
>>>>>>> 2e1873bb8ed9e2aed6ea95069f2f165afa88c975
