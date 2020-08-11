package com.example.xyzecommerce.cart;

import com.example.xyzecommerce.cart.vo.Cart;
import com.example.xyzecommerce.cart.vo.CartItem;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */

public interface CartRepository extends CrudRepository<Cart, Long> {

}
