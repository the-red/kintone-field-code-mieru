const fields = Object.values(
  window.cybozu.data.page.FORM_DATA.schema.table.fieldList
)

fields.forEach(({ id, type, var: fieldCode }) => {
  const [element] = document.getElementsByClassName(`field-${id}`)
  element &&
    element.insertAdjacentHTML(
      'beforeend',
      `<div class="mieru notification is-primary" style="display: none"><b class="field-code">${fieldCode}</b><small>(${type})</small></div>`
    )
})
