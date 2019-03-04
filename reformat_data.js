/**
 * Reformat the Back-End provider data into a format which can be easily
 * displayed in a table.
 *
 * The output is an object 'reworked_data' with an entry for each plan
 * provided by each provider.
 *
 */


// Allow conditional items to be marked with an * and further details show at the bottom
// of the table.
var conditions = "";
var condition_no = 0;
function add_condition(note)
{
    var line = "";
    var mark = "";
    condition_no++;
    for(var i = 0; i < condition_no; ++i)
        mark += "*";

    line = mark + " - " + note;

    conditions += line;

    return mark;
}

// Reformat the data to be a list of provider:plan entries so we can draw them in a table.
var reworked_data = {};
var table_items = {
    "analytics": {
        "type": "yes_no",
        "label": "Analytics"
    },
    "iap_checking": {
        "type": "yes_no",
        "label": "IAP Checking"
    },
    "monthly_charge": {
        "type": "price",
        "label": "Monthly Charge"
    },
    "monthly_active_users": {
        "type": "price",
        "label": "Per Monthly AU"
    }
};
// Display the data in a table.
for (var provider_name in provider_data)
{
    var provider = provider_data[provider_name];
    var web_page = provider.www;
    var pricing_link = "n/a";
    for (var plan_name in provider.pricing)
    {
        if (plan_name != "_link")
        {
            var key = provider_name + ": " + plan_name;
            var plan = provider.pricing[plan_name];

            var entry = {};

            entry.www = web_page;
            entry.pricing = pricing_link;
            entry.analytics = plan.analytics;
            entry.iap_checking = plan.iap_checking;

            if (plan.cost && plan.cost.monthly_charge)
            {
                entry.monthly_charge = plan.cost.monthly_charge;
            }
            else
            {
                entry.monthly_charge = 0;
            }

            if (plan.cost && plan.cost.monthly_charge)
            {
                entry.monthly_active_users = plan.cost.monthly_active_users;
            }
            else
            {
                entry.monthly_active_users = 0;
            }

            reworked_data[key] = entry;
        }
        else
        {
            pricing_link = provider.pricing._link;
        }
    }
}