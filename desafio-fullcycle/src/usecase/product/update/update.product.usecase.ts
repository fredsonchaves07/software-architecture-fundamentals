import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import { InputUpdateProductDto, OutputUpdateProductDto } from "./update.product.dto";

export default class UpdateProductUseCase {
  private productRepositry: ProductRepository;
  constructor(productRepositry: ProductRepository) {
    this.productRepositry = productRepositry;
  }

  async execute(
    input: InputUpdateProductDto
  ): Promise<OutputUpdateProductDto> {
    const product = await this.productRepositry.find(input.id);
    product.changeName(input.name);
    product.changePrice(input.price)
    
    await this.productRepositry.update(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price
    };
  }
}
