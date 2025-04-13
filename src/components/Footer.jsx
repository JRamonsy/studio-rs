import React from 'react'
import { useTranslation } from "react-i18next"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {

	const dataNetworks = [
    {
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/nutrijulietagdealba'
    },
    // {
    //   icon:'fab fa-twitter',
    //   url:'https://www.facebook.com/nutrijulietagdealba/?locale=es_LA'
    // },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/nutriologa.juli/'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://mx.linkedin.com/in/julieta-garcia-de-alba-v-17533aa0'
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/watch?v=jkQaS56D5Bs'
    }
  ]

	const [t] = useTranslation("global");

	return (
		<div className=' h-auto flex flex-col justify-center items-center py-5 dark:bg-[#242424] dark:text-white' >
			<div className='mb-5'>
				<h2 className='text-3xl font-mono' >
					{t("Footer.line-1")}
				</h2>
			</div>
			<div className="w-full flex justify-evenly items-center gap-4">
				<FaFacebook className="text-slate-700 dark:text-slate-300 text-8xl hover:text-blue-800 transition-colors" />
				<TbBrandYoutubeFilled className="text-slate-700 dark:text-slate-300 text-8xl hover:text-red-800 transition-colors" />
				<FaInstagram className="text-slate-700 dark:text-slate-300 text-8xl hover:text-pink-700 transition-colors" />
			</div>
		</div>
	)
}

export default Footer
