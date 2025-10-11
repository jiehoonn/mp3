import headshot from '../../assets/headshot.jpg';

export default function Home() {
    return (
        <main>
            <div className="content-left">
                <img src={headshot} alt="Profile Picture"/>
            </div>
            <div className="content-right">
                <h2>Home</h2>
                <p>
                    Hello! My name is Jiehoon Lee, and I am a dedicated and passionate individual with a strong interest in
                    technology and innovation. I am currently pursuing my studies in computer science, where I have developed a
                    solid foundation in programming, algorithms, and software development. I am eager to apply my skills and
                    knowledge to real-world challenges and contribute to impactful projects. In addition to my academic
                    pursuits, I enjoy exploring new technologies, participating in coding competitions, and collaborating with
                    peers on various projects. My goal is to continuously learn and grow in the field of technology while making
                    meaningful contributions to the community.
                </p>
            </div>
        </main>
    )
}