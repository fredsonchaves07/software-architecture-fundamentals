import ProductValidatorFactory from "../factory/product.validator.factory";
import ProductInterface from "./product.interface";
import NotificationError from "../../@shared/notification/notification.error";
import Entity from "../../@shared/entity/entity.abstract";
import Notification from "../../@shared/notification/notification";

export default class Product extends Entity implements ProductInterface {
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    super();
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }
  public notification: Notification;

  get id(): string {
    return this._id;
  }
  
  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }

  validate() {
    return ProductValidatorFactory.create().validate(this)
  }
}