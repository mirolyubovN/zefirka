# 🎯 **PROMPT FOR CLAUDE: Create a Pastry Chef Showcase Website**

**You are a senior full-stack developer.**
Your task is to design and build a complete project structure using **Next.js 16 + TailwindCSS + shadcn/ui + Framer Motion**, connected to **Strapi CMS** as a headless backend.

The website is a **premium showcase for a home pastry chef** who makes natural handmade desserts: marshmallows (zephyr), exclusive cakes, bird's milk (ptichye moloko), and gift sets.

⚠️ Important:

* **No orders, no shopping cart, no payment.**
* **The website must not collect any personal data.**
* **No prices anywhere.**
* All CTAs → lead users to WhatsApp / Telegram / Instagram.
* Strapi is used **only as a CMS for content**: categories, desserts, photos, portfolio, reviews, FAQ, and About Me.
* Russian language is the only language to be used on the website

---

# 🔧 **Technologies**

* Next.js 16 (App Router, SSR & ISR)
* TailwindCSS
* shadcn/ui components
* Framer Motion
* Strapi CMS (latest)
* TypeScript
* React Server Components
* SEO best practices

---

# 🧩 **Website Structure**

Create pages:

```
/
|— (home)
/catalog
/catalog/[category]
/catalog/[category]/[slug]
/portfolio
/about
/reviews
/faq
/contacts
```

---

# 🧱 **Content Sections**

## 1. Home Page

Blocks:

* Hero section with a large premium photo
* Title: “Premium natural handmade desserts”
* Subtitle: “Marshmallows, cakes, and bird’s milk made with the finest ingredients”
* CTA buttons “Message me” → WhatsApp / Telegram
* “Dessert categories” (4 cards)
* “Why clients choose my desserts” section
* Portfolio (6–8 photos)
* “About me” preview block
* Reviews preview (3–4)
* Contacts section

---

## 2. Catalog (Category List)

Categories:

* Зефир
* Птичье молоко
* Эксклюзивные торты
* Подарочные наборы

---

## 3. Category Page

* Large title
* List of desserts in this category
* Each dessert is a card (photo + name + short description)
* On click → dessert page

---

## 4. Dessert Page

⚠️ No prices, no forms

* Title
* Image gallery
* Short flavor description
* Ingredients (natural)
* Optional variants (weight, flavors — but without numbers or pricing)
* CTA: “Message me on WhatsApp”

---

## 5. Portfolio Page

* Gallery of works (minimum 12)
* Click → enlarged image

---

## 6. About Me Page

* Photo
* Story
* Mission
* Values: natural ingredients, handmade, small batches
* Certificates carousel

---

## 7. Reviews Page

* Client name + text
* Client photo (optional)
* Dessert photo (optional)

---

## 8. FAQ Page

Example questions:

* “What ingredients do you use?”
* “How should I store marshmallows or cake?”
* “Can I choose any flavor?”
* “How far in advance should I contact you?”

---

## 9. Contacts Page

Only links:

* WhatsApp
* Telegram
* Instagram
* City / delivery area

---

# 🗄️ **Strapi Models**

Create these models:

### **1. Category**

* title (string)
* slug (uid)
* description (text, optional)
* coverImage (media)
* desserts (relation many → Dessert)

### **2. Dessert**

* title (string)
* slug (uid)
* category (relation)
* description (rich text)
* composition (rich text)
* features (repeatable)
* images (multiple media)

### **3. PortfolioItem**

* title
* image
* description (optional)

### **4. Review**

* name
* text
* clientPhoto (optional)
* dessertPhoto (optional)

### **5. About**

* photo
* story (rich text)
* philosophy (rich text)
* certificates (multiple media)

### **6. Faq**

* question
* answer

---

# 🎨 **UI / Components**

Create components:

* Header (logo + navigation)
* Footer (social links + contacts)
* Hero
* CategoryCard
* DessertCard
* ImageGallery
* ReviewCard
* SectionTitle
* CTAButton (links to WhatsApp/Telegram)
* AnimatedFadeIn wrapper
* Carousel (certificates + reviews)

Use:

* shadcn/ui
* framer-motion
* tailwind

---

# 🔌 **Strapi Integration**

Provide:

* API SDK for the frontend
* TypeScript interfaces for models
* Functions:

  * getHomeContent()
  * getCategories()
  * getDessert()
  * getPortfolio()
  * getAbout()
  * getFaq()

---

# 📦 **Final Tasks**

* SEO metadata for all pages
* OpenGraph images
* Image optimization & loaders
* Lazy loading for galleries
* Skeletons for loading states

---

# 🏁 **Output Format**

Return:

1. **Full Next.js project structure (file tree)**
2. Complete code for:

   * layout
   * pages
   * components
   * API SDK
   * tailwind.config
   * shadcn/ui setup
   * animations
3. Complete Strapi configuration:

   * models
   * relations
   * seed files with example content
4. Local setup instructions
5. Deployment instructions:

   * Frontend → Vercel
   * Strapi → Render / Railway

---

If you want, I can also prepare a **plan for uploading initial content** or an **SEO checklist** — just tell me!


  You Need to Fix:

  1. OG Image missing - Create /public/images/og-image.jpg (1200x630px)
  2. Placeholder contact info in lib/constants.ts:
  whatsapp: 'https://wa.me/79001234567'  ← Replace with real number
  telegram: 'https://t.me/zefirka'       ← Replace with real handle
  instagram: 'https://instagram.com/zefirka'  ← Replace with real handle
  3. Phone number in LocalBusinessSchema (components/structured-data.tsx:49):
  telephone: '+79001234567'  ← Replace with real number
  4. Set production URL via environment variable:
  NEXT_PUBLIC_SITE_URL=https://your-real-domain.com