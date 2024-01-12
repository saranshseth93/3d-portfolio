import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import animationData from "../assets/animations/contact.json";
import Lottie from "lottie-react";
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Aim_Right_Shoot");
  const handleBlur = () => setCurrentAnimation("Idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("Damage_Light");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Saransh Seth",
          user_email: form.email,
          to_email: "saranshseth93@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("Idle");
            setForm({
              name: "",
              user_email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("Idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">
            Get{" "}
            <span className="inline-flex items-center">
              <span className="blue-gradient_text drop-shadow font-semibold">
                in Touch
              </span>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "70px", margin: "0 10px" }}
              />
            </span>
          </h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="John@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={4.5} />
            <ambientLight intensity={5} />
            <pointLight position={[5, 10, 0]} intensity={5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={4}
            />

            {/* <Suspense fallback={<Loader />}> */}
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, -5, -10]}
              rotation={[-11, 0, 0]}
              scale={[0.06, 0.06, 0.06]}
            />
            {/* </Suspense> */}
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
