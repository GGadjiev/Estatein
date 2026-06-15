import OverlayMenu from '@/modules/OverlayMenu'
import InputMaskCollection from '@/modules/InputMaskCollection'
import PromoClose from '@/modules/PromoClose.js'
import { register } from 'swiper/element/bundle'
import initSelect from '@/modules/InitSelect.js'
import { initPropertySliders } from '@/modules/initPropertySlider.js'

new OverlayMenu()
new InputMaskCollection()
PromoClose()
initPropertySliders()
register()
initSelect()
