import React, { useState } from "react";
import Layout from "./../components/layout";
import Collapse from './collapse';

const AboutPage = () => {
  const [collapseStates, setCollapseStates] = useState({
    reliability: false,
    respect: false,
    service: false,
    security: false
  });

  const toggleCollapse = (key) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const collapseTexts = {
    reliability:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "Le service est au cœur de notre approche chez Kasa. Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner tout au long de votre expérience avec nous.",
    security:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  };

  return (
    <Layout>
      <div className="all-collapse-container">
        <Collapse
          title="Fiabilité"
          content={collapseTexts.reliability}
          isOpen={collapseStates.reliability}
          toggleCollapse={() => toggleCollapse("reliability")}
        />
        <Collapse
          title="Respect"
          content={collapseTexts.respect}
          isOpen={collapseStates.respect}
          toggleCollapse={() => toggleCollapse("respect")}
        />
        <Collapse
          title="Service"
          content={collapseTexts.service}
          isOpen={collapseStates.service}
          toggleCollapse={() => toggleCollapse("service")}
        />
        <Collapse
          title="Sécurité"
          content={collapseTexts.security}
          isOpen={collapseStates.security}
          toggleCollapse={() => toggleCollapse("security")}
        />
      </div>
    </Layout>
  );
};

export default AboutPage;