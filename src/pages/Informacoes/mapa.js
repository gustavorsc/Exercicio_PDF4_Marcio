import React from "react";

const GoogleMap = () => {
  return (
    <div style={{ display: "flex", width: "100%", height: "450px" }}>
      {/* Seção lateral contendo as informações da faculdade */}
      <div style={{ width: "30%", padding: "20px", background: "#f8f8f8", borderRight: "1px solid #ddd" }}>
        <h2>Informações da Faculdade</h2>
        <p><strong>Nome:</strong> Uni-FACEF Centro Universitário Múnicipal de Franca</p>
        <p><strong>Endereço:</strong> Av. Dr. Ismael Alonso y Alonso, 2400, Franca - SP, Brasil</p>
        <p><strong>Telefone:</strong> +55 (16) 3713-4688</p>
        <p><strong>Horário de Funcionamento:</strong> Segunda a Sexta, 08:00 - 18:00</p>
      </div>
      
      {/* Seção para exibir o mapa do Google Maps */}
      <div style={{ width: "70%" }}>
        <h2>Nosso Endereço</h2>
        <iframe
          title="Mapa da localização" // Define um título acessível para o iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4088.5362838149235!2d-47.39225183117263!3d-20.53764008923512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6227ac02f77%3A0x977eed5af75dd7a2!2sUni-FACEF%20University%20Center%20Mun.%20Franca%2C%20Unit%20II!5e0!3m2!1sen!2sbr!4v1743632772408!5m2!1sen!2sbr"
          width="100%" // Define a largura do iframe em relação ao container
          height="100%" // Define a altura total do iframe
          style={{ border: 0 }} // Remove a borda ao redor do iframe
          allowFullScreen="" // Permite que o mapa seja exibido em tela cheia
          loading="lazy" // Melhora o desempenho carregando o iframe de forma assíncrona
          referrerPolicy="no-referrer-when-downgrade" // Melhora a segurança ao carregar o iframe
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
