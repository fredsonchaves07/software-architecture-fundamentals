package application;

import java.util.UUID;

public class Product implements ProductInterface {

    private String id;

    private String name;

    private double price;

    private String status;

    public static Product newProduct(String name, double price, String status) {
        return new Product(UUID.randomUUID().toString(), name, price, status);
    }

    public static Product newProduct(String name, double price) {
        return new Product(UUID.randomUUID().toString(), name, price, DISABLED);
    }

    private Product(String id, String name, double price, String status) {
        this.id= id;
        this.name = name;
        this.price = price;
        this.status = status;
    }

    @Override
    public boolean isValid() {
        if (status.isEmpty()) status = DISABLED;
        if (!status.equals(ENABLED) && !status.equals(DISABLED)) return false;
        return !(price < 0);
    }

    @Override
    public void enable() {
        if (price <= 0) throw new Error("the price must be greater than zero");
        status = ENABLED;
    }

    @Override
    public void disable() {
        if (price != 0) throw new Error("the price must zero");
        status = DISABLED;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getStatus() {
        return status;
    }

    @Override
    public double GetPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
