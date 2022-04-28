export interface Product {
  name: string,
  price: number,
  count: number,
  image: string
}

const cartStore = reactive({
  products: [] as Product[],
  openBox: false,
});

export default cartStore;
