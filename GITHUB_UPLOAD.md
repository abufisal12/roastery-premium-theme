# خطوات رفع المشروع إلى GitHub

## الطريقة الأولى: من Terminal

افتح Terminal داخل مجلد المشروع ثم نفذ:

```bash
git init
git add .
git commit -m "Initial Roastery Premium Salla theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roastery-premium-theme.git
git push -u origin main
```

غيّر `YOUR_USERNAME` إلى اسم حسابك.

## الطريقة الثانية: باستخدام GitHub CLI

إذا كان عندك GitHub CLI مثبت:

```bash
gh auth login
gh repo create roastery-premium-theme --private --source=. --remote=origin --push
```

## بعد الرفع

- ادخل على مستودع GitHub.
- تأكد أن الملفات ظهرت.
- غيّر `repo_url` داخل `twilight.json` إلى رابط المستودع الصحيح.
- اربط المستودع من Salla Partners Portal.
