package com.example.xyzecommerce.cart;

import com.example.xyzecommerce.cart.vo.CartItem;
import org.springframework.data.repository.CrudRepository;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {

}
