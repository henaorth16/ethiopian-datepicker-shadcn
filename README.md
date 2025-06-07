# Ethiopian Date Picker (ShadCN Styled)

A modern, lightweight, and customizable Ethiopian calendar date picker built with [React](https://react.dev/), [ShadCN/UI](https://ui.shadcn.dev/), [Tailwind CSS](https://tailwindcss.com/), and [kenat](https://www.npmjs.com/package/kenat).

📅 Supports Ethiopian & Gregorian calendar views  
🎨 Beautifully styled using ShadCN components  
⚡️ Fast and fully typed with TypeScript  
📦 Easy to integrate in any React/Next.js app

![ethiopian-datepicker-screenshot](https://user-images.githubusercontent.com/your-username/eth-datepicker-shadcn-screenshot.png)

---

## ✨ Features

- Ethiopian and Gregorian calendar dual display
- Styled with Tailwind + ShadCN
- Easily navigable by month
- Lightweight, dependency-aware
- Simple integration into any React or Nextjs project

---

## 📦 Installation

```bash
npm install ethiopian-datepicker-shadcn
```

or

```bash
yarn add ethiopian-datepicker-shadcn
```

---

## 🚀 Usage

```tsx
import React, { useState } from 'react';
import { EthiopianDatePicker } from 'ethiopian-datepicker-shadcn';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="p-4">
      <EthiopianDatePicker
        value={selectedDate || undefined}
        onChange={(date) => {
          setSelectedDate(date);
          console.log('Selected Ethiopian Date:', date);
        }}
        useGeez={false}
      />
    </div>
  );
}
```

> ☝️ Ensure your app is already configured to use Tailwind CSS and ShadCN components.

---

## 🧱 Props

| Prop       | Type      | Description                                 |
|------------|-----------|---------------------------------------------|
| `value`    | `object`  | Current selected date (Ethiopian or null)   |
| `onChange` | `function`| Callback when a date is selected            |
| `useGeez` | `boolean` | makes the number format in Ge'ez (Amharic)  |
| `includeGregorian` | `boolean` | includes gregorian format  |
---

## 🖼 Screenshot

![Screenshot](https://user-images.githubusercontent.com/henaorth16/eth-datepicker-shadcn-screenshot.png)

---

## 🔧 Tailwind Setup (if not yet installed)

Make sure your project is Tailwind-enabled. If not:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to your `tailwind.config.js`:

```js
content: ["./src/**/*.{js,ts,jsx,tsx}"]
```

Add to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🙏 Credits

- Calendar logic powered by [kenat](https://www.npmjs.com/package/kenat)
- UI components by [ShadCN UI](https://ui.shadcn.dev/)
- Icons by [Lucide](https://lucide.dev/)

---

## 📄 License

MIT License © 2025 [Henaorth16](https://github.com/henaorth16)