Great idea—this is exactly the kind of use case where a **clear, structured prompt** will give you a much better AI-generated project.

Since you’re a QA Lead and this is for practice/interview/demo, I’ll give you a **professional-grade prompt** you can directly use in tools like Antigravity, v0, Bolt, or any AI web builder.

---

## Improved & Professional Prompt (for Antigravity / Next.js)

You can copy–paste this as-is:

---

**Prompt:**

> Create a fully responsive e-commerce website using **Next.js (latest version)** and **modern UI practices**.
> The project should contain **3–4 pages** and follow a clean, professional design suitable for a demo product.
>
> ### Pages & Features
>
> #### 1. Landing Page (Home)
>
> * Responsive **Navbar** with:
>
>   * Logo
>   * Home, Products, Cart, Checkout links
> * **Carousel banner** with at least 3 sliding images
> * **Product listing section**:
>
>   * Grid layout
>   * Each product should show:
>
>     * Image
>     * Name
>     * Price
>     * Category
>     * "Add to Cart" button
> * Category filter (e.g. Electronics, Fashion, Books)
> * Responsive **Footer** with basic links and copyright
>
> #### 2. Product Listing Page
>
> * Display all products with:
>
>   * Category filter
>   * Search bar
>   * Sorting by price (low to high / high to low)
> * Clicking a product opens a **Product Detail view**
>
> #### 3. Cart Page
>
> * Show all added products
> * Each item should have:
>
>   * Quantity selector
>   * Remove button
> * Display:
>
>   * Subtotal
>   * Total price
> * Button: **Proceed to Checkout**
>
> #### 4. Checkout Page
>
> * Form fields:
>
>   * Full Name
>   * Phone Number
>   * Email
>   * Country (dropdown)
>   * State (dropdown)
>   * City
>   * Pincode
> * Order summary on the side:
>
>   * Product list
>   * Total amount to pay
> * Button: **Place Order**
>
> ### Technical Requirements
>
> * Built with **Next.js App Router**
> * Use **TypeScript**
> * Use **Tailwind CSS** for styling
> * State management for cart (Context API or Zustand)
> * Fully responsive for:
>
>   * Desktop
>   * Tablet
>   * Mobile
>
> ### UX Expectations
>
> * Smooth transitions
> * Toast notification on "Add to Cart"
> * Disabled checkout button if form is invalid
> * Clean and modern UI similar to Amazon/Flipkart demo

---

## Short Version (If tool has character limit)

If Antigravity has a small input box:

> Build a responsive e-commerce website using Next.js with 4 pages: Home, Products, Cart, Checkout.
> Include navbar, carousel banner, product grid with categories and add-to-cart, cart with quantity and total, and checkout form with name, phone, email, country, state, city, pincode, and order summary.
> Use Tailwind CSS, TypeScript, modern UI, and mobile-first design.

---

## Why this prompt is strong (from QA perspective)

This prompt:

* Has **clear acceptance criteria** (like a user story)
* Defines **UI + functional flows**
* Mentions **tech stack explicitly**
* Works for:

  * Interview demos
  * Portfolio projects
  * Automation practice later (Playwright)

You can later easily create:

* Test cases
* Test scenarios
* Automation scripts
* Performance tests (cart & checkout)

Perfect for both **dev + QA practice**.
