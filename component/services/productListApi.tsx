
export const getProductList = async () => {
    const response = await fetch('https://dummyjson.com/users')
    if(!response.ok) {
        throw new Error('Some thing went wrong')
    } 
  const data = response.json()
  return data
}