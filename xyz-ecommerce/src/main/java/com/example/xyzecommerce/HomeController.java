package com.example.xyzecommerce;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}