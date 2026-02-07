# Waitlist App – Internal Tools Access

## 📌 Project Overview
This project is a simple waitlist page where users can request access to internal tools. The page contains a form with a business email field and a text area where users explain why they need access. The goal was to follow all the given UI and validation constraints using Next.js and Tailwind CSS.

---

## 🛠️ Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Hosted on Netlify

---

## ✅ How I Implemented the Requirements

### 🎨 UI Design
I used a full-screen grey background with the color #f3f4f6 and placed a white card in the center of the page using flexbox. The card has rounded corners and a slight shadow to make it stand out. Inside the card, I kept the UI simple with a title, one input field, one text area, and a submit button that reads “Request Access Token” exactly as required.

---

### 🔐 Email Validation (Business Email Only)
For email validation, I did not rely only on HTML required attributes. Instead, I manually checked the email in JavaScript before submission. I split the email string at the “@” symbol to extract the domain and compared it with a list of blocked domains like gmail.com, yahoo.com, and outlook.com. If the domain matched any of these, I showed the error message “Business emails only.” and prevented the form from submitting.

---

### ✍️ Reason Field Validation 
I stored the text area input in React state and checked its length every time the user typed. If the length was less than 20 characters, I displayed an error message and also showed a live character count below the text box so the user knows how much more they need to write. The form only proceeds when the text is at least 20 characters long.

---

### ✅ Success State
I used a boolean state variable called `submitted` to control what is shown on the screen. When the form passes all validations, I set this state to true, which makes the form disappear and replaces it with the message: “You have been added to the queue.” No backend or database was used for this.

---

## 🚀 Deployment Pipeline
I created a GitHub repository for this project and pushed all my code to the main branch. Then I connected this repository to Netlify so that every time I commit and push changes to main, the live site automatically rebuilds and updates without any manual deployment.

---

## 🐞 One Problem I Faced & How I Fixed It

**Problem:**  
When deploying to Netlify, the build failed because of a TypeScript error. It complained that the form submit event parameter had an implicit “any” type, which is not allowed in production builds.

**Solution:**  
I fixed this by explicitly typing the event parameter as `React.FormEvent<HTMLFormElement>` in my `handleSubmit` function. After adding this type, I committed the change, pushed it to GitHub, and Netlify successfully built and deployed the site.

---

## 🌐 Live Site
Link: https://waitlist-app-by-pj.netlify.app/
