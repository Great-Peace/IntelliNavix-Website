import React from "react";

const ToolsSection: React.FC = () => (
  <section className="tools-section">
    <div className="container">
      <div className="section-header text-center mb-5">
        <div className="tools-badge mb-3">
          <span className="badge-orange">Learn with</span>
          <span className="badge-purple">Industry-Leading Tools</span>
        </div>
        <p className="tools-description">
          At IntelliNavix, you'll master cutting-edge tools and platforms essential for excelling in the tech industry
        </p>
      </div>
      <div className="tools-wrapper">
        {/* First row - moving left */}
        <div className="tools-row row-left">
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <span>Python</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon excel-icon">📈</div>
            <span>Excel</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon tableau-icon">📊</div>
            <span>Tableau</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon powerbi-icon">📊</div>
            <span>Power BI</span>
          </div>
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
            <span>SQL</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <span>Python</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon excel-icon">📈</div>
            <span>Excel</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon tableau-icon">📊</div>
            <span>Tableau</span>
          </div>
        </div>
        {/* Second row - moving right */}
        <div className="tools-row row-right">
          <div className="tool-card">
            <div className="tool-icon powerbi-icon">📊</div>
            <span>Power BI</span>
          </div>
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" />
            <span>Jupyter</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon analytics-icon">📈</div>
            <span>Analytics</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon r-icon">📊</div>
            <span>R</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon spss-icon">📊</div>
            <span>SPSS</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="tool-card">
            <div className="tool-icon powerbi-icon">📊</div>
            <span>Power BI</span>
          </div>
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" />
            <span>Jupyter</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon analytics-icon">📈</div>
            <span>Analytics</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ToolsSection; 