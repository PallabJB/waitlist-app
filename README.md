# Waitlist App – Internal Tools Access

## 📌 Project Overview
This project is a basic waitlist page, where users can ask access to internal tools. The page includes a form with a business email field and a text area that users can use to describe why they need access. And the end result should adhere to all the provided UI and validation requirements using Next. js and Tailwind CSS.

---

## 🛠️ Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Hosted on Netlify

---

## ✅ How I Implemented the Requirements

### 🎨 UI Design
Full Screen White CardFlexbox enabled me to make a white card in the middle of the screen.I used full screen grey background with color #f3f4f6 and put a white card in center using flex box. The card comes with round corners and a mild shadow to help the box pop. On the card’s interior, I'm using an extremely clean UI with a title and a field for input text and another for free-form text (i.e., Textarea); there is then the button that says “Request Access Token” exactly as we are told.

---

### 🔐 Email Validation (Business Email Only)
I didn't depended solely on html required attribute for email validation. So rather than moving on I checked the email by hand in JavaScript before submitting it. I broke the email string at the “@” for finding domain and verified against a list of blocked domains e.g gmail. com, yahoo. com, and outlook. com. If the domain matched any of these, I showed the error message “Business emails only.” and prevented the form from submitting.

---

### ✍️ Reason Field Validation 
I stored the input of the text area in React state and checked its length whenever user typed. Then, if the length of the input text is fewer than 20 characters, I output a message error and display a live count character immediately beneath our text box to tell user how much they need to write. This form does not advance if the text is less than 20 characters.


---

### ✅ Success State
I had a boolean state called submitted that controlled the display. If the form passes all validations, I set this state to true, so the form goes away and instead there a message: “You have been added to the queue”. There is not a backend or database used in this.

---

## 🚀 Deployment Pipeline
I opened a GitHub repo for this project and pushed all code to the main branch. Then I linked this repository up to Netlify and whenever you commit a push to main, it triggers a live site rebuild and deploys without having to do any deployment hacks.

---

## 🐞 One Problem I Faced & How I Fixed It

**Problem:**  
When Netlify deployed, it errored out due to a TypeScript issue. It was complaining that parameter of form submit event is implicit “any” and production build do not allow it.

**Solution:**  
I "solved" it by cast the event parametertype to React. FormEvent in my handleSubmit` function. After including this type I committed the change, pushed to GitHub and Netlify built and deployed the site.without errors.

---

## 🌐 Live Site
Link: https://waitlist-app-by-pj.netlify.app/
