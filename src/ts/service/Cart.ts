import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
      this._items.push(item);
    }

    get items(): Buyable[] {
      return [...this._items];
    }

    getFullPrice(): number {
      let price = 0;
      for (const item of this._items) {
        price += item.price;
      }
      return price;
    }

    getDiscountedPrice(discount: number): number {
      return this.getFullPrice() * (1 - (discount / 100));
    }

    remove(id: number): void {
      for (const item of this._items) {
        if (item.id === id) {
          this._items.splice(this._items.indexOf(item), 1);
        }
      }
    }
}
