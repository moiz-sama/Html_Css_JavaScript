
let out = document.getElementById("display");

function showOne(key)
{
    out.value += key;
}

function calculate()
{
    try {
        out.value = eval(out.value)
    }
    catch(error)
    {
        out.value = "Error"
    }
    
}

function clearDisplay()
{
    out.value = ""
}