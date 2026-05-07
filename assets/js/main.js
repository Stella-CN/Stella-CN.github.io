const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealSections = document.querySelectorAll('.reveal-section');

if (revealSections.length) {
  document.documentElement.classList.add('reveal-enabled');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.16,
    });

    revealSections.forEach((section) => sectionObserver.observe(section));
  } else {
    revealSections.forEach((section) => section.classList.add('is-visible'));
  }
}

const projectList = document.querySelector('#project-list');

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const tags = (project.tags || [])
    .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
    .join('');

  const homepageLink = project.homepage
    ? `<a href="${escapeAttribute(project.homepage)}" target="_blank" rel="noreferrer">在线预览 →</a>`
    : '';

  article.innerHTML = `
    <div class="project-topline">
      <span class="project-status">${escapeHtml(project.status || 'Active')}</span>
      <span class="project-language">${escapeHtml(project.language || 'Open Source')}</span>
    </div>
    <h3>${escapeHtml(project.name)}</h3>
    <p class="project-summary">${escapeHtml(project.summary)}</p>
    <div class="project-tags">${tags}</div>
    <div class="project-links">
      <a href="${escapeAttribute(project.repoUrl)}" target="_blank" rel="noreferrer">查看仓库 →</a>
      ${homepageLink}
    </div>
  `;

  return article;
}

async function loadProjects() {
  if (!projectList) return;

  try {
    const response = await fetch('./data/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to load projects: ${response.status}`);
    }

    const projects = await response.json();
    projectList.innerHTML = '';
    projects
      .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
      .forEach((project) => projectList.appendChild(createProjectCard(project)));
  } catch (error) {
    projectList.innerHTML = `
      <article class="project-card">
        <h3>项目加载失败</h3>
        <p class="project-summary">请直接访问 GitHub 仓库列表查看项目，或检查 data/projects.json 格式是否正确。</p>
        <div class="project-links">
          <a href="https://github.com/Stella-CN?tab=repositories" target="_blank" rel="noreferrer">查看 GitHub 仓库 →</a>
        </div>
      </article>
    `;
    console.error(error);
  }
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttribute(value = '') {
  return escapeHtml(value);
}

loadProjects();
