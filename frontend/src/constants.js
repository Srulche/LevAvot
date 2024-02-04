

export const links = {
    whatsapp: "https://wa.link/3lddcp",
    phone: "tel:+972539286500",
    contactForm: "https://docs.google.com/forms/d/e/1FAIpQLSdKiDlpjjeJeOrua-ofT94Z21icxLNfQSPThssWU3FqmJTphg/viewform?usp=sf_link"
}

/**
 * 
 * @param {'whatsapp' | 'phone' | 'contactForm'} linkType 
 */
export const openLink = (linkType) =>{
    window.open(links[linkType])
}