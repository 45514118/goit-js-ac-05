// Выполни рефакторинг класса Car.
// Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice.
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE >= newPrice) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
