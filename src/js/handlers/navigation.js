const $_PAGEBODY = document.getElementById('page-body')
const $_PANEL_MENU_BTNS = document.getElementsByClassName('menu-btn')
const $_SITENAV_MENU = document.getElementById('main_menu')
const $_CLOSE_BTN = document.getElementById('close_menu_btn')
const $ARRAY_PANEL_MENU_BTNS = Array.from($_PANEL_MENU_BTNS)
const $ARRAY_ALL_BTNS = [...$_PANEL_MENU_BTNS, $_CLOSE_BTN]

function togglePanelBtnAnimation() {
	requestAnimationFrame(() => {
		$ARRAY_ALL_BTNS.forEach((btn) => {
			if (btn.parentElement.classList.contains('header-panel')) {
				btn.classList.toggle('-js--active')
			}
			return false
		})
	})
}

function toggleSiteMenu() {
	togglePanelBtnAnimation()
	if ($_SITENAV_MENU.dataset.status === '') {
		$_SITENAV_MENU.dataset.status = 'active'
		$_PAGEBODY.dataset.mainMenu = 'active'
		return
	}
	$_SITENAV_MENU.dataset.status = ''
	$_PAGEBODY.dataset.mainMenu = ''
}

function initSiteNavigation() {
	$ARRAY_ALL_BTNS.forEach((element) => {
		element.addEventListener('click', (e) => {
			e.preventDefault()
			requestAnimationFrame(toggleSiteMenu)
		})
	})
}

export default () => {
	initSiteNavigation()
}
