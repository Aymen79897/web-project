import React, { useState } from "react";
import "./Body.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbTruckDelivery, TbArrowsShuffle } from "react-icons/tb";
import { TiHeadphones } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci"; 

const carouselImages = [
  require("../../images/carousel1.png"),
  require("../../images/carousel2.png"),
  require("../../images/carousel3.png"),
  require("../../images/carousel4.png"),
  require("../../images/carousel5.png"),
  require("../../images/carousel6.png"),
  require("../../images/carousel7.png"),
];
const featuredProducts = {
  "Produits en vedette": [
    {
      id: 1,
      image: require("../../images/gamerpc.png"),
      title: "Pc Gamer FORTNITE (Ultra), I5-14ème, RTX 4060Ti VENTUS 2X, 16Go, 500Go SSD",
      price: "3,099,000 TND",
    },
    {
      id: 2,
      image: require("../../images/gamerpc.png"),
      title: "Pc De Bureau Sur Mesure Intel I3-10ème Génération, 8Go RAM, 120Go SSD, Performance Fiable pour Bureautique",
      price: "859,000 TND",
    },
    {
      id: 3,
      image: require("../../images/gamerpc.png"),
      title: "Pc Motion Design Sur Mesure (Config Ultra AMD), Ryzen 9, RTX 4090 Ventus, 64Go, 2To SSD + 1To HDD",
      price: "12,899,000 TND",
    },
    {
      id: 4,
      image: require("../../images/gamerpc.png"),
      title: "Pc Modélisation 3D Recommended Performance, Ryzen7, RTX 4060Ti, 32Go, 1To HDD + 512Go SSD",
      price: "3,259,000 TND",
    },
    {
      id: 5,
      image: require("../../images/gamerpc.png"),
      title: "Pc Gamer FORTNITE (Ultra), I5-14ème, RTX 4060Ti VENTUS 2X, 16Go, 500Go SSD",
      price: "3,099,000 TND",
    },
    {
      id: 6,
      image: require("../../images/gamerpc.png"),
      title: "Pc De Bureau Sur Mesure Intel I3-10ème Génération, 8Go RAM, 120Go SSD, Performance Fiable pour Bureautique",
      price: "859,000 TND",
    },
    {
      id: 7,
      image: require("../../images/gamerpc.png"),
      title: "Pc Motion Design Sur Mesure (Config Ultra AMD), Ryzen 9, RTX 4090 Ventus, 64Go, 2To SSD + 1To HDD",
      price: "12,899,000 TND",
    },
    {
      id: 8,
      image: require("../../images/gamerpc.png"),
      title: "Pc Modélisation 3D Recommended Performance, Ryzen7, RTX 4060Ti, 32Go, 1To HDD + 512Go SSD",
      price: "3,259,000 TND",
    },
  ],
  "Nouveau Produits": [
    {
      id: 9,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus Vivobook N7400 Pro",
      price: "3,359,000 TND",
    },
    {
      id: 10,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus X515EP",
      price: "2,299,000 TND",
    },
    {
      id: 11,
      image: require("../../images/product1.png"),
      title: "Pc Portable Lenovo Flex 5",
      price: "3,075,000 TND",
    },
    {
      id: 12,
      image: require("../../images/product1.png"),
      title: "PC Portable Gamer MSI Katana GF66",
      price: "3,499,000 TND",
    },
    {
      id: 13,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus Vivobook N7400 Pro",
      price: "3,359,000 TND",
    },
    {
      id: 14,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus X515EP",
      price: "2,299,000 TND",
    },
    {
      id: 15,
      image: require("../../images/product1.png"),
      title: "Pc Portable Lenovo Flex 5",
      price: "3,075,000 TND",
    },
    {
      id: 16,
      image: require("../../images/product1.png"),
      title: "PC Portable Gamer MSI Katana GF66",
      price: "3,499,000 TND",
    },
  ],
  "Nos Promos": [
    {
      id: 17,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 14\" M1 Pro, 16Go RAM, 512Go SSD",
      price: "7,999,000 TND",
    },
    {
      id: 18,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 13\" M1, 8Go RAM, 256Go SSD",
      price: "4,999,000 TND",
    },
    {
      id: 19,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 16\" M1 Max, 32Go RAM, 1To SSD",
      price: "12,999,000 TND",
    },
    {
      id: 20,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 15\" M2, 16Go RAM, 512Go SSD",
      price: "6,499,000 TND",
    },
    {
      id: 21,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 14\" M1 Pro, 16Go RAM, 512Go SSD",
      price: "7,999,000 TND",
    },
    {
      id: 22,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 13\" M1, 8Go RAM, 256Go SSD",
      price: "4,999,000 TND",
    },
    {
      id: 23,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 16\" M1 Max, 32Go RAM, 1To SSD",
      price: "12,999,000 TND",
    },
    {
      id: 24,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 15\" M2, 16Go RAM, 512Go SSD",
      price: "6,499,000 TND",
    },
  ],
  "Nouveaux Produits2": [
    {
      id: 1,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus Vivobook N7400 Pro",
      price: "3,359,000 TND",
    },
    {
      id: 2,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus X515EP",
      price: "2,299,000 TND",
    },
    {
      id: 3,
      image: require("../../images/product1.png"),
      title: "Pc Portable Lenovo Flex 5",
      price: "3,075,000 TND",
    },
    {
      id: 4,
      image: require("../../images/product1.png"),
      title: "PC Portable Gamer MSI Katana GF66",
      price: "3,499,000 TND",
    },
  ],
  "PC Gamer": [
    {
      id: 1,
      image: require("../../images/gamerpc.png"),
      title: "Pc Gamer CS 2 (Recommended), I3-13ème, RTX 3050 VENTUS 2X, 16Go, 512G SSD",
      price: "1,869,000 TND",
    },
    {
      id: 2,
      image: require("../../images/gamerpc.png"),
      title: "Pc Gamer FIFA FC 24 (ULTRA), I7-12ème, RTX 3060 VENTUS 2X, 16Go, 500Go SSD",
      price: "2,959,000 TND",
    },
    {
      id: 3,
      image: require("../../images/gamerpc.png"),
      title: "Pc Modélisation 3D Recommended Performance, Ryzen7, RTX 4060Ti, 32Go, 1To HDD + 512Go SSD",
      price: "3,259,000 TND",
    },
    {
      id: 4,
      image: require("../../images/gamerpc.png"),
      title: "Pc De Bureau AMD Ryzen 5-5600G, 16Go, 256Go SSD",
      price: "949,000 TND",
    },
  ],
  "MacBooks": [
    {
      id: 5,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 14\" M1 Pro, 16Go RAM, 512Go SSD",
      price: "7,999,000 TND",
    },
    {
      id: 6,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 13\" M1, 8Go RAM, 256Go SSD",
      price: "4,999,000 TND",
    },
    {
      id: 7,
      image: require("../../images/macbook.png"),
      title: "MacBook Pro 16\" M1 Max, 32Go RAM, 1To SSD",
      price: "12,999,000 TND",
    },
    {
      id: 8,
      image: require("../../images/macbook.png"),
      title: "MacBook Air 15\" M2, 16Go RAM, 512Go SSD",
      price: "6,499,000 TND",
    },
  ],
  "Moniteurs": [
    {
      id: 9,
      image: require("../../images/monitor.png"),
      title: "Ecran Dell E2016HV - LED 19.5\" HD+",
      price: "325,000 TND",
    },
    {
      id: 10,
      image: require("../../images/monitor.png"),
      title: "Ecran Gaming Dell SE2422H 24\" FHD 75Hz",
      price: "379,000 TND",
    },
    {
      id: 11,
      image: require("../../images/monitor.png"),
      title: "Ecran HP M27fw 27\" FHD 75Hz",
      price: "599,000 TND",
    },
    {
      id: 12,
      image: require("../../images/monitor.png"),
      title: "Ecran Gamer MSI Optix MAG241CVSFR 24\" FHD, 1ms, 144Hz",
      price: "679,000 TND",
    },
  ],
};
const allProducts = {
  "PC PORTABLES": [
    {
      id: 1,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus Vivobook N7400 Pro",
      price: "3,359,000 TND",
    },
    {
      id: 2,
      image: require("../../images/product1.png"),
      title: "Pc Portable Asus X515EP",
      price: "2,299,000 TND",
    },
    {
      id: 3,
      image: require("../../images/product1.png"),
      title: "Pc Portable Lenovo Flex 5",
      price: "3,075,000 TND",
    },
    {
      id: 4,
      image: require("../../images/product1.png"),
      title: "PC Portable Gamer MSI Katana GF66",
      price: "3,499,000 TND",
    },
  ],
  ECRANS: [
    {
      id: 5,
      image: require("../../images/monitor.png"),
      title: "Ecran Dell E2016HV - LED 19.5\" HD+",
      price: "325,000 TND",
    },
    {
      id: 6,
      image: require("../../images/monitor.png"),
      title: "Ecran Gaming Dell SE2422H 24\" FHD 75Hz",
      price: "379,000 TND",
    },
    {
      id: 7,
      image: require("../../images/monitor.png"),
      title: "Ecran HP M27fw 27\" FHD 75Hz",
      price: "599,000 TND",
    },
    {
      id: 8,
      image: require("../../images/monitor.png"),
      title: "Ecran Gamer MSI Optix MAG241CVSFR 24\" FHD, 1ms, 144Hz",
      price: "679,000 TND",
    },
  ],
  "IMPRIMANTES & COPIEURS": [
    {
      id: 9,
      image: require("../../images/printer.png"),
      title: "Imprimante Lexmark 4en1 MFP CX331ADWE Laser Couleur",
      price: "969,000 TND",
    },
    {
      id: 10,
      image: require("../../images/printer.png"),
      title: "Imprimante Lexmark 4en1 MFP MX331ADN Laser Monochrome",
      price: "689,000 TND",
    },
    {
      id: 11,
      image: require("../../images/printer.png"),
      title: "Copieur Multifonction Monochrome Toshiba E-Studio 2323AM - A4/A3",
      price: "1,899,000 TND",
    },
    {
      id: 12,
      image: require("../../images/printer.png"),
      title: "Imprimante À Réservoir EPSON EcoTank L3210, Couleur, Multifonction 3en1, A4",
      price: "589,000 TND",
    },
  ],
  "PERIPHERIQUE & ACCESSOIRES": [
    {
      id: 13,
      image: require("../../images/mouse.png"),
      title: "Souris PROMATE Wireless Woking Range Black",
      price: "22,000 TND",
    },
    {
      id: 14,
      image: require("../../images/mouse.png"),
      title: "Haut-Parleurs Advance SoundPhonic 6W RMS",
      price: "65,000 TND",
    },
    {
      id: 15,
      image: require("../../images/mouse.png"),
      title: "Souris Gamer Logitech G300S - 2500dpi - Filaire (Noir)",
      price: "45,000 TND",
    },
    {
      id: 16,
      image: require("../../images/mouse.png"),
      title: "Pack Clavier Et Souris Logitech MK120",
      price: "42,000 TND",
    },
  ],
  "PHOTO & VIDEOPROJECTEURS": [
    {
      id: 17,
      image: require("../../images/projector.png"),
      title: "Vidéoprojecteur EPSON CO-W01 WXGA 3LCD Blanc",
      price: "1,079,000 TND",
    },
    {
      id: 18,
      image: require("../../images/ecran_projection.png"),
      title: "Écran De Projection Trépied Telon 213X213cm",
      price: "369,000 TND",
    },
    {
      id: 19,
      image: require("../../images/ecran_projection.png"),
      title: "Écran De Projection Electrique Mural Telon 213x213cm",
      price: "479,000 TND",
    },
    {
      id: 20,
      image: require("../../images/ecran_projection.png"),
      title: "Écran De Projection Electrique Mural Telon 300x300cm",
      price: "859,000 TND",
    },
  ],
  "VIDEOPROJECTEURS ET ACCESSOIRES": [
    {
      id: 21,
      image: require("../../images/ecran_projection.png"),
      title: "Écran De Projection Trépied Telon 213X213cm",
      price: "369,000 TND",
    },
  ],
};
const bigImages = [
  { id: 1, image: require("../../images/bigimg1.png"), alt: "Big Image 1" },
  { id: 2, image: require("../../images/bigimg2.png"), alt: "Big Image 2" },
  { id: 3, image: require("../../images/bigimg3.png"), alt: "Big Image 3" },
  { id: 4, image: require("../../images/bigimg4.png"), alt: "Big Image 4" },
];


