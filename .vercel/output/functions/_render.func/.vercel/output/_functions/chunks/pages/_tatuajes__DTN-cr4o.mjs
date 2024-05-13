import { c as createComponent, r as renderTemplate, h as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_BZr8pa6s.mjs';
import 'kleur/colors';
import 'html-escaper';
import { t as tatuajes, $ as $$Layout } from './Tatuajes_Dp9nysvP.mjs';

const $$Astro = createAstro();
const $$tatuajes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tatuajes;
  const url = new URL(Astro2.url);
  const nametitle = url.pathname.replace("/", "");
  const data = tatuajes.find((t) => t.title === nametitle);
  if (!data) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": nametitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper"> <header class="header-Tatuajes"> <div class="img-container"> <a class="a-logo-header" href="./"> <img class="logo-header" src="img/amunet.png" alt="Amunet"> </a> </div> <nav class="menu"> <ul class="ul-menu-header"> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> <img src="img/menu.png" class="menu-img" alt="menu-logo"> <div class="desplegable" id="desplegableid"> <ul class="ul-menu-header"> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> <ul class="ul-menu-header-mobile"> <li><a href="./">Home</a></li> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> </div> </nav> </header> <section> <div class="content-info"> <div class="image"> <img${addAttribute(`imagenLocal secondpage-${data.id}`, "class")}${addAttribute(data.img, "src")} alt=""> </div> <div class="info"> <h1${addAttribute(`title-${data.id}`, "class")}>${data.title}</h1> <p>${data.desc}</p> <div class="finally-div"> <img src="img/amunet.png" alt="logo" class="final-logo"> </div> </div> </div> </section> </div> ` })} `;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/[tatuajes].astro", void 0);

const $$file = "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/[tatuajes].astro";
const $$url = "/[tatuajes]";

export { $$tatuajes as default, $$file as file, $$url as url };
