# 💸 Investment Calculator

This project is part of a React course project focused on learning and practicing key React concepts such as **component structure**, **state management**, **event handling**, and **dynamic rendering**. The calculator allows users to enter investment data and view yearly growth projections in a structured table format.

## 🛠️ Tech Stack

- **React.js** – Component-based UI development
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Vite** – Fast React dev server (optional if used)
- **Git & GitHub** – Version control and collaboration

---

## 📚 What We Practiced

### ✅ React Fundamentals

- Creating and composing reusable **components**
- Handling **user input** with controlled components
- Using **hooks** like `useState` for managing state
- Implementing **two-way binding** (input fields reflect and update state)

### ✅ Lifting State Up

- Centralizing state in the `App` component
- Passing state and event handlers down via props
- Managing derived values based on multiple inputs

### ✅ Working With Numbers

- Properly **converting string input to numbers**
- Using helper functions to **calculate financial growth**
- Dynamically **generating lists of results** with `.map()`

### ✅ Dynamic Content Rendering

- Displaying calculated investment values in a responsive table
- Formatting currency output with JavaScript's `Intl.NumberFormat`
- Styling the output clearly using conditional rendering and `map`

---

## 🖼️ Features

- 🔢 Enter initial investment, annual contributions, expected return rate, and duration
- 📈 View detailed yearly investment results including:
  - Total investment value
  - Interest earned each year
  - Cumulative interest
  - Capital invested
- 🧠 Real-time calculations and rendering on input change

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   - git clone https://github.com/shefket-mustafa/Investment-calculator.git
2. Install dependencies:
    ```bash
    - npm install
4. Start the development server:
    ```bash
   - npm run dev


  ## 📁 Folder Structure
```bash
  src/
├── components/
│   ├── display/         # Input form
│   ├── header/          # App header
│   └── results/         # Investment results table
├── util/                # Helper functions (e.g., investment calculations)
└── App.jsx              # Root component

