# 🌴 Break Boredom - Vacation Event Discovery

![Main Interface](https://via.placeholder.com/800x450.png?text=Break+Boredom+Main+Interface)

**Break Boredom** is a premium, high-aesthetic web application designed to help travelers find unique, local, and institutional events. From photography walks in Tokyo to tech hackathons in Bangalore, this platform bridges the gap between travelers and local communities.

---

## 🚀 Live Demo
[View Project Live](https://maria325500-lang.github.io/Break-Boredom/public/index.html)  
*(Note: Replace with your actual deployment link once pushed)*

---

## ✨ Features
- **Smart Event Sorting**: Sort by "Upcoming First", "Most Recent", or find events closest to a custom date.
- **Interactive Leaflet Maps**: View the exact location of every event with integrated live maps.
- **Dynamic Distance Calculation**: Input your current city to see the precise distance to any event globally.
- **Real-time Search & Filter**: Instant, additive filtering for categories (Hackathons, Creative, Wellness) and text search.
- **Persistent Interaction**: Searches stay active across categories, with a 5-minute inactivity auto-clear.
- **Premium Glassmorphism UI**: High-end aesthetic with light/dark mode support and smooth scrolling.

---

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3 (Custom Glassmorphism Design)
- **Logic**: JavaScript (ES6+)
- **Icons**: Remix Icon
- **Maps**: Leaflet.js
- **Fonts**: Google Fonts (Outfit)
- **Version Control**: Git

---

## 📁 Project Structure
```text
break-boredom/
├── public/                 # Static assets
│   ├── index.html          # Main entry point
│   └── style.css           # Custom design system
├── src/                    # Core logic
│   └── app.js              # Event data & application logic
├── docs/                   # Documentation & Diagrams
├── .gitignore              # Ignored files
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 📐 Architecture
The application follows a **Modular Frontend Architecture**:
1. **Data Layer**: Centralized `eventsData` array with geospatial and temporal metadata.
2. **Logic Layer**: `applyFilters` and `renderEvents` manage the UI state based on user input.
3. **Integration Layer**: Leaflet.js handles map rendering and coordinate calculations.
4. **Presentation Layer**: A CSS-based design system using variables for theming and consistency.

---

## 📦 Installation & Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/maria325500-lang/Break-Boredom.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd Break-Boredom
   ```
3. **Run locally**:
   Since it's a static site, you can simply open `public/index.html` in your browser, or use a local server:
   ```bash
   npx serve public
   ```

---

## 📸 Screenshots
*Include 3+ screenshots here after capturing them from the browser*
1. [Landing Page](https://via.placeholder.com/400x225.png?text=Landing+Page)
2. [Event Details with Map](https://via.placeholder.com/400x225.png?text=Event+Map)
3. [Search & Filtering](https://via.placeholder.com/400x225.png?text=Search+Filter)

---

## 👥 Team
- **Maria** - Lead Developer & Designer

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤖 AI Acknowledgment
This project was developed with the assistance of **Antigravity (Google DeepMind)** for architectural planning, complex logic implementation (mapping/sorting), and UI optimization.
