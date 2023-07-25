describe('api tests', () => {
  const request1 = {
    method: 'GET',
    url:'https://postman-echo.com/get',
    qs:{
      "foo1": "bar1"
    }
  };
  it('response code should be 200', () => {
    cy.request(request1).then(response => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 500)
    })
  });
  const request2 = {
    method: 'POST',
    url:'https://postman-echo.com/post',
    qs:{
      "foo2": "bar2"
    }
  };
  it('response code should be 200 (2)', () => {
    cy.request(request2).then(response => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 500)
    })
  });
  const request3 = {
    method: 'GET',
    url: 'https://postman-echo.com/headers',
    headers:{
      "user-agent": "Mozilla/5.0 Firefox/47.0",
      "user-agent2": "Chrome/51.0.2704.103"
    },
    failOnStatusCode: false
  };
  it('test that header set correctly', () => {
    cy.request(request3).then(response => {
      assert.equal("Mozilla/5.0 Firefox/47.0", response.requestHeaders['user-agent']);
      assert.equal("Chrome/51.0.2704.103", response.requestHeaders['user-agent2'])
      assert.isTrue(response.duration <= 150)
    })
  })
})