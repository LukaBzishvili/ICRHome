export const categories = [
  {
    category: 'ავეჯი',
    titles: [
      { title: 'ავეჯი' },
      { title: 'საძინებელი' },
      { title: 'სასადილო ოთახი' },
      { title: 'მისაღები ოთახი' },
      { title: 'გარე ავეჯი' },
      { title: 'კაფე & ბარი' },
      { title: 'საოფისე ავეჯი' },
      { title: 'შემოსასვლელი' },
      { title: 'სამზარეულო' },
      { title: 'sale' },
    ],
  },
  {
    category: 'გარე ავეჯი',
    titles: [
      { title: 'მაგიდა' },
      { title: 'სკამი' },
      { title: 'დივანი' },
      { title: 'სავარძელი' },
      { title: 'ყავის მაგიდა' },
      { title: 'შეზლონგი' },
      { title: 'ქოლგა' },
      { title: 'ფანჩატური' },
      { title: 'პერგოლა' },
      { title: 'სარწეველა სავარძელი' },
      { title: 'გარე ავეჯის კომპლექტი' },
      { title: 'ბარბექიუ' },
      { title: 'ტექსტილი' },
      { title: 'სხვა ნივთები' },
    ],
  },
  {
    category: 'კაფე & ბარი',
    titles: [
      { title: 'მაგიდა' },
      { title: 'ბარის მაგიდა' },
      { title: 'სკამი' },
      { title: 'ბარის სკამი' },
      { title: 'ბენჩი' },
      { title: 'ურიკა' },
      { title: 'გამათბობელი' },
      { title: 'კაფე & ბარის კომპლექტი' },
    ],
  },
  {
    category: 'საოფისე ავეჯი',
    titles: [
      { title: 'გორგოლაჭებიანი სავარძელი' },
      { title: 'ვიზიტორის სავარძელი' },
      { title: 'სამუშაო მაგიდა' },
      { title: 'საკონფერენციო მაგიდა' },
      { title: 'ტუმბო' },
      { title: 'დივანი' },
      { title: 'სავარძელი' },
      { title: 'ყავის მაგიდა' },
      { title: 'კარადა' },
    ],
  },
  // {
  //   category: 'სამზარეულო',
  //   titles: [],
  // },
  {
    category: 'დეკორი',
    titles: [
      { title: 'სახლის დეკორი' },
      { title: 'სარკეები და საათები' },
      { title: 'საკიდები' },
      { title: 'სხვა ნივთები' },
    ],
  },
  {
    category: 'განათება',
    titles: [
      { title: 'ჭაღი' },
      { title: 'ტორშერი' },
      { title: 'მაგიდის სანათი' },
      { title: 'კედლის სანათი' },
      { title: 'სანათის თავი' },
    ],
  },
  {
    category: 'სამზარეულოს აქსესუარები',
    titles: [
      { title: 'თეფში' },
      { title: 'ჭიქა' },
      { title: 'თასი' },
      { title: 'ლანგარი' },
      { title: 'ჩაიდანი' },
      { title: 'საშაქრე/სარძევე' },
      { title: 'დოქი/დეკანტერი' },
      { title: 'ქილა/ბოთლი' },
      { title: 'დანა-ჩანგალი' },
      { title: 'დაფა' },
      { title: 'საცხობი ფორმა' },
      { title: 'ლარნაკი' },
      { title: 'სხვა აქსესუარები' },
    ],
  },
  {
    category: 'ტექსტილი',
    titles: [
      { title: 'საძინებლის ბალიში' },
      { title: 'დეკორატიული ბალიში' },
      { title: 'თეთრეული' },
      { title: 'საბანი' },
      { title: 'პლედი' },
      { title: 'ხალიჩა' },
      { title: 'მაგიდის გადასაფარებელი' },
      { title: 'სამზარეულოს ტექსტილი' },
    ],
  },
];

export const list = [
  { name: 'ავეჯი', image: '../../../assets/images/types/aveji.jpg' },
  { name: 'გარე ავეჯი', image: '../../../assets/images/types/gareaveji.jpg' },
  { name: 'კაფე & ბარი', image: '../../../assets/images/types/kafebari.jpg' },
  {
    name: 'საოფისე ავეჯი',
    image: '../../../assets/images/types/saofiseAveji.jpg',
  },
  {
    name: 'სამზარეულო',
    image: '../../../assets/images/types/samzareulo.jpg',
  },
  { name: 'დეკორი', image: '../../../assets/images/types/dekori.jpg' },
  { name: 'განათება', image: '../../../assets/images/types/ganateba.jpg' },
  {
    name: 'სამზარეულოს აქსესუარები',
    image: '../../../assets/images/types/samzareulo.jpg',
  },
  { name: 'ტექსტილი', image: '../../../assets/images/types/teqstili.jpg' },
];

