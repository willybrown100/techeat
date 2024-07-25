import { FilterRounded } from "@mui/icons-material";

export async function products() {
  try {
    const response = await fetch(
      `https://techeat-server-1.onrender.com/api/products
`
    );
    const data = await response.json();
  
    // console.log(filteredItem);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
