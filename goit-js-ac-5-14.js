// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