interface Furniture {
  image: string;
  title: string;
  category: string;
  price: number;
  isOnSale: boolean;
}

export const furnitureData: Furniture[] = [
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/FV22-17-519A-4-R_1.jpg',
    title: 'Comfortable Sofa',
    category: 'Living Room',
    price: 499.99,
    isOnSale: false,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/T7166A-1620-SHAKS-BK_1.jpg',
    title: 'Modern Dining Table',
    category: 'Dining Room',
    price: 299.99,
    isOnSale: true,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/FB087-120-BR_1.jpg',
    title: 'King Size Bed',
    category: 'Bedroom',
    price: 799.99,
    isOnSale: true,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/NT-3276000695110-ARM_1.png',
    title: 'Ergonomic Office Chair',
    category: 'Office',
    price: 199.99,
    isOnSale: false,
  },
  {
    image: 'https://icrhome.ge/dist/assets/images/catalog/250/SAM01006_1.jpg',
    title: 'Wooden Coffee Table',
    category: 'Living Room',
    price: 149.99,
    isOnSale: true,
  },
  {
    image: 'https://icrhome.ge/dist/assets/images/catalog/250/KARE-83179_0.jpg',
    title: 'Spacious Wardrobe',
    category: 'Bedroom',
    price: 599.99,
    isOnSale: false,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/24.0005-LINE-80X40_1.jpg',
    title: 'Bookshelf',
    category: 'Office',
    price: 129.99,
    isOnSale: true,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/NT-3276007600650-GZ_1.png',
    title: 'Nightstand',
    category: 'Bedroom',
    price: 89.99,
    isOnSale: false,
  },
  {
    image: 'https://icrhome.ge/dist/assets/images/catalog/250/KARE-87062_0.jpg',
    title: 'TV Stand',
    category: 'Living Room',
    price: 199.99,
    isOnSale: true,
  },
  {
    image:
      'https://icrhome.ge/dist/assets/images/catalog/250/LB-IT-MB-175474_1.jpg',
    title: 'Bar Stool',
    category: 'Dining Room',
    price: 69.99,
    isOnSale: false,
  },
];

export const filterItems = [
  {
    title: 'ბრენდი',
    showDropdown: false,
    options: [
      { label: 'IKEA', checked: false },
      { label: 'Ashley Furniture', checked: false },
      { label: 'La-Z-Boy', checked: false },
    ],
  },
  {
    title: 'კატეგორია',
    showDropdown: false,
    options: [
      { label: 'სკამები', checked: false },
      { label: 'მაგიდები', checked: false },
      { label: 'საწოლები', checked: false },
    ],
  },
  {
    title: 'ქვეკატეგორია',
    showDropdown: false,
    options: [
      { label: 'სასადილო სკამები', checked: false },
      { label: 'სამუშაო მაგიდები', checked: false },
      { label: 'ორმაგი საწოლები', checked: false },
    ],
  },
  {
    title: 'ფერი',
    showDropdown: false,
    options: [
      { label: 'თეთრი', checked: false },
      { label: 'შავი', checked: false },
      { label: 'რუხი', checked: false },
    ],
  },
  {
    title: 'სპეციფიკაცია',
    showDropdown: false,
    options: [
      { label: 'მარტივად დასაკეცი', checked: false },
      { label: 'გადაბრუნებადი', checked: false },
      { label: 'მოძრავი', checked: false },
    ],
  },
  {
    title: 'მასალა',
    showDropdown: false,
    options: [
      { label: 'ხე', checked: false },
      { label: 'მეტალი', checked: false },
      { label: 'მინის', checked: false },
    ],
  },
  {
    title: 'გასაშლელი',
    showDropdown: false,
    options: [
      { label: 'კი', checked: false },
      { label: 'არა', checked: false },
    ],
  },
  {
    title: 'თაგი',
    showDropdown: false,
    options: [
      { label: 'ახალი', checked: false },
      { label: 'პოპულარული', checked: false },
      { label: 'ფასდაკლება', checked: false },
    ],
  },
  {
    title: 'კოლექცია',
    showDropdown: false,
    options: [
      { label: 'საერთო', checked: false },
      { label: 'კლასიკური', checked: false },
      { label: 'თანამედროვე', checked: false },
    ],
  },
  {
    title: 'ფასი',
    showDropdown: false,
    options: [
      { label: '$100-$500', checked: false },
      { label: '$500-$1000', checked: false },
      { label: '$1000-$2000', checked: false },
    ],
  },
];
