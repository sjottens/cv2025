import React from 'react';
import { Link } from 'react-router-dom';

function Profiel() {
  return (
    <div className='profiel'>
        <h3>Profiel</h3>
        <p>
          Ervaren en gedreven Front-end Developer met een grafische achtergrond en ruim 11 jaar ervaring in het ontwikkelen van gebruiksvriendelijke webshops en interfaces binnen de e-commerce. Mijn kracht ligt in het combineren van visuele creativiteit met technische nauwkeurigheid. Ik werk graag binnen multidisciplinaire Scrum-teams, waar samenwerking, flexibiliteit en kwaliteit centraal staan.
          <br /><br />
          Ik ben gespecialiseerd in HTML, CSS, JavaScript en heb ook ervaring met moderne frameworks zoals React en Angular. Doorlopend investeer ik in mijn eigen ontwikkeling via zelfstudie en online trainingen zodat ik up-to-date blijf binnen een voortdurend evoluerend vakgebied.
          <br /><br />
          In mijn vrije tijd vind ik ontspanning met mijn vriendin, onze twee kinderen en onze hond. Daarnaast houd ik van golfsurfen en rijd ik wel is met de motor<br />
          – een gezonde balans tussen focus en vrijheid.
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

export default Profiel