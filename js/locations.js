var locations = [
    {
        town: "Berrigan",
        name: "Berrigan Landfill",
        address: "Greenhills Road, Berrigan",
        hours: "Tuesday to Thursday 1:30-4pm<br/>Sunday 12:30-4pm",
        contact: "03 5888 5100",
        more_info: "http://www.berriganshire.nsw.gov.au/Residents/GarbageRecycling.aspx",
        active: false
    },
    {
        town: "Blighty",
        name: "Blighty Landfill",
        address: "Riverina Highway, Blighty",
        hours: "Contact council for opening hours",
        contact: "03 5880 1200",
        more_info: "http://www.conargo.nsw.gov.au/environment/waste-and-recycling",
        active: false
    },
    {
        town: "Coleambally",
        name: "Coleambally Waste Disposal Centre",
        address: "Martin Bell Road, Coleambally",
        hours: "Tuesday, Thursday, Sunday: 9.30am – 11.30am",
        contact: "02 6960 5500",
        more_info: "http://www.murrumbidgee.nsw.gov.au/environment/waste-recycling",
        active: false
    },
    {
        town: "Coolamon",
        name: "Coolamon Landfill",
        address: "102 Dyces Lane, Coolamon",
        hours: "Monday: 9am – 1pm<br/>Wednesday: 1pm – 5pm<br/>Friday: 9am – 12noon<br/>Saturday: 1pm - 5pm<br/>(Closed Tuesday, Thursday, Sunday)",
        contact: "02 6930 1800",
        more_info: "http://www.coolamon.nsw.gov.au/residents/waste-and-recycling.aspx",
        active: true
    },
    {
        town: "Cootamundra",
        name: "Cootamundra Waste Transfer Station",
        address: "Turners Lane, Cootamundra",
        hours: "Monday, Tuesday, Thursday, Friday: 8.30am – 4.30pm<br/>Wednesday: 1.30pm – 4.30pm<br/>Saturday: 1pm – 5pm<br/>Sunday: 9am – 5pm",
        contact: "02 6940 2100",
        more_info: "http://www.cootamundra.nsw.gov.au/engineering/waste-recycling-drummuster.aspx",
        active: true
    },
    {
        town: "Corowa",
        name: "Corowa Depot",
        address: "Poseidon Road, Corowa",
        hours: "Monday to Friday, 7:30am to 4pm",
        contact: "02 6033 8999",
        more_info: "http://www.corowa.nsw.gov.au/council/waste/",
        active: false
    },
    {
        town: "Culcairn",
        name: "Culcairn Transfer Station",
        address: "Schnaars Road, Culcairn",
        hours: "Tuesday, Saturday, Sunday: 2pm – 5pm<br/>Thursday: 9am – 12noon<br/>(Closed Monday, Wednesday & Friday)",
        contact: "02 6029 8588",
        more_info: "http://www.greaterhume.nsw.gov.au/CouncilServices/WasteRecycling.aspx",
        active: true
    },
    {
        town: "Deniliquin",
        name: "Deniliquin Resource Recovery Centre Landfill Depot",
        address: "Tip Road, Deniliquin",
        hours: "8:30am to 3:45pm everyday<br/>(Closed New Years Day, Good Friday, ANZAC Day and Christmas Day)",
        contact: "03 5898 3000",
        more_info: "http://www.deniliquin.nsw.gov.au/our-environment/garbage-services/waste-disposal-depot.aspx",
        active: true
    },
    {
        town: "Griffith",
        name: "Tharbogang Waste Management Centre",
        address: "Kidman Way, Griffith",
        hours: "Every day: 8am - 5pm",
        contact: "02 6963 6491",
        more_info: "https://www.griffith.nsw.gov.au/cp_themes/default/page.asp?p=DOC-KCB-52-46-17",
        active: true
    },
    {
        town: "Gundagai",
        name: "Gundagai Landfill & Recycling Centre ",
        address: "Burra Road, Gundagai",
        hours: "Monday: 7am – 11am<br/>Wednesday: 1pm – 5pm<br/>Friday: 7am - 11am<br/>Saturday: 11am – 5pm<br/>Sunday: 7am – 1pm<br/>(Closed Tuesday & Thursday)<br/>",
        contact: "02 6944 0200",
        more_info: "http://www.gundagai.nsw.gov.au/environment/waste-and-recyling.aspx",
        active: true
    },
    {
        town: "Hay",
        name: "Hay Waste Transfer Station",
        address: "Thelangerin Road, Hay",
        hours: "Monday: 12noon – 6pm<br/>Tuesday, Wednesday, Thursday, Saturday, Sunday: 7.30am – 6pm<br/>Friday: 7.30am – 1pm",
        contact: "02 6990 1100",
        more_info: "http://hay.nsw.gov.au/CouncilServices/WasteRecycling/tabid/75/Default.aspx",
        active: false
    },
    {
        town: "Hillston",
        name: "Hillston Landfill",
        address: "Kidman Way, Hillston",
        hours: "Tuesday & Friday: 7.30am – 10am & 1pm – 5pm<br/>Wednesday & Thursday: 7.30am – 10am<br/>Sunday: 10am – 4pm<br/>(Closed Sat & Mon)",
        contact: "02 6965 1900",
        more_info: "http://www.carrathool.nsw.gov.au/environmental-services/landfils-and-waste-collection",
        active: false
    },
    {
        town: "Jerilderie",
        name: "Jerilderie Waste Transfer Station",
        address: "Tip Road, Jerilderie",
        hours: "Mon & Fri: 8–11am<br/>Wed: 3–6pm<br/>Sun: 2–5pm<br/>Total fire ban day:<br/>Mon & Fri: 8–9am<br/>Wed: 3–4pm<br/>Sun: 2–3pm",
        contact: "03 5886 1200",
        more_info: "http://www.jerilderie.nsw.gov.au/environment/waste-recycling.aspx",
        active: false
    },
    {
        town: "Junee",
        name: "Junee Transfer Station",
        address: "Kahmoo Road, Junee",
        hours: "Tuesday: 8am – 4pm<br/>Wednesday: 10am – 4.30pm<br/>Friday: 11am – 5pm<br/>Saturday & Sunday: 10am – 4.30pm<br/>(Closed Monday & Thursday)",
        contact: "02 6924 8100",
        more_info: "http://www.junee.nsw.gov.au/services/rubbish-and-recycling.aspx",
        active: true
    },
    {
        town: "Leeton",
        name: "Leeton Landfill and Recycling Depot",
        address: "732 Corbie Hill Road, Leeton",
        hours: "9am–5.40pm every day (AEDT)<br/>or 8am–4.40pm every day (AEST)<br/>(Closed most public holidays)",
        contact: "02 6955 6384",
        more_info: "http://leeton.nsw.gov.au/environment/waste.htm",
        active: false
    },
    {
        town: "Lockhart",
        name: "Lockhart Waste Depot",
        address: "Tip Road, Lockhart",
        hours: "Wednesday: 8.30am – 10.30am<br/>Alternate Sunday: 8.30am – 11.30am",
        contact: "02 6920 5305",
        more_info: "http://www.lockhart.nsw.gov.au/environment/waste-recycling.aspx",
        active: true
    },
    {
        town: "Moama",
        name: "Moama Waste Management Facility",
        address: "Centre Road, Moama",
        hours: "Monday to Friday 8am to 3pm<br/>Saturday and Sunday 9am to 3pm<br/>Closed Public Holidays",
        contact: "03 5884 3302",
        more_info: "http://www.murray.nsw.gov.au/your-environment/waste-and-recycling",
        active: false
    },
    {
        town: "Narrandera",
        name: "Narrandera Waste Disposal Depot",
        address: "Redhill Road, Narrandera",
        hours: "Tuesday, Wednesday, Friday: 9am – 12pm & 1pm - 5pm<br/>Saturday & Sunday: 10am – 3pm",
        contact: "02 6959 3531",
        more_info: "http://www.narrandera.nsw.gov.au/cp_themes/default/page.asp?p=DOC-DGU-06-50-24",
        active: false
    },
    {
        town: "Temora",
        name: "Temora Landfill",
        address: "Teal Street, Temora",
        hours: "Tuesday, Wednesday, Friday: 8am – 12.30pm & 1.15pm – 5pm<br/>Saturday & Sunday: 1pm – 5pm<br/>(Closed Monday & Thursday)",
        contact: "02 6980 1100",
        more_info: "http://www.temora.nsw.gov.au/environment/waste-and-recycling.aspx",
        active: true
    },
    {
        town: "Tumbarumba",
        name: "Tumbarumba Waste Transfer Station",
        address: "Saleyards Road, Tumbarumba",
        hours: "Wednesday: 8am – 12noon & 12.30pm – 2pm<br/>Friday: 1pm – 5pm<br/>Saturday: 9am – 2pm<br/>Sunday: 1pm – 5pm (1-6 during daylight savings)",
        contact: "02 6948 9100",
        more_info: "http://www.tumbashire.nsw.gov.au/environment/waste-and-recycling",
        active: true
    },
    {
        town: "Tumut",
        name: "Gilmore Waste & Recycling Centre",
        address: "Killarney Drive, Tumut",
        hours: "Tuesday & Thursday: 1pm – 5pm<br/>Saturday: 9am – 4pm<br/>Sunday: 12noon – 4pm",
        contact: "02 6941 2555",
        more_info: "http://www.tumut.nsw.gov.au/environment/waste-recycling.aspx",
        active: true
    },
    {
        town: "Urana",
        name: "Urana Waste Disposal Centre",
        address: "Boree Creek Road, Urana",
        hours: "Friday: 12noon – 5pm<br/>Sunday: 11am – 4pm",
        contact: "02 6930 9100",
        more_info: "http://www.urana.nsw.gov.au/CouncilServices/RubbishCollection.aspx",
        active: true
    },
    {
        town: "West Wyalong",
        name: "West Wyalong Waste Depot",
        address: "Racecourse Rd, West Wyalong",
        hours: "Monday – Friday: 8am - 12.30pm & 1.30pm - 4pm<br/>Saturday & Sunday: 10am – 3pm",
        contact: "02 6972 2266",
        more_info: "http://www.blandshire.nsw.gov.au/environment/tips",
        active: true
    }
]