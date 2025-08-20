🔍 SearchVision – AI & IoT-Based Visual Assistance for the Blind
📖 Overview

SearchVision is a smart mobility and navigation assistance system designed to enhance independence and safety for visually impaired users. The project integrates IoT (NodeMCU) with AI-powered scene understanding to detect obstacles, describe surroundings, and provide real-time spoken feedback for indoor and outdoor navigation.

By combining distance sensors, image captioning models, and scene graph-based analysis, SearchVision creates a robust assistive technology that improves spatial awareness during mobility.

🚀 Features

📷 Scene Graph–Based Image Understanding

Captures images and generates semantic descriptions of objects, obstacles, and their relationships.

🦾 IoT Integration with NodeMCU

Uses ultrasonic distance sensors to detect nearby obstacles and trigger real-time alerts.

🗣 Real-Time Spoken Feedback

Provides immediate voice guidance for safe navigation via a web application with TTS (Text-to-Speech).

🌐 Web-Based Accessibility

Built with HTML, CSS, JavaScript, and Node.js backend, accessible on mobile and desktop browsers.

🎯 Pilot Testing

Tested in controlled environments to enhance independence and spatial awareness of users.

🏗 System Architecture
flowchart TD
    subgraph IoT_Device[IoT Layer: NodeMCU + Ultrasonic Sensor]
        A1[Ultrasonic Sensor] -->|Detects obstacle < 100cm| A2[NodeMCU ESP8266]
        A2 -->|Trigger Signal| A3[Mobile Camera App]
    end

    subgraph WebApp[Web Application]
        A3 -->|Capture Image (Base64)| B1[Frontend (HTML, JS)]
        B1 -->|Send Image via API| B2[Backend (Node.js Express)]
    end

    subgraph AI[AI Processing Layer]
        B2 -->|Forward Image| C1[Image Captioning Model]
        C1 --> C2[Scene Graph Analysis]
        C2 -->|Generate Description| B2
    end

    subgraph Output[Feedback Layer]
        B2 -->|Send Description| B1
        B1 --> D1[Text-to-Speech Engine]
        D1 -->|Spoken Feedback| D2[User Headphones/Speaker]
    end

📦 Tech Stack

Hardware: NodeMCU ESP8266, Ultrasonic Distance Sensor, Camera-enabled Mobile Device

Frontend: HTML, CSS, JavaScript (camera access & UI)

Backend: Node.js (Express server, API handling)

AI Models:

Image Captioning (BLIP / Gemini Vision / OpenAI Vision)

Scene Graph–Based Analysis for spatial understanding

Speech: pyttsx3 / Web Speech API for TTS

Database: MongoDB (logs & session data)

🧪 Testing

Place an obstacle within 100 cm → NodeMCU triggers camera capture.

Web app processes the image → AI model generates description.

Description is converted into spoken navigation guidance.

📌 Use Cases

Indoor mobility assistance (avoiding furniture, walls, etc.)

Outdoor navigation (identifying vehicles, people, pathways)

Real-time scene awareness in controlled environments

📊 Project Timeline

March 2025 – April 2025

Designed IoT & AI integration

Built and tested web application

Conducted pilot testing with visually impaired volunteers

🌟 Impact

SearchVision aims to:

Enhance independence of visually impaired users.

Improve spatial awareness during navigation.

Serve as a low-cost assistive solution leveraging AI & IoT technologies.

🤝 Contributors

Sathish Gajula – Developer & Researcher

📜 License

This project is licensed under the MIT License – feel free to use and improve upon it.
