# 🌐 Web Project Overview

## 🏷️ Project Name

> *Catalog listing of Chechen Hotels*

## 🧭 Project Summary

> Chechen Hotels is a website catalog of the best hotels in Chechnya by rating, rooms and other hotel services. Basically, the sorting will be by rating from high to low, the rating will be based on user ratings and reviews.

**Type:** Hotel Listing Catalog 
**Status:** In Development / Live  
**Main Language:** Russian  
 
---
# 👥 Business Information

## 🧩 Client / Brand Details

- **Company Name:**  *Chechen Hotels*
- **Industry/Niche:**  *Hotel Listing Catalog*
- **Main Product or Service:**  *Hotels, hostels etc.*
- **Location(s):**  *Chechnya*
- **Target Audience:**  *Tourists, business people, travelers*

## 📈 Business Goals

> Describe the purpose of the site and what success looks like.

- Provide information about hotels and rooms in the Chechen Republic.
- Give tourists and visitors the opportunity to learn about the best rooms and hotels in Chechnya, rate them and leave reviews.
- Give authorized hotel owners the opportunity to post information about their hotels on the site.
- Motivate hotel owners to provide their services as best as possible.

## 💰 Monetization Strategy (if applicable)

- Product Sales / Affiliate / Ads / Subscription / Lead Gen

## 🔍 SEO Strategy

- **Primary Keywords:**  *чеченские гостиницы, гостиницы в чечне, чеченская республика гостиницы* 
- **Search Intent:** Informational / Navigational / Transactional  
- **Target Regions:**  World
- **Notes:** e.g., "Localized content for Russian-speaking users"

## 📱 Social Media / Marketing Channels

- Instagram:  
- VK:  
- YouTube:  
- Email Marketing:  

---

📬 **Domain & Communication**

🌐 **Domain Name**  
Primary Domain:  chechenhotels.ru
Subdomains (if any): None

📧 **Email Accounts**  
Main Contact Email:  info@chechenhotels.ru
Support Email:  None
Email Hosting Provider:

📨 **DNS / MX / SPF Settings**  
DNS Managed By:  GitHub Pages.
Custom Records (SPF, DKIM, DMARC):  
Notes:

☎️ **Other Communication Channels**  
Live Chat: None  
Phone Integration: None  
CRM Messaging None

# 🧑‍💻 Technical Overview

## ⚙️ Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Frontend   | HTML, CSS, JS, TailwindCSS |
| Backend    | None                       |
| CMS        | None                       |
| DB         | None                       |
| Hosting    | GitHub Pages               |
| Versioning | GitHub                     |
## 📁 Project Structure

> Optional: List main folders or link to architecture diagram.

- `/src` - source files  
- `/public` - assets and entry point  
- `/wp-content` - WordPress themes and plugins  
- `/resources` - views, assets  

## 🔌 Integrations / APIs

- Payment Gateway: e.g., YooMoney, Stripe  
- Analytics: GA4, Yandex Metrika  
- CRM / Email:  
- Others:  

## 🧱 MVC & Data Architecture

### 📂 Models

> List core models and their roles in the app.

- `User` – authentication, profiles, roles
- `Post` – blog or content entries
- `Category` – organizes posts or items
- `Comment` – user feedback under posts
- `Tag` – optional metadata for posts
- `Setting` – site-wide configuration options

### 🧭 Controllers

> Describe each controller’s main function.

- `PostController` – handles CRUD for posts
- `UserController` – user profile and admin controls
- `AuthController` – login, registration, password reset
- `CommentController` – create/edit/delete comments
- `CategoryController` – manage post categories
- `TagController` – assign/manage tags

### 🪟 Views (Blade templates)

> Main templates for rendering UI.

- `resources/views/posts/index.blade.php`
- `resources/views/posts/show.blade.php`
- `resources/views/users/profile.blade.php`
- `resources/views/layouts/app.blade.php`
- `resources/views/auth/login.blade.php`

### 🗄️ Database Schema

> List key tables or link to schema/ERD diagram.

- `users` – id, name, email, password
- `posts` – id, title, body, user_id
- `comments` – id, post_id, user_id, body
- `categories` – id, name
- `tags` – id, name
- `post_tag` – pivot for many-to-many posts↔tags

> Optional: include link to dbdiagram.io or screenshot
![[Pasted image 20250609103145.png]]
## 🔐 Security Notes

- SSL? ✅  
- Login Protection:  ✅
- Backup Schedule:  

## 🧪 Testing / QA

- Testing tools:  
- Manual checklists:  
- Mobile/responsive testing notes:  

## ⚙️ Deployment

- Hosting Provider:  
- FTP / SSH access:  
- Deployment method: Manual / CI/CD  
- Auto Backups: Yes/No  

---
# 🗺️ Content Overview

## 📑 Page List

| Page Name        | URL Slug      | Notes                                                                   |
| ---------------- | ------------- | ----------------------------------------------------------------------- |
| Home             | `/`           | Hero-блок, топ-отели, поиск/фильтр, CTA (призыв к действию)             |
| Hotels           | `/hotels`     | Список всех гостиниц с фильтрами (по рейтингу, цене, услугам и др.)     |
| Hotel Detail     | `/hotel/{id}` | Детальная страница гостиницы: фото, описание, рейтинг, отзывы, контакты |
| About            | `/about`      | Информация о проекте, миссия, цели                                      |
| Blog             | `/blog`       | Новости туризма, советы, статьи                                         |
| Blog Article     | `/blog/{id}`  | Отдельная статья                                                        |
| FAQ              | `/faq`        | Часто задаваемые вопросы (про бронирование, рейтинг, услуги и др.)      |
| Contact          | `/contact`    | Форма обратной связи, контакты, адрес                                   |
| Add Hotel        | `/add-hotel`  | Форма добавления гостиницы (для владельцев, после авторизации)          |
| My Hotels        | `/my-hotels`  | Кабинет владельца гостиниц: список, редактирование                      |
| Terms of Service | `/terms`      | Условия использования сайта                                             |
| Privacy Policy   | `/privacy`    | Политика конфиденциальности                                             |
## ✍️ Content Language: Russian

## List of Chechen hotels
- 

## 🔤 Translation or i18n Strategy (if any)

> None (maybe later)

---
# 🔧 Maintenance & TODOs

## 🧹 Known Issues / Bugs

- [ ] Example: Menu breaks on Safari  
- [ ] Example: Add 404 page

## 🔄 Future Plans / Features

- Add chatbot  
- Add product reviews  
- Expand to Shopify 

---
# ⏱️ Timeline & Milestones

- Start Date: 29.10.2024
- Estimated Launch: 29.07.2025
- Key Milestones: (Design approval, content delivery, dev complete, QA, etc.)

# 📚 Resources & Docs

- Design Figma: [Link]  
- Branding Guidelines: [Link or notes]  
- Reference Sites:  
  - [competitor1.ru](https://...)  
  - [designinspo.com](https://...)  

---
# 🎨 Design & UX Notes

- UI/UX Goals: e.g., "Clean, modern, mobile-first"
- Accessibility (WCAG) Considerations: Yes / No / Notes
- Fonts / Typography:
- Icon Set / Style Guide Notes:

# 👤 Website Author / Maintainer

- **Developer:** Kerim @ GrozNet  
- **Contact Email:** info@groznet.com  
- **Git Repo:** github.com/groznet
- **Live Site:** [groznet.com](https://groznet.com)

---