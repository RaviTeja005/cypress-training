describe('get api user tests', () =>{
  it('get users',() =>{
    cy.request({
      method : 'GET',
      url : '	https://dummy.restapiexample.com/api/v1/employee/1',
      header : {
        'Authorization' : 'Bearer e3e3f513547bb590bb916825b201f54e6bce1a431265ad58a86a83e9fc12872f'
                  }
              }).then((res)=>{
                  expect(res.status).to.eq(200)
                  expect(res.body.id).to.eq(2407)
                     })
                    
     })
})