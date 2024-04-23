import Address from "../../../@shared/domain/value-object/address";
import Id from "../../../@shared/domain/value-object/id.value-object";
import InvoiceItems from "../../domain/invoice-items.entity";
import Invoice from "../../domain/invoice.entity";
import InvoiceGateway from "../../gateway/invoice.gateway";
import { GenerateInvoiceUseCaseInputDto, GenerateInvoiceUseCaseOutputDto } from "./generate-invoice.usecase.dto";


export default class GenerateInvoiceUseCase {

  private _invoiceRepository: InvoiceGateway

  constructor(_invoiceRepository: InvoiceGateway) {
    this._invoiceRepository = _invoiceRepository
  }

  async execute(input: GenerateInvoiceUseCaseInputDto): Promise<GenerateInvoiceUseCaseOutputDto> {

    const itemsInvoiceItem : any[] = [];

    input.items.forEach(item => {
        const invoiceItemProps = {
            name: item.name,
            price: item.price
        }
        itemsInvoiceItem.push(new InvoiceItems(invoiceItemProps))
    })

    const props = {
        id: new Id(),
        name: input.name,
        document: input.document,
        address: new Address(
            input.street,
            input.number,
            input.complement,
            input.city,
            input.state,
            input.zipCode,
        ),
        items: itemsInvoiceItem
      }

      const items  : any[] = []

      let total : number = 0;
  
      const invoice = new Invoice(props)
      await this._invoiceRepository.add(invoice)

      invoice.items.forEach(item => {
        items.push({
          id: item.id,
          name: item.name,
          price: item.price
        })
        total += item.price;
    })
  
      return {
        id: invoice.id.toString(),
        name: invoice.name,
        document: invoice.document,
        street: invoice.address.street,
        number: invoice.address.number,
        complement: invoice.address.complement,
        city: invoice.address.city,
        state: invoice.address.state,
        zipCode: invoice.address.zipCode,
        items: items,
        total: total
      }
    }
  }