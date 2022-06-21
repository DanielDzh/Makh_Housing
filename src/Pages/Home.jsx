import React from 'react'
import { AllNav, UnderHeader, About, Specification, Previous, Services, OngoingProjects, ContactUs } from '../components/index';
import House from '../assets/images/Previous.png'
import Underheader from '../assets/images/HouseUnderHeader.png'
import AboutImg from '../assets/images/About.png'
import Rect from '../assets/images/Service.png'
import ongoing_1 from '../assets/images/Previous.png'
import ongoing_2 from '../assets/images/ongoing_2.png'
import ongoing_3 from '../assets/images/ongoing_3.png'
import Map from '../assets/images/Map.png'
import { useTranslation } from 'react-i18next'


const Content = () => {

   const { t } = useTranslation()

   const previousProjects = [
      {
         title: "project name will be here",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [House, House, House]
      },
      {
         title: "project name will be here",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [House, House, House]
      },
      {
         title: "project name will be here",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [House, House, House]
      },
   ];

   const ongoingProjects = [
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
      {
         title: "project name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor, obcaecati nam porro officiis molestiae?",
         price: ["€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²", "€1920 / м²"],
         images: [ongoing_1, ongoing_2, ongoing_3],
      },
   ];

   const fixNav = [
      {
         name: t("nav_menu.about"),
         url: "About"
      },
      {
         name: t("nav_menu.specification"),
         url: "Specifications"
      },
      {
         name: t("nav_menu.previous_projects"),
         url: "PreviousProjects"
      },
      {
         name: t("nav_menu.services"),
         url: "Services"
      },
      {
         name: t("nav_menu.ongoing_projects"),
         url: "OngoingProjects"
      },
      {
         name: t("nav_menu.contacts"),
         url: "Contacts"
      }
   ]

   const about = [
      {
         title: t("about.blocks.title_1"),
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, natus?",
      },
      {
         title: t("about.blocks.title_2"),
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, natus?",
      },
      {
         title: t("about.blocks.title_3"),
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, natus?",
      },
      {
         title: t("about.blocks.title_4"),
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, natus?",
      }
   ]
   const services = [{
      img: Rect,
      title: "Name of the service",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
   },
   {
      img: House,
      title: "Name of the service",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
   },
   {
      img: Rect,
      title: "Name of the service",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
   },
   {
      img: Rect,
      title: "Name of the service",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
   },
   {
      img: Rect,
      title: "Name of the service",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
   }
   ]

   const descAbout = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut neque obcaecati consequuntur magnam assumenda maxime accusamus eos, dicta et labore culpa accusantium nesciunt illum nobis cumque eaque atque velit nisi?";

   return (
      <div className="content">
         <AllNav
            arr={fixNav}
         />
         <UnderHeader
            title={t("under_header.better_way")}
            image={Underheader}
         />
         <About
            title={t("about.title")}
            image={AboutImg}
            desc={descAbout}
            arr={about}
         />
         <Specification />
         <Previous
            title="Previous projects"
            projects={previousProjects}
         />
         <Services
            obj={services}
         />
         <OngoingProjects
            title="Ongoing Projects"
            projects={ongoingProjects}
         />
         <ContactUs
            title="Get in Touch"
            image={Map}
         />
      </div>
   )
}

export default Content
