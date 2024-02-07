import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Page from "@/components/Page/Page";
import { Button } from "@/components/ui/button";
import {  openLink } from "@/constants";
import React from "react";
import logo from '@/assets/Lev-Avot-Logo.jpg'
const Contact = () => {
  return <Page>
    <div className="flex flex-col items-center gap-8">
      <img src={logo} width={200} height={200}/>
      <h1 className="text-[32px]"> יצירת קשר </h1>
      <ContactInfo/>
      <Button className="text-[2rem] p-8 bg-[var(--color-primary-blue)]"
        onClick={() => openLink("contactForm")}
      > טופס יצירת קשר </Button>
    </div>

  </Page>;
};

export default Contact;
