export default function MyHeader({ html, state = {} }) {
  const { attrs = {}, store = {} } = state;
  const { heading = "Default", link='' } = attrs;
//   const href = store.aboutPath;

  const { message = "" } = store;

  return html`
    <header>
      <h1>${heading}</h1>
      <a href="${link}"><slot /></a>
      <p>${message}</p>
    </header>
  `;
}
