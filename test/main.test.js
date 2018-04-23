describe('Greeting App test', function(){
   describe('name checking', function(){
      let nameCheck1 = FactoryStorage();

      nameCheck1.setNames('siya');

      assert.equal(nameCheck1.users(), 'siya');
   });
});
