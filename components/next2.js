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
  productionBrowserSourceMaps: true,

  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
  async redirects() {
    return [
      {
        source: "/ContactUs",
        source: "/contact",
        destination: "/contact-us", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/blog/english/c101-c102-dump-pumps-catalog",
        destination: "/blog/english/hydraulic-dump-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/english/fluid-power-formulas",
        destination: "/video-blog/english/fluid-power-formulas",
        permanent: true,
      },
      {
        source:
          "/blog/english/fixed-displacement-pump-vs-variable-displacement-pump",
        destination:
          "/video-blog/english/fixed-displacement-pump-vs-variable-displacement-pump",
        permanent: true,
      },
      {
        source: "/blog/english/pilot-operated-relief-valve",
        source:
          "/blog/english/pilot-operated-relief-valve-vs-direct-acting-relief-valve",
        destination:
          "/video-blog/english/pilot-operated-relief-valve-vs-direct-acting-relief-valve",
        permanent: true,
      },
      {
        source: "/blog/como-trabaja-un-control-de-load-sensing",
        source: "/blog/castellano/control-de-load-sensing",
        destination: "/video-blog/castellano/control-de-load-sensing", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/search/{search_term_string}",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/tag/intercambios-de-bombas",
        source: "blog/castellano/como-intercambiar-bombas-hidraulicas",
        destination:
          "/video-blog/castellano/como-intercambiar-bombas-hidraulicas",
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
        source: "/blog/castellano/circuito-hidraulico-meter-in-meter-out",
        destination:
          "/video-blog/castellano/circuito-hidraulico-meter-in-meter-out",
        permanent: true,
      },
      {
        source:
          "/blog/bomba-hidraulica-de-desplazamiento-fijo-vs-bomba-hidraulica-de-desplazamiento-variable",
        source:
          "/blog/castellano/bomba-de-caudal-fijo-vs-bomba-de-caudal-variable",
        destination:
          "/video-blog/castellano/bomba-de-caudal-fijo-vs-bomba-de-caudal-variable",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/formulas-hidraulicas",
        source: "/blog/castellano/formulas-de-hidraulica",
        destination: "/video-blog/castellano/formulas-de-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/category/hidraulica/formulas-hidraulicas/page/2",
        destination: "/blog/castellano/formulas-de-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/calculo-para-tiempo-de-recorrido-de-cilindro-hidraulico",
        source:
          "/blog/castellano/calculo-de-tiempo-de-recorrido-de-cilindro-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-tiempo-de-recorrido-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/calculo-hidraulico",
        source: "/blog/castellano/calculo-de-velocidad-de-cilindro-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-velocidad-de-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/castellano/exportador-industrial",
        destination: "/video-blog/castellano/exportador-industrial",
        permanent: true,
      },
      {
        source:
          "/blog/calculo-hidraulico-para-desplazamiento-de-bomba-hidraulica",
        source:
          "/blog/castellano/calculo-de-desplazamiento-de-bomba-hidraulica",
        destination:
          "/video-blog/castellano/calculo-de-desplazamiento-de-bomba-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/castellano/catalogo-de-bombas-hidraulicas-c101-c102",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-hidraulicas-c101-c102",
        permanent: true,
      },
      {
        source: "/blog/simbologia-hidraulica-de-valvulas-direccionales",
        source:
          "/blog/castellano/simbolos-hidraulicos-para-valvulas-direccionales",
        destination:
          "/video-blog/castellano/simbolos-hidraulicos-para-valvulas-direccionales",
        permanent: true,
      },
      {
        source: "/blog/high-low-hydraulic-circuit",
        source: "/blog/english/high-low-hydraulic-circuit",
        destination: "/video-blog/english/high-low-hydraulic-circuit",
        permanent: true,
      },
      {
        source: "/blog/english/hydraulic-heat-removal-calculation",
        destination: "/video-blog/english/hydraulic-heat-removal-calculation",
        permanent: true,
      },
      {
        source: "/blog/valvula-check-pilotada",
        source: "/blog/castellano/valvulas-check-crossover-pilotadas",
        destination:
          "/video-blog/castellano/valvulas-check-crossover-pilotadas",
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
        source:
          "/blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada",
        destination:
          "/video-blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada",
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
        source: "/blog/english/what-is-1714-in-hydraulics",
        destination: "/video-blog/english/what-is-1714-in-hydraulics",
        permanent: true,
      },
      {
        source: "/blog/english/micron-vs-mesh",
        destination: "/video-blog/english/micron-vs-mesh",
        permanent: true,
      },
      {
        source: "/blog/english/hydraulic-motor-rpm-calculation",
        destination: "/video-blog/english/hydraulic-motor-rpm-calculation",
        permanent: true,
      },
      {
        source: "/blog/english/hybrid-pumps",
        destination: "/video-blog/english/hybrid-pumps",
        permanent: true,
      },
      {
        source: "/blog/english/how-does-a-gear-pump-work",
        destination: "/video-blog/english/how-does-a-gear-pump-work",
        permanent: true,
      },
      {
        source: "/blog/english/v10-v20-vane-pump-catalog",
        destination: "/video-blog/english/v10-v20-vane-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/english/how-does-fluid-power-work",
        destination: "/video-blog/english/how-does-fluid-power-work",
        permanent: true,
      },
      {
        source: "/blog/english/how-does-a-hydraulic-winch-work",
        destination: "/video-blog/english/how-does-a-hydraulic-winch-work",
        permanent: true,
      },
      {
        source: "/blog/english/geroler-orbital-hydraulic-motor-catalog",
        destination:
          "/video-blog/english/geroler-orbital-hydraulic-motor-catalog",
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
        source: "/blog/castellano/circuito-hidraulico-de-alta-y-baja",
        destination:
          "/video-blog/castellano/circuito-hidraulico-de-alta-y-baja",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-schematic-symbols-for-pumps-and-motors",
        source: "/blog/english/hydraulic-symbols-for-pumps-and-motors",
        destination:
          "/video-blog/english/hydraulic-symbols-for-pumps-and-motors",
        permanent: true,
      },
      {
        source: "/blog/english/beta-ratio",
        destination: "/video-blog/english/beta-ratio",
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
        source: "/blog/castellano/calculo-de-torque-para-motor-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-torque-para-motor-hidraulico",
        permanent: true,
      },

      {
        source: "/blog/castellano/calculo-de-rpm-de-motor-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-rpm-de-motor-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/bosch-rexroth-vs-parker-hannifin-vs-eaton-vickers",
        source:
          "/blog/castellano/bosch-rexroth-vs-parker-hannifin-vs-eaton-vickers",
        destination:
          "/video-blog/castellano/bosch-rexroth-vs-parker-hannifin-vs-eaton-vickers",
        permanent: true,
      },
      {
        source: "/blog/castellano/prueba-de-bomba-hidraulica",
        destination: "/video-blog/castellano/prueba-de-bomba-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/prueba-de-bomba-hidraulica-de-presion-compensada",
        source:
          "/blog/castellano/prueba-de-bomba-hidraulica-de-presion-compensada",
        destination:
          "/video-blog/castellano/prueba-de-bomba-hidraulica-de-presion-compensada",
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
        source:
          "/blog/castellano/como-comprar-productos-industriales-en-estados-unidos",
        destination:
          "/video-blog/castellano/como-comprar-productos-industriales-en-estados-unidos",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/simbologia-hidraulica-para-valvulas-de-presion",
        source:
          "/blog/castellano/simbolos-hidraulicos-para-valvulas-de-presion",
        destination:
          "/video-blog/castellano/simbolos-hidraulicos-para-valvulas-de-presion",
        permanent: true,
      },
      {
        source: "/blog/1714-en-hidraulica",
        source: "/blog/castellano/que-es-1714-en-hidraulica",
        destination: "/video-blog/castellano/que-es-1714-en-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/codigos-iso-4406",
        source: "/blog/castellano/codigos-iso-4406",
        destination: "/video-blog/castellano/codigos-iso-4406",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-pump-displacement-calculation",
        source: "/blog/english/hydraulic-pump-displacement-calculation",
        destination:
          "/video-blog/english/hydraulic-pump-displacement-calculation",
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
        source: "/blog/castellano/beta-en-filtracion-industrial",
        destination: "/video-blog/castellano/beta-en-filtracion-industrial",
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
        source: "/blog/english/pilot-crossover-check-valves",
        destination: "/video-blog/english/pilot-crossover-check-valves",
        permanent: true,
      },

      {
        source: "/blog/castellano/como-seleccionar-un-cilindro-hidraulico",
        destination:
          "/video-blog/castellano/como-seleccionar-un-cilindro-hidraulico",
        permanent: true,
      },

      {
        source: "/blog/castellano/como-saber-si-tu-bomba-hidraulica-funciona",
        destination:
          "/video-blog/castellano/como-saber-si-tu-bomba-hidraulica-funciona",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-de-pistones-radiales",
        source: "/blog/castellano/bomba-de-pistones-radiales",
        destination: "/video-blog/castellano/bomba-de-pistones-radiales",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-symbols-for-pressure-valves",
        source:
          "/blog/english/hydraulic-fluid-power-symbols-for-pressure-valves",
        destination:
          "/video-blog/english/hydraulic-fluid-power-symbols-for-pressure-valves",
        permanent: true,
      },
      {
        source: "/download/directional-control-valves.pdf",
        destination: "/pdf/directional-control-valves.pdf",
        permanent: true,
      },
      {
        source: "/blog/english/radial-piston-pump-selection",
        destination: "/video-blog/english/radial-piston-pump-selection",
        permanent: true,
      },
      {
        source: "/blog/tag/bomba-hidraulica/",
        source: "/blog/castellano/seleccion-de-bomba-hidraulica",
        destination: "/video-blog/castellano/seleccion-de-bomba-hidraulica",
        permanent: true,
      },
      {
        source:
          "/blog/castellano/como-saber-si-tu-cilindro-hidraulico-funciona",
        destination:
          "/video-blog/castellano/como-saber-si-tu-cilindro-hidraulico-funciona",
        permanent: true,
      },
      {
        source: "/blog/how-to-test-a-fixed-displacement-hydraulic-pump/",
        source: "/blog/english/hydraulic-pump-test",
        destination: "/video-blog/english/hydraulic-pump-test",
        permanent: true,
      },
      {
        source: "/category/hydraulics/hydraulic-calculations",
        destination: "/category/hydraulics/hydraulic-calculations/",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-horsepower/",
        source: "/blog/english/horsepower-fluid-power-calculation",
        destination: "/video-blog/english/horsepower-fluid-power-calculation",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-calculation-for-cylinder-speed",
        source: "/blog/english/hydraulic-cylinder-speed-calculation",
        destination: "/video-blog/english/hydraulic-cylinder-speed-calculation",
        permanent: true,
      },

      {
        source: "/blog/castellano/micron-vs-mesh",
        destination: "/video-blog/castellano/micron-vs-mesh",
        permanent: true,
      },
      {
        source: "/blog/motores-hidraulicos-orbitrol-geroler",
        source:
          "/blog/castellano/catalogo-de-motores-hidraulicos-geroler-orbitrol",
        destination:
          "/video-blog/castellano/catalogo-de-motores-hidraulicos-geroler-orbitrol",
        permanent: true,
      },
      {
        source: "/hydraulic-manifolds/",
        destination: "/products/hydraulic-manifolds",
        permanent: true,
      },

      {
        source: "/blog/castellano/simbolos-hidraulicos-para-bombas-hidraulicas",
        destination:
          "/video-blog/castellano/simbolos-hidraulicos-para-bombas-hidraulicas",
        permanent: true,
      },
      {
        source: "/blog/tag/manifold-hidraulico",
        source: "/blog/castellano/manifold-hidraulico",
        destination: "/video-blog/castellano/manifold-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/bombas-de-palestas-simples-dobles-y-triples",
        source: "/blog/castellano/catalogo-de-bombas-hidraulicas-de-paletas",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-hidraulicas-de-paletas",
        permanent: true,
      },
      {
        source: "/blog/231-en-hidraulica/",
        source: "/blog/castellano/que-es-231-en-hidraulica",
        destination: "/video-blog/castellano/que-es-231-en-hidraulica",
        permanent: true,
      },
      {
        source: "/geroler-motors",
        destination: "/products/geroler-motors",
        permanent: true,
      },
      {
        source: "/blog/calculo-de-fuerza-para-cilindro-hidraulico",
        source: "/blog/castellano/fuerza-hidraulica-de-un-cilindro",
        destination: "/video-blog/castellano/fuerza-hidraulica-de-un-cilindro",
        permanent: true,
      },
      {
        source: "/blog/potencia-hdraulica",
        source: "/blog/castellano/calculo-de-potencia-hidraulica",
        destination: "/video-blog/castellano/calculo-de-potencia-hidraulica",
        permanent: true,
      },
      {
        source:
          "/blog/castellano/como-solucionar-problemas-en-un-circuito-hidraulico",
        destination:
          "/video-blog/castellano/como-solucionar-problemas-en-un-circuito-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/valvula-de-alivio-ventilada",
        source:
          "/blog/castellano/circuito-hidraulico-de-valvula-de-alivio-ventilada",
        destination:
          "/video-blog/castellano/circuito-hidraulico-de-valvula-de-alivio-ventilada",
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
        source: "/blog/castellano/catalogo-de-bombas-de-pistones-a10v",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-de-pistones-a10v",
        permanent: true,
      },
      {
        source: "/blog/bomba-hidraulica-de-engranes-de-aluminio",
        source: "/blog/castellano/catalogo-de-bombas-de-engranes-de-aluminio",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-de-engranes-de-aluminio",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-hydraulic-pressure-relief-valve",
        source: "/blog/english/what-is-a-pressure-relief-valve",
        destination: "/video-blog/english/what-is-a-pressure-relief-valve",
        permanent: true,
      },
      {
        source: "/hydraulic-piston-pumps",
        destination: "/products/piston-pumps",
        permanent: true,
      },

      {
        source: "/blog/castellano/catalogo-de-valvulas-hidraulicas-de-aguja",
        destination:
          "/video-blog/castellano/catalogo-de-valvulas-hidraulicas-de-aguja",
        permanent: true,
      },

      {
        source: "/blog/castellano/catalogo-de-bombas-de-pistones-radiales",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-de-pistones-radiales",
        permanent: true,
      },
      {
        source: "/blog/valvula-de-control-direccional",
        source: "/blog/castellano/catalogo-de-valvulas-direccionales",
        destination:
          "/video-blog/castellano/catalogo-de-valvulas-direccionales",
        permanent: true,
      },
      {
        source: "/blog/castellano/reemplazos-para-parker-hannifin-y-denison",
        destination:
          "/video-blog/castellano/reemplazos-para-parker-hannifin-y-denison",
        permanent: true,
      },
      {
        source: "/blog/variable-displacement-vane-pump-catalog",
        source: "/blog/english/variable-displacement-vane-pump-catalog",
        destination:
          "/video-blog/english/variable-displacement-vane-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/hidraulica-vs-neumatica",
        source: "/blog/castellano/hidraulica-vs-neumatica",
        destination: "/video-blog/castellano/hidraulica-vs-neumatica",
        permanent: true,
      },
      {
        source: "/download/dump-pumps.pdf",
        destination: "/pdf/dump-pumps.pdf",
        permanent: true,
      },
      {
        source: "/blog/como-funciona-una-valvula-aguja",
        source: "/blog/castellano/como-funciona-una-valvula-aguja",
        destination: "/video-blog/castellano/como-funciona-una-valvula-aguja",
        permanent: true,
      },
      {
        source: "/blog/eaton-vickers",
        source: "/blog/english/eaton-vickers",
        destination: "/video-blog/english/eaton-vickers-crossovers",
        permanent: true,
      },
      {
        source:
          "/blog/english/hydraulic-directional-control-valves-replacements",
        destination:
          "/video-blog/english/hydraulic-directional-control-valves-replacements",
        permanent: true,
      },
      {
        source: "/blog/calculo-de-area-de-un-cilindro",
        source: "/blog/castellano/calculo-de-area-de-cilindro-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-area-de-cilindro-hidraulico",
        permanent: true,
      },

      {
        source: "/blog/castellano/bombas-hidraulicas-hibridas",
        destination: "/video-blog/castellano/bombas-hidraulicas-hibridas",
        permanent: true,
      },
      {
        source: "/blog/castellano/esquemas-de-bombas-y-motores-hidraulicos",
        destination:
          "/video-blog/castellano/esquemas-de-bombas-y-motores-hidraulicos",
        permanent: true,
      },
      {
        source: "/blog/radial-piston-pump-catalog/",
        source: "/blog/english/radial-piston-pump-catalog",
        destination: "/video-blog/english/radial-piston-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/circuito-de-seguridad-para-acumulador-hidraulico/",
        source:
          "/blog/castellano/circuito-de-seguridad-para-acumulador-hidraulico",
        destination:
          "/video-blog/castellano/circuito-de-seguridad-para-acumulador-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/directional-control-valve-catalog/",
        source: "/blog/english/hydraulic-directional-control-valves-catalog",
        destination:
          "/video-blog/english/hydraulic-directional-control-valves-catalog",
        permanent: true,
      },
      {
        srouce: "/blog/english/what-is-231-in-hydraulics",
        destination: "/video-blog/english/what-is-231-in-hydraulics",
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
        // source: "/Interactive",  it causes too many redirects
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
        source: "/blog/english/hydraulic-cylinder-force-calculation",
        destination: "/video-blog/english/hydraulic-cylinder-force-calculation",
        permanent: true,
      },
      {
        source: "/blog/needle-valve",
        source: "/blog/english/how-does-a-needle-valve-work",
        destination: "/video-blog/english/how-does-a-needle-valve-work",
        permanent: true,
      },
      {
        source: "/blog/english/parker-hannifin-and-denison-alternatives",
        destination:
          "/video-blog/english/parker-hannifin-and-denison-alternatives",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-cylinder-extension/",
        destination: "/blog/english/hydraulic-cylinder-speed-calculation",
        permanent: true,
      },
      {
        source: "/hydraulic-vane-motors",
        destination: "/products/vane-motors",
        permanent: true,
      },
      {
        source: "/blog/english/hydraulic-manifold",
        destination: "/video-blog/english/hydraulic-manifold",
        permanent: true,
      },
      {
        source: "/blog/english/load-sensing-control",
        destination: "/video-blog/english/load-sensing-control",
        permanent: true,
      },
      {
        source: "/blog/hydac-technology",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/meter-in-meter-out-hydraulic-circuit",
        source: "/blog/english/meter-in-meter-out-hydraulic-circuit",
        destination: "/video-blog/english/meter-in-meter-out-hydraulic-circuit",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-symbols-for-pumps",
        source:
          "/blog/english/hydraulic-fluid-power-symbols-for-hydraulic-pumps",
        destination:
          "/video-blog/english/hydraulic-fluid-power-symbols-for-hydraulic-pumps",
        permanent: true,
      },
      {
        source: "/blog/valvula-antirretorno-valvula-check/",
        source: "/blog/castellano/valvula-antiretorno-valvula-check",
        destination: "/video-blog/castellano/valvula-antiretorno-valvula-check",
        permanent: true,
      },
      {
        source: "/blog/dump-pump-catalog",
        source: "/blog/english/hydraulic-dump-pump-catalog",
        destination: "/video-blog/english/hydraulic-dump-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/english/coiled-electrical-cable",
        destination: "/video-blog/english/coiled-electrical-cable",
        permanent: true,
      },
      {
        source: "/blog/english/hydraulic-motor-torque-calculation",
        destination: "/video-blog/english/hydraulic-motor-torque-calculation",
        permanent: true,
      },
      {
        source: "blog/english/hydraulic-vane-motor-catalog",
        destination: "video-blog/english/hydraulic-vane-motor-catalog",
        permanent: true,
      },
      {
        source: "/blog/tag/:rest*",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/category/:rest*",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/download/a10v-pump-catalog.pdf",
        destination: "/pdf/a10v-pump-catalog.pdf",
        permanent: true,
      },
      {
        source: "/blog/the-basics-of-hydraulics",
        source: "/blog/english/basics-of-hydraulics",
        destination: "/video-blog/english/basics-of-hydraulics",
        permanent: true,
      },
      {
        source: "/blog/orbital-motors/",
        destination: "/english/geroler-orbital-hydraulic-motor-catalog",
        permanent: true,
      },
      // {
      //   source: "/services",
      //   destination: "/services/fluid-analysis",
      //   permanent: true,
      // },
      {
        source: "/blog/caballos-de-fuerza-para-cilindro-hidraulico",
        source:
          "blog/castellano/calculo-de-caballos-de-fuerza-para-cilindro-hidraulico",
        destination:
          "/video-blog/castellano/calculo-de-caballos-de-fuerza-para-cilindro-hidraulico",
        permanent: true,
      },
      {
        source: "/veljan",
        destination: "/this/veljan",
        permanent: true,
      },
      {
        source: "/hydrocraft",
        destination: "/this/hydrocraft",
        permanent: true,
      },
      {
        source: "/formulas.html",
        destination: "/fluid-power-formulas",
        permanent: true,
      },
      {
        source: "/Services",
        destination: "/services/fluid-analysis",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source:
          "/blog/valvula-de-alivio-pilotada-vs-valvula-de-alivio-de-accion-directa",
        source: "/blog/castellano/valvula-de-alivio-pilotada",
        destination: "/video-blog/castellano/valvula-de-alivio-pilotada",
        permanent: true,
      },
      {
        source:
          "/blog/calculo-hidraulico-para-caballos-de-fuerza-de-bomba-hidraulica",
        source:
          "/blog/castellano/calculo-de-caballos-de-fuerza-para-hidraulica",
        destination:
          "/video-blog/castellano/calculo-de-caballos-de-fuerza-para-hidraulica",
        permanent: true,
      },
      {
        source:
          "/blog/how-to-set-and-adjust-a-pressure-compensated-control-for-your-hydraulic-pump",
        source: "/blog/english/pressure-compensated-pump-control-adjustment",
        destination:
          "/video-blog/english/pressure-compensated-pump-control-adjustment",
        permanent: true,
      },
      {
        source: "/blog/hydac",
        destination: "/blog/english",
        permanent: true,
      },
      // {
      //   source: "/services/:rest*",
      //   destination: "/services/fluid-analysis",
      //   permanent: true,
      // },
      {
        source:
          "/blog/how-to-set-and-adjust-a-pressure-compensated-control-for-your-hydraulic-pump/:rest*",
        destination:
          "/blog/english/pressure-compensated-pump-control-adjustment",
        permanent: true,
      },
      {
        source: "/hydraulic-cylinders-3/:rest*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/piston-pumps/:rest*",
        destination: "/products/piston-pumps",
        permanent: true,
      },
      {
        source: "/blog/aluminum-gear-pumps",
        source: "/blog/english/aluminum-gear-pumps-catalog",
        destination: "/video-blog/english/aluminum-gear-pumps-catalog",
        permanent: true,
      },
      {
        source: "/blog/english/iso-4406-codes",
        destination: "/video-blog/english/iso-4406-codes",
        permanent: true,
      },
      {
        source: "/blog/english/hydraulic-kidney-loop-off-line-filtration",
        destination:
          "/video-blog/english/hydraulic-kidney-loop-off-line-filtration",
        permanent: true,
      },
      {
        source: "/blog/oilgear-company-my-review",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/page/:rest*",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/download/d03-manifold.pdf",
        destination: "/pdf/d03-manifold.pdf",
        permanent: true,
      },
      {
        source: "/download/d05-manifold.pdf",
        destination: "/pdf/d05-manifold.pdf",
        permanent: true,
      },
      {
        source: "/download/d07-manifold.pdf",
        destination: "/pdf/d07-manifold.pdf",
        permanent: true,
      },
      // {
      //   source: "/download/flow-control-valves.pdf?rATp2",
      //   destination: "/pdf/flow-control-valves.pdf",
      //   permanent: true,
      // },
      {
        source: "/download/hydraulic-fittings-catalog.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download/hydraulic-gear-pumps-catalog.pdf",
        destination: "/pdf/hydraulic-gear-pumps-catalog.pdf",
        permanent: true,
      },
      {
        source: "/download/hydraulic-vane-motor-catalog.pdf",
        destination: "/pdf/hydraulic-vane-motor-catalog.pdf",
        permanent: true,
      },
      {
        source: "/Formulas",
        destination: "/fluid-power-formulas",
        permanent: true,
      },
      // {
      //   source: "/Interactive",
      //   destination: "/interactive",
      //   permanent: true,
      // },
      // {
      //   source: "/Inventory",
      //   destination: "/inventory",
      //   permanent: true,
      // },
      {
        source: "/partnumbers.html",
        destination: "/inventory",
        permanent: true,
      },

      {
        source: "/Products/products.html",
        destination: "/products/piston-pumps",
        permanent: true,
      },
      {
        source: "/Services/Services.html",
        destination: "/services/fluid-analysis",
        permanent: true,
      },
      {
        source: "/bomba-oilgear-pvwj",
        destination: "/blogs/castellano",
        permanent: true,
      },
      {
        source: "/blog/bombas-de-paletas-variable",
        source: "/blog/castellano/catalogo-de-bombas-de-paletas-variable",
        destination:
          "/video-blog/castellano/catalogo-de-bombas-de-paletas-variable",
        permanent: true,
      },
      {
        source: "/blog/bombas-hidraulicas-de-pistones-engranes-y-de-paletas/",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/bombas-oilgear-serie-pvm",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/blog/cable-espiral-electrico/",
        source: "/blog/castellano/cable-electrico-espiralado",
        destination: "/video-blog/castellano/cable-electrico-espiralado",
        permanent: true,
      },

      {
        source: "/blog/castellano/filtracion-fuera-de-linea",
        destination: "/video-blog/castellano/filtracion-fuera-de-linea",
        permanent: true,
      },
      {
        source:
          "/blog/castellano/motores-hidraulicos-de-baja-velocidad-alto-torque",
        destination:
          "/video-blog/castellano/motores-hidraulicos-de-baja-velocidad-alto-torque",
        permanent: true,
      },

      {
        source:
          "/blog/calculo-hidraulico-para-caballos-de-fuerza-de-bomba-hidraulica",
        destination:
          "/blog/castellano/calculo-de-caballos-de-fuerza-para-hidraulica",
        permanent: true,
      },
      {
        source: "/blog/cortando-grama-mojada",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/blog/filtros-hydac",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/blog/filtros-pall",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/blog/flow-control-valve",
        source: "/blog/english/flow-control-valve-catalog",
        destination: "/video-blog/english/flow-control-valve-catalog",
        permanent: true,
      },
      {
        source: "/blog/english/check-valves",
        destination: "/video-blog/english/check-valves",
        permanent: true,
      },

      {
        source: "/blog/castellano/como-trabaja-un-winche-hidraulico",
        destination: "/video-blog/castellano/como-trabaja-un-winche-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/english/how-to-interchange-hydraulic-pumps",
        destination: "/video-blog/english/how-to-interchange-hydraulic-pumps",
        permanent: true,
      },
      {
        source: "/blog/hidraulica-de-potencia",
        source: "/blog/castellano/como-funciona-la-hidraulica-de-potencia",
        destination:
          "/video-blog/castellano/como-funciona-la-hidraulica-de-potencia",
        permanent: true,
      },
      {
        source: "/blog/how-to-test-a-pressure-compensated-pump",
        source: "/blog/english/how-to-test-a-pressure-compensated-pump",
        destination:
          "/video-blog/english/how-to-test-a-pressure-compensated-pump",
        permanent: true,
      },
      {
        source: "/blog/hydac",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-calculation-for-cylinder-area",
        source: "/blog/english/hydraulic-cylinder-area-calculation",
        destination: "/video-blog/english/hydraulic-cylinder-area-calculation",
        permanent: true,
      },
      {
        source: "/blog/english/a10v-hydraulic-piston-pump-catalog",
        destination: "/video-blog/english/a10v-hydraulic-piston-pump-catalog",
        permanent: true,
      },
      {
        source: "/blog/hydraulic-horsepower-for-cylinder",
        source: "/blog/english/hydraulic-cylinder-horsepower-calculation",
        destination:
          "/video-blog/english/hydraulic-cylinder-horsepower-calculation",

        permanent: true,
      },
      {
        source: "/blog/hydraulic-pump/",
        source: "/blog/english/hydraulic-pump-retrofit",
        destination: "/video-blog/english/hydraulic-pump-retrofit",
        permanent: true,
      },
      {
        source: "/blog/english/cylinder-time-calculation",
        destination: "/video-blog/english/cylinder-time-calculation",
        permanent: true,
      },
      {
        source: "/blog/intercambiador-de-calor/",
        source:
          "/blog/castellano/calculo-para-remover-calor-en-un-sistema-hidraulico",
        destination:
          "/video-blog/castellano/calculo-para-remover-calor-en-un-sistema-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/mi-vista-al-quiropractico",
        destination: "/blog/castellano",
        permanent: true,
      },
      {
        source: "/blog/morrell-inc",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/castellano/simulacion-de-circuito-hidraulico",
        destination: "/video-blog/castellano/simulacion-de-circuito-hidraulico",
        permanent: true,
      },
      {
        source: "/blog/castellano/seleccion-de-motor-hidraulico",
        destination: "/video-blog/castellano/seleccion-de-motor-hidraulico",
        permanent: true,
      },
      {
        source:
          "/blog/castellano/circuito-hidraulico-para-ahorrar-caballos-de-fuerza",
        destination:
          "/video-blog/castellano/circuito-hidraulico-para-ahorrar-caballos-de-fuerza",
        permanent: true,
      },
      {
        source: "/blog/motor-de-paletas",
        source: "/blog/castellano/motores-hidraulicos-de-paletas",
        destination: "/video-blog/castellano/motores-hidraulicos-de-paletas",
        permanent: true,
      },
      {
        source: "/blog/oilgear",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source: "/blog/pall-filters-my-review",
        destination: "/blog/english",
        permanent: true,
      },
      {
        source:
          "/blog/pilot-operated-relief-valve-vs-direct-acting-relief-valve",
        destination: "/blog/english/pilot-operated-relief-valve",
        permanent: true,
      },
      {
        source: "/blog/simple-hydraulic-circuit-simulation",
        source: "/blog/english/hydraulic-circuit-simulation",
        destination: "/video-blog/english/hydraulic-circuit-simulation",
        permanent: true,
      },
      {
        source: "/blog/valvula-de-alivio",
        source: "/blog/castellano/valvula-de-alivio",
        destination: "/video-blog/castellano/valvula-de-alivio",
        permanent: true,
      },
      {
        source: "/blog/valvulas-hidraulicas/",
        source:
          "/blog/castellano/reemplazos-de-valvulas-hidraulicas-direccionales",
        destination:
          "/video-blog/castellano/reemplazos-de-valvulas-hidraulicas-direccionales",
        permanent: true,
      },
      {
        source: "/blog/vented-relief-valve/",
        source: "/blog/english/vented-relief-valve",
        destination: "/video-blog/english/vented-relief-valve",
        permanent: true,
      },
      {
        source: "/blog/vickers",
        source: "/blog/castellano/reemplazos-para-eaton-vickers",
        destination: "/video-blog/castellano/reemplazos-para-eaton-vickers",
        permanent: true,
      },
      {
        source: "/directional-control-valves",
        destination: "/products/directional-control-valves",
        permanent: true,
      },
      {
        source: "/gear-pumps",
        destination: "/products/gear-pumps",
        permanent: true,
      },
      {
        source: "/hydraulic-fittings",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Interactive.html",
        destination: "/interactive",
        permanent: true,
      },
      {
        source: "/Products/FlowControlValves",
        destination: "/products/flow-control-valves",
        permanent: true,
      },
      // {
      //   source: "/Products/FlowMeters",
      //   destination: "/products/flowmeters",
      //   permanent: true,
      // },
      {
        source: "/Products/GearPumps",
        destination: "/products/gear-pumps",
        permanent: true,
      },
      {
        source: "/Products/GerolerMotors",
        destination: "/products/geroler-motors",
        permanent: true,
      },
      {
        source: "/static/media/a10v-pump-catalog.72fa758067a60627d9be.pdf",
        destination: "/pdf/a10v-pump-catalog.pdf",
        permanent: true,
      },
      {
        source: "/static/media/d05-manifold.03a0c902a8e8f06d4116.pdf",
        destination: "/pdf/d05-manifold.pdf",
        permanent: true,
      },
      {
        source: "/static/media/d07-manifold.bc043304b6b551a2941c.pdf",
        destination: "/pdf/d07-manifold.pdf",
        permanent: true,
      },
      {
        source: "/static/media/d08-manifold.409dbf0af1ec0202c5d1.pdf",
        destination: "/pdf/d08-manifold.pdf",
        permanent: true,
      },
      {
        source: "/static/media/dump-pumps.58ab10d4cf05735b0d4a.pdf",
        destination: "/pdf/dump-pumps.pdf",
        permanent: true,
      },
      {
        source:
          "/static/media/hydraulic-vane-motor-catalog.74f970544d2cee715fd5.pdf",
        destination: "/pdf/hydraulic-vane-motor-catalog.pdf",
        permanent: true,
      },
      {
        source: "/static/media/radial-piston-pumps.31f4ccc47d5d6aa12c81.pdf",
        destination: "/pdf/a10v-pump-catalog.pdf",
        permanent: true,
      },

      {
        source: "/vane-pumps",
        destination: "/products/vane-pumps",
        permanent: true,
      },
      {
        source: "/products/directional-control-valves",
        source: "/directional-control-valves",
        destination: "products/industrial-valves/directional-control-valves",
        permanent: true,
      },
      {
        source: "/products/flow-control-valves",
        destination: "/products/industrial-valves/flow-control-valves",
        permanent: true,
      },
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
