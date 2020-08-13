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
        product.setName("Lenovo Legion Y540");
        product.setPrice("63,990.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/81pl1o7uQ3L._SL1500_.jpg");
        this.productRepository.save(product);

        CartItem cartItem = new CartItem();
        cartItem.setMasterCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(1L);
        this.cartItemRepository.save(cartItem);
        cart.getCartItems().add(cartItem);

        product = new Product();
        product.setName("HP Pavilion Gaming DK0268TX");
        product.setPrice("67,990.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg");
        this.productRepository.save(product);

        cartItem = new CartItem();
        cartItem.setMasterCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(1L);
        this.cartItemRepository.save(cartItem);
        cart.getCartItems().add(cartItem);

        this.cartRepository.save(cart);

        product = new Product();
        product.setName("Razer DeathAdder Elite");
        product.setPrice("11,299.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/71-QPWNH%2BVL._SL1500_.jpg");
        this.productRepository.save(product);

        product = new Product();
        product.setName("Razer BlackWidow Elite");
        product.setPrice("19,499.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/71Pkf3taxkL._SL1500_.jpg");
        this.productRepository.save(product);

        product = new Product();
        product.setName("GALAX GeForce RTX 2060");
        product.setPrice("36,999.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/41UxI9tkAcL.jpg");
        this.productRepository.save(product);

        product = new Product();
        product.setName("Xbox One S");
        product.setPrice("30,990.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/71O8ny4kHFL._SL1500_.jpg");
        this.productRepository.save(product);

        product = new Product();
        product.setName("Sony PS4");
        product.setPrice("44,999.00");
        product.setImageLocation("https://images-na.ssl-images-amazon.com/images/I/61fZimYlaIL._SL1500_.jpg");
        this.productRepository.save(product);

    }

}
