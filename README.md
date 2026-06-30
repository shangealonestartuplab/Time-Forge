# Time-Forge

An enterprise workforce management platform featuring secure role-based routing, automated HR payroll/attendance tracking, employee dashboards, and an AI-assisted management layer.

# Project Setup & Architecture

## 🚀 Tech Stack

- **Backend Framework:** FastAPI (Python)
- **Frontend Architecture:** React + TypeScript + Tailwind CSS
- **Database Engine:** PostgreSQL / Supabase
- **Local Development Environment:** Docker (or standard local Python/Node runtimes)

## 🛠️ Prerequisites

Before running the application locally, ensure you have the following installed:

1. Python 3.10+
2. Node.js (v18+) & npm/pnpm
3. Docker Desktop (if containerizing the local database)
4. WSL2 (for Windows development)

What exactly is Laravel?
Laravel is a very popular, heavy-duty web framework written in PHP.

It is famous for being "batteries-included." When you start a Laravel project, it immediately hands you a massive toolkit: a built-in database ORM (Eloquent), pre-configured authentication, routing, and email handling. It dictates a very strict structure for how your folders and logic should be organized. It is an excellent tool for building traditional web applications quickly, but it forces you to do things "the Laravel way."

Why FastAPI is a better fit for this project:
FastAPI, written in Python, is the exact opposite. It is a "micro-framework." It gives you lightning-fast routing and automatic API documentation, but leaves it up to you to choose your database tools and structure.

More importantly, for a platform like TimeForge that relies on an AI-assisted management layer, a Python backend is a massive advantage. Writing the backend in Python means your server can communicate natively with AI models, machine learning algorithms, and deep learning frameworks without having to build bridge APIs between a PHP server and a separate Python microservice. It keeps your architecture clean and highly performant.