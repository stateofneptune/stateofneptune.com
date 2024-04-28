export type MerchItem = {
  id: string;
  title: string;
  image: string;
  href: string;
  price?: number;
  sizes?: Size[];
};

export type Size = {
  label: string;
  stock: number;
};

export const MERCH: MerchItem[] = [
  // {
  //   id: "umbilical-grim-reaper-t-shirt",
  //   title: "The Grim Reaper And The Cook – T-Shirt",
  //   image:
  //     "https://www.creativefabrica.com/wp-content/uploads/2023/06/05/Mans-Black-TShirt-Mockup-Hyper-Realistic-71403112-1.png",
  //   href: "https://stateofneptune.bandcamp.com/album/pulp-of-stones",
  //   sizes: [
  //     { label: "S", stock: 12 },
  //     { label: "M", stock: 12 },
  //     { label: "L", stock: 12 },
  //     { label: "XL", stock: 4 },
  //   ],
  // },
  // {
  //   id: "umbilical-grim-reaper-long-sleeve",
  //   title: "The Grim Reaper And The Cook – Long Sleeve",
  //   image:
  //     "https://www.nyfifth.com/category/20200813/12640E27_120919154713.jpg",
  //   href: "https://stateofneptune.bandcamp.com/album/pulp-of-stones",
  //   sizes: [
  //     { label: "M", stock: 9 },
  //     { label: "L", stock: 9 },
  //     { label: "XL", stock: 2 },
  //   ],
  // },
];
