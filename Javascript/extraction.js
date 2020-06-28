    function extractEmails(text)
    {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }

    function extract()
    {
        emails = document.getElementById("txt1").value;
        extracted_emails = extractEmails(emails);
        document.getElementById("txt2").value = extracted_emails;
    }

    function reset()
    {
        document.getElementById("txt2").value = '';
    }
