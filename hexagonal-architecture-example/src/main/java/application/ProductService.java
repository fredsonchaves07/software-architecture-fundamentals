package application;

public interface ProductService {

    Product get(String id);

    Product create(String name, double price);

    Product enable(Product product);

    Product disable(Product product);
}