const teamMembers = [
  {
    name: "Ingrid Pereira",
    role: "Liderança ágil",
    contribution: "Organização e acompanhamento ágil do trabalho colaborativo.",
    miniBio: "Profissional com experiência de mercado e perfil comunicativo, atuando em atendimento, operações e gestão de SLAs em banco, multinacional e grandes empresas. Formada em Administração de Empresas, com formação técnica Full Stack e certificação em Scrum/Kanban. Meu diferencial está nas soft skills: comunicação clara, escuta ativa, organização e facilidade para facilitar o diálogo entre times, áreas e sistemas, apoiando a implantação de soluções e a condução de projetos. Em formação em Cloud Computing pela Generation Brasil, busco unir pessoas, tecnologia e IA na transformação digital.",
    careerInterest: "Analista de Transformação Digital e Inteligência Artificial | Analista de Estratégia em Dados & IA",
    photo: "./assets/Ingrid Pereira.png",
    linkedin: "https://www.linkedin.com/in/ingridpereira1/",
    github: "https://github.com/ingridkyle1",
  },
  {
    name: "Jamilly Vertuoza de Araujo",
    role: "Estratégia de migração",
    contribution: "Planejamento da transição da infraestrutura legada para a AWS, além de melhorias e implementação futura.",
    miniBio: "Graduanda em Sistemas de Informação e curiosa nata com experiência em tecnologia e projetos que integram dados, automação e cloud. Focada em conectar Python, SQL, AWS, APIs e agentes de IA para desenvolver soluções inteligentes e escaláveis.",
    careerInterest: "Data & Automation Engineer",
    photo: "./assets/Jamilly Araujo.png",
    linkedin: "https://www.linkedin.com/in/005jamilly/",
    github: "https://github.com/M1llyz",
  },
  {
    name: "Paulo Henrique de Almeida Pinto",
    role: "Diagrama de arquitetura",
    contribution: "Representação visual e orçamento da arquitetura AWS, além do desenvolvimento do site do projeto.",
    miniBio: "Desenvolvedor Full Stack Jr. com passagem pelo mercado financeiro e determinação para construir soluções reais. Atuo com .NET, React e AWS, unindo visão de negócio e tecnologia. Bacharel em Sistemas de Informação, com projetos no GitHub e foco nos estudos visando ser um DevOps Engineer Sênior.",
    careerInterest: "Desenvolvedor Full Stack Jr | Analista de Cloud Jr | Analista de Sistemas Jr",
    photo: "./assets/paulopinto.png",
    linkedin: "https://www.linkedin.com/in/pauloalmeidapinto/",
    github: "https://github.com/dev-phap",
  },
  {
    name: "Guilherme Batista Calado",
    role: "Jornada e documentação",
    contribution: "Construção da jornada do projeto e organização da documentação.",
    miniBio: "Profissional de CX e analise de processos com experiência no mercado financeiro, administração de Zendesk, automação de processos, análise de indicadores e melhoria contínua, unindo tecnologia e eficiência operacional",
    careerInterest: "Analista de processos e melhoria continua",
    photo: "./assets/Guilherme Batista Calado.png",
    linkedin: "https://www.linkedin.com/in/c4lado/",
    github: "https://github.com/c4lado",
  },
  {
    name: "Bruno Otto Cavalcante Vieira",
    role: "Seleção de serviços AWS",
    contribution: "Análise e seleção dos serviços considerados na arquitetura.",
    miniBio: "Profissional com mais de 10 anos de experiência em CX e Suporte, atualmente estudante de Análise e Desenvolvimento de Sistemas. Tenho interesse em computação em nuvem e desenvolvimento de software, buscando integrar minha experiência com clientes ao universo da tecnologia.",
    careerInterest: "Cloud Computing e Desenvolvimento de Software",
    photo: "./assets/BrunoVieira.png",
    linkedin: "https://www.linkedin.com/in/bruno-otto-cavalcante-vieira/",
    github: "https://github.com/bruno-otto",
  },
  {
    name: "Erick Alexandre",
    role: "Capacidade e escala",
    contribution: "Análise da capacidade e da estratégia de escala da infraestrutura.",
    miniBio: "Técnico em Informática e estudante de ADS, com experiência em Suporte Técnico e conhecimentos em AWS, Linux, Python e SQL. Tenho interesse em Cloud Computing e Segurança da Informação e busco evoluir com projetos práticos.",
    careerInterest: "Cloud Engineer",
    photo: "./assets/ErickAlexandre.png",
    linkedin: "https://www.linkedin.com/in/alexandrerick/",
    github: "https://github.com/ErickSpina",
  },
  /*{
    name: "Marjorie Jesus dos Santos",
    role: "Estimativa de custos",
    contribution: "Estimativa de custos dos serviços considerados na proposta.",
    miniBio: "",
    careerInterest: "",
    photo: "./assets/MarjorieSantos.png",
    linkedin: "https://www.linkedin.com/in/marjoriejds/",
    github: "",
  },*/
];

