Design a premium, responsive user dashboard UI for an online competitive exam platform (like Testbook) using Apple-style aesthetics. The dashboard should follow a glassmorphism theme with soft shadows, SF Pro-inspired typography, and subtle animations.

## Layout Structure
Create a clean, grid-based layout divided into top and main sections with side padding and generous spacing between cards.

---

## Components to Include:

### 1. **HeaderBar**
- User profile picture (circular)
- Greeting with user name (“Hi, Rahul 👋”)
- Current exam goal (e.g., “Preparing for SSC CGL”)
- Notification bell with badge count

---

### 2. **StatsOverview Card (Grid of 4)**
Four small glass cards with the following stats:
- ✅ Total Tests Taken
- 🏆 Best Rank Achieved
- 📊 Avg. Accuracy (%)
- ⏱️ Time Spent on Platform

Each should include:
- Icon
- Label
- Value
- Micro-animation on hover (e.g., slight scale-up)

---

### 3. **PerformanceGraph**
- Line or area chart showing user's score trend over the last 5 tests
- Y-axis: Score (%)
- X-axis: Test names/dates
- Hover tooltip for score detail
- Smooth transition animation

---

### 4. **RecentTestsList**
- Card with 3–5 test entries
- Each item should show:
  - Test Name
  - Score (e.g., “78%”)
  - Rank (e.g., “AIR 1250”)
  - Status Badge (Completed / In Progress / Missed)
  - Timestamp (e.g., “2 days ago”)
- Status badges should be color-coded and have a legend below

---

### 5. **LeaderboardCard**
- Glass panel showing:
  - User’s All India Rank
  - Score compared to top 3 users
  - Progress bar showing user's percentile
- Include a small “View Full Leaderboard” button

---

### 6. **UpcomingEventsCard**
- List of upcoming:
  - Live Classes
  - Scheduled Mock Tests
- Each with:
  - Title
  - Date & Time
  - Join / Register button
- Calendar-style layout

---

### 7. **SuggestionsPanel**
- Horizontally scrollable card list
- Based on weak areas, recommend:
  - Specific quizzes
  - Concept videos
  - Articles or revision notes
- Use tag chips (e.g., “Weak in Quant”) and CTA buttons

---

### 8. **AchievementsPanel**
- Grid or carousel of earned badges/certificates
- Show:
  - Icon or badge image
  - Achievement title (e.g., “Mock Master”)
  - Short description
- Option to download certificate

---

## Design Style

- **Glassmorphism**: Use backdrop blur + low-opacity white with soft borders
- **Typography**: Use SF Pro-inspired clean sans-serif fonts
- **Shadows**: Soft, layered shadows to create depth
- **Colors**: Cool, pastel tones (e.g., lavender, sky blue, soft mint)
- **Animations**: Subtle transitions for hover/focus states, loading spinners

Ensure the entire layout is mobile responsive and fully accessible via keyboard.
