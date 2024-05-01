import Address from "../../@shared/domain/value-object/address";
import Id from "../../@shared/domain/value-object/id.value-object";
import Product from "../../product-adm/domain/product.entity";
import InvoiceItems from "../domain/invoice-items.entity";
import Invoice from "../domain/invoice.entity"
import InvoiceGateway from "../gateway/invoice.gateway"
import InvoiceItemModel from "./invoice.item.model";

import { InvoiceModel } from "./invoice.model"


export default class InvoiceRepository implements InvoiceGateway {

  async add(entity: Invoice): Promise<void> {

    await InvoiceModel.create({
      id: entity.id.id,
      name: entity.name,
      document: entity.document,
      items: entity.items.map((item) => ({
        id: item.id.id,
        name: item.name,
        price: item.price
      })),
      street: entity.address.street,
      number: entity.address.number,
      complement: entity.address.complement,
      city: entity.address.city,
      state: entity.address.state,
      zipcode: entity.address.zipCode,
      total: entity.total,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }, {
      include: [InvoiceItemModel]
    })
  }

  async find(id: string): Promise<Invoice> {

    const invoice = await InvoiceModel.findOne({ where: { id }, include: [InvoiceItemModel]});

    if (!invoice) {
      throw new Error("Invoice not found")
    }

    return new Invoice({
      id: new Id(invoice.id),
      name: invoice.name,
      document: invoice.document,
      items: invoice.items.map((item) => new InvoiceItems({
        id: new Id(item.id.toString()),
        name: item.name,
        price: item.price,
    })),
      address: new Address(
        invoice.street,
        invoice.number,
        invoice.complement,
        invoice.city,
        invoice.state,
        invoice.zipcode,
      ),
      createdAt: invoice.createdAt,
      updatedAt: invoice.updatedAt
    })
  }
}