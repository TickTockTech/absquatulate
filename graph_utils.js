window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

// Extract data from tree based on a wild-card format. e.g. *.pricing.*.cost.monthly_charge
// It assumes the end value is a value like an int, float or string(?)
window.dataDrill = function(fmt, objct, lvl, parentKey)
{
    var res = {};

    // Defaults
    lvl = lvl || 0;
    parentKey = parentKey || "";

    var keys = fmt.split(".");
    for (var i = 0; i < keys.length; ++i)
    {
        var key = keys[i];
        if (key == "*")
        {
            for (var k in objct)
            {
                var subarr = keys.slice(i + 1, keys.length);
                var nFmt = subarr.join(".");
                var pK = parentKey + (parentKey.length > 0 ? ":" : "") + k;
                var nDat = dataDrill(nFmt, objct[k], lvl + 1, pK);
                if (nDat != null)
                {
                    if ("_key" in nDat && "_val" in nDat)
                    {
                        res[nDat._key] = nDat._val;
                    }
                    else
                    {
                        res = Object.assign({}, res, nDat);
                    }
                }
            }
            break;
        }
        else
        {
            if (!objct[key])
            {
                return null;
            }
            if (i < keys.length - 1)
            {
                var subarr = keys.slice(i + 1, keys.length);
                var nFmt = subarr.join(".");
                return dataDrill(nFmt, objct[key], lvl + 1, parentKey);
            }
            else
            {
                var rt = {
                    "_key": parentKey,
                    "_val": objct[key]
                };
                return rt;
            }
        }
    }

    return res;
}
