const $_PAGEBODY = document.getElementById('page-body')
const $_PANEL_MENU_BTNS = document.getElementsByClassName('menu-btn')
const $_SITENAV_MENU = document.getElementById('main_menu')
const $_CLOSE_BTN = document.getElementById('close_menu_btn')

function toggleSiteMenu() {
	if ($_SITENAV_MENU.dataset.status === '') {
		$_SITENAV_MENU.dataset.status = 'active'
		$_PAGEBODY.dataset.mainMenu = 'active'
		requestAnimationFrame(toggleSiteMenu)
		return
	}
	$_SITENAV_MENU.dataset.status = ''
	$_PAGEBODY.dataset.mainMenu = ''
	requestAnimationFrame(toggleSiteMenu)
}

function initSiteNavigation() {
	const $ARRAY_PANEL_MENU_BTNS = Array.from($_PANEL_MENU_BTNS)

	$ARRAY_PANEL_MENU_BTNS.forEach((element) => {
		element.addEventListener('click', (e) => {
			e.preventDefault()
			toggleSiteMenu()
		})
	})

	$_CLOSE_BTN.addEventListener('click', (e) => {
		e.preventDefault()
		toggleSiteMenu()
	})
}

export default () => {
	initSiteNavigation()
}
