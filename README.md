# 🎰 Mega Raffle Picker  
A modern, animated raffle picker built using **Next.js (App Router)**, **Tailwind CSS**, **ShadCN UI**, and **Canvas Confetti**.  
Paste your participant names → click **Pick Winner** → enjoy smooth animations + confetti! 🎉

🔗 **Live Demo:**  
👉 https://raffle-app-steel.vercel.app

---

## 🏷️ Badges

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-00d8ff?style=for-the-badge&logo=react&logoColor=white)
![ShadCN](https://img.shields.io/badge/ShadCN-000000?style=for-the-badge)

---

## 📸 Screenshots

> 👉 Add your screenshot inside `/public/screenshot.png`

### 🖼️ App Preview  
![Screenshot](./public/screenshot.png)

---

## 🎞️ Demo Animation (GIF)
> You can add a GIF later by recording with **ScreenStudio / OBS / RecordIt**  
> File: `public/demo.gif`

![Demo GIF](./public/demo.gif)

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🎡 Animated Winner Picker | Choose random winner smoothly |
| 🎉 Confetti Effects | Beautiful confetti burst on result |
| 🧑‍🤝‍🧑 Participant Input | One name per line, auto-count |
| 🔄 Reset | Clears list & winner |
| 📋 Copy Winner | One-click copy |
| 🟦 Modern UI | Tailwind + ShadCN UI |
| 📱 Responsive | Works on all screens |
| ⚡ Lightning Deploys | Powered by Vercel |

---

## 🧠 Architecture

```

raffle-app/
├── app/
│   └── page.tsx        # Main UI
├── components/
│   └── ui/             # ShadCN components
├── lib/
│   └── utils.ts        # Utility helpers
├── public/
│   ├── screenshot.png  # Add your screenshot here
│   └── demo.gif        # Optional
├── package.json
└── tailwind.config.js

````

---

## 🛠 Tech Stack

- **Next.js 14**
- **React 18**
- **Tailwind CSS**
- **ShadCN UI**
- **Canvas Confetti (dynamic import)**
- **Lucide React Icons**
- **TypeScript**
- **Vercel Deployment**

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Rishabhdev007/raffle-app
cd raffle-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

### App runs at:

👉 `http://localhost:3000`

---

## 🎉 Deployment (Vercel)

This app is built for Vercel.

Every push to GitHub = auto-deploy.

Deploy manually:

```bash
vercel deploy
```

Live URL example:

```
https://raffle-app-steel.vercel.app
```

---

## 🧩 Environment Variables (Not Required)

This project uses no env vars.

---

## 📌 Known Issues (Solved)

### 🔧 Confetti Error in App Router

Fixed by using **dynamic import**:

```ts
const confetti = (await import("canvas-confetti")).default;
```

---

## 🧭 Roadmap

### ✔ Completed

* Base UI
* Random winner picker
* Confetti
* Neon theme

### 🔜 Coming Soon

* 🎡 Full spinning wheel
* 🔊 Sound effects
* 🌙 Dark/light toggle
* 2–5 winners at once
* LocalStorage participant save
* Export winner results
* Animated confetti variations
* Winner glow highlight

---

## 🤝 Contributing

PRs welcome! Feel free to open issues for features or bugs.

---

## 👨‍💻 Author

**Chandan Kumar**
Web3 & Frontend Developer
🔗 GitHub: [https://github.com/Rishabhdev007](https://github.com/Rishabhdev007)
🔗 Live Projects: [https://raffle-app-steel.vercel.app](https://raffle-app-steel.vercel.app)

---

## ⭐ Support

If you like this project, please **give it a ⭐ on GitHub** — it helps a lot!

```bash
⭐ Star this repo
```
