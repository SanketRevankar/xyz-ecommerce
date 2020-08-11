package com.example.xyzecommerce;

import com.example.xyzecommerce.cart.CartItemRepository;
import com.example.xyzecommerce.cart.vo.Cart;
import com.example.xyzecommerce.cart.vo.CartItem;
import com.example.xyzecommerce.cart.CartRepository;
import com.example.xyzecommerce.products.ProductRepository;
import com.example.xyzecommerce.products.vo.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */
@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ProductRepository productRepository;
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    @Autowired
    public DatabaseLoader(ProductRepository productRepository, CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Cart cart = new Cart(1L, new HashSet<>());
        this.cartRepository.save(cart);

        Product product = new Product();
        product.setName("item");
        product.setImageLocation("loc");
        this.productRepository.save(product);

        CartItem cartItem = new CartItem();
        cartItem.setMasterCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(4L);
        this.cartItemRepository.save(cartItem);
        cart.getCartItems().add(cartItem);

        product = new Product();
        product.setName("item1");
        product.setImageLocation("loc1");
        this.productRepository.save(product);

        cartItem = new CartItem();
        cartItem.setMasterCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(4L);
        this.cartItemRepository.save(cartItem);
        cart.getCartItems().add(cartItem);

        this.cartRepository.save(cart);

    }

}
