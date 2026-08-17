# pojekamlis.online

Польськомовний SSR-сайт на Next.js 16 (App Router), присвячений браузерній
пригодницькій грі у розробці. Головна сторінка — насичена контентом
(лор, механіки, розділи, галерея, FAQ), окрема сторінка `/graj` містить
реально грабельне демо (не заглушку) фрагмента першого розділу.

## Стек

- **Next.js 16** (App Router, SSR / `force-dynamic` на головній) + React 19 + TypeScript
- Власна CSS-система (CSS Modules + design tokens у `globals.css`), без Tailwind і UI-кітів
- Контент типізований і валідований через **Zod** (`src/content/*`)
- Демо-гра: `useReducer`/`useState`-стейт-машина сюжету + власний рендер
  частинок вітру на `<canvas>` (без ігрових бібліотек), таймінг-механіка
  без бекенду
- `next/font` — Fraunces + Sora
- OG/Twitter-зображення генеруються динамічно через `next/og` (`ImageResponse`)
- Жодних брендів, вигаданих назв гри чи логотипів — фавікон абстрактний SVG-знак

## Команди

```bash
npm install
npm run dev      # локальна розробка, http://localhost:3000
npm run build    # продакшн-білд
npm run start    # запуск білда локально
npm run lint     # ESLint (flat config, eslint-config-next)
```

Вимоги: Node.js ≥ 20.9.

## Структура

```
src/app/            # маршрути App Router (/, /graj, юридичні сторінки, sitemap/robots)
src/components/      # UI-компоненти (header, footer, cookie-banner)
src/components/play/ # компоненти демо-гри (WindGauge, WindParticles, PlayDemo)
src/content/         # типізований контент (Zod-схеми + дані): розділи, механіки, FAQ, галерея
public/images/       # 6 SVG-ілюстрацій (концепт-арт), згенеровані без сторонніх сервісів
```

## Деплой на Vercel

1. Створити новий проєкт на [vercel.com](https://vercel.com), імпортувавши
   цей репозиторій / гілку. Next.js визначається автоматично
   (`vercel.json` лише фіксує framework і регіон `fra1`, найближчий до Польщі).
2. Env-змінні не потрібні — сайт не використовує зовнішніх API чи БД.
3. Після першого деплою: **Project → Settings → Domains → Add** →
   ввести `pojekamlis.online` (і за потреби `www.pojekamlis.online`).
4. У DNS-провайдера домену прописати записи, які покаже Vercel
   (зазвичай `A @ 76.76.21.21` для apex-домену та/або
   `CNAME www cname.vercel-dns.com`). Точні значення Vercel показує
   в UI під час додавання домену — варто орієнтуватися саме на них.
5. Дочекатися видачі SSL-сертифіката (автоматично, зазвичай кілька хвилин
   після підтвердження DNS).

## Google Ads / RODO — що вже враховано

- Банер згоди на cookie (необхідні / аналітичні / рекламні) з реальним
  збереженням вибору в `localStorage`, без dark patterns.
- `/polityka-prywatnosci`, `/regulamin`, `/cookies`, `/kontakt` — змістовні
  сторінки, а не шаблонні заглушки.
- Чесне позначення статусу кожного розділу гри (demo / w budowie / planowany),
  без фейкових дат релізу, фейкових відгуків чи неіснуючих посилань на
  сторінки додатків.
- `/graj` — це справді робоче демо, а не порожня кнопка «Download».
