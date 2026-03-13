# React Protected Routes Demo (Codezoku Day 2)

A simple demo project built with **React + Tailwind CSS + React Router** to explain **Protected Routes**.

This project first demonstrates a **common mistake developers make**, and then shows the **correct solution using a ProtectedRoute component**.

---

# 📚 What This Project Teaches

Many developers hide navigation links when a user is not logged in:

```js
{isLoggedIn && <Link to="/dashboard">Dashboard</Link>}