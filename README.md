Since only access to the mockup server was possible, this is a VERY basic Cypress sample test for the Webhooks Create. The following steps are performed:


1. Create a Webhook: Sends a POST request to create a new webhook to a specified URL.
2. Verify the Webhook: Uses the stored webhook ID to send a GET request and verify that the webhook has been created correctly by checking the response body for the expected properties and values.



This is how Cypress Test Runner looks like:


![cypress api testrun](https://github.com/user-attachments/assets/b3ca3f62-279d-4947-8ee9-d074b14172d1)
