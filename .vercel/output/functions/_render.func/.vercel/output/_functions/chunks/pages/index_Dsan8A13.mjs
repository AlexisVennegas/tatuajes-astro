import { c as createComponent, r as renderTemplate, h as renderComponent, e as createAstro, m as maybeRenderHead } from '../astro_BZr8pa6s.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Tatuajes_Dp9nysvP.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="wrapper"> <header> <div class="img-container"> <!-- <img class="logo-header" src="../Img/amunet.png" alt="Amunet"> --> </div> <nav class="menu"> <ul class="ul-menu-header"> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> <img src="img/menu.png" class="menu-img" alt="menu-logo"> <div class="desplegable" id="desplegableid"> <ul class="ul-menu-header"> <li><a href="./">Home</a></li> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> <ul class="ul-menu-header-mobile"> <li><a href="./Tatuajes">Tatuaje</a></li> <li><a href="./About">About</a></li> <li><a href="./Services">Services</a></li> <li><a href="./Contact">Contact</a></li> <li><a href="./">morefuture</a></li> </ul> </div> </nav> </header> <main class="video-container"> <img class="logo-main" src="img/amunet.png" alt="Amunet"> <video class="video-background" src="img/video.mp4" autoplay muted></video> </main> </div> </main> ` })}  `;
}, "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/usuario/Desktop/Proyectos/tatuajes-astro/tatuajes-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
