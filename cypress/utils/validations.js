export class Validations {
    validate(validation) {
        // Start validation step
        cy.allure().startStep(`Validating ${validation.type}`);
        cy.allure().parameter('Validation Type', validation.type);

        if (validation.type === "element") {
            const exp_message = validation.message?.toLowerCase().trim();
            
            cy.allure().startStep('Verify element text');
            cy.allure().parameter('Selector', validation.element);
            cy.allure().parameter('Expected', exp_message);

            cy.get(validation.element)
              .invoke('text')
              .then((actual_text) => {
                  const actual_message = actual_text.toLowerCase().trim();
                  cy.screenshot('element-screenshot', { capture: 'runner' });
                  cy.allure().attachment(
                    'Element Screenshot', 
                    'element-screenshot.png', 
                    'image/png'
                  );
                  expect(actual_message).to.include(exp_message);
              })
              .then(() => cy.allure().endStep());
        } 
        else if (validation.type === "url") {
            const exp_url = validation.url?.toLowerCase().trim();
            
            cy.allure().startStep('Verify URL');
            cy.allure().parameter('Expected URL', exp_url);

            cy.url()
              .should('include', exp_url)
              .then(currentUrl => {
                  cy.allure().parameter('Actual URL', currentUrl);
              })
              .then(() => cy.allure().endStep());
        }

        // End validation step
        cy.allure().endStep();
    }
}