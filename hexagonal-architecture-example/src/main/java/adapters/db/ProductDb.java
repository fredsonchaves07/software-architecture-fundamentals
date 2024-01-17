package adapters.db;

import application.Product;
import application.ProductPersistence;

import java.util.ArrayList;
import java.util.List;

public class ProductDb implements ProductPersistence {

    private List<Product> products = new ArrayList<>();

    @Override
    public Product get(String id) {
        return products.stream().filter(product -> product.getId().equals(id)).findFirst().orElseThrow();
    }

    @Override
    public Product save(Product product) {
        products.add(product);
        return products.stream().filter(productDb -> productDb.equals(product)).findFirst().orElseThrow();
    }
}