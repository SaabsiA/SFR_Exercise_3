package fhtw.msc.fsr.exerciesgraphqlbackend.types;

public class Payment {

    private int id;
    private final int amount;
    private final String description;
    private final String paymentFrom;
    private final String paymentTo;
    private Boolean completed;

    public Payment(int amount, String description, String paymentFrom, String paymentTo) {
        this.id = 0;
        this.amount = amount;
        this.description = description;
        this.paymentFrom = paymentFrom;
        this.paymentTo = paymentTo;
        this.completed = false;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public String getDescription() {
        return description;
    }

    public String getPaymentFrom() {
        return paymentFrom;
    }

    public String getPaymentTo() {
        return paymentTo;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
