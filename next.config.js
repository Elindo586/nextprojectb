/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa");

// const nextConfig = () => {

//   const theConfig = {
//     reactStrictMode: true,
//     async rewrites() {
//       return {
//         afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//       };
//     },
//   };
//   async redirects() {
//     return [
//       {
//         source: "/ContactUs",
//         destination: "/contact-us",
//         permanent: true,
//       },
//     ],
//   };
// };
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
  async redirects() {
    return [
      {
        source: "/ContactUs",
        destination: "/contact-us", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/blog/como-trabaja-un-control-de-load-sensing",
        destination: "/blog/castellano/control-de-load-sensing", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/search/{search_term_string}",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/tag/intercambios-de-bombas",
        destination: "/blog/castellano/como-intercambiar-bombas-hidraulicas",
        permanent: true,
      },
      {
        source:
          "/static/media/hi-torque-low-speed-hydraulic-motors.51b7fa0dd426dfb36e3a.pdf",
        destination: "/pdf/hi-torque-low-speed-hydraulic-motors.pdf",
        permanent: true,
      },
      {
        source:
          "/static/media/hydraulic-vane-motor-catalog.74f970544d2cee715fd5.pdf",
        destination: "/pdf/hydraulic-vane-motor-catalog.pdf",
        permanent: true,
      },
      {
        source: "/veljan.html",
        destination: "/this/veljan",
        permanent: true,
      },

      {
        source: "/blog/como-trabaja-un-control-de-load-sensing",
        destination: "/blog/castellano/control-de-load-sensing",
        permanent: true,
      },
      {
        source: "/blog/manifold-hidraulico",
        destination: "/blog/castellano/manifold-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/tag/manifold-hidraulico",
        destination: "/blog/castellano/manifold-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/circuito-hidraulico-de-meter-in-y-meter-out",
        destination: "/blog/castellano/circuito-hidraulico-meter-in-meter-out",
        permanent: true,
      },
      {
        source:
          "/blog/bomba-hidraulica-de-desplazamiento-fijo-vs-bomba-hidraulica-de-desplazamiento-variable",
        destination:
          "/blog/castellano/bomba-de-caudal-fijo-vs-bomba-de-caudal-variable",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/formulas-hidraulicas",
        destination: "/blog/castellano/formulas-de-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/formulas-hidraulicas/page/2",
        destination: "/blog/castellano/formulas-de-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/calculo-para-tiempo-de-recorrido-de-cilindro-hidraulico",
        destination:
          "/blog/castellano/calculo-de-tiempo-de-recorrido-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/calculo-hidraulico",
        destination:
          "/blog/castellano/calculo-de-velocidad-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source:
          "/blog/calculo-hidraulico-para-desplazamiento-de-bomba-hidraulica",
        destination:
          "/blog/castellano/calculo-de-desplazamiento-de-bomba-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/simbologia-hidraulica-de-valvulas-direccionales",
        destination:
          "/blog/castellano/simbolos-hidraulicos-para-valvulas-direccionales",
        permanent: true,
      },
      {
        source: "/blog/high-low-hydraulic-circuit",
        destination: "/blog/english/high-low-hydraulic-circuit",
        permanent: true,
      },
      {
        source: "/blog/valvula-check-pilotada",
        destination: "/blog/castellano/valvulas-check-crossover-pilotadas",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/formulas-hidraulicas",
        destination: "/blog/castellano/formulas-de-hidraulica",
        permanent: true,
      },
      {
        source: "/download/v10-v20-vane-pump-catalog.pdf",
        destination: "/pdf/v10-v20-vane-pump-catalog.pdf",
        permanent: true,
      },

      {
        source: "/blog/bomba-hidraulica-de-pistones",
        destination: "/blog/castellano/catalogo-de-bombas-de-pistones-a10v",
        permanent: true,
      },
      {
        source: "/blog/como-trabaja-un-control-de-presion-compensada",
        destination:
          "/blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada",
        permanent: true,
      },
      {
        source:
          "/blog/direct-acting-relief-valve-versus-pilot-operated-relief-valve",
        destination: "/blog/english/pilot-operated-relief-valve",
        permanent: true,
      },
      {
        source: "/blog/what-is-1714-in-hydraulics",
        destination: "/blog/english/what-is-1714-in-hydraulics",
        permanent: true,
      },
      {
        source:
          "/blog/calculo-para-velocidad-de-cilindro-hidraulico-utilizando-gpm",
        destination:
          "/blog/castellano/calculo-de-velocidad-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/ajuste-de-control-de-presion-compensada",
        destination:
          "/blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada",
        permanent: true,
      },
      {
        source: "/blog/circuito-hidraulico-de-alta-y-baja",
        destination: "/blog/castellano/circuito-hidraulico-de-alta-y-baja",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-schematic-symbols-for-pumps-and-motors",
        destination: "/blog/english/hydraulic-symbols-for-pumps-and-motors",
        permanent: true,
      },
      {
        source:
          "/blog/calculo-de-velocidad-de-cilindro-utlizando-tiempo-de-extension-y-el-recorrido-del-cilindro",
        destination:
          "/blog/castellano/calculo-de-velocidad-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/catalogos-de-productos-hdraulicos",
        destination: "/products/piston-pumps",
        permanent: true,
      },
      {
        source: "/blog/bosch-rexroth-vs-parker-hannifin-vs-eaton-vickers",
        destination:
          "/blog/castellano/bosch-rexroth-vs-parker-hannifin-vs-eaton-vickers",
        permanent: true,
      },
      {
        source: "/blog/prueba-de-bomba-hidraulica-de-presion-compensada",
        destination:
          "/blog/castellano/prueba-de-bomba-hidraulica-de-presion-compensada",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-cylinder-speed-formula",
        destination: "/blog/english/hydraulic-cylinder-speed-calculation",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/controles-hidraulicos",
        destination:
          "/blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/simbologia-hidraulica-para-valvulas-de-presion",
        destination:
          "/blog/castellano/simbolos-hidraulicos-para-valvulas-de-presion",
        permanent: true,
      },
      {
        source: "/blog/1714-en-hidraulica",
        destination: "/blog/castellano/que-es-1714-en-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/codigos-iso-4406",
        destination: "/blog/castellano/codigos-iso-4406",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-pump-displacement-calculation",
        destination: "/blog/english/hydraulic-pump-displacement-calculation",
        permanent: true,
      },
      {
        source: "/contactus.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/que-esl-el-beta-de-un-filtro",
        destination: "/blog/castellano/beta-en-filtracion-industrial",
        permanent: true,
      },
      {
        source: "/download/vho-vq-hydraulic-pumps-catalog.pdf",
        destination: "/pdf/vho-vq-hydraulic-pumps-catalog.pdf",
        permanent: true,
      },
      {
        source: "/download/hi-torque-low-speed-hydraulic-motors.pdf",
        destination: "/pdf/hi-torque-low-speed-hydraulic-motors.pdf",
        permanent: true,
      },
      {
        source: "/blog/pilot-operated-crossover-check-valves",
        destination: "/blog/english/pilot-crossover-check-valves",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-de-pistones-radiales",
        destination: "/blog/castellano/bomba-de-pistones-radiales",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-symbols-for-pressure-valves",
        destination:
          "/blog/english/hydraulic-fluid-power-symbols-for-pressure-valves",
        permanent: true,
      },
      {
        source: "/download/directional-control-valves.pdf",
        destination: "/pdf/directional-control-valves.pdf",
        permanent: true,
      },
      {
        source: "/blog/tag/bomba-hidraulica/",
        destination: "/blog/castellano/seleccion-de-bomba-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/how-to-test-a-fixed-displacement-hydraulic-pump/",
        destination: "/blog/english/hydraulic-pump-test",
        permanent: true,
      },
      {
        source: "/category/hydraulics/hydraulic-calculations",
        destination: "/category/hydraulics/hydraulic-calculations/",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-horsepower/",
        destination: "/blog/english/horsepower-fluid-power-calculation",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-calculation-for-cylinder-speed/",
        destination: "/blog/english/hydraulic-cylinder-speed-calculation",
        permanent: true,
      },
      {
        source: "/blog/motores-hidraulicos-orbitrol-geroler",
        destination:
          "/blog/castellano/catalogo-de-motores-hidraulicos-geroler-orbitrol",
        permanent: true,
      },
      {
        source: "/hydraulic-manifolds/",
        destination: "/products/hydraulic-manifolds",
        permanent: true,
      },
      {
        source: "/blog/tag/manifold-hidraulico",
        destination: "/blog/castellano/manifold-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/bombas-de-palestas-simples-dobles-y-triples",
        destination:
          "/blog/castellano/catalogo-de-bombas-hidraulicas-de-paletas",
        permanent: true,
      },
      {
        source: "/blog/231-en-hidraulica/",
        destination: "/blog/castellano/que-es-231-en-hidraulica",
        permanent: true,
      },
      {
        source: "/geroler-motors",
        destination: "/products/geroler-motors",
        permanent: true,
      },
      {
        source: "/blog/calculo-de-fuerza-para-cilindro-hidraulico",
        destination: "/blog/castellano/fuerza-hidraulica-de-un-cilindro",
        permanent: true,
      },
      {
        source: "/blog/potencia-hdraulica",
        destination: "/blog/castellano/calculo-de-potencia-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/valvula-de-alivio-ventilada",
        destination:
          "/blog/castellano/circuito-hidraulico-de-valvula-de-alivio-ventilada",
        permanent: true,
      },
      {
        source: "/blog/motores-hidraulicos-geroler-orbitrol",
        destination:
          "/blog/castellano/catalogo-de-motores-hidraulicos-geroler-orbitrol",
        permanent: true,
      },
      {
        source: "/tag/hidraulica",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/tag/reemplazo-de-bomba-hidraulica",
        destination: "/blog/castellano/como-intercambiar-bombas-hidraulicas",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-de-pistones-serie-a10v",
        destination: "/blog/castellano/catalogo-de-bombas-de-pistones-a10v",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-de-engranes-de-aluminio",
        destination:
          "/blog/castellano/catalogo-de-bombas-de-engranes-de-aluminio",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-hydraulic-pressure-relief-valve",
        destination: "/blog/english/what-is-a-pressure-relief-valve",
        permanent: true,
      },
      {
        source: "/hydraulic-piston-pumps",
        destination: "/products/piston-pumps",
        permanent: true,
      },
      {
        source: "/blog/valvula-de-control-direccional",
        destination: "/blog/castellano/catalogo-de-valvulas-direccionales",
        permanent: true,
      },
      {
        source: "/blog/variable-displacement-vane-pump-catalog",
        destination: "/blog/english/variable-displacement-vane-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/hidraulica-vs-neumatica",
        destination: "/blog/castellano/hidraulica-vs-neumatica",
        permanent: true,
      },
      {
        source: "/download/dump-pumps.pdf",
        destination: "/pdf/dump-pumps.pdf",
        permanent: true,
      },
      {
        source: "/blog/como-funciona-una-valvula-aguja",
        destination: "/blog/castellano/como-funciona-una-valvula-aguja",
        permanent: true,
      },
      {
        source: "/blog/eaton-vickers",
        destination: "/blog/english/eaton-vickers-crossovers",
        permanent: true,
      },
      {
        source: "/blog/calculo-de-area-de-un-cilindro/",
        destination: "/blog/castellano/calculo-de-area-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/radial-piston-pump-catalog/",
        destination: "/blog/english/radial-piston-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/circuito-de-seguridad-para-acumulador-hidraulico/",
        destination:
          "/blog/castellano/circuito-de-seguridad-para-acumulador-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/directional-control-valve-catalog/",
        destination:
          "/blog/english/hydraulic-directional-control-valves-catalog",
        permanent: true,
      },
      {
        source: "/blog/videos-tecnicos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download/radial-piston-pumps.pdf",
        destination: "/pdf/radial-piston-pumps.pdf",
        permanent: true,
      },
      {
        source: "/interactive.html",
        destination: "/interactive",
        permanent: true,
      },
      {
        source: "/download/d08-manifold.pdf",
        destination: "/pdf/d08-manifold.pdf",
        permanent: true,
      },
      {
        source: "/Products/VaneMotors",
        destination: "/products/vane-motors",
        permanent: true,
      },
      {
        source: "/static/media/d03-manifold.e95f7213e093bb9e5d6b.pdf",
        destination: "/pdf/d03-manifold.pdf",
        permanent: true,
      },
      {
        source: "/blog/tag/bombas-de-paletas-triples/",
        destination: "/products/vane-pumps",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-a10v",
        destination: "/blog/castellano/catalogo-de-bombas-de-pistones-a10v",
        permanent: true,
      },
      {
        source: "/needle-valves-flow-control-valves",
        destination: "/products/flow-control-valves",
        permanent: true,
      },
      {
        source: "/Services/PreventiveMaintenancePrograms",
        destination: "/services/preventive-maintenance-programs",
        permanent: true,
      },
      {
        source:
          "/static/media/hydraulic-gear-pumps-catalog.5a40f47ea7c1bed64924.pdf",
        destination: "/pdf/hydraulic-gear-pumps-catalog.pdf",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-cylinder-force-calculation",
        destination: "/blog/english/hydraulic-cylinder-force-calculation",
        permanent: true,
      },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;

// module.exports = withPWA({
//   pwa: {
//     ...nextConfig,
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//     swSrc: "service-worker.js",
//     scope: "/",
//     runtimeCaching,
//   },
// });
