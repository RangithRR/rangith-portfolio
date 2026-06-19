import { motion } from "framer-motion";

export default function App() {
  const skills = [
    "AWS EC2",
    "AWS S3",
    "IAM",
    "VPC",
    "CloudWatch",
    "Linux",
    "OSPF",
    "VLAN",
    "Routing & Switching",
    "TCP/IP",
    "Subnetting",
    "Troubleshooting",
  ];

  const projects = [
    "Employee Directory",
    "AWS EC2 Web Hosting",
    "OSPF Routing Configuration",
    "Enterprise Network Design",
    "Linux Administration Lab",
  ];

  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Floating Clouds */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        style={{
          position: "fixed",
          top: "10%",
          left: "10%",
          fontSize: "60px",
          opacity: 0.2,
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        style={{
          position: "fixed",
          top: "20%",
          right: "10%",
          fontSize: "70px",
          opacity: 0.2,
        }}
      >
        ☁️
      </motion.div>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontSize: "60px",
            color: "#FF9900",
          }}
        >
          Rangith R R
        </motion.h1>

        <h2>AWS Cloud & Network Support Engineer</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          Computer Science Engineering graduate passionate about AWS Cloud,
          Linux Administration, Networking and IT Infrastructure.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="https://github.com/RangithRR"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#FF9900",
              padding: "12px 20px",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              margin: "10px",
            }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ranjith-r-r-62903333b/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#38BDF8",
              padding: "12px 20px",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              margin: "10px",
            }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#FF9900" }}>Technical Skills</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          {skills.map((skill) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={skill}
              style={{
                background: "#1E293B",
                padding: "15px",
                borderRadius: "10px",
                width: "180px",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#FF9900" }}>Projects</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={project}
              style={{
                background: "#1E293B",
                width: "280px",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>{project}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#FF9900" }}>Certification</h2>

        <div
          style={{
            background: "#1E293B",
            maxWidth: "500px",
            margin: "30px auto",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>AWS Cloud Technical Essentials</h3>
          <p>Completed via Coursera</p>

          <a
            href="https://drive.google.com/file/d/1MIpFyiKxn3Z0DGBLH30hRBDkWJIJ7as6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#FF9900",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            View Certificate
          </a>
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#FF9900" }}>Education</h2>

        <p>
          <strong>B.E Computer Science Engineering</strong>
          <br />
          Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
        </p>

        <br />

        <p>
          <strong>
            Abraham James Memorial Matriculation Higher Secondary School
          </strong>
          <br />
          2020 - 2022
        </p>
      </section>

      {/* Contact */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#FF9900" }}>Contact</h2>

        <p>
          Email:{" "}
          <a
            href="mailto:rangith.rr0@gmail.com"
            style={{
              color: "#38BDF8",
              textDecoration: "none",
            }}
          >
            rangith.rr0@gmail.com
          </a>
        </p>

        <p>📍 Marthandam, Tamil Nadu</p>
      </section>
    </div>
  );
}
