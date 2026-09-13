# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a browser-based tool for developers who are choosing what to build
their next project with. Instead of googling "React vs Vue" for the tenth
time, you browse a curated catalog of frontend, backend, database, language,
styling, and DevOps tools side by side, and collect the ones you want into a
personal "stack" — a shortlist you can review, adjust, and clear at any time.

## 🛠️ Built With

- **React 19** (function components + hooks)
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling via the `@tailwindcss/vite` plugin
- **React-Toastify** — toast notifications for stack actions
- **JSON** — local technology dataset, loaded at runtime with `fetch`

## ✨ Features

1. **Build-your-own stack, one click at a time.** Every technology card has an
   "Add to Stack" button; once added, the button locks to "✓ Added to Stack"
   and the item appears in the "Your Stack" sidebar with its icon, name, and
   category, so you always know what's already picked.
2. **Guardrails baked into the interaction.** You can't add the same
   technology twice (you get a warning toast instead), removing one item only
   removes that item, and "Remove All" clears the whole stack in one click —
   all confirmed with react-toastify notifications.
3. **Fully responsive, data-driven layout.** The technology grid reflows from
   3 columns on desktop to 2 on tablet to 1 on mobile, the navbar collapses
   into a hamburger menu on small screens, and every technology is loaded
   from a local JSON file (not hardcoded) with a real loading state while it
   fetches.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📖 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. It's used in React because it lets you describe what the
UI should look like right next to the logic that drives it, instead of
building elements manually with `React.createElement`. Under the hood, JSX is
just compiled into regular JavaScript function calls.

**2. What is the difference between props and state?**
Props are values passed **into** a component from its parent — the component
receiving them can't change them, only read them. State is data a component
**owns and manages internally**, and it can change over time (usually in
response to user actions). In this project, `tech` passed into `TechCard` is
a prop, while the `stack` array inside `TechGrid` is state.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local data, and
re-renders the component whenever that data changes. I used it in `Navbar`
for the mobile menu's open/closed flag, and in `TechGrid` for the list of
technologies fetched from JSON, the array of technologies the user has added
to their stack, and the loading flag while data is being fetched.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside of rendering, like
fetching data, subscribing to something, or manually touching the DOM — after
a component renders. Fetching is a side effect, not something that should
happen during render, so I used `useEffect` with an empty dependency array in
`TechGrid` to fetch `technologies.json` exactly once, right after the
component mounts, and then store the result in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart between renders, so it
knows which ones were added, removed, or reordered instead of re-rendering
the entire list from scratch. Without a stable, unique key, React can mix up
which DOM node belongs to which item, causing bugs and wasted re-renders. In
this project, each technology's `id` is used as its key when mapping over the
technology list and the stack list.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. I used it in `YourStack.jsx`: if
`stack.length === 0`, it renders a placeholder message telling the user to
add a technology; otherwise, it renders the actual list of stacked items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example, `TechGrid`
passes each `tech` object and an `isAdded` boolean down to `TechCard`. For a
child to send something back up, the parent passes a **function** down as a
prop, and the child calls that function (usually with some data as an
argument) when something happens. `TechGrid` passes its `handleAdd` function
down to `TechCard` as the `onAdd` prop, and when a card's button is clicked,
it calls `onAdd(tech)`, which runs the parent's logic and updates state that
lives in `TechGrid`.

## 📤 Submission

- GitHub Repository Link:
- Live Site Link:
