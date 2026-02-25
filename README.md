# MiniShop – Mini E-commerce Prototype

## 1. Problem Statement
Small businesses often need a simple way to present and sell products online. 
However, full-scale e-commerce platforms are complex, expensive, and include 
features that are unnecessary for small operations or early prototypes.

The problem addressed in this project is how to design a minimal digital 
shopping experience that allows users to browse products and add them to a cart, 
without implementing a full backend or payment system.

The purpose of this prototype is to demonstrate how requirements analysis, 
object-oriented modeling, UML, and user interface design can be connected 
into a small but coherent solution.

## 2. Stakeholders
The system involves the following stakeholders:

| Role      | Description | Goal |
|-----------|------------|------|
| Guest     | Unregistered visitor browsing the website | Explore available products |
| Customer  | User interacting with products and cart | Add products to cart and simulate purchase intention |
| Admin     | Person responsible for managing products | Create and maintain product information |
## 3. Requirements

### 3.1 Functional Requirements
FR1: The system shall display a list of available products.

FR2: The system shall allow a user to view detailed information about a selected product.

FR3: The system shall allow a user to add a product to the shopping cart.

FR4: The system shall display the number of items currently in the shopping cart.

FR5: The system shall store cart data locally during the session using browser storage.

FR6: The system shall allow an admin (conceptually) to create and manage product information.
### 3.2 Non-Functional Requirements
NFR1: The user interface shall use semantic HTML elements to improve accessibility.

NFR2: The system shall respond to user interactions (such as button clicks) within one second.

NFR3: The layout shall be responsive and usable on both desktop and mobile screen sizes.

NFR4: The CSS structure shall be consistent and reusable to ensure maintainability.
### 3.3 Prioritization (MoSCoW)
Must Have:
- Display product list
- View product details
- Add product to cart
- Show cart count
- Responsive layout

Should Have:
- LocalStorage persistence
- Clear visual feedback when adding product

Could Have:
- Remove product from cart
- Simple product filtering

Won't Have:
- Payment system
- User authentication
- Backend database

## 4. Use Case
### Use Case: Add Product to Cart

Actor:
Customer

Preconditions:
- The user is on the product detail page.
- The product exists in the system.

Main Flow:
1. The customer clicks the "Add to Cart" button.
2. The system registers the selected product.
3. The system increases the cart item count.
4. The system updates the cart indicator in the navigation bar.
5. The system displays a confirmation message to the user.

Alternate Flow:
A1: If the product is already in the cart,
    - The system increases the quantity instead of creating a duplicate entry.

Postconditions:
- The selected product is stored in the cart.
- The cart count reflects the updated number of items.

## 5. Change Notes

## 6. Risks & Limitations