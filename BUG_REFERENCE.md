# BuggyShop - Bug Reference Guide

This document lists all **10 intentional bugs** inserted into the BuggyShop e-commerce website for QA testing practice.

---

## 🐛 Bug #1: Blurry/Stretched Product Images (UI Bug)

**Severity:** Medium  
**Type:** UI/Visual  
**Location:** All product cards across the website

### Description
Product images appear low resolution, stretched, or blurry on desktop view.

### Steps to Reproduce
1. Navigate to the Home page or Products page
2. Observe the product images in the grid
3. Images appear distorted/stretched

### Expected Behavior
Product images should display in proper aspect ratio with good quality

### Actual Behavior
Images are stretched due to incorrect aspect ratios in the image URLs (e.g., 300x500, 200x600 instead of square/proper ratios)

### Location in Code
- `lib/products.ts` - Image URLs with wrong dimensions
- `components/ProductCard.tsx` - Image display

---

## 🐛 Bug #2: Mobile Number Validation Missing (Validation Bug)

**Severity:** High  
**Type:** Validation  
**Location:** Checkout page - Phone number field

### Description
Phone number field accepts alphabets, special characters, and has no length validation.

### Steps to Reproduce
1. Navigate to Checkout page with items in cart
2. Enter invalid phone number (e.g., "abc@123", "hello world")
3. Form accepts the input without validation

### Expected Behavior
- Phone field should only accept numbers
- Should have length validation (10-15 digits)
- Should show error for invalid input

### Actual Behavior
Accepts any text input including letters and special characters

### Location in Code
- `app/checkout/page.tsx` - Phone input field (line ~107)
- Missing: `type="tel"`, `pattern`, `minlength`, `maxlength` attributes

---

## 🐛 Bug #3: Country-State-City Mapping Bug (Functional Bug)

**Severity:** High  
**Type:** Functionality  
**Location:** Checkout page - Address form

### Description
When selecting a country in the dropdown, the state list does not update correctly. Same US states are shown for all countries.

### Steps to Reproduce
1. Go to Checkout page
2. Select "India" from Country dropdown
3. Observe State dropdown shows US states (California, New York, Texas, etc.)
4. Change to "Germany" - still shows same US states

### Expected Behavior
State dropdown should show states/regions relevant to the selected country

### Actual Behavior
All countries show the same hardcoded US states list

### Location in Code
- `lib/locations.ts` - `getStatesByCountry()` function ignores the country parameter
- Line ~53: Returns all states regardless of country selection

---

## 🐛 Bug #4: Cart Count Incorrect (Calculation Bug)

**Severity:** Medium  
**Type:** Calculation  
**Location:** Navbar cart icon badge

### Description
Cart icon shows wrong item count when exactly 2 different products are added.

### Steps to Reproduce
1. Add any product to cart (quantity: 1)
2. Add a different product to cart (quantity: 1)
3. Observe cart badge shows "3" instead of "2"

### Expected Behavior
Cart badge should show total quantity of items (2)

### Actual Behavior
Shows 3 (one extra) when exactly 2 different products are in cart

### Location in Code
- `context/CartContext.tsx` - `getCartCount()` function (line ~64-69)
- Bug adds +1 when `items.length === 2`

---

## 🐛 Bug #5: Price Calculation Incorrect (Calculation Bug)

**Severity:** Critical  
**Type:** Calculation  
**Location:** Cart page - Total price

### Description
Cart total price is calculated incorrectly - missing the last item's price.

### Steps to Reproduce
1. Add 3 or more different products to cart
2. Go to Cart page
3. Calculate total manually
4. Notice the displayed total is less than actual

### Expected Behavior
Total should be sum of (price × quantity) for ALL items

### Actual Behavior
Total calculation skips the last item in the array

### Location in Code
- `context/CartContext.tsx` - `getCartTotal()` function (line ~73-81)
- Loop: `for (let i = 0; i < items.length - 1; i++)` - misses last item

---

## 🐛 Bug #6: Country Dropdown Not Sorted (UI Bug)

**Severity:** Low  
**Type:** UI/UX  
**Location:** Checkout page - Country dropdown

### Description
Countries in the dropdown are not in alphabetical order.

### Steps to Reproduce
1. Navigate to Checkout page
2. Click on Country dropdown
3. Observe countries are in random order (United States, India, Canada, United Kingdom, etc.)

### Expected Behavior
Countries should be listed alphabetically (Australia, Canada, France, Germany, India, etc.)

### Actual Behavior
Countries appear in the order they're defined in the array, not sorted

### Location in Code
- `lib/locations.ts` - `countries` array (line ~18-27)
- Array is not sorted alphabetically

---

## 🐛 Bug #7a: Navbar Overlaps Banner on Mobile (Responsive Bug)

