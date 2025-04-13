import { useTranslation } from "react-i18next"

const openWhatsApp = () => {
    const phoneNumber = "+524447022589"; // Reemplaza con tu número (incluye código de país)
    const message = "Que tal, mi nombre es:"; // Mensaje opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Abre WhatsApp en una nueva pestaña
  };
  
  const WhatsAppButton = () => {

    const [t] = useTranslation("global");

    return (
      <button
        onClick={openWhatsApp}
        className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600"
      >
        {t("WhatsApp.button")}      
      </button>
    );
  };
  
  export default WhatsAppButton;