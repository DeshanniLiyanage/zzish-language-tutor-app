# ZzishLang - AI Language Tour Project

**Connecting Cultures, One Word at a Time.**

Welcome to **ZzishLang**, an AI-powered language learning platform designed to help users explore languages while immersing themselves in the cultural context behind them. Built using the **Svelte** framework and integrated with **Hugging Face APIs**, ZzishLang offers a personalized, interactive, and engaging language learning experience.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Future Developments](#future-developments)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

ZzishLang is designed to provide a fresh and meaningful approach to language learning. Unlike traditional apps, ZzishLang integrates language learning with cultural context, offering users a deeper understanding of the nuances, expressions, and behaviors that shape how language is used. The platform is accessible across multiple devices, ensuring inclusivity for all users, whether they prefer PCs, laptops, tablets, or mobile devices.

ZzishLang is also highly customizable, making it a valuable tool for professionals, students, and teachers alike. By leveraging AI-powered features, ZzishLang aims to deliver a personalized and scalable language learning experience.

---

## Features

### Core Features (MVP)
- **Interactive Chat**: Communicate with an AI language tutor for real-time language practice.
- **LLM Integration**: Utilizes Hugging Face models like `opus-mt-en-fr`, `google/gemma-7b`, and `Facebook’s m2m100_418M` for text translation and AI interactions.
- **User-Friendly Interface**: Built with **TailwindCSS** and **Lucide Icons** for a responsive and intuitive design.
- **Deployment on Vercel**: Ensures reliability and ease of access for users.
- **TypeScript Support**: Improves code maintainability and error handling.

### Additional Features
- **Topic-Based Vocabulary Selection**: Choose specific topics to access tailored vocabulary based on your interests.
- **Text Translation**: Translate text into multiple languages using Hugging Face APIs.
- **Achievement Notifications**: Receive progress notifications to stay motivated.
- **Progress Tracking**: Monitor your learning journey with detailed analytics.
- **App Navigation Menu**: Easily access key sections like Challenges, About, Resources, Progress View, and Friends.

---

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide Icons
- **IDE**: VSCode
- **Hosting**: Vercel
- **Version Control**: GitHub
- **LLM API**: Hugging Face (`opus-mt-en-fr`, `google/gemma-7b`, `Facebook’s m2m100_418M`)

---

## Installation

To set up ZzishLang locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DeshanniLiyanage/zzish-language-tutor-app
   cd zzishlang
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Hugging Face API keys**:
   - Create a `.env` file in the root directory.
   - Add your Hugging Face API token:
     ```env
     VITE_HUGGING_FACE_API_KEY=your_api_key_here
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   - Visit `http://localhost:5173` in your browser to explore ZzishLang.

---

## Usage

1. **Interactive Chat**:
   - Start a conversation with the AI tutor to practice your language skills.
   
2. **Text Translation**:
   - Input text and select the target language for instant translation.

3. **Topic-Based Vocabulary**:
   - Choose a topic to learn relevant vocabulary tailored to your interests.

4. **Progress Tracking**:
   - Monitor your learning progress and achievements in the Progress section.

5. **Challenges**:
   - Engage in language challenges to test and improve your skills.

---

## Future Developments

ZzishLang is continuously evolving. Here are some planned features:

- **User Authentication**: Sign in/up via email and social logins (Google, Facebook, etc.).
- **Multilingual Prompt Input**: Set your preferred language for AI interactions.
- **Theming Options**: Choose from light, dark, or custom themes.
- **Personalized Learning Experience**: AI adapts responses based on user proficiency.
- **Daily/Monthly Challenges**: Gamified challenges to encourage engagement.
- **Structured Language Courses**: AI-generated courses for guided learning.
- **Mobile App Development**: A more interactive mobile experience.
- **Social Features**: Connect with friends for collaborative learning.
- **Expanded Tutor Support**: Additional languages and tutors.

---

## Contributing

We welcome contributions from the community! If you'd like to contribute to ZzishLang, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## License

ZzishLang is open-source software licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- **Hugging Face**: For providing powerful NLP models and APIs.
- **Svelte**: For enabling the creation of a fast and responsive user interface.
- **Vercel**: For seamless deployment and hosting.
- **TailwindCSS**: For simplifying the styling process.
- **Lucide Icons**: For providing a clean and modern icon set.

---

**ZzishLang** is more than just a language learning app—it's a pathway to building a more connected and understanding world. Join us on this journey to explore languages and cultures, one word at a time.

---

**Motive**: Zzish - Front End Developer Job Application - Coding Task  
**Name**: Deshani Liyanage  
**Email**: deshani.work@gmail.com
