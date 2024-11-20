const IMAGE_BASE_URL = "https://wd-bahrami.storage.iran.liara.space/hbs/"
const getImageUrl = (name: string) => `${IMAGE_BASE_URL}${name}`

interface IProduct {
  id: number
  image: string
  title: string
  description: string | string[]
}

const PRODUCTS: IProduct[] = [
  {
    id: 0,
    image: getImageUrl("paastil.jpg"),
    title: "پاستیل",
    description: [
      "شیرین شده با استویا",
      "قیمت هر کیلو ۲۸۰ هزار تومان",
      "❌ برای داشتن این خوشمزه مجبوری تا جشنواره یلدا ۵ آذر صبر کنی 🤤",
    ],
  },
  {
    id: 1,
    image: getImageUrl("shir-baadaam.jpg"),
    title: "شیربادام عسلی نیمه‌آماده",
    description: ["قوطی ۳۰۰ گرمی ۱۸۷ هزار تومان", "قوطی ۹۰۰ گرمی ۴۹۷ هزار تومان"],
  },
  {
    id: 2,
    image: getImageUrl("pofak-ghallaat.jpg"),
    title: "پفک سالم غلات",
    description: ["طعم کچاپ پنیری", "۹۰ گرمی ۲۸۸۰۰", "فله ۳۰۰ گرمی ۶۶", "کیلو ۲۲۰"],
  },
  {
    id: 3,
    image: getImageUrl("pofak-setareh-bbq.jpg"),
    title: "پفک ستاره‌ای حبوبات",
    description: ["طعم باربیکیو", "بسته ۲۸۸۰۰", "فله ۳۰۰ گرمی۷۸", "کیلو ۲۶۰"],
  },
  {
    id: 4,
    image: getImageUrl("pofak-setareh-cheese-burger.jpg"),
    title: "پفک ستاره‌ای حبوبات",
    description: ["طعم چیز برگر", "بسته ای ۲۸۸۰۰", "فله ۳۰۰ گرمی۷۸"],
  },
  {
    id: 5,
    image: getImageUrl("dilaanchi-nuts.jpg"),
    title: "کلوچه دیلانچی",
    description: ["مدل گردویی", "وزن:نیم کیلو", "قیمت: ۷۵ هزار تومان"],
  },
  {
    id: 6,
    image: getImageUrl("dilaanchi-sugar.jpg"),
    title: "کلوچه دیلانچی",
    description: ["مدل شکر قهوه‌ای", "وزن: نیم کیلو", "قیمت: ۶۵ هزار تومان"],
  },
  {
    id: 7,
    image: getImageUrl("dilaanchi-jo.jpg"),
    title: "کلوچه دیلانچی",
    description: ["مدل جو و شیره انگور", "وزن:نیم کیلو", "قیمت: ۸۵ هزار تومان"],
  },
  {
    id: 8,
    image: getImageUrl("halvaa-pashmaki.jpg"),
    title: "حلوا پشمکی",
    description: ["وزن:۵۰۰ گرم", "قیمت:۸۰ تومان"],
  },
  {
    id: 9,
    image: getImageUrl("breakfast-chocolat-shokojiraan.jpg"),
    title: "شکلات صبحانه شوکوجیران",
    description: ["وزن : ۴۰۰ گرم", "قیمت روی  محصول : ۱۲۳,۰۰۰ تومان"],
  },
  {
    id: 10,
    image: getImageUrl("shokopinaat-fandoghi.jpg"),
    title: "شوکوپینات فندقی",
    description: [
      "✨ کره بادام زمینی شکلاتی فندقی",
      "وزن : ۴۰۰ گرم",
      "قیمت روی  محصول : ۱۱۹ هزار تومان",
    ],
  },
  {
    id: 11,
    image: getImageUrl("majoon-sobhane.jpg"),
    title: "معجون صبحانه",
    description: ["مدل‌های ساده و شکلاتی", "وزن : ۴۰۰ گرم", "قیمت  : ۱۱۷ هزار تومان"],
  },
  {
    id: 12,
    image: getImageUrl("maasaalaa-tea.jpg"),
    title: "چای ماسالا",
    description: ["وزن با بسته : ۲۰۰گرمی ۸۰ ت", "وزن با بسته :یک کیلویی ۴۰۰ ت"],
  },
  {
    id: 13,
    image: getImageUrl("maasaalaa-tea.jpg"),
    title: "ادویه ماسالا",
    description: ["(بدون شیر و شکر)", "صد گرم:۱۵۰ هزار تومان"],
  },
  {
    id: 14,
    image: getImageUrl("migoon-chocolat.jpg"),
    title: "شکلات کنجد عسلی میگون",
    description: [
      "(هر شکلات حدود ده گرم)",
      "وزن با بسته:۵۰۰ گرم",
      "قیمت:۱۸۹۰۰۰ تومان",
      "وزن با بسته:۲۵۰ گرم",
      "قیمت:۹۶۵۰۰ تومان",
    ],
  },
]

export default PRODUCTS
export type { IProduct }
