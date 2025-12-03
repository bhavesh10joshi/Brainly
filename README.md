# Brainly 🧠 — Second-Brain / Knowledge Hub

**Brainly** is a minimal knowledge-hub application to capture ideas, notes, tasks, and resources — all in one place. It emphasizes clarity, fast search, and simple organization, helping you think better, learn faster, and revisit important insights anytime.

---

## 🔎 Table of Contents

- [Features](#features)
- [Tech Stack \& Libraries](#tech-stack--libraries)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Features

- Create, view, and manage notes/resources/tasks in a unified “second brain.”
- Clean UI built with React + TypeScript (frontend).
- RESTful API backend built with Node.js, Express, MongoDB \& Mongoose.
- Password hashing \& security with **bcrypt**.
- Input validation with **Zod**.
- SPA navigation with **react-router-dom**.
- Responsive, modern UI with **Tailwind CSS**.
- Unique IDs generated using **nanoid**.
- Full TypeScript support on both front and backend.

---

## 🛠 Tech Stack \& Libraries

| Layer / Concern | Technology / Library |
| :-- | :-- |
| Frontend | React, TypeScript, Vite, react-router-dom |
| Styling / UI | Tailwind CSS |
| Backend | Node.js, Express, TypeScript, Mongoose |
| Database | MongoDB |
| Auth \& Security | bcrypt |
| Validation | Zod |
| IDs | nanoid |
| CORS | cors |
| Environment Vars | dotenv |


---

## 📁 Project Structure

Brainly/
├── backend/ \# Node.js + Express API
│ ├── src/ \# TypeScript source files
│ ├── .env \# Environment variables
│ ├── package.json
│ └── tsconfig.json
├── frontend/ \# React + Vite + TS Frontend
│ ├── src/
│ ├── package.json
│ └── vite.config.ts
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x)
- MongoDB Atlas or local MongoDB

---

### Setup

#### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/bhavesh10joshi/Brainly.git](https://github.com/bhavesh10joshi/Brainly.git)
cd Brainly

2️⃣ Install Backend Dependencies
cd backend
npm install

3️⃣ Install Frontend Dependencies
cd ../frontend
npm install


🔐 Environment Variables
Create a .env file inside backend:
MONGOOSE_URL=<your-MongoDB-connection-string>
USER_SECRET=<your-user-jwt-secret>
ADMIN_SECRET=<your-admin-jwt-secret>
PORT_NO=3000


▶️ Running the Project
Start Backend
cd backend
npm run dev

Start Frontend
cd frontend
npm run dev

Frontend usually runs at:
http://localhost:5173

Backend runs at:
http://localhost:3000


📘 Usage
Add new notes, links, tasks, or resources.
Share and access your saved content easily.
Secure authentication & validation on every request.
Fast, clean UI optimized using Tailwind + React.

🧭 Future Roadmap
🔍 Full-text search
🏷 Tagging system
☁️ Cloud upload for images/files
📚 Collections / categories
📱 Mobile UI improvements

🤝 Contributing
Pull requests are welcome!
For major changes, open an issue first to discuss what you'd like to change.

📄 License
This project is MIT Licensed.


---

If you want this exported as a **downloadable `.md` file**, tell me and I’ll generate it for y     convert this whole thin into a proffessional readme format for a github repo

Here is the professionally formatted GitHub README.md for your Brainly project, including proper Markdown code blocks for the backend dependencies installation:

```markdown
# Brainly 🧠 — Second-Brain / Knowledge Hub

**Brainly** is a minimal knowledge-hub application to capture ideas, notes, tasks, and resources — all in one place. It emphasizes clarity, fast search, and simple organization, helping you think better, learn faster, and revisit important insights anytime.

---

## 🔎 Table of Contents

- [Features](#features)
- [Tech Stack & Libraries](#tech-stack--libraries)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Features

- Create, view, and manage notes/resources/tasks in a unified “second brain.”
- Clean UI built with React + TypeScript (frontend).
- RESTful API backend built with Node.js, Express, MongoDB & Mongoose.
- Password hashing & security with **bcrypt**.
- Input validation with **Zod**.
- SPA navigation with **react-router-dom**.
- Responsive, modern UI with **Tailwind CSS**.
- Unique IDs generated using **nanoid**.
- Full TypeScript support on both front and backend.

---

## 🛠 Tech Stack & Libraries

| Layer / Concern      | Technology / Library                  |
|---------------------|-------------------------------------|
| Frontend            | React, TypeScript, Vite, react-router-dom |
| Styling / UI        | Tailwind CSS                        |
| Backend             | Node.js, Express, TypeScript, Mongoose     |
| Database            | MongoDB                            |
| Auth & Security     | bcrypt                            |
| Validation          | Zod                               |
| IDs                 | nanoid                            |
| CORS                | cors                             |
| Environment Vars    | dotenv                           |

---

##Images :-
<img width="500" height="500" alt="Add a heading" src="https://github.com/user-attachments/assets/28fd2688-541d-4533-bf58-80c5e94cb3a6" />
<img width="1914" height="925" alt="Screenshot 2025-12-03 192707" src="https://github.com/user-attachments/assets/5bdfe287-e3c8-4d9b-92ae-c91598b36823" />
<img width="1917" height="931" alt="Screenshot 2025-12-03 192726" src="https://github.com/user-attachments/assets/43854222-c6c7-4cc6-9562-9980d103bbc7" />
<img width="1915" height="924" alt="Screenshot 2025-12-03 192927" src="https://github.com/user-attachments/assets/96e85fa1-0125-4a26-94bd-c3e6a54868ce" />
<img width="1919" height="930" alt="Screenshot 2025-12-03 192937" src="https://github.com/user-attachments/assets/9b409639-2b7f-4b31-ba5c-1316b4bda33f" />
<img width="1919" height="923" alt="Screenshot 2025-12-03 192947" src="https://github.com/user-attachments/assets/f04c330d-8b26-43cc-bb09-5f47c0b96b42" />

---

## 📁 Project Structure


├── backend
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── src
    │   ├── Nanoid
    │   │   └── Nanoid.ts
    │   ├── Router
    │   │   └── user.ts
    │   ├── db.ts
    │   ├── index.ts
    │   └── middleware
    │   │   └── user.ts
    ├── tsconfig.json
    └── tsconfig.tsbuildinfo
└── frontend
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── public
        └── vite.svg
    ├── src
        ├── App.css
        ├── App.tsx
        ├── Pages
        │   ├── DashBoard.tsx
        │   ├── LogIn.tsx
        │   ├── Sharepage.tsx
        │   ├── SignUp.tsx
        │   ├── Tweets.tsx
        │   └── Videos.tsx
        ├── assets
        │   └── react.svg
        ├── components
        │   ├── Hooks
        │   │   ├── UseContent.tsx
        │   │   ├── UseShareContent.tsx
        │   │   ├── UseTweets.tsx
        │   │   └── UseVideos.tsx
        │   ├── Image
        │   │   ├── Index.tsx
        │   │   └── Logo.tsx
        │   ├── Media
        │   │   └── BrainlyLogo.svg
        │   ├── Util.tsx
        │   ├── icons
        │   │   ├── ClipBoardIcon.tsx
        │   │   ├── CloseIcon.tsx
        │   │   ├── DeleteIcon.tsx
        │   │   ├── Links.tsx
        │   │   ├── LogoutIcon.tsx
        │   │   ├── PageIcon.tsx
        │   │   ├── ShareIcon.tsx
        │   │   ├── Tags.tsx
        │   │   ├── TwitterIcon.tsx
        │   │   ├── YoutubeIcon.tsx
        │   │   ├── index.tsx
        │   │   └── plusicon.tsx
        │   └── ui
        │   │   ├── Button.tsx
        │   │   ├── Cards.tsx
        │   │   ├── InputsBox.tsx
        │   │   ├── LoadElement.tsx
        │   │   ├── PopUpWindow.tsx
        │   │   ├── SideBar.tsx
        │   │   ├── SideButton.tsx
        │   │   └── sharepopup.tsx
        ├── index.css
        └── main.tsx
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x)
- MongoDB Atlas or local MongoDB

---

### Setup

#### 1️⃣ Clone the Repository

```

git clone https://github.com/bhavesh10joshi/Brainly.git
cd Brainly

```

#### 2️⃣ Install Backend Dependencies

```

cd backend
npm install

```

#### 3️⃣ Install Frontend Dependencies

```

cd ../frontend
npm install

```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory with the following:

```

MONGOOSE_URL=<your-MongoDB-connection-string>
USER_SECRET=<your-user-jwt-secret>
ADMIN_SECRET=<your-admin-jwt-secret>
PORT_NO=3000

```

---

## ▶️ Running the Project

Start the backend server:

```

cd backend
npm run dev

```

Start the frontend server:

```

cd frontend
npm run dev

```

Frontend usually runs at:  
http://localhost:5173

Backend runs at:  
http://localhost:3000

---

## 📘 Usage

- Add new notes, links, tasks, or resources.
- Share and access your saved content easily.
- Secure authentication & validation on every request.
- Fast, clean UI optimized using Tailwind + React.

---

## 🧭 Future Roadmap

- 🔍 Full-text search
- 🏷 Tagging system
- ☁️ Cloud upload for images/files
- 📚 Collections / categories
- 📱 Mobile UI improvements

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is MIT Licensed.

