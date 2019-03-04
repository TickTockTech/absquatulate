/**
 * Take the 'reworked_data' object and munge it into <table><tr><td> form.
 *
 * I use the word 'munge' here to mean one of the following:
 *
 *  > [derogatory] To imperfectly transform information.
 *  > To modify data in some way the speaker doesn't need to go into right now or
 *    cannot describe succinctly (compare mumble).
 */
function int_fmt(val)
{
    if (val < 1000)
        return val;
    if (val < 1000000)
        return ((val / 1000) << 0) + "K";
    if (val < 1000000000)
        return ((val / 1000000) << 0) + "M";
}

function processRow(row, plan_name, item)
{
    var line = "";

    for (var plan_name in reworked_data)
    {
        var plan = reworked_data[plan_name];

        if (row.type == "yes_no")
        {
            if (plan[item])
            {
                line += "<td class='norm yes'>" + (plan[item] ? "YES" : "NO") + "</td>\n";
            }
            else
            {
                line += "<td class='norm'>" + (plan[item] ? "YES" : "NO") + "</td>\n";
            }
        }
        if (row.type == "price")
        {
            // Custom handline of a cost field that has constraints.
            if (plan[item] instanceof Object)
            {
                it = plan[item];
                if (it.above_mau)
                {
                    var mark = add_condition("Above " + it.above_mau + " MAU.");
                    line += "<td class='norm'>$" + it.cost + mark + "</td>\n";
                }
            }
            else
            {
                line += "<td class='norm'>$" + plan[item] + "</td>\n";
            }
        }
        if (row.type == "int")
        {
            line += "<td class='norm'>" + int_fmt(plan[item]) + "</td>\n";
        }
    }

    return line;
}

var table = "<table>\n";

// Plan names across the top.
var first_line = "<th>&nbsp;</th>";
for (var plan in reworked_data)
{
    var entry = reworked_data[plan];
    var www = entry.www;
    first_line += "<th class='rotate'><div class='provider'><span><a href='" + www + "'>" + plan + "</a></span></div></th>";
}

table += "<tr class='rotate'>" + first_line + "</tr>";

var ix = 0;
for (var item in table_items)
{
    var row = table_items[item];
    var line = null;

    if (++ix % 2 == 1)
    {
        line = "<tr class='odd'>\n";
    }
    else
    {
        line = "<tr class='even'>\n";
    }


    line += "<td class='item'>" + row.label + "</td>";

    if (row.type == "gap")
    {
        for (var i = 0; i < Object.keys(reworked_data).length; ++i)
            line += "<td class='norm'>&nbsp;</td>\n";
    }
    else {
        line += processRow(row, plan_name, item);
    }
    line += "</tr>\n";

    table += line;
}
table += "</table>\n";
