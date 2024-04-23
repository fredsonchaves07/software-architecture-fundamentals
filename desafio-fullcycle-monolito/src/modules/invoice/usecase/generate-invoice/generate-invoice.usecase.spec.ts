import Address from "../../../@shared/domain/value-object/address"
import InvoiceItems from "../../domain/invoice-items.entity"
import Invoice from "../../domain/invoice.entity"
import GenerateInvoiceUseCase from "./generate-invoice.usecase"



const MockRepository = () => {
  return {

    add: jest.fn(),
    find: jest.fn()
  }
}


describe("Generate invoice use case unit test", () => {

  it("should generate a invoice", async () => {

    const repository = MockRepository()
    const usecase = new GenerateInvoiceUseCase(repository)

    const invoiceItems = []

    const product1 : InvoiceItems = new InvoiceItems({
      name: "Product 1",
      price: 100
    })

    const product2 : InvoiceItems = new InvoiceItems({
      name: "Product 2",
      price: 200
    })

    invoiceItems.push({
      id: product1.id.toString(),
      name: product1.name,
      price: product1.price
    })

    invoiceItems.push({
      id: product2.id.toString(),
      name: product2.name,
      price: product2.price
    })

 
    const input = {
      name: "Lucian",
      document: "1234-5678",
      street: "Rua 123",
      number: "99",
      complement: "Casa Verde",
      city: "Criciúma",
      state: "SC",
      zipCode: "88888-888",
      items: invoiceItems
    }

    const result =  await usecase.execute(input)

    expect(repository.add).toHaveBeenCalled()
    expect(result.name).toEqual(input.name)
    expect(result.document).toEqual(input.document)
    expect(result.street).toEqual(input.street)
    expect(result.number).toEqual(input.number)
    expect(result.complement).toEqual(input.complement)
    expect(result.city).toEqual(input.city)
    expect(result.zipCode).toEqual(input.zipCode)
    expect(result.items.length).toEqual(2)
  })
})