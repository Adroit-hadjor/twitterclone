const REACT_APP_API_URL= 'http://localhost:1337'

export const Post = async(url,body,token) => {
  const link = `${REACT_APP_API_URL}` + '/' + url;
  body=JSON.stringify(body)
  if (token){
    token = JSON.parse(token);
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'POST',
      headers: {
         'Authorization':`Bearer ${token}`,
       // 'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjEyNjg3OTkwLCJleHAiOjE2MTUyNzk5OTB9.-0PNvhn37QB-gq9MLeLL3QBk4PgMHM6L2aChbmALI1A`,
          'Content-Type': 'application/json',
      },
     body:body
   })
     
   if(response.ok){
      const data = await response.json()
      console.log(data)
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)

  return response; 
  }
  else{
  
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'POST',
      headers: {
           
          'Content-Type': 'application/json',
      },
     body:body
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
  
  return response; 
 
  }
 




}



export const Get = async(url,token) => {
  const link = `${REACT_APP_API_URL}` + '/' + url;
  
  if (token){
    
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'GET',
      headers: {
         'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
      },
  
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)

  return response; 
  }
  else{
  
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'GET',
      headers: {
           
          'Content-Type': 'application/json',
      },
    
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)


  return response; 
 
  }
 




}