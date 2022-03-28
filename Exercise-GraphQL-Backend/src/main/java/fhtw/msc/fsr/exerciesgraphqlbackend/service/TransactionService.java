package fhtw.msc.fsr.exerciesgraphqlbackend.service;

import fhtw.msc.fsr.exerciesgraphqlbackend.types.Payment;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionService {

    @PostMapping("/createPayment")
    public Payment createPayment(@RequestBody Object body) {
        return new Payment(100, "desc", "from", "to");
    }
}
