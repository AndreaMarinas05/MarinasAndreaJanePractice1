/*-Mariñas, Andrea Jane B. 2-ITF
    ICS2609 Prof. Alex Santos
    Practice Lab: Form Validation JAVASCRIPT*/

    function saveEvent() 
    {
        var typeofEvent = document.getElementById('eventType').value;
        var nameEvent = document.getElementById('eventName').value;
        var startDate = new Date(document.getElementById('fromDate').value);
        var endDate = new Date(document.getElementById('toDate').value);
        var postingDate = new Date(document.getElementById('postDate').value);
        if(startDate.getTime() > endDate.getTime()) 
        {
        alert("This is not a time-travel. Enter the appropriate date.");
        }
        else if(postingDate.getTime() > startDate.getTime())
        {
        alert("We suggest that your posting date is earlier than your event date.");
        }
        else if (startDate.getTime() < endDate.getTime() && postingDate.getTime() < startDate.getTime())
        {
            alert("Your event is saved!" + "\n" +
            "Event Type: " + typeofEvent +  "\n" +
            "Event Name: " + nameEvent +  "\n" +
            "Start Date: " + startDate +  "\n" +
            "End Date: " + endDate +  "\n" +
            "Posting Date: " + postingDate);
        }
    }
    
    function cancelEvent()
    {
        alert("Goodbye! Send us a form whenever you're ready.");
        document.location.reload(true);
    }