import React from 'react';
import { Link } from 'react-router-dom';

function Bio() {
  return (
    <div className='bio'>
        <h3>Over mij</h3>
        <p>
            Ik ben Rogier Ottens (1976), Frontend Developer met inmiddels 11 jaar ervaring.<br />
            Daarvoor werkte ik 15 jaar als allround technisch DTP’er .<br />
            Die achtergrond geeft mij een combinatie van technisch inzicht en een scherp oog voor vormgeving.<br />
        </p>
        <p>
            Ik ontwikkel toegankelijke, verzorgde en functionele interfaces met HTML, CSS en JavaScript (waaronder jQuery).<br /><br />
            Hoewel ik geen formele opleiding in informatica heb en (nog) niet veel ervaring met moderne frameworks als React, Angular of Vue.js, sta ik er zeker voor open om mij daarin verder te ontwikkelen.<br />
        </p>
        <p>
            Ik ben praktisch ingesteld, leergierig en denk graag mee over realistische, gebruikersgerichte oplossingen.<br />
            Werken binnen een Scrum-team past goed bij mij – ik hou van een gestructureerde aanpak met ruimte voor samenwerking en heldere doelen.<br />
            <br />
            Ik werk het liefst bij organisaties in de buurt van Aalsmeer.<br />
            Niet alleen omdat ik graag dichterbij huis wil werken, maar ook omdat ik liever op de fiets kom – beter voor het milieu.
            Daarnaast geef ik de voorkeur aan een vierdaagse werkweek, met de vrijdag vrij.<br />
            Flexibel hybride werken is voor mij ideaal: een goede mix van thuis en op locatie.<br />
            <br />
            Ik ben op zoek naar een functie in loondienst, dus geen consultancy- of detacheringsopdrachten.<br />
            Ik voel mij het meest thuis bij organisaties die flexibel omgaan met werktijden en thuiswerken, en waar vertrouwen, samenwerking en zelfstandigheid centraal staan.<br />
            Zoek je voor nu een fullstack developer of framework-specialist, dan ben ik waarschijnlijk niet de juiste persoon.<br />
            Maar als je een betrouwbare Frontend Developer zoekt met een grafisch oog en een no-nonsense instelling, neem dan contact met mij op.<br />
            <br />
            Ik woon in Aalsmeer, samen met mijn vriendin, twee jonge kinderen en onze labrador Harrie.<br />
            In mijn vrije tijd ben ik graag met het gezin op pad of gewoon lekker helemaal niets. Als het kan ben ik op het water te vinden met mijn golfsurfboard.<br />
        </p>
        <p>
          <strong>Opleidingen & Cursussen</strong><br /><br />
          <ul>
            <li>
              <strong>Online trainingen:</strong><br />
              Angular, React, NextJS, TypeScript/JavaScript (lopend)<br /><br />
            </li>
            <li>
              <strong>Diverse trainingen:</strong><br />
              Intershop, Scrum (2013–2019)<br /><br />
            </li>
            <li>
              <strong>Grafisch Lyceum Amsterdam:</strong><br />
              Technisch DTP’er (MBO, diploma behaald, 1997–2000)<br /><br />
            </li>
            <li>
              <strong>Zeefdruk:</strong><br />
              (MBO, diploma behaald, 1995–1997)<br /><br />
            </li>
            <li>
              <strong>Grafische vormgeving:</strong><br />
              (MBO, diploma behaald, 1990–1995)<br /><br />
            </li>
            <li>
              <strong>Phantarij Amstelveen:</strong><br />
              Vmbo, 1988–1990
            </li>
          </ul>
        </p>
        
        <div className='btn-style'>
            <Link to='/werkervaring' className=''>
                WERKERVARING
            </Link>
        </div>
    </div>
  )
}

export default Bio