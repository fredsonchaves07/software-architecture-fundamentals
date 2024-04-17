import Address from "../../../@shared/domain/value-object/address"
import InvoiceItems from "../../domain/invoice-items.entity"
import Invoice from "../../domain/invoice.entity"

const invoice = new Invoice({
  name: "Lucian",
  document: "1234-5678",
  address: new Address(
    "Rua 123",
    "99",
    "Casa Verde",
    "Criciúma",
    "SC",
    "88888-888",
  ),
  items: [
    new InvoiceItems({
        name: "Product 1",
        price: 100
    }),
    new InvoiceItems({
        name: "Product 2",
        price: 200
    })
  ]
})

const MockRepository = () => {

  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(invoice))
  }
}

describe("Find Invoice use case unit test", () => {

  it("should find a invoice", async () => {

    const repository = MockRepository()
    const usecase = new FindInvoiceUseCase(repository)

    const input = {
      id: "1"
    }

    const result = await usecase.execute(input)

    expect(repository.find).toHaveBeenCalled()
    expect(result.id).toEqual(input.id)
    expect(result.name).toEqual(invoice.name)
    expect(result.address).toEqual(invoice.address)
    expect(result.document).toEqual(invoice.document)
    expect(result.items).toEqual(invoice.items)
    expect(result.createdAt).toEqual(invoice.createdAt)
    expect(result.updatedAt).toEqual(invoice.updatedAt)
  })
})