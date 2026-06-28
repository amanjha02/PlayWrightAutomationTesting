const user = {
    name: "Pramod",
    age: 43
}
//A method can be declare inside properties it is called method 
const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return n;
    },
    sub(n) {
        this.value -= n;
        return this;
    }
}

console.log(calculator.add(4))