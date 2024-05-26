const sp = require('serialport')


//check if the input value contains return char '\r'
function contain_return(input)
{
    result = false;
    if(input == null)
    {
        console.log("The function requires an input parameter.");
    }else
    {
        contains = input.indexOf('\\r');
        if(contains != -1)
        {
            result = true;
        }
    }
    return result;
}

//check if the input value contains 0x for hex value
function hex_with_0x(input)
{
    result = false;
    if(input == null)
    {
        console.log("The function requires an input parameter.");
    }else
    {
        contains = input.indexOf('0x');
        if(contains != -1)
        {
            result = true;
        }
    }    
}

//check hex value contains a~f, 0~9
function ishex(input)
{   
    result = false;
    pattern = "^[0-9a-fA-F]+$";
    if(input == null)
    {
        console.log("The function requires an input parameter.");
    }else
    {
        if(pattern.text(input))
        {
            result = true;
        }
    }
    return result;
}

module.exports = {contain_return,hex_with_0x,ishex}