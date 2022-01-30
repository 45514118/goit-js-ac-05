// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price.
// Деструктуризируй объект в сигнатуре(подписи) конструктора.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
