# uiverse-clone
Starter project (frontend + backend) for a UI element library similar to uiverse.io.

## Quick start
- Backend: cd backend && npm install && copy .env.example to .env and set values, then npm run dev
- Frontend: cd frontend && npm install && npm run dev



uiverse-clone/
│
├── README.md
│
├── backend/                       # 🔧 Node.js + Express + MongoDB + Cloudinary
│   ├── package.json
│   ├── .env.example
│   ├── server.js
│   ├── puppeteer-screenshot.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Element.js
│   │
│   ├── routes/
│   │   └── elements.js
│   │
│   └── uploads/                   # (optional) local image uploads folder
│
│
└── frontend/                      # 💅 React + Tailwind + Vite
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.cjs
    ├── postcss.config.cjs
    ├── index.html
    │
    └── src/
        ├── index.css
        ├── main.jsx
        ├── App.jsx
        ├── api.js                 ✅ (this file fixes 
        │
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Sidebar.jsx
        │   ├── ElementsGrid.jsx
        │   ├── ElementCard.jsx
        │   ├── CodeViewer.jsx
        │   └── UploadForm.jsx
        │
        └── pages/
            ├── Home.jsx
            ├── Browse.jsx
            ├── ElementDetail.jsx
            └── Upload.jsx
