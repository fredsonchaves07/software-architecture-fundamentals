package application;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ProductTest {

    @Test
    public void testProductEnable() {
        Product product = Product.newProduct("Hello", 10.0, ProductInterface.DISABLED);
        assertDoesNotThrow(product::enable);
        product.setPrice(0);
        assertThrows(Error.class, product::enable);
    }
}
