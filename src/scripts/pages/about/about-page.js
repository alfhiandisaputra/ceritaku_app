// src/scripts/pages/about/about-page.js
import NavigationHelper from "../../utils/navigation-helper";

class AboutPage {
  async render() {
    return `
      <section class="container about-page" id="main-content">
        <div class="about-header">
          <h1 class="about-title">About <span class="highlight">Ceritaku</span></h1>
          <div class="title-underline"></div>
        </div>
        
        <div class="about-content">
          <div class="about-description">
            <p>Ceritaku adalah platform berbagi cerita dengan fitur dapat menambahkan foto dan lokasi. Dokumentasikan ceritamu dengan aplikasi ini.</p>
          </div>
        </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    NavigationHelper.setupAuthenticatedNavigation();
  }
}

export default AboutPage;
