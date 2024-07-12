export async function submitContact(data){
  console.log(data);
    try {
        const response = await fetch("https://techeat-server-1.onrender.com/api/contact-us", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result)
        return result
      } catch (error) {
        console.error( error);
      }
    
  
}

