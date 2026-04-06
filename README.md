# Drizzle ORM + TypeScript 

A simple TypeScript script that demonstrates how to interact with a PostgreSQL database using **Drizzle ORM**. This project shows how to define a schema, push it to a remote database, and perform basic CRUD operations (Insert and Fetch).

##  Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (Supabase)
- **Executor**: tsx (TypeScript Execute)

##  Project Structure

- `src/db/schema.ts`: Database table definitions using Drizzle's PG Core.
- `src/db/index.ts`: Database connection and Drizzle client initialization.
- `src/index.ts`: Sample script to reset, insert, and fetch users.
- `drizzle.config.ts`: Configuration for Drizzle Kit (schema pushes and migrations).

##  Setup & Installation

### 1. Prerequisites
- Node.js installed.
- A PostgreSQL database (e.g., [Supabase](https://supabase.com/)).

### 2. Clone and Install
```bash
git clone https://github.com/Ossamamajid143/Drizzle-kit.git
cd Drizzle-kit
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add your PostgreSQL connection string:
```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

### 4. Database Sync
Push the schema to your database:
```bash
npm run db:push
```

##  Usage

Run the main application script:
```bash
npm run dev
```

### Example Output
```text
Starting Drizzle ORM
Resetting and inserting users

Users List:
1. John Doe - john@example.com
2. Alice - alice@example.com
```

##  Features
- **Clean resets**: Automatically clears the table before operations for consistent testing.
- **Strict Typing**: Fully typed with TypeScript to ensure no `any` types are used.
- **Drizzle Kit Integration**: Easy schema synchronization without manual SQL.
