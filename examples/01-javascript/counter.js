const counter = {
    value: 0,
    reset: function () {
        this.value = 0
    },
    increment: function () {
        this.value += 1 
    },
}

console.log(counter.value)
counter.increment()
counter.increment()
console.log(counter.value)
counter.reset()
console.log(counter.value)
