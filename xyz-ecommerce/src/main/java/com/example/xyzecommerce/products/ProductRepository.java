package com.example.xyzecommerce.products;

import com.example.xyzecommerce.products.vo.Product;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */

public interface ProductRepository extends CrudRepository<Product, Long> {

}