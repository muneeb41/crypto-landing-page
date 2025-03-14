export const getNextSunday = () => {
    const today = new Date();
    const daysUntilSunday = (7 - today.getDay()) % 7 || 7;
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);
  
    const options = { day: "numeric", month: "long", year: "numeric" };
    return nextSunday.toLocaleDateString("en-GB", options).replace(",", ""); 
  };
  
  export const getTime = () => "7:00 PM";
  
  export const paymentUrl = "/success";
  export const whatsappUrl = "https://chat.whatsapp.com/KjUbxoF9BFa9ILDFomtEC1";