const socialIcons = {
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9.2H7v11.3H3.4V9.2Zm5.8 0h3.4v1.5h.1c.5-.9 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.2v6.5h-3.6v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v5.9H9.2V9.2Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1a10.7 10.7 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.8 5.3-5.4 5.6.4.3.8 1 .8 2v3.3c0 .3.2.6.8.5A11.2 11.2 0 0 0 12 .9Z"/></svg>',
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function createSocialLink(platform, url, name) {
  const platformName = platform === "linkedin" ? "LinkedIn" : "GitHub";

  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `${name} no ${platformName}`);
    link.innerHTML = socialIcons[platform];
    return link;
  }

  const placeholder = document.createElement("span");
  placeholder.className = "member-social-placeholder";
  placeholder.setAttribute("aria-label", `Link de ${name} para ${platformName} será adicionado`);
  placeholder.innerHTML = socialIcons[platform];
  return placeholder;
}

function renderTeam() {
  const teamSelector = document.querySelector("#team-selector");
  const profile = document.querySelector("#team-profile");
  const closeProfile = document.querySelector("#team-profile-close");
  const profilePhoto = document.querySelector("#team-profile-photo");
  const profilePlaceholder = document.querySelector("#team-profile-placeholder");
  const profileName = document.querySelector("#team-profile-name");
  const profileBio = document.querySelector("#team-profile-bio");
  const profileDescription = document.querySelector("#team-profile-description");
  const profileCareerInterestGroup = document.querySelector("#team-profile-career-interest-group");
  const profileCareerInterest = document.querySelector("#team-profile-career-interest");
  const profileLinks = document.querySelector("#team-profile-links");
  let selectedButton;

  function selectMember(member, button) {
    selectedButton = button;
    teamSelector.querySelectorAll(".team-person").forEach((personButton) => {
      const isSelected = personButton === button;
      personButton.setAttribute("aria-pressed", String(isSelected));
      personButton.classList.toggle("is-selected", isSelected);
    });

    profilePhoto.hidden = !member.photo;
    profilePlaceholder.hidden = Boolean(member.photo);
    profilePlaceholder.textContent = getInitials(member.name);
    profilePlaceholder.setAttribute("aria-label", `Foto de ${member.name} será adicionada`);

    if (member.photo) {
      profilePhoto.src = member.photo;
      profilePhoto.alt = `Foto de ${member.name}`;
      profilePhoto.loading = "lazy";
    } else {
      profilePhoto.removeAttribute("src");
      profilePhoto.alt = "";
    }

    profileName.textContent = member.name;
    profileBio.textContent = member.miniBio;
    profileBio.hidden = !member.miniBio.trim();
    profileDescription.textContent = member.contribution;
    profileCareerInterest.textContent = member.careerInterest;
    profileCareerInterestGroup.hidden = !member.careerInterest.trim();
    profileLinks.replaceChildren();

    ["linkedin", "github"].forEach((platform) => {
      profileLinks.append(createSocialLink(platform, member[platform], member.name));
    });

    profile.hidden = false;
  }

  closeProfile.addEventListener("click", () => {
    profile.hidden = true;
    teamSelector.querySelectorAll(".team-person").forEach((personButton) => {
      personButton.setAttribute("aria-pressed", "false");
      personButton.classList.remove("is-selected");
    });
    selectedButton?.focus();
    selectedButton = undefined;
  });

  teamMembers.forEach((member) => {
    const button = document.createElement("button");
    button.className = "team-person";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-controls", "team-profile");
    button.setAttribute("aria-label", `${member.name}, ${member.role}`);

    const avatar = document.createElement("span");
    avatar.className = "team-avatar";

    if (member.photo) {
      const image = document.createElement("img");
      image.src = member.photo;
      image.alt = "";
      image.loading = "lazy";
      avatar.append(image);
    } else {
      avatar.textContent = getInitials(member.name);
    }

    const name = document.createElement("span");
    name.className = "team-person-name";
    name.textContent = member.name.split(" ")[0];

    button.append(avatar, name);
    button.addEventListener("click", () => selectMember(member, button));
    teamSelector.append(button);
  });
}

