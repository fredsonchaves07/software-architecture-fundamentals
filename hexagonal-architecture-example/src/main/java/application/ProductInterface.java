package application;

public interface ProductInterface {

    String DISABLED = "disbled";

    String ENABLED = "enabled";

    boolean isValid();

    void enable();

    void disable();

    String getId();

    String getName();

    String getStatus();

    double GetPrice();
}
