const defaultModalMeta = {
    modalSelector: '.modal-callback',
    modalOverlaySelector: '.modal-overlay'
}

const modalHandlers = (selector, display, modalMeta = defaultModalMeta) => {
    const buttons = document.querySelectorAll(selector)
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const modal = document.querySelector(modalMeta.modalSelector)
            const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)

            modal.style.display = display
            modalOverlay.style.display = display

        })
    })
}
export default modalHandlers