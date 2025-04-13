import './App.css';
import NavBar from './components/NavBar';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider, useDarkMode } from './context/ThemeContext';
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import Footer from './components/Footer';

const Content = () => {
  const { darkMode } = useDarkMode();

  const [t] = useTranslation("global");

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_23jjiou", "template_7jprt4n", form.current, "im7-NDmbBPmaRhTg2").then(
      () => {
        alert("message sent sucessfully");
        form.current.reset();
      },
      (error) => {
        alert("failed to send message, please try again", error.text);
      }
    )
  }

  return (
    <div className='dark:bg-[#242424] dark:text-white'>
      <NavBar />
      <section className='bg-cyan-5000 h-auto pt-48  w-auto flex flex-col items-center justify-center 
      xl:pt-58'>

        <h1 className='text-slate-700 dark:text-slate-300 text-5xl text-center font-mono font-extrabold lg:text-9xl'>
          {t("Title.welcome")} <br /> STUDIO RS
        </h1>
      </section>

      <section className="bg-pink-5000 h-25 flex justify-center items-center text-center font-mono text-slate-700 dark:text-slate-300 lg:text-4xl lg:h-30">
        {/* Pantalla pequeña (4 líneas) */}
        <h2 className="whitespace-pre-line block lg:hidden">
          {t("Presentation.line-1")}{'\n'}
          JUAN RAMÓN SALAS,{'\n'}
          {t("Presentation.line-3")}{'\n'}
          {t("Presentation.line-4")}
        </h2>

        {/* Pantalla grande (2 líneas) */}
        <h2 className="whitespace-pre-line hidden lg:block">
          {t("Presentation.line-1")} JUAN RAMÓN SALAS,{'\n'}
          {t("Presentation.line-3")} {t("Presentation.line-4")}
        </h2>
      </section>

      <section className='bg-sky-500/500 h-25 flex m-6 justify-center items-center font-mono text-slate-700 font-bold dark:text-slate-300 lg:text-4xl lg:h-35'>
        <h3 className='text-center'>
          {t("Mtto.line-1")} <br />
          {t("Mtto.line-2")} <br />
          {t("Mtto.line-3")}
        </h3>
      </section>

      <section className='bg-indigo-5000 h-auto flex justify-center py-2'>
        <form ref={form} onSubmit={sendEmail} className='bg-[#d8d8d8] dark:bg-[#20232A] w-80 h-115 rounded-[15px] flex flex-col items-center shadow-xl/30 p-2 lg:w-150 lg:h-170'>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.name")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2 ' type="text"
              name='user_name'
              required
              placeholder={t("Form.your-name")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.email")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2' type="email"
              name='user_email'
              required
              placeholder={t("Form.your-email")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.subject")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2' type="subject"
              name='subject'
              required
              placeholder={t("Form.your-subject")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.message")}</label>
            <textarea className='w-64 h-30 resize-none border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-120 lg:h-50 px-2'
              type="text"
              name='message'
              required
              placeholder={t("Form.your-message")} />
          </div>
          <button className='bg-green-600 text-white dark:text-slate-300 font-mono rounded-lg px-4 m-2 cursor-pointer hover:bg-[#518304] lg:text-4xl lg:px-8 lg:m-4'>
            {t("Form.send")}
          </button>
        </form>
      </section>
      <section className='bg-sky-500/500 h-auto flex flex-col justify-center items-center font-mono text-slate-700 dark:text-slate-300 lg:text-4xl lg:h-50'>
      <div className='m-5'>
        <h3 className='text-center '>
          {t("WhatsApp.line-1")}
        </h3>
      </div>
        <WhatsAppButton  />
      </section>
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
