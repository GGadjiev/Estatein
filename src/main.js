import OverlayMenu from '@/modules/OverlayMenu'
import InputMaskCollection from '@/modules/InputMaskCollection'
import PromoClose from '@/modules/PromoClose.js'
import { register } from 'swiper/element/bundle'
import InitSelect from '@/modules/InitSelect.js'
import { initPropertySliders } from '@/modules/initPropertySlider.js'
import locationsFilter from '@/modules/locationsFilter.js'

new InputMaskCollection()
PromoClose()
initPropertySliders()
register()
InitSelect()
locationsFilter()
OverlayMenu()
