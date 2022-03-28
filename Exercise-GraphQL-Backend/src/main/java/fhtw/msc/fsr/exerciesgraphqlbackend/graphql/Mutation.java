package fhtw.msc.fsr.exerciesgraphqlbackend.graphql;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import fhtw.msc.fsr.exerciesgraphqlbackend.types.Payment;

public class Mutation implements GraphQLMutationResolver {

    public Payment createPayment(Integer amount, String description, String paymentFrom, String paymentTo) {
        return new Payment(100, "desc", "from", "to");
    }
}
