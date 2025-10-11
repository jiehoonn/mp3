import Calculator from '../Calculator.tsx';

export default function Projects() {
    return (
        <main>
            <h2 id="home">Projects</h2>
            <h3>
                citryss (Ongoing)
            </h3>
            <p>
                Citryss is a multi-tenant "operator OS" for hospitality groups and their B2B arms. It pairs fully custom Next.js
                websites with a single, role-based admin dashboard where owners and managers can edit menus, publish events, and manage
                first-party reservations across multiple venues—no per-cover marketplace fees, full data ownership. The same dashboard
                also powers a wholesale portal (license verification, editable catalog, orders, customer records), so restaurants and a
                liquor/distributor business can run under one login. Under the hood it's a Django/DRF + PostgreSQL platform with RBAC,
                API keys, tests, and documented APIs designed for speed, reliability, and easy iteration.
            </p>
            <a href="https://www.citryss.com/">
                Link to website (WIP)
            </a>
            <h3>
                Spotify Song Recommender (Ongoing)
            </h3>
            <p>
                Developing a machine learning-powered music recommendation system to improve upon Spotify's current algorithm by better
                understanding individual music taste patterns. Integrating multiple APIs including Spotify API for user data and music
                features, Genius API for lyrical analysis, and Last.fm API for enhanced music metadata. The project aims to create a
                more personalized and accurate music discovery experience through advanced algorithmic analysis of listening habits and
                preferences Help me collect user data and preferences for model training!
            </p>
            <a href="https://github.com/jiehoonn/spotify-song-recommender">
                Link to GitHub Repository
            </a>
            <br/>
            <h3>
                Stock Trading Simulation Platform
            </h3>
            <p>
                Developed a comprehensive stock trading platform using React.js and Flask, featuring secure user account management with
                password hashing and SQLite database integration. The application includes interactive visualizations of historical
                stock trends through Alpha Vantage API integration and React charting libraries, enabling effective market data
                analysis. Containerized with Docker and implemented automated CI/CD pipelines using GitHub Actions to streamline
                deployments and enhance development efficiency.
            </p>
            <a href="https://github.com/jiehoonn/411-finalproject">
                Link to GitHub Repository
            </a>
            <br/>
            <h3>
                chatsqrd
            </h3>
            <p>
                Built an adaptive educational app leveraging conversational AI through OpenAI API and speech recognition via ElevenLabs.
                Implemented a hybrid Firestore database structure that reduced database read operations by ~60% through efficient
                conversation history management. Engineered modular React frontend components and developed a fallback audio processing
                pipeline using MediaRecorder API for seamless speech-to-text transcription across various network and browser
                conditions.
            </p>
            <a href="https://github.com/miloopark/chatchat/tree/dev">
                Link to GitHub Repository
            </a>
            <Calculator />
        </main>
    )
}