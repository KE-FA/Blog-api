
# Blog API

## 📘 Description

The **Blog API** is a RESTful backend application that allows users to create, view, and manage blog posts. It is built using modern web technologies. The application interacts with a PostgreSQL database using **Prisma ORM** and exposes various endpoints using **Express.js**.

---

## ⚙️ Technologies Used

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web application framework  
- **Prisma ORM** – For database access  
- **PostgreSQL** – Relational database  
  
---

## 🚀 Endpoints

### 🔹 Users

#### `GET /users`
- **Description:** Returns a list of all users  
- **Sample Response:**
```json
[
    {
        "id": "e8a11bdf-23a3-417b-8758-9092b6f363bc",
        "firstName": "Beatrix",
        "lastName": "Spearett",
        "emailAddress": "bspearett0@earthlink.net",
        "userName": "bspearett0"
    },
    {
        "id": "74ac83f4-092c-48a5-aca0-c5fd5ff63bce",
        "firstName": "Merrily",
        "lastName": "Onyon",
        "emailAddress": "monyon1@comsenz.com",
        "userName": "monyon1"
    },
    {
        "id": "7760e850-4a0d-4b82-bf71-cfb3a50d9800",
        "firstName": "Vale",
        "lastName": "Redit",
        "emailAddress": "vredit2@senate.gov",
        "userName": "vredit2"
    }
]
```

#### `GET /users/:id`
- **Description:** Returns a single user by ID along with their blog posts  
- **Sample Response:**
```json
[
    {
        "postId": "0a513e57-69e3-4b93-b7c6-28b6ed185097",
        "title": "Animal",
        "content": "A zero-calorie coconut oil spray for cooking and baking.",
        "createdAt": "2025-06-15T08:13:48.138Z",
        "lastUpdated": "2025-06-15T08:13:48.138Z",
        "isDeleted": false,
        "userid": "7a36242e-0909-4020-8211-365454ff5c37"
    },
    {
        "postId": "c5b1028c-af28-440f-9638-864c7db90674",
        "title": "30 Angry Men",
        "content": "A light and breezzy top ideal for warm days.",
        "createdAt": "2025-06-15T08:02:37.137Z",
        "lastUpdated": "2025-06-15T08:35:36.684Z",
        "isDeleted": false,
        "userid": "74ac83f4-092c-48a5-aca0-c5fd5ff63bce"
    }
]
```

---

### 🔹 Posts

#### `GET /posts`
- **Description:** Returns a list of all blog posts  
- **Sample Response:**
```json
[
    {
        "postId": "0a513e57-69e3-4b93-b7c6-28b6ed185097",
        "title": "Animal",
        "content": "A zero-calorie coconut oil spray for cooking and baking.",
        "createdAt": "2025-06-15T08:13:48.138Z",
        "lastUpdated": "2025-06-15T08:13:48.138Z",
        "isDeleted": false,
        "userid": "7a36242e-0909-4020-8211-365454ff5c37"
    },
    {
        "postId": "c5b1028c-af28-440f-9638-864c7db90674",
        "title": "30 Angry Men",
        "content": "A light and breezzy top ideal for warm days.",
        "createdAt": "2025-06-15T08:02:37.137Z",
        "lastUpdated": "2025-06-15T08:35:36.684Z",
        "isDeleted": false,
        "userid": "74ac83f4-092c-48a5-aca0-c5fd5ff63bce"
    }
]
```

#### `GET /posts/:id`
- **Description:** Returns a single blog post by ID  
- **Sample Response:**
```json
{
    "postId": "c5b1028c-af28-440f-9638-864c7db90674",
    "title": "30 Angry Men",
    "content": "A light and breezzy top ideal for warm days.",
    "createdAt": "2025-06-15T08:02:37.137Z",
    "lastUpdated": "2025-06-15T09:47:05.469Z",
    "isDeleted": false,
    "userid": "74ac83f4-092c-48a5-aca0-c5fd5ff63bce"
}
```

#### `POST /posts`
- **Description:** Creates a new blog post  
- **Request Body:**
```json
{
  "title": "Save the Last Dance",
  "content": "Soft corner protectors to keep babies safe at home.",
  "userid":"e8a11bdf-23a3-417b-8758-9092b6f363bc"

}
```
- **Sample Response:**
```json
{
    "postId": "56103dd7-3e7f-4e1f-a6b6-695b8c7ffbc4",
    "title": "Save the Last Dance",
    "content": "Soft corner protectors to keep babies safe at home.",
    "createdAt": "2025-06-15T09:49:55.423Z",
    "lastUpdated": "2025-06-15T09:49:55.423Z",
    "isDeleted": false,
    "userid": "e8a11bdf-23a3-417b-8758-9092b6f363bc"
}
```

---

## 🛠️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KE-FA/Blog-api.git
   cd BloggingAPI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the root directory and add your PostgreSQL database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   ```

4. **Set up the database with Prisma:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

---

