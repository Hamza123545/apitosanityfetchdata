import { SanityProduct } from '../app/types/sanity';

// Fetch Sanity data
const fetchSanityData = async (): Promise<SanityProduct[]> => {
  const query = '*[_type == "product"]';
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/query?query=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,  // Use API token here
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.result; // Sanity API returns data under 'result'
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const HomePage = async () => {
  const products = await fetchSanityData();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
  