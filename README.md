
# 🚚 DropIt: No-Transport Delivery App

Welcome to DropIt, a unique delivery platform currently under development. DropIt is designed to connect senders and travelers for seamless delivery of goods, eliminating the need for dedicated transport services.

## 🛠️ Development Phase

DropIt is actively being developed, with features being implemented incrementally. Stay tuned for updates and new functionalities!

## ✨ Features (Planned)

- **👤 User Roles**
  - Sender: Create delivery requests.
  - Traveler: Accept requests and earn rewards.

- **📦 Delivery Management**
  - Post and manage delivery requests.
  - Match senders with travelers based on routes and schedules.

- **🔍 Search and Match**
  - Search for travelers by location and availability.

- **💰 Payment and Rewards**
  - Integrated payment gateway for secure transactions.

- **📊 Reporting**
  - Track completed deliveries and traveler performance.

- **🌐 Frontend and Backend Integration**
  - Kotlin for a sleek and user-friendly frontend.
  - Spring Boot for a robust and scalable backend.

## 🛠️ Tech Stack

| 🖥️ Technology      | 📜 Description                              |
|-----------------|------------------------------------------|
| ☕ Java            | Backend programming language            |
| 🌱 Spring Boot     | Framework for backend development        |
| 🛠️ Spring Data JPA | ORM for database interaction             |
| 🐘 PostgreSQL      | Relational database                     |
| 🧰 Kotlin          | Frontend development                    |
| 🐳 Docker          | Containerization of the application     |

## 📋 Prerequisites

- ☕ Java 17 or higher
- 🛠️ Maven 3.8+
- 🐘 PostgreSQL 13+
- 🧰 Kotlin Compiler

## ⚙️ Installation

1. 📥 Clone the repository:
   ```bash
   git clone https://github.com/your-username/dropit.git
   cd dropit
   ```

2. 🛠️ Set up the database:
   - Create a 🐘 PostgreSQL database and update the `application.properties` file with your database credentials:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/dropit
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```

3. 🚀 Run database migrations:
   ```bash
   mvn flyway:migrate
   ```

4. 🛠️ Build and run the backend:
   ```bash
   mvn spring-boot:run
   ```

5. 🌐 Access the backend API:
   - API Documentation: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

6. 🧰 Set up the frontend:
   - Follow the Kotlin setup instructions in the `frontend` directory.

## 🧪 Testing

- ▶️ Run unit tests for the backend:
  ```bash
  mvn test
  ```

## 📂 Folder Structure

```
|-- src
    |-- main
        |-- java
            |-- com.example.dropit
                |-- controllers
                |-- models
                |-- repositories
                |-- services
        |-- resources
            |-- application.properties
    |-- frontend
        |-- kotlin
            |-- Main.kt
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. 🍴 Fork the repository.
2. 🌱 Create a new branch for your feature.
3. 💾 Commit your changes.
4. 🔄 Open a pull request.

## 📜 License

This project is licensed under the MIT License. See the [📜 LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- 🌱 Spring Boot Community
- 📜 Kotlin Developers

---

Thank you for checking out DropIt! If you have any questions or feedback, feel free to raise an issue or contact the project maintainers.

