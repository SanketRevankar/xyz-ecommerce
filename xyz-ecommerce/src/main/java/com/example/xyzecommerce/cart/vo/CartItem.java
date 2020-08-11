package com.example.xyzecommerce.cart.vo;

import com.example.xyzecommerce.products.vo.Product;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * @author Sanket Revankar
 * Created on 11-08-2020
 */

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    private @Id @GeneratedValue Long id;
    @ManyToOne
    private Product product;
    private Long quantity;
    @ManyToOne
    private Cart masterCart;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Cart getMasterCart() {
        return masterCart;
    }

    public void setMasterCart(Cart masterCart) {
        this.masterCart = masterCart;
    }

    public Long getId() {
        return id;
    }
}