**Severity:** Medium  
**Type:** Responsive/CSS  
**Location:** Mobile view - Home page

### Description
On mobile devices, the navbar overlaps the hero carousel banner.

### Steps to Reproduce
1. Open website on mobile device or resize browser to mobile width (<768px)
2. Navigate to Home page
3. Observe navbar overlaps the top of the carousel

### Expected Behavior
Navbar should be positioned properly without overlapping content

### Actual Behavior
Navbar has excessive z-index (9999) and overlaps the banner

### Location in Code
- `components/Navbar.tsx` - Line 14: `z-[9999]` is too high

---

## 🐛 Bug #7b: Footer Text Breaks Character by Character on Mobile (Responsive Bug)

**Severity:** Medium  
**Type:** Responsive/CSS  
**Location:** Mobile view - Footer

### Description
Footer copyright text breaks into one character per line on mobile devices.

### Steps to Reproduce
1. Open website on mobile device or resize to <640px width
2. Scroll to footer
3. Observe copyright text breaks awkwardly: "©" then "2" then "0" then "2" then "6" each on new line

### Expected Behavior
Text should wrap normally by words

### Actual Behavior
Each character appears on a separate line due to `word-break: break-all` with max-width constraint

### Location in Code
- `components/Footer.tsx` - Lines 38-46
- CSS: `word-break: break-all` with `max-width: 100px`

---

## 🐛 Bug #8: Add to Cart Button Only Works Once (Functional Bug)

**Severity:** High  
**Type:** Functionality  
**Location:** Product cards - Add to Cart button

### Description
Clicking "Add to Cart" button twice rapidly on the same product only adds it once instead of twice.

### Steps to Reproduce
1. Find any product on Home or Products page
2. Click "Add to Cart" button quickly twice
3. Check cart - quantity shows 1 instead of 2

### Expected Behavior
Each click should add the product to cart (or increment quantity)

### Actual Behavior
Rapid duplicate clicks are ignored due to debounce logic

### Location in Code
- `context/CartContext.tsx` - `addToCart()` function (line ~27-31)
- Code prevents adding if `lastAddedProduct === product.id`

---

## 🐛 Bug #9: Checkout Form Submits with Empty Fields (Validation Bug)

**Severity:** Critical  
**Type:** Validation  
**Location:** Checkout page - Form submission

### Description
Checkout form can be submitted even when all mandatory fields are empty.

### Steps to Reproduce
1. Add items to cart and go to Checkout
2. Leave all form fields empty
3. Click "Place Order" button
4. Form submits successfully without validation

### Expected Behavior
Form should validate required fields and show errors if empty

### Actual Behavior
Form submits with empty data, shows success message

### Location in Code
- `app/checkout/page.tsx` - `handleSubmit()` function (line ~44-56)
- Missing validation logic before submission

---

## 🐛 Bug #10: Carousel Auto-Scroll Stops After First Slide (Functional Bug)

**Severity:** Medium  
**Type:** Functionality  
**Location:** Home page - Hero carousel

### Description
The carousel auto-scroll stops working after it moves from the first slide to the second slide.

### Steps to Reproduce
1. Navigate to Home page
2. Wait and observe the carousel
3. Carousel auto-advances from slide 1 to slide 2
4. Then stops auto-scrolling (doesn't go to slide 3)
5. Manual arrows still work

### Expected Behavior
Carousel should continuously auto-scroll through all 3 slides

### Actual Behavior
Auto-scroll stops after the first transition (slide 0 → slide 1)

### Location in Code
- `components/Carousel.tsx` - `useEffect` hook (line ~31-42)
- Lines 36-38: Sets `autoScrollStopped` to true after first slide change

---

## 📊 Bug Summary by Type

| Type | Count | Bugs |
|------|-------|------|
| **UI/Visual** | 2 | #1, #6 |
| **Validation** | 2 | #2, #9 |
| **Functionality** | 3 | #3, #8, #10 |
| **Calculation** | 2 | #4, #5 |
| **Responsive** | 2 | #7a, #7b |

## 📊 Bug Summary by Severity

| Severity | Count | Bugs |
|----------|-------|------|
| **Critical** | 2 | #5, #9 |
| **High** | 3 | #2, #3, #8 |
| **Medium** | 4 | #1, #4, #7a, #7b, #10 |
| **Low** | 1 | #6 |

---

## 🎯 Suggested QA Testing Practice

1. **Create Test Cases** - Write test cases for each bug before testing
2. **Bug Reports** - Practice writing detailed bug reports for each finding
3. **Regression Testing** - After "fixing" bugs, verify they don't reoccur
4. **Cross-Browser Testing** - Test bugs across different browsers
5. **Automation Practice** - Write automated tests to catch these bugs

---

**Note:** This website is intentionally buggy for QA practice purposes. All bugs are realistic examples of common development mistakes.
