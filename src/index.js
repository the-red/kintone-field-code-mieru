const fields = cybozu.data.page.FORM_DATA
  ? [
      ...Object.values(cybozu.data.page.FORM_DATA.schema.table.fieldList),
      ...Object.values(cybozu.data.page.FORM_DATA.schema.subTable),
      ...Object.values(cybozu.data.page.FORM_DATA.schema.subTable)
        .map((_) => _.fieldList)
        .reduce((x, y) => [...x, ...Object.values(y)], []),
    ]
  : [];

const addMieruElements = () => {
  const existingMieru = document.querySelector('.mieru');
  const currentDisplay = existingMieru ? existingMieru.style.display : 'none';

  fields.forEach(({ id, type, var: fieldCode }) => {
    const [element] = document.getElementsByClassName(`field-${id}`);
    if (!element || element.querySelector('.mieru')) return;
    element.insertAdjacentHTML(
      'beforeend',
      `<div class="mieru notification is-primary" style="display: ${currentDisplay}"><b class="field-code">${fieldCode}</b><small>(${type})</small></div>`
    );
  });
};

const recordGaia = document.getElementById('record-gaia');

recordGaia &&
  new MutationObserver(() => {
    addMieruElements();
  }).observe(recordGaia, { childList: true, subtree: true });

addMieruElements();
