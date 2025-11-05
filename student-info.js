class StudentInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const name = this.getAttribute('name') || 'Nama Kamu';
    const nim = this.getAttribute('nim') || 'NIM Kamu';

    this.shadowRoot.innerHTML = `
      <style>
        .badge {
          display: inline-block;
          border: 1px solid #000;
          padding: 8px 12px;
          background: #fff;
          font-family: sans-serif;
          font-size: 0.95rem;
        }
        .label { font-weight: bold; margin-right: 6px; }
        .data { font-style: italic; }
      </style>
      <div class="badge">
        <span class="label">Student:</span>
        <span class="data">${name} (${nim})</span>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['name', 'nim'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // rerender simple: update the shadow DOM text node
    const el = this.shadowRoot.querySelector('.data');
    if (el) {
      const nm = this.getAttribute('name') || 'Nama Kamu';
      const ni = this.getAttribute('nim') || 'NIM Kamu';
      el.textContent = `${nm} (${ni})`;
    }
  }
}

customElements.define('student-info', StudentInfo);
