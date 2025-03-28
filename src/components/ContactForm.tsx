import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Email {
  from_name: string;
  from_email: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state to handle async request

  // Honeypot field check
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState<Email>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ from_name: "", from_email: "", message: "" });

    // If honeypot field is filled out, it's likely a bot
    if (honeypot) {
      console.log("Bot detected!");
      return;
    }

    if (form.current) {
      setIsLoading(true); // Start loading

      emailjs
        .sendForm(
          "service_qmtj0sh", // Replace with your EmailJS service ID
          "template_tzyx9ql", // Replace with your EmailJS template ID
          form.current,
          "H_x5A8FoHckXyCJZj" // Replace with your EmailJS public key
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Wiadomość została wysłana!");
          },
          (error: any) => {
            console.error("FAILED...", error.text);
            alert("Wiadomość nie została wysłana...");
          }
        )
        .finally(() => {
          setIsLoading(false); // End loading
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-[100%] max-w-[98vw] p-6 md:max-w-lg mx-auto   shadow-xl shadow-[#00000024] dark:border dark:border-gray-900"
    >
      <label
        htmlFor="name"
        className="font-bold text-lg text-dark dark:text-light"
      >
        Imię
      </label>
      <input
        aria-label="Imię"
        value={formData.from_name}
        onChange={handleChange}
        type="text"
        id="name"
        name="from_name"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none dark:bg-gray-200 focus:ring-2 focus:ring-dark"
      />

      <label
        htmlFor="email"
        className="font-bold text-lg text-dark dark:text-light"
      >
        E-mail
      </label>
      <input
        aria-label="E-mail"
        value={formData.from_email}
        onChange={handleChange}
        type="email"
        id="email"
        name="from_email"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none dark:bg-gray-200 focus:ring-2 focus:ring-dark"
      />

      <label
        htmlFor="message"
        className="font-bold text-lg text-dark dark:text-light"
      >
        Wiadomość
      </label>
      <textarea
        aria-label="Wiadomość"
        value={formData.message}
        onChange={handleChange}
        id="message"
        name="message"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 dark:bg-gray-200 focus:ring-dark dark:focus:ring-light resize-none"
      />

      {/* Honeypot field */}
      <input
        type="text"
        aria-label="Honeypot"
        name="honeypot"
        style={{ display: "none" }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <button
        aria-label="Wyślij formularz kontaktowy"
        type="submit"
        disabled={isLoading}
        className={`p-3 text-light dark:text-dark font-bold rounded-md transition-colors duration-300 ${
          isLoading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-dark dark:bg-light hover:bg-gray-700 dark:hover:bg-gray-200"
        }`}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
