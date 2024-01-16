import application.Product;
import application.ProductPersistence;
import application.ProductService;

import java.util.Objects;

public class ProductServiceImpl implements ProductService {

    private final ProductPersistence persistence;

    public ProductServiceImpl(ProductPersistence persistence) {
        this.persistence = Objects.requireNonNull(persistence);
    }

    @Override
    public Product get(String id) {
        return persistence.get(id);
    }

    @Override
    public Product create(String name, double price) {
        return persistence.save(Product.newProduct(name, price));
    }

    @Override
    public Product enable(Product product) {
        product.enable();
        return persistence.save(product);
    }

    @Override
    public Product disable(Product product) {
        product.disable();
        return persistence.save(product);
    }
}
