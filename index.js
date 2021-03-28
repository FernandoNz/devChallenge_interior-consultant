document.addEventListener("DOMContentLoaded", () => {
	const menuButton = (btn, btnClose, menu) => {
		document.addEventListener("click", e => {
			if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
				document.querySelector(menu).classList.add("is-active")
				document.querySelector(btnClose).classList.add("is-active")
				document.querySelector(btn).classList.add("disabled")
			}

			if (e.target.matches(btnClose) || e.target.matches(`${btnClose} *`)) {
				document.querySelector(menu).classList.remove("is-active")
				document.querySelector(btnClose).classList.remove("is-active")
				document.querySelector(btn).classList.remove("disabled")
			}
		})
	}

	menuButton("#btn-menu", "#btn-menu-close", "#nav")
})
