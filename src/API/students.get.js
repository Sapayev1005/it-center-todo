export const getStudents = async () => {
 try{
    const res = await fetch("http://localhost:3000/students");
    if (!res.ok) {
        throw new Error((await  res.text()) || 'nimadir xato')
    }
    const data = await res.json();
    return data
 } catch (err) {
    return err;
 }
}