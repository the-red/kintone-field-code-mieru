const fields = cybozu.data.page.FORM_DATA
  ? [
      ...Object.values(cybozu.data.page.FORM_DATA.schema.table.fieldList),
      ...Object.values(cybozu.data.page.FORM_DATA.schema.subTable),
      ...Object.values(cybozu.data.page.FORM_DATA.schema.subTable)
        .map((_) => _.fieldList)
        .reduce((x, y) => [...x, ...Object.values(y)], []),
    ]
  : []

const addMieruElements = () => {
  fields.forEach(({ id, type, var: fieldCode }) => {
    const [element] = document.getElementsByClassName(`field-${id}`)
    element &&
      element.insertAdjacentHTML(
        'beforeend',
        `<div class="mieru notification is-primary" style="display: none"><b class="field-code">${fieldCode}</b><small>(${type})</small></div>`,
      )
  })
}

const recordGaia = document.getElementById('record-gaia')

recordGaia &&
  new MutationObserver(() => {
    addMieruElements()
  }).observe(recordGaia, { childList: true })

addMieruElements()
