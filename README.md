// README.md

# 📸 CaptionCrafter AI

Generate engaging social media captions in seconds with the power of AI. Tailored for content creators, marketers, and businesses.

---

## 🚀 Features

- Input a topic or idea
- Choose a tone (Witty, Professional, Friendly, etc.)
- AI-generated caption with relevant hashtags
- Copy to clipboard or download
- Optional: Save drafts (coming soon)
- Optional: Auto-schedule posts with n8n (coming soon)

---

## 🛠 Tech Stack

- **Frontend**: React + TypeScript
- **UI**: ShadCN UI + Tailwind CSS
- **Backend**: Node.js + Express or Firebase Functions
- **AI**: OpenAI API (GPT-4 Turbo)
- **Database**: Supabase / Firebase
- **Auth** (optional): Clerk / Auth.js
- **Extras**: n8n, Unsplash API (for image suggestions)

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── CaptionForm.tsx         // Input form
│   ├── GeneratedCaption.tsx    // Output area
│   └── ToneSelector.tsx        // Tone dropdown
├── pages/
│   └── index.tsx               // Main page
├── utils/
│   └── api.ts                  // API call logic
├── hooks/
│   └── useGenerateCaption.ts   // AI logic with useState + useEffect
├── styles/
│   └── globals.css             // Tailwind styles
└── App.tsx                     // Root app structure
```

---

## 🔧 How to Run Locally

```bash
git clone https://github.com/yourusername/captioncrafter-ai.git
cd captioncrafter-ai
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file:
```env
OPENAI_API_KEY=your_openai_key_here
```

---

## 🧠 AI Prompt Example
```ts
const prompt = `
Generate a social media caption for the following topic: "${topic}"
Tone: ${tone}.
Include 3-5 relevant hashtags.
Keep it under 250 characters.
`;
```

---

## 🧪 Future Roadmap

- [ ] Add login and user-specific caption history
- [ ] Integrate Unsplash API for image suggestions
- [ ] Connect to Buffer or n8n for scheduling
- [ ] Analytics dashboard (caption performance tracking)

---

## 🧑‍💻 Author

Made with 💻 by HarziizDev — follow for more https://github.com/Harziz712/
