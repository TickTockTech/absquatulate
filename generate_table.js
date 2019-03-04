/**
 * Take the 'reworked_data' object and munge it into <table><tr><td> form.
 *
 * I use the word 'munge' here to mean one of the following:
 * 
 *  > [derogatory] To imperfectly transform information.
 *  > To modify data in some way the speaker doesn't need to go into right now or 
 *    cannot describe succinctly (compare mumble).
 */

var table = "<table>\n";

// Plan names across the top.
var first_line = "<th>&nbsp;</th>";
for (var plan in reworked_data)
{
    first_line += "<th class='rotate'><div class='provider'><span>" + plan + "</span></div></th>";
}

table += "<tr class='rotate'>" + first_line + "</tr>";

var ix = 0;
for (var item in table_items)
{
    var line = null;
    if (++ix % 2 == 1)
    {
        line = "<tr class='odd'>\n";
    }
    else
    {
        line = "<tr class='even'>\n";
    }
    line += "<td class='item'>" + table_items[item].label + "</td>";

    for (var plan_name in reworked_data)
    {
        var plan = reworked_data[plan_name];

        if (table_items[item].type == "yes_no")
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
        if (table_items[item].type == "price")
        {
            if (plan[item] instanceof Object)
            {
                it = plan[item];
                if (it.above_mau)
                {
                    mark = add_condition("Above " + it.above_mau + " MAU.");
                    line += "<td class='norm'>$" + it.cost + mark + "</td>\n";
                }
            }
            else
            {
                line += "<td class='norm'>$" + plan[item] + "</td>\n";
            }
        }
        if (table_items[item].type == "int")
        {
            line += "<td class='norm'>" + plan[item] + "</td>\n";
        }
    }
    line += "</tr>\n";

    table += line;
}
table += "</table>\n";