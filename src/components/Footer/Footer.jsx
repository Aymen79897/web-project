import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
              <h3>Commandez du matériel informatique au meilleur prix chez nous !</h3>
      <p>
        Scoop informatique est votre partenaire de confiance pour tous vos besoins en matériel informatique en Tunisie. Depuis 2008, nous mettons à disposition de nos clients, aussi bien professionnels que grand public, une large gamme d'articles informatiques tels que des PC portables, des PC de bureau, des tablettes, des imprimantes, des accessoires..., ainsi que divers accessoires tels que Ecrans, claviers, souris, casques et câbles.
      </p>
      <p>
        En tant que représentants des grandes marques, nous garantissons des prix compétitifs sur le marché, accompagnés d'un service après-vente de qualité. Nous sommes fiers de vous offrir un conseil personnalisé pour vous aider à faire le meilleur choix. De plus, nous nous engageons à vous assurer une livraison gratuite sur l'ensemble du territoire tunisien.
      </p>
      <p>
        Chez Scoop informatique, nous facilitons votre expérience d'achat en ligne. Vous pouvez passer commande et profiter des remises avantageuses directement sur notre site marchand. Grâce à nos partenaires logistiques professionnels vous pouvez profiter de la livraison gratuite à domicile, avec un paiement à la livraison.
      </p>
      <p>
        Faites confiance à Scoop informatique pour tous vos besoins en matériel informatique. Nous mettons tout en œuvre pour vous offrir une expérience d'achat en ligne facile, avec les meilleurs prix du marché et un service après-vente rapide et efficace.
      </p>
      <div className="footer-top">
        <div className="newsletter">
          <h2>Restons En Contact</h2>
          <p>S'inscrire À La Newsletter. Pour Obtenir La Promotion De La Semaine</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Votre adresse e-mail" />
            <button type="submit">➤</button>
          </div>
        </div>
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h3>Category</h3>
          <ul>
            <li>Ordinateurs Portables</li>
            <li>PC Portable professionnel</li>
            <li>Produits Apple</li>
            <li>Ecrans Gaming</li>
            <li>Ecrans professionnels</li>
            <li>Consoles et jeux</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Votre Compte</h3>
          <ul>
            <li>Informations personnelles</li>
            <li>Commandes</li>
            <li>Avoirs</li>
            <li>Adresses</li>
            <li>Bons de réduction</li>
            <li>Mes listes de souhaits</li>
            <li>Mes alertes</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Liens Utiles</h3>
          <ul>
            <li>Mentions légales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <MdLocationOn className="contact-icon" /> Centre urbain Nord - La soukra - Sousse
            </li>
            <li>
              <MdEmail className="contact-icon" /> scoop.online@tunelec.com.tn
            </li>
            <li>
              <MdPhone className="contact-icon" /> 70 247 841 - 27 307 524
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 - SCOOP INFORMATIQUE</p>
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;