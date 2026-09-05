import blackSneaker from '../assets/images/black-sneaker.png'
import whiteSneaker from '../assets/images/white-sneaker.png'
import navySlipon from '../assets/images/navy-slipon.png'
import tanLoafer from '../assets/images/tan-loafer.png'
import blackSneakerSide from '../assets/images/black-sneaker-side.png'
import navySuedeLoafer from '../assets/images/navy-suede-loafer.png'
import navyLoaferCloth from '../assets/images/navy-loafer-cloth.png'
import navyLoafersRug from '../assets/images/navy-loafers-rug.png'
import loaferMirror from '../assets/images/loafer-mirror.png'
import sneakerCushion from '../assets/images/sneaker-cushion.png'
import loafersGoldStand from '../assets/images/loafers-gold-stand.png'
import sneakerWood from '../assets/images/sneaker-wood.png'

export const products = [
  {
    id: 1,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: blackSneaker,
    atrikul: '12345',
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: whiteSneaker,
    atrikul: '12345',
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: navySlipon,
    atrikul: '12345',
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: tanLoafer,
    atrikul: '12345',
  },
  {
    id: 5,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: blackSneakerSide,
    atrikul: '12345',
  },
  {
    id: 6,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: navySuedeLoafer,
    atrikul: '12345',
  },
  {
    id: 7,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: tanLoafer,
    atrikul: '12345',
  },
  {
    id: 8,
    name: 'Lorem ipsum',
    price: 399000,
    oldPrice: 499000,
    image: navyLoaferCloth,
    atrikul: '12345',
  },
]

export const bestSellers = [
  products[1],
  products[3],
  products[7],
  products[0],
]

export const mostViewed = [
  { id: 101, image: navySuedeLoafer },
  { id: 102, image: navyLoaferCloth },
  { id: 103, image: sneakerWood },
  { id: 104, image: navyLoafersRug },
]

export const categories = [
  { id: 1, title: 'Makasima', image: loaferMirror },
  { id: 2, title: 'Krossovka', image: sneakerCushion },
  { id: 3, title: 'Ishlov berilgan teri', image: loafersGoldStand },
  { id: 4, title: 'Klassik krossovka', image: sneakerWood },
]

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id))
}
