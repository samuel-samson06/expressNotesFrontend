export const dateFn = (date: string | Date)=>{
    const dateInstance = new Date(date).toLocaleDateString("en-US",{dateStyle:"medium"});
    return dateInstance;
}
