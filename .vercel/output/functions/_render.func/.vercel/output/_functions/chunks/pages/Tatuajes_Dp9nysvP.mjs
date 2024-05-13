import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_BZr8pa6s.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
/* empty css                             */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} </body></html>`;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/layouts/Layout.astro", void 0);

const tatuajes = [
    {
        id: "tatuaje-1",
        title: "lineal",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-1-400x400.jpg",
        desc: "El tatuaje lineal es una técnica de tatuaje que se caracteriza por la utilización de líneas finas y precisas. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes lineales pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y geométricos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje lineal es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    }
    ,
    {
        id: "tatuaje-2",
        title: "Color",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-2-400x400.jpg",
        desc: "El tatuaje en color es una de las técnicas de tatuaje más populares y demandadas en la actualidad. Se trata de una técnica que consiste en la utilización de pigmentos de colores para crear diseños y dibujos en la piel. Los tatuajes en color pueden ser de diferentes estilos y diseños, desde tatuajes realistas y detallados hasta tatuajes más abstractos y creativos. En cualquier caso, el tatuaje en color es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    }
    ,
    {
        id: "tatuaje-3",
        title: "Blackwork",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-3-400x400.jpg",
        desc: "El tatuaje blackwork es una técnica de tatuaje que se caracteriza por la utilización de tinta negra para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes blackwork pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y geométricos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje blackwork es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-4",
        title: "Realismo",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-4-400x400.jpg",
        desc: "El tatuaje realista es una técnica de tatuaje que se caracteriza por la utilización de sombras y luces para crear diseños y dibujos en la piel que parecen reales. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su realismo y detalle. Los tatuajes realistas pueden ser de diferentes estilos y diseños, desde retratos de personas y animales hasta paisajes y objetos. En cualquier caso, el tatuaje realista es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-5",
        title: "Geometrico",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-5-400x400.jpg",
        desc: "El tatuaje geométrico es una técnica de tatuaje que se caracteriza por la utilización de formas geométricas para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes geométricos pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y abstractos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje geométrico es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-6",
        title: "Acuarela",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-6-400x400.jpg",
        desc: "El tatuaje acuarela es una técnica de tatuaje que se caracteriza por la utilización de colores y formas que imitan la técnica de la acuarela. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su creatividad y originalidad. Los tatuajes acuarela pueden ser de diferentes estilos y diseños, desde tatuajes abstractos y coloridos hasta tatuajes más realistas y detallados. En cualquier caso, el tatuaje acuarela es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-7",
        title: "TrashPolka",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-7-400x400.jpg",
        desc: "El tatuaje trash polka es una técnica de tatuaje que se caracteriza por la utilización de manchas de tinta y elementos gráficos para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su originalidad y creatividad. Los tatuajes trash polka pueden ser de diferentes estilos y diseños, desde tatuajes abstractos y coloridos hasta tatuajes más realistas y detallados. En cualquier caso, el tatuaje trash polka es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-8",
        title: "Neotradicional",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-8-400x400.jpg",
        desc: "El tatuaje neotradicional es una técnica de tatuaje que se caracteriza por la utilización de colores vivos y líneas gruesas para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes neotradicionales pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y geométricos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje neotradicional es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-9",
        title: "Dotwork",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-9-400x400.jpg",
        desc: "El tatuaje dotwork es una técnica de tatuaje que se caracteriza por la utilización de puntos para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes dotwork pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y geométricos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje dotwork es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    },
    {
        id: "tatuaje-10",
        title: "Fineline",
        img: "https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-10-400x400.jpg",
        desc: "El tatuaje fineline es una técnica de tatuaje que se caracteriza por la utilización de líneas finas y precisas para crear diseños y dibujos en la piel. Se trata de un estilo de tatuaje que se ha popularizado en los últimos años y que se caracteriza por su elegancia y sencillez. Los tatuajes fineline pueden ser de diferentes estilos y diseños, desde tatuajes minimalistas y geométricos hasta tatuajes más elaborados y detallados. En cualquier caso, el tatuaje fineline es una técnica que requiere de un tatuador con experiencia y habilidad para conseguir un resultado óptimo."
    }

];

const $$Astro = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const { tatuajes } = Astro2.props;
  return renderTemplate`${tatuajes.map(({ title, id, img }) => {
    return renderTemplate`${maybeRenderHead()}<li class="imagenes-li " data-astro-cid-gt4yj4lj><a${addAttribute(title, "href")} class="enlace-imagen" data-astro-cid-gt4yj4lj><img${addAttribute(`img_tatuajes-slider first-page-${id}`, "class")}${addAttribute(img, "src")} alt="tatuaje de una rosa" data-astro-cid-gt4yj4lj><h5${addAttribute(`title-${id}`, "class")} data-astro-cid-gt4yj4lj>${title}</h5></a></li>`;
  })}`;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/components/List.astro", void 0);

const $$Tatuajes = createComponent(($$result, $$props, $$slots) => {
  const tatuajesSelect1 = tatuajes.slice(0, 5);
  const tatuajesSelect2 = tatuajes.slice(5, 10);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-jha7unhm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper" data-astro-cid-jha7unhm> <header class="header-Tatuajes" data-astro-cid-jha7unhm> <div class="img-container" data-astro-cid-jha7unhm> <a class="a-logo-header" href="./" data-astro-cid-jha7unhm> <img class="logo-header finally-header-00" src="img/amunet.png" alt="Amunet" data-astro-cid-jha7unhm> </a> </div> <nav class="menu" data-astro-cid-jha7unhm> <ul class="ul-menu-header" data-astro-cid-jha7unhm> <li data-astro-cid-jha7unhm><a href="./Tatuajes" data-astro-cid-jha7unhm>Tatuaje</a></li> <li data-astro-cid-jha7unhm><a href="./About" data-astro-cid-jha7unhm>About</a></li> <li data-astro-cid-jha7unhm><a href="./Services" data-astro-cid-jha7unhm>Services</a></li> <li data-astro-cid-jha7unhm><a href="./Contact" data-astro-cid-jha7unhm>Contact</a></li> <li data-astro-cid-jha7unhm><a href="./" data-astro-cid-jha7unhm>morefuture</a></li> </ul> <img src="img/menu.png" class="menu-img" alt="menu-logo" data-astro-cid-jha7unhm> <div class="desplegable" id="desplegableid" data-astro-cid-jha7unhm> <ul class="ul-menu-header" data-astro-cid-jha7unhm> <li data-astro-cid-jha7unhm><a href="./Tatuajes" data-astro-cid-jha7unhm>Tatuaje</a></li> <li data-astro-cid-jha7unhm><a href="./About" data-astro-cid-jha7unhm>About</a></li> <li data-astro-cid-jha7unhm><a href="./Services" data-astro-cid-jha7unhm>Services</a></li> <li data-astro-cid-jha7unhm><a href="./Contact" data-astro-cid-jha7unhm>Contact</a></li> <li data-astro-cid-jha7unhm><a href="./" data-astro-cid-jha7unhm>morefuture</a></li> </ul> <ul class="ul-menu-header-mobile" data-astro-cid-jha7unhm> <li data-astro-cid-jha7unhm><a href="./" data-astro-cid-jha7unhm>Home</a></li> <li data-astro-cid-jha7unhm><a href="./Tatuajes" data-astro-cid-jha7unhm>Tatuaje</a></li> <li data-astro-cid-jha7unhm><a href="./About" data-astro-cid-jha7unhm>About</a></li> <li data-astro-cid-jha7unhm><a href="./Services" data-astro-cid-jha7unhm>Services</a></li> <li data-astro-cid-jha7unhm><a href="./Contact" data-astro-cid-jha7unhm>Contact</a></li> <li data-astro-cid-jha7unhm><a href="./" data-astro-cid-jha7unhm>morefuture</a></li> </ul> </div> </nav> </header> <main class="content-tatuajes" data-astro-cid-jha7unhm> <div class="slide-one" data-astro-cid-jha7unhm> <h1 class="nueva" data-astro-cid-jha7unhm>Lineal</h1> <ul class="imagenes-ul" data-astro-cid-jha7unhm> ${renderComponent($$result2, "List", $$List, { "tatuajes": tatuajesSelect1, "data-astro-cid-jha7unhm": true })} </ul> </div> <div class="slide-one" data-astro-cid-jha7unhm> <h1 class="nueva" data-astro-cid-jha7unhm>Color</h1> <ul class="imagenes-ul" data-astro-cid-jha7unhm> ${renderComponent($$result2, "List", $$List, { "tatuajes": tatuajesSelect2, "data-astro-cid-jha7unhm": true })} </ul> </div> </main> </div> ` })}  `;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/Tatuajes.astro", void 0);

const $$file = "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/Tatuajes.astro";
const $$url = "/Tatuajes";

const Tatuajes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Tatuajes,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Tatuajes as T, tatuajes as t };
