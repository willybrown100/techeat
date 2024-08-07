import { FilterRounded } from "@mui/icons-material";

export async function products(page) {
  try {
    const response = await fetch(
      `https://techeat-server.onrender.com/api/products
`
    );
    const data = await response.json();
  const lenght=data.length

    console.log(data,lenght);
    return { data, lenght };
  } catch (error) {
    console.log(error);
  }
}
