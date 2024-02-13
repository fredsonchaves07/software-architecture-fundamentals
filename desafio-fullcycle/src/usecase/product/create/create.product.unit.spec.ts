import CreateProductUseCase from "./create.product.usecase";

const input = {
    name: "Product A",
    type: "a",
    price: 1
  };

const MockRepository = () => {
    return {
      find: jest.fn(),
      findAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    };
};

describe("Unit test create product use case", () => {
    it("should create a product", async() => {
        const productRepository = MockRepository();
        const createProductUseCase = new CreateProductUseCase(productRepository);
    
        const output = await createProductUseCase.execute(input);
    
        expect(output).toEqual({
          id: expect.any(String),
          name: input.name,
          price:input.price
        })
    })
})