function setupDiagramDialog() {
  const dialog = document.querySelector("#diagram-dialog");
  const image = document.querySelector("#diagram-dialog-image");
  const caption = document.querySelector("#diagram-dialog-caption");
  const closeButton = document.querySelector(".diagram-dialog-close");
  const pointers = new Map();
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let dragStart = null;

  function applyImageTransform() {
    const maxX = (image.clientWidth * (scale - 1)) / 2;
    const maxY = (image.clientHeight * (scale - 1)) / 2;
    translateX = Math.max(-maxX, Math.min(maxX, translateX));
    translateY = Math.max(-maxY, Math.min(maxY, translateY));
    image.style.transform = scale === 1
      ? ""
      : `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    image.classList.toggle("is-zoomed", scale > 1);
  }

  function pointerDistance() {
    const [first, second] = [...pointers.values()];
    return Math.hypot(second.x - first.x, second.y - first.y);
  }

  image.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    image.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 2) {
      pinchStartDistance = pointerDistance();
      pinchStartScale = scale;
      dragStart = null;
    } else if (pointers.size === 1 && scale > 1) {
      dragStart = {
        x: event.clientX,
        y: event.clientY,
        translateX,
        translateY,
      };
    }
  });

  image.addEventListener("pointermove", (event) => {
    if (!pointers.has(event.pointerId)) return;
    event.preventDefault();
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size >= 2 && pinchStartDistance > 0) {
      scale = Math.max(1, Math.min(4, pinchStartScale * (pointerDistance() / pinchStartDistance)));
      applyImageTransform();
    } else if (pointers.size === 1 && scale > 1 && dragStart) {
      translateX = dragStart.translateX + event.clientX - dragStart.x;
      translateY = dragStart.translateY + event.clientY - dragStart.y;
      applyImageTransform();
    }
  });

  function finishPointer(event) {
    pointers.delete(event.pointerId);
    if (pointers.size === 1) {
      const [, point] = [...pointers.entries()][0];
      dragStart = scale > 1
        ? { x: point.x, y: point.y, translateX, translateY }
        : null;
      pinchStartDistance = 0;
    } else {
      dragStart = null;
      pinchStartDistance = 0;
    }
  }

  image.addEventListener("pointerup", finishPointer);
  image.addEventListener("pointercancel", finishPointer);
  image.addEventListener("lostpointercapture", finishPointer);

  document.querySelectorAll(".diagram-image").forEach((button) => {
    button.addEventListener("click", () => {
      const sourceImage = button.querySelector("img");
      const cardTitle = button.closest(".diagram-card").querySelector(".diagram-caption h3");

      image.src = sourceImage.currentSrc || sourceImage.src;
      image.alt = sourceImage.alt;
      scale = 1;
      translateX = 0;
      translateY = 0;
      image.style.transform = "";
      image.classList.remove("is-zoomed");
      caption.textContent = cardTitle.textContent;
      dialog.showModal();
      document.body.classList.add("has-open-dialog");
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    dialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("has-open-dialog");
    image.removeAttribute("src");
    pointers.clear();
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const navigation = document.querySelector("#site-nav");
  const sectionLinks = [...navigation.querySelectorAll(".section-link")];
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const mobileViewport = window.matchMedia("(max-width: 680px)");
  let scrollTimer;
  let animationFrame = 0;

  function updateHeaderState() {
    const isScrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", isScrolled);
  }

  function updateActiveSection() {
    const activationPoint = window.innerHeight * 0.38;
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= activationPoint) {
        activeSection = section;
      }
    });

    sectionLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${activeSection.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function handleScroll() {
    updateHeaderState();

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    }

    if (mobileViewport.matches) {
      navigation.classList.add("is-scrolling");
      navigation.classList.remove("is-visible");
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        navigation.classList.remove("is-scrolling");
        navigation.classList.add("is-visible");
      }, 180);
    }

  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateHeaderState();
    updateActiveSection();
  });
  updateHeaderState();
  updateActiveSection();

  if (mobileViewport.matches) {
    window.setTimeout(() => navigation.classList.add("is-visible"), 250);
  }
}

renderTeam();
setupDiagramDialog();
setupNavigation();
