const baseUrl = "https://ai-chat-shop.onrender.com/";

const wait = (seconds) => new Promise((res) => setTimeout(res, seconds * 1000));

async function periodicallyPing() {
  const urls = [
    "",
    "orders",
    "products",
    "cart",
    ...Array.from({ length: 12 }, (_, i) => i + 1).map(
      (id) => `products/${id}`
    ),
  ];
  while (true) {
    const randomTime = Math.floor(Math.random() * 100) + 20;
    await wait(randomTime);
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    fetch(`${baseUrl}${randomUrl}`);
  }
}
