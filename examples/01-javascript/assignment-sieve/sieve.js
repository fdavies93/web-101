function sieve(n) {
  let currentList = [];
  for (let i = 2; i <= n; i++) currentList.push(i)

  let i = 0
  let num;
  // we know it will never remove something earlier in the list
  // therefore it's safe to use currentList[i]
  while (i < currentList.length) {
    num = currentList[i]
    currentList = currentList.filter( (el) => (el == num || (el % num) != 0))
    i++
  }
  return currentList
}

const primes = sieve(120)

console.log(primes)
