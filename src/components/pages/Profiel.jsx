import React from 'react';
import { Link } from 'react-router-dom';

function Profiel() {
  return (
    <div className='profiel'>
        <h3>Profiel</h3>
        <p>
          Gedreven Frontend Developer met een 15 jaar grafische DTP achtergrond en ruim 11 jaar ervaring in het ontwikkelen van gebruiksvriendelijke websites en interfaces binnen de e-commerce.<br />
          Ik werk graag binnen multidisciplinaire Scrum-teams, waar samenwerking, flexibiliteit en kwaliteit centraal staan.
          <br /><br />
          Ik werk voornamelijk in HTML, CSS/Less, JavaScript en jQuery.
          Doorlopend investeer ik in mijn eigen ontwikkeling via zelfstudie en online trainingen.
          <br /><br />
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