const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("PC PORTABLES"); // Default category
  const [activeTab, setActiveTab] = useState("Produits en vedette");
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab state
  };


  const handleCircleClick = (index) => {
    if (index === currentIndex) return; // Prevent unnecessary updates
    setCurrentIndex(index);
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category
  };


  return (
    <div className="body-content">
      {/* Top Section: Carousel and Side Images */}
      <div className="top-section">
        {/* Carousel Section */}
        <div className="carousel">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Slide to the correct image
            }}
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`carousel-circle ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleCircleClick(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Side Images Section */}
        <div className="side-images">
          <img src={require("../../images/side1.png")} alt="Side Image 1" className="side-image" />
          <img src={require("../../images/side2.png")} alt="Side Image 2" className="side-image" />
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="info-section">
        <div className="info-item">
          <IoShieldCheckmarkOutline className="info-icon" />
          <div className="info-text">
            <h4>Paiement Sécurisé</h4>
            <p>Payez en toute sérénité avec Click to Pay</p>
          </div>
        </div>
        <div className="info-item">
          <HiOutlineRocketLaunch className="info-icon" />
          <div className="info-text">
            <h4>Livraison Express</h4>
            <p>Livraison sous 24h et au plus tard sous 48h sur toute la Tunisie</p>
          </div>
        </div>
        <div className="info-item">
          <TbTruckDelivery className="info-icon" />
          <div className="info-text">
            <h4>Livraison Gratuite</h4>
            <p>Livraison gratuite à partir de 300 DT sur tout le territoire tunisien</p>
          </div>
        </div>
        <div className="info-item">
          <TiHeadphones className="info-icon" />
          <div className="info-text">
            <h4>Service Clients</h4>
            <p>À votre écoute sur tous les systèmes de messagerie</p>
          </div>
        </div>
        <div className="info-item">
          <HiOutlineWrenchScrewdriver className="info-icon" />
          <div className="info-text">
            <h4>SAV Garanti et Rapide</h4>
            <p>Une prise en charge express pour tous nos clients</p>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <h2 className="categories-title">TOP CATÉGORIES</h2>
        <nav className="categories-navbar">
          {Object.keys(allProducts).map((category) => (
            <span
              key={category}
              className={`category-item ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        </nav>
        <div className="products-grid">
          {allProducts[activeCategory].map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-heart">
                <CiHeart />
              </div>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-hover-buttons">
                  <button className="hover-button">
                    <FiEye />
                  </button>
                  <button className="hover-button">
                    <TbArrowsShuffle />
                  </button>
                </div>
              </div>
              <h4 className="product-title">{product.title}</h4>
              <div className="product-stars">★★★★★</div>
              <p className="product-price">{product.price}</p>
              <button className="product-button">AJOUTER AU PANIER</button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="featured-section">
    <nav className="categories-navbar">
      {Object.keys(featuredProducts).map((tab) => (
        <span
          key={tab}
          className={`category-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </span>
      ))}
    </nav>
    <div className="products-grid">
      {featuredProducts[activeTab].map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-heart">
            <CiHeart />
          </div>
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-hover-buttons">
              <button className="hover-button">
                <FiEye />
              </button>
              <button className="hover-button">
                <TbArrowsShuffle />
              </button>
            </div>
          </div>
          <h4 className="product-title">{product.title}</h4>
          <div className="product-stars">★★★★★</div>
          <p className="product-price">{product.price}</p>
          <button className="product-button">AJOUTER AU PANIER</button>
        </div>
      ))}
    </div>
  </div>
  <div className="big-images-section">
      {bigImages.map((img) => (
        <div key={img.id} className="big-image-container">
          <img src={img.image} alt={img.alt} className="big-image" />
        </div>
      ))}
    </div>
    <div className="mid-images-section">
  <img src={require("../../images/midimage1.png")} alt="Mid Image 1" className="mid-image" />
  <img src={require("../../images/midimage2.png")} alt="Mid Image 2" className="mid-image" />
  <img src={require("../../images/midimage3.png")} alt="Mid Image 3" className="mid-image" />
</div>
<div className="new-products-section">
  <h2 className="categories-title">NOUVEAUX PRODUITS</h2>
  <div className="products-grid">
    {featuredProducts["Nouveaux Produits2"].map((product) => (
      <div key={product.id} className="product-card">
        <div className="product-heart">
          <CiHeart />
        </div>
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-hover-buttons">
            <button className="hover-button">
              <FiEye />
            </button>
            <button className="hover-button">
              <TbArrowsShuffle />
            </button>
          </div>
        </div>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-stars">★★★★★</div>
        <p className="product-price">{product.price}</p>
        <button className="product-button">AJOUTER AU PANIER</button>
      </div>
    ))}
  </div>
</div>
<div className="new-products-section">
  <h2 className="categories-title">PC GAMER</h2>
  <div className="products-grid">
    {featuredProducts["PC Gamer"].map((product) => (
      <div key={product.id} className="product-card">
        <div className="product-heart">
          <CiHeart />
        </div>
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-hover-buttons">
            <button className="hover-button">
              <FiEye />
            </button>
            <button className="hover-button">
              <TbArrowsShuffle />
            </button>
          </div>
        </div>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-stars">★★★★★</div>
        <p className="product-price">{product.price}</p>
        <button className="product-button">AJOUTER AU PANIER</button>
      </div>
    ))}
  </div>
</div>

<div className="new-products-section">
  <h2 className="categories-title">MACBOOKS</h2>
  <div className="products-grid">
    {featuredProducts["MacBooks"].map((product) => (
      <div key={product.id} className="product-card">
        <div className="product-heart">
          <CiHeart />
        </div>
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-hover-buttons">
            <button className="hover-button">
              <FiEye />
            </button>
            <button className="hover-button">
              <TbArrowsShuffle />
            </button>
          </div>
        </div>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-stars">★★★★★</div>
        <p className="product-price">{product.price}</p>
        <button className="product-button">AJOUTER AU PANIER</button>
      </div>
    ))}
  </div>
</div>

<div className="new-products-section">
  <h2 className="categories-title">MONITEURS</h2>
  <div className="products-grid">
    {featuredProducts["Moniteurs"].map((product) => (
      <div key={product.id} className="product-card">
        <div className="product-heart">
          <CiHeart />
        </div>
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-hover-buttons">
            <button className="hover-button">
              <FiEye />
            </button>
            <button className="hover-button">
              <TbArrowsShuffle />
            </button>
          </div>
        </div>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-stars">★★★★★</div>
        <p className="product-price">{product.price}</p>
        <button className="product-button">AJOUTER AU PANIER</button>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Body;
