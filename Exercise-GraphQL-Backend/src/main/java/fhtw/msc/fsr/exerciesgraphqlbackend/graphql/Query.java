package fhtw.msc.fsr.exerciesgraphqlbackend.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import fhtw.msc.fsr.exerciesgraphqlbackend.types.Payment;

import java.util.ArrayList;
import java.util.List;

public class Query implements GraphQLQueryResolver {

    public List<Payment> getPayments() {
        return new ArrayList<>();
    }
}
