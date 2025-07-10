import React from 'react'
import { Link } from 'react-router-dom';

function Werkervaring() {
  return (
    <div className='werkervaring'>
        <h3>Werkervaring</h3>

        <p>
            <strong>VML, Amsterdam</strong><br />
            *Frontend Developer (UI) | 2013 – 2025*<br />
            Opzetten en onderhouden van webshops voor klanten zoals PLUS.nl, WE Fashion, Hoogvliet, Isero, Bunzl, Alko.fi, Xerox – 2013 – 2025<br />
            A/B testen voor BMN.nl in VWO – 2025 – 2025<br />
            A/B testen voor Body&Fit in Optimizely – 2020 – 2021<br />
            HTML5, CSS, Less, JavaScript, jQuery, Intershop, Photoshop CC, Scrum<br />
            <br />
            <strong>MegaSet Design, Aalsmeer</strong><br />
            *Allround Technisch DTP’er / Web | 1998 – 2013* <br />
            Verschillende grafische opmaakwerk, Websites, drukwerk, social media, SEO, DTP, beeldbewerking<br />
            <br />
            <strong>Onna Nedam, Amsterdam</strong><br />
            *Stagiair Zeefdrukker | 1995 – 1996* <br />
            <br />
            <strong>Programmeertalen & Frameworks:</strong><br />
            – HTML5, CSS, SCSS, JavaScript, jQuery<br />
            <strong>Tools & Software:</strong><br />
            – Git, Jira, Jenkins, Photoshop CC, VS Code, CapCut, Figma, Word, Google docs<br />
            <strong>CMS / Platforms:</strong><br />
            – Intershop, Optimizely A/B, VWO A/B<br />
            <strong>Overige:</strong><br />
            – A/B testen, Scrum, Google Analytics, SEO, ChatGPT<br />
        </p>
        <div className='btn-style'>
          <Link to='/info' className=''>
            INFO
          </Link>
        </div>
    </div>
  )
}

export default Werkervaring