import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Optional: modern icon
import "./BackToTop.css";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`back-to-top ${visible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ChevronUp size={20} />
        </button>
    );
}
