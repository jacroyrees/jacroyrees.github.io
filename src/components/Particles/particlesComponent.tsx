import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import "./particlesComponent.css";
import vodafone from "../../assets/vodafone.png";
import react from "../../assets/Icons/react-2.svg";
import csharp from "../../assets/c--4.svg";
const ParticlesComponent = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 0.1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          "shape": {
            "type": ["circle"],
            "stroke":{
            "width": 2,
           
          },
          "polygon": {
            "nb_sides": 5
          },
          
        },

       
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesComponent;