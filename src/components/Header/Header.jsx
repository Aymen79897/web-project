import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import * as fa from "react-icons/fa";
import * as pi from "react-icons/pi";
import * as ci from "react-icons/ci";
import * as go from "react-icons/go";
import * as lia from "react-icons/lia";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-icons">
          <fa.FaTruck className="icon" />
          <fa.FaEnvelope className="icon" />
          <fa.FaFacebookMessenger className="icon" />
          <fa.FaWhatsapp className="icon" />
          <span className="header-phone">
            <fa.FaPhoneAlt className="icon" />
            <span className="phone-numbers">          
                <span className="phone-number">70 247 841</span>
          <span className="phone-number">28 980 827</span>
          </span>

          </span>
        </div>
      </div>
      <div className="header-main">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-search">
          <input
            type="text"
            placeholder="PC, PC GAMER, IMPRIMANTES, ACCESSOIRES..."
            className="search-input"
          />
          <img src={require("../../images/search.png")} alt="Search" className="search-icon" />
        </div>
        <div className="header-actions">
        <div className="action-item dropdown">
            <pi.PiUserLight className="action-icon" />
            <span className="action-text">Se connecter</span>
            <div className="dropdown-menu">
              <a href="#connexion" className="dropdown-item">
                <fa.FaUser className="dropdown-icon" /> Connexion
              </a>
              <a href="#wishlist" className="dropdown-item">
                <fa.FaHeart className="dropdown-icon" /> Wishlist (0)
              </a>
              <a href="#compare" className="dropdown-item">
                <go.GoArrowSwitch className="dropdown-icon" /> Comparer (0)
              </a>
            </div>
          </div>

          <pi.PiShoppingCartLight className="action-icon" />

        </div>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
        <li className="nav-item nav-dropdown">
  Informatique <go.GoChevronDown className="nav-arrow" />
  <div className="nav-dropdown-menu">
    <div className="nav-dropdown-column">
      <h4>Ordinateurs Portables</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Portables</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Portable Gamer</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Portable Professionnel</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Ultrabook</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> MacBook</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>PC de Bureau</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Gamme ALPHA by SCOOP</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Gamer Brandé</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Powered By MSI</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC de Bureau Professionnel</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> PC Tout En Un</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Mac</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Ecrans</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ecrans Grand Public</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ecrans Gaming</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ecrans Professionnels</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ecrans Interactifs</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Accessoires Ecrans</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Logiciels</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Kaspersky</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Microsoft</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Tablettes</li>
      </ul>
    </div>
  </div>
</li>
<li className="nav-item nav-dropdown">
  Impression <go.GoChevronDown className="nav-arrow" />
  <div className="nav-dropdown-menu">
    <div className="nav-dropdown-column">
      <h4>Imprimante Laser Monofonction</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Laser Monochrome</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Laser Couleur</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Imprimante Laser Multifonction</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Multifonction Laser Monochrome</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Multifonction Laser Couleur</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Imprimantes Jet d'encre</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Multifonction Jet d'encre</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Imprimantes à réservoir</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Imprimantes étiquettes</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Imprimantes matricielles</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Photocopieur</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Multifonction Monochrome</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Photocopieur Couleur</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Consommables</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Consommables</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Cartouche</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Bouteille d'encre</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ruban</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Scanners</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Scanner à plat</li>
      </ul>
    </div>
  </div>
</li>
<li className="nav-item nav-dropdown">
  Accessoires <go.GoChevronDown className="nav-arrow" />
  <div className="nav-dropdown-menu">
    <div className="nav-dropdown-column">
      <h4>Clavier / Souris / Tapis</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Souris</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Clavier</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Tapis</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Pack</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Son</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Casque micro</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Haut-parleurs</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Ecouteur</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Microphone</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Controller et manette de jeux</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Flash Disque & Carte SD</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Disque dur Externe</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Tablette Graphique</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Sacoches & Sac à dos</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Chaises gamer</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Station de refroidissement</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Support Pc</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Chargeurs</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Graveur</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Enregistreur video</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Réplicateur de port & Station d'accueil</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Webcam & Visioconférence</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> T-shirt</li>
      </ul>
    </div>
    <div className="nav-dropdown-column">
      <h4>Pointeur laser</h4>
      <ul>
        <li><go.GoChevronRight className="dropdown-arrow" /> Câbles & Adaptateurs</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Adaptateur</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Cables</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Power Bank</li>
        <li><go.GoChevronRight className="dropdown-arrow" /> Chargeurs</li>
      </ul>
    </div>
  </div>
</li>
          <li className="nav-item">
             Composants <go.GoChevronDown className="nav-arrow" />
          </li>
          <li className="nav-item">
            Gaming <go.GoChevronDown className="nav-arrow" />
          </li>
          <li className="nav-item">
             Univers Pro <go.GoChevronDown className="nav-arrow" />
          </li>
          <li className="nav-item">
            <fa.FaApple className="nav-icon" /> <span className="tag apple">APPLE</span>     <go.GoChevronDown className="nav-arrow" />
          </li>
          <li className="nav-item">
            <img src={require("../../images/config.png")} alt="EL CONFIGURATEUR" className="nav-config-icon" />
            <go.GoChevronDown className="nav-arrow" /> 
          </li>
            <li className="nav-item">
              Produits reconditionnés <span className="tag hot">HOT</span> <go.GoChevronDown className="nav-arrow" />
            </li>
          <li className="nav-item">
            <lia.LiaStoreSolid className="nav-icon" />  Stores <span className="tag gps">GPS</span><go.GoChevronDown className="nav-arrow" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;