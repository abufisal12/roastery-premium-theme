# Roastery Premium Theme

ثيم احترافي مخصص لمتاجر القهوة المختصة على منصة سلة باستخدام Twilight.

## ماذا يحتوي المشروع؟

- صفحة رئيسية كاملة لمتجر قهوة.
- هيدر وفوتر احترافيان.
- أقسام: بانر رئيسي، تصنيفات، اختيار القهوة حسب الذوق، منتجات مميزة، اشتراك شهري، مزايا، آراء العملاء.
- صفحة منتج مخصصة للقهوة مع حقول مثل الدولة، المعالجة، التحميص، وطريقة التحضير.
- CSS كامل متجاوب للجوال والكمبيوتر.
- JavaScript للقائمة المتحركة وزر العودة للأعلى.
- ملفات ترجمة عربية وإنجليزية.
- ملف `twilight.json` لتعريف إعدادات ومكونات الثيم.

## تشغيل المشروع محلياً

```bash
npm install
npm run salla:login
npm run salla:preview
```

أو مباشرة:

```bash
salla login
salla theme preview
```

## رفع المشروع إلى GitHub

1. أنشئ مستودع جديد في GitHub باسم:

```text
roastery-premium-theme
```

2. من داخل مجلد المشروع نفذ:

```bash
git init
git add .
git commit -m "Initial Roastery Premium Salla theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roastery-premium-theme.git
git push -u origin main
```

استبدل `YOUR_USERNAME` باسم مستخدم GitHub الخاص بك.

## أهم الملفات

```text
twilight.json
src/views/layouts/master.twig
src/views/pages/index.twig
src/views/components/home/coffee-hero.twig
src/views/components/home/coffee-categories.twig
src/views/components/home/coffee-featured-products.twig
src/views/components/home/coffee-subscription.twig
src/assets/styles/app.css
src/assets/js/app.js
src/locales/ar.json
src/locales/en.json
```

## ملاحظة مهمة

هذا المشروع Starter Theme كامل ومصمم لثيم قهوة. عند ربطه بحساب Salla Partners وبيئة Twilight قد تحتاج إلى مواءمة بعض مكونات سلة الأساسية مثل السلة/الدفع/حساب العميل حسب إصدار الثيم الأساسي المتاح في حسابك، لأن سلة تدير بعض الصفحات الحساسة عبر مكونات داخلية.
