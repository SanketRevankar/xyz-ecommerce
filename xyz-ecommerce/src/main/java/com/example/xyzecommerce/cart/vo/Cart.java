package com.example.xyzecommerce.cart.vo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    private @Id Long id;

    @OneToMany
    private Set<CartItem> cartItems;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(Set<CartItem> cartItems) {
        this.cartItems = cartItems;
    }
}
