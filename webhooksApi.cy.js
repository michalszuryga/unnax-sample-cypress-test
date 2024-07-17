describe("Webhooks API", () => {
  it("Webhooks Create - should create a new webhook successfully", () => {
    const apiUrl =
      "https://stoplight.io/mocks/unnax/payments/38328916/api/v3/webhooks/";
    const authToken = "Unnax f23ftbzfasdh";

    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: {
        client: "email",
        event: "event_payment_transfer_auto_processed",
        target: "test@test.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);

      cy.wrap(response.body.id).as("webhookId");
    });

    cy.get("@webhookId").then((webhookId) => {
      cy.request({
        method: "GET",
        url: `${apiUrl}${webhookId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        cy.log("GET Response event:", getResponse.body.event);
        expect(getResponse.body).to.have.property("id", webhookId);
        expect(getResponse.body.event).to.include(
          "event_payment_transfer_auto_processed"
        );
      });
    });
  });
});
