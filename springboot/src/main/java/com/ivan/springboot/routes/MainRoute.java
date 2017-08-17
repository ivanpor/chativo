package com.ivan.springboot.routes;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;
 
@Component
public class MainRoute extends RouteBuilder {
 
    @Override
    public void configure() throws Exception {
        from("direct:mainQueue").to("direct:secondQueue");
        from("direct:secondQueue").convertBodyTo(org.w3c.dom.Document.class).log("Contenido enviado").choice().when().xpath("/sale/result = 'OK'").to("jms:queue:mainQueueOK").when().xpath("/sale/result = 'KO'").to("jms:queue:mainQueueKO");
        from("jms:queue:mainQueueOK").log("Respuest OK");
        from("jms:queue:mainQueueKO").log("Respuest KO");
        from("jms:inQueue").log("Contenido recibido: ${body}");
    }
}
