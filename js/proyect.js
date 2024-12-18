function log()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

if(user=="carlos" && pass=="2210")
{
    window.location= "/html/principal.html";
}
else
{
    alert ("invalid data");
}
if(user=="kanae" && pass=="2024")
    {
        window.location= "/html/principal.html";
    }
    else
    {
        alert ("invalid data");
    }
}