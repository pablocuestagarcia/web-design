class NavBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                ${styles}
            </style>
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="logo">
                        <span>20minutos</span>
                    </div>
                    <div class="navbar-right">
                        <div class="user-icon">
                            <span id="user-icon">&#128100;</span>
                        </div>
                        <div class="menu-icon" id="menu-icon">
                            <span>&#9776;</span>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#menu-icon').addEventListener('click', () => {
            document.querySelector('menu-drawer').open();
        });
    }
}

class MenuDrawer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                ${styles}
            </style>
            <div class="menu" id="menu">
                <div class="menu-header">
                    <div class="logo">
                        <span>20minutos</span>
                    </div>
                    <div class="close-icon" id="close-icon">
                        <span>&#10006;</span>
                    </div>
                </div>
                <div class="menu-items">
                    <div class="menu-section">
                        <div class="menu-item">REGÍSTRATE</div>
                        <div class="menu-item">EDICIONES IMPRESAS</div>
                        <div class="menu-item">NEWSLETTERS</div>
                    </div>
                    <div class="menu-section">
                        <div class="menu-item">Madrid</div>
                        <div class="menu-item">Cataluña</div>
                        <div class="menu-item">Andalucía</div>
                        <div class="menu-item">Comunidad Valenciana</div>
                        <div class="menu-item">Nacional</div>
                        <div class="menu-item">Internacional</div>
                        <div class="menu-item">Gente</div>
                        <div class="menu-item">Televisión</div>
                        <div class="menu-item">Deportes</div>
                        <div class="menu-item">Opinión</div>
                        <div class="menu-item">Cultura</div>
                        <div class="menu-item">Economía</div>
                        <div class="menu-item">Cinemanía</div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#close-icon').addEventListener('click', () => {
            this.close();
        });
    }

    open() {
        this.shadowRoot.querySelector('#menu').style.right = '0';
    }

    close() {
        this.shadowRoot.querySelector('#menu').style.right = '-300px';
    }
}

const styles = `
    :host {
        display: block;
    }
    /* Copia aquí el contenido del archivo styles.css */
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .navbar {
        background-color: #005BAC;
        padding: 10px 20px;
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-right {
        display: flex;
        align-items: center;
    }

    .menu-icon span,
    .user-icon span {
        font-size: 24px;
        color: white;
    }

    .menu-icon {
        margin-left: 10px;
    }

    .logo span {
        font-size: 24px;
        color: white;
        font-weight: bold;
    }

    .menu {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100%;
        background-color: white;
        transition: right 0.3s;
        box-shadow: -2px 0 5px rgba(0,0,0,0.1);
        overflow-y: auto;
    }

    .menu-header {
        background-color: #005BAC;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-header .logo span {
        color: white;
        font-size: 24px;
        font-weight: bold;
    }

    .menu-header .close-icon span {
        font-size: 24px;
        color: white;
    }

    .menu-items {
        padding: 20px;
    }

    .menu-section {
        margin-bottom: 20px;
    }

    .menu-item {
        padding: 10px 0;
        font-size: 18px;
        border-bottom: 1px solid #ddd;
    }
`;

customElements.define('nav-bar', NavBar);
customElements.define('menu-drawer', MenuDrawer);
