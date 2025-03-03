// Importa o React e funcionalidades específicas
import * as React from 'react';
import { useCallback } from "react";
//Importa a biblioteca "react-tsparticles" para criar partículas animadas
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

// Define o componente ParticleBackground
const ParticleBackground = () => {
  // Função para incializar o motor de partículas
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // Carrega todas as funcionalidades do tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles" // Define o ID do componente
      init={particlesInit} // Passa a função de inicializador do motor
      options={{ // Configuração das partículas
        fullScreen: {
          enable: true, // Ativa o modo tela cheia
          zIndex: -1 // Coloca as partículas atrás dos outros elementos
        },
        particles: {
          number: {
            value: 80, // Quantidade inicial de partículas
            density: {
              enable: true, // Ativa a densidade para ajuste automático
              value_area: 800 // Define a área em que as partículas ficarão distribuídas
            }
          },
          color: {
            value: ["#4facfe", "#00f2fe", "#a8edea", "#fed6e3"] // Define as cores das partículas
          },
          shape: {
            type: "circle" // Define a forma das partículas como círculos
          },
          opacity: {
            value: 0.5 // Define a opacidade das partículas
          },
          size: {
            value: 3, // Define o tamanho das partículas
            random: true // Permite tamanhos variados para cada partícula
          },
          links: { // Configura as conexões entre as partículas
            enable: true, // Ativa as conexões
            distance: 150, // Define a distância máxima entre partículas conectadas
            color: "#4facfe", // Cor das conexões
            opacity: 0.4, // Opacidade das conexões
            width: 1 // Espessura das conexões
          },
          move: { // Configura o movimento das partículas
            enable: true, // Ativa o movimento
            speed: 2, // Define a velociade do movimento
            direction: "none", // Movimento em todas as direções
            random: true, // Permite movimentação aleatória
            straight: false, // Impede que as partículas se movam em linha reta
            outModes: {
              default: "out" // Quando a partícula sai da tela, reaparece do outro lado
            }
          }
        },
        interactivity: { // Configura a interatividade com o mouse
          detectsOn: "canvas", // Detecta eventos no canvas
          events: {
            onHover: {
              enable: true, // Ativa a interação ao passar o mouse
              mode: "grab" // Conexões aparecem ao passar o mouse
            },
            onClick: {
              enable: true, // Ativa interação ao clicar
              mode: "push" // Adiciona mais partículas ao clicar
            },
            resize: true // Ajusta as partículas quando a tela for redimensionada
          },
          modes: {
            grab: {
              distance: 140, // Distância máxima para o feito "grab"
              links: {
                opacity: 1 // Define a opacidade das conexões ao interagir
              }
            },
            push: {
              quantity: 4 // Quantidade de partículas adicionadas ao clicar
            }
          }
        },
        detectRetina: true // Ativa suporte para telas Retina
      }}
    />
  );
};

// Exporta o componente para ser usado em outros arquivos
export default ParticleBackground;