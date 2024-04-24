import Address from "../../@shared/domain/value-object/address";
import Id from "../../@shared/domain/value-object/id.value-object";
import InvoiceItems from "../domain/invoice-items.entity";
import Invoice from "../domain/invoice.entity"
import InvoiceGateway from "../gateway/invoice.gateway"
import { InvoiceItemModel } from "./invoice.item.model"
import { InvoiceModel } from "./invoice.model"


export default class InvoiceRepository implements InvoiceGateway {

  async add(entity: Invoice): Promise<void> {

    const invoiceItensModel : InvoiceItemModel[] = [];

     entity.items.forEach(async item => {
        invoiceItensModel.push(await InvoiceItemModel.create({
            id: item.id.id,
            name: item.name,
            price: item.price
        }))
    })

    await InvoiceModel.create({
      id: entity.id.id,
      name: entity.name,
      document: entity.document,
      item: invoiceItensModel,
      street: entity.address.street,
      number: entity.address.number,
      complement: entity.address.complement,
      city: entity.address.city,
      state: entity.address.state,
      zipcode: entity.address.zipCode,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    })
  }

  async find(id: string): Promise<Invoice> {

    const invoice = await InvoiceModel.findOne({ where: { id } })

    if (!invoice) {
      throw new Error("Invoice not found")
    }

    const itnvoiceItens : InvoiceItems[] = []

    invoice.items.forEach(item => {
        itnvoiceItens.push(new InvoiceItems({
            id: new Id(item.id),
            name: item.name,
            price: item.price
        }))
    })

    return new Invoice({
      id: new Id(invoice.id),
      name: invoice.name,
      document: invoice.document,
      items: itnvoiceItens,
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