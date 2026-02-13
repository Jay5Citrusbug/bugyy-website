# 🛒 BuggyShop - E-Commerce QA Practice Website

A fully responsive Next.js e-commerce website with **10 intentional bugs** designed for QA testing and interview practice.

## 🎯 Purpose

This project is specifically created for:
- **QA Engineers** practicing bug identification and reporting
- **Interview preparation** for QA roles
- **Testing practice** for manual and automation testers
- **Training** new QA team members

## ⚠️ Important Note

**This website contains 10 intentional, realistic bugs across UI, validation, responsiveness, and functionality.**

For the complete list of bugs, see [BUG_REFERENCE.md](./BUG_REFERENCE.md)

## 🚀 Tech Stack

- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **State Management:** React Context API
- **Image Optimization:** Next.js Image component

## 📁 Project Structure

```
bugyy-ecommerce/
├── app/
│   ├── page.tsx              # Home page with carousel
│   ├── products/page.tsx     # Products listing with filters
│   ├── cart/page.tsx         # Shopping cart
│   ├── checkout/page.tsx     # Checkout form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── ProductCard.tsx       # Product card component
│   └── Carousel.tsx          # Hero carousel component
├── context/
│   └── CartContext.tsx       # Cart state management
├── lib/
│   ├── products.ts           # Product data
│   └── locations.ts          # Country/State/City data
└── BUG_REFERENCE.md          # Complete bug documentation
```

## 🌟 Features

### Pages
1. **Home/Landing Page**
   - Hero carousel with 3 slides
   - Category filters (Electronics, Fashion, Books)
   - Product grid display

2. **Products Page**
   - Search functionality
   - Category filtering
   - Sort by price (low to high, high to low)
   - Product grid with 8 sample products

3. **Cart Page**
   - View all cart items
   - Quantity adjustment controls
   - Remove items
   - Subtotal and total calculation
   - Proceed to checkout

4. **Checkout Page**
   - Shipping information form
   - Country/State/City dropdowns
   - Order summary sidebar
   - Form submission

### Components
- **Responsive Navbar** with cart count badge
- **Product Cards** with hover effects
- **Auto-scrolling Carousel** (with intentional bug)
- **Footer** with links and contact info

## 🐛 Bug Categories

| Category | Count |
|----------|-------|
| UI/Visual | 2 bugs |
| Validation | 2 bugs |
| Functionality | 3 bugs |
| Calculation | 2 bugs |
| Responsive | 2 bugs |

**Total: 10 Bugs**

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "d:\Bugyy website\bugyy-ecommerce"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🧪 Testing Guidelines

### For Manual Testing
1. Review [BUG_REFERENCE.md](./BUG_REFERENCE.md) to understand all bugs
2. Create test cases before starting
3. Test on different screen sizes (mobile, tablet, desktop)
4. Document bugs found with screenshots
5. Practice writing detailed bug reports

### For Automation Testing
- Use Playwright, Cypress, or Selenium
- Write test cases to automatically detect the bugs
- Practice creating robust test automation frameworks

### Recommended Testing Flow
1. **Smoke Testing** - Verify all pages load
2. **Functional Testing** - Test user flows (browse → cart → checkout)
3. **UI Testing** - Verify responsiveness and visual elements
4. **Validation Testing** - Test form inputs
5. **Cross-browser Testing** - Test on Chrome, Firefox, Safari

## 📝 Bug Reporting Practice

When you find a bug, practice writing reports with:
- **Bug ID & Title**
- **Severity** (Critical, High, Medium, Low)
- **Type** (UI, Functional, Validation, etc.)
- **Steps to Reproduce**
- **Expected vs Actual Behavior**
- **Screenshots/Videos**
- **Environment Details**

## 🎓 Learning Outcomes

After practicing with this project, you should be able to:
- ✅ Identify UI/UX bugs
- ✅ Test form validation
- ✅ Verify calculations and logic
- ✅ Test responsive design issues
- ✅ Write comprehensive bug reports
- ✅ Create test cases and test plans
- ✅ Perform regression testing

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔍 Key Areas to Test

1. **Image Quality** - Product images (Bug #1)
2. **Form Validation** - Phone number, empty fields (Bug #2, #9)
3. **Dropdowns** - Country/State mapping and sorting (Bug #3, #6)
4. **Cart Functionality** - Count and total calculations (Bug #4, #5)
5. **Button Actions** - Add to cart behavior (Bug #8)
6. **Carousel** - Auto-scroll functionality (Bug #10)
7. **Mobile Layout** - Navbar and footer issues (Bug #7a, #7b)

## 💡 Tips for QA Interviews

Use this project to demonstrate:
- **Bug identification skills** - Show how you found the bugs
- **Testing approach** - Explain your testing methodology
- **Documentation** - Present well-written bug reports
- **Automation skills** - Share automated test scripts
- **Attention to detail** - Discuss subtle vs obvious bugs

## 🤝 Contributing

This is a practice project with intentional bugs. The bugs are meant to stay for learning purposes!

## 📄 License

This project is created for educational purposes.

---

**Happy Testing! 🎯**

Remember: Every bug you find is a learning opportunity. Practice makes perfect